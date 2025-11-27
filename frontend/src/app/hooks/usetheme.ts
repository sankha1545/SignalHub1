// hooks/useTheme.ts
import { useEffect, useState, useCallback } from "react";

export type ThemeChoice = "light" | "dark" | "system";

const STORAGE_KEY = "theme-preference";

function getSystemPrefersDark() {
  if (typeof window === "undefined") return false;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function readInitialTheme(): ThemeChoice {
  try {
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (stored === "light" || stored === "dark" || stored === "system") return stored;
  } catch (e) {
    /* ignore */
  }
  return "system";
}

export default function useTheme() {
  const [theme, setThemeState] = useState<ThemeChoice>(() => readInitialTheme());

  const applyTheme = useCallback((t: ThemeChoice) => {
    const root = document.documentElement;
    const effectiveDark = t === "system" ? getSystemPrefersDark() : t === "dark";

    if (effectiveDark) {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
  }, []);

  // Public setter that persists
  const setTheme = useCallback(
    (newTheme: ThemeChoice) => {
      try {
        localStorage.setItem(STORAGE_KEY, newTheme);
      } catch (e) {
        /* ignore */
      }
      setThemeState(newTheme);
      applyTheme(newTheme);
    },
    [applyTheme]
  );

  useEffect(() => {
    // apply initial theme on mount
    applyTheme(theme);

    // If theme === "system" we need to respond to changes in prefers-color-scheme
    const mql = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

    const onChange = (ev: MediaQueryListEvent | MediaQueryList) => {
      // only react when we're in 'system' mode
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === "system" || (!stored && theme === "system")) {
          applyTheme("system");
        }
      } catch (e) {
        /* ignore */
      }
    };

    if (mql && typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
    } else if (mql && typeof (mql as any).addListener === "function") {
      // older browsers
      (mql as any).addListener(onChange);
    }

    return () => {
      if (mql && typeof mql.removeEventListener === "function") {
        mql.removeEventListener("change", onChange);
      } else if (mql && typeof (mql as any).removeListener === "function") {
        (mql as any).removeListener(onChange);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  return { theme, setTheme };
}
