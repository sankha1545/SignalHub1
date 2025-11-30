// src/app/dashboard/hooks/usedashboard.ts
"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type UseFetchResult<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
};

/**
 * useFetch - improved small fetch hook for dashboard usage
 *
 * - url: endpoint to fetch (string)
 * - options: optional fetch init (credentials, headers, etc.)
 * - depsKey: extra dependency used to re-run the effect when it changes (can be a stringified object)
 * - pollInterval: optional ms to poll automatically (0 = no polling)
 * - transform: optional function to convert raw response JSON into T
 *
 * Example:
 *   const { data, loading, error, refetch } = useFetch<MyShape>("/api/chats", { credentials: "same-origin" });
 */
export function useFetch<T = any>(
  url: string,
  options?: RequestInit,
  depsKey?: any,
  pollInterval = 0,
  transform?: (raw: any) => T
): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // keep a ref for the latest controller so we can abort if needed
  const controllerRef = useRef<AbortController | null>(null);
  const mountedRef = useRef(true);

  const fetchOnce = useCallback(async () => {
    // avoid starting another request if same active controller exists
    if (controllerRef.current) {
      try {
        controllerRef.current.abort();
      } catch {}
    }
    const ctrl = new AbortController();
    controllerRef.current = ctrl;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url, { signal: ctrl.signal, ...options });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`HTTP ${res.status} ${res.statusText}${text ? ` — ${text}` : ""}`);
      }
      const json = await res.json().catch(() => null);
      const payload = transform ? transform(json) : (json as T);
      if (mountedRef.current) setData(payload);
    } catch (err: any) {
      if (err?.name === "AbortError") {
        // aborted - don't treat as error
      } else if (mountedRef.current) {
        setError(err instanceof Error ? err : new Error(String(err)));
      }
    } finally {
      if (mountedRef.current) setLoading(false);
      // clear controller if it's still the one we created
      if (controllerRef.current === ctrl) controllerRef.current = null;
    }
  }, [url, options ? JSON.stringify(options) : "{}", depsKey, transform]);

  useEffect(() => {
    mountedRef.current = true;
    fetchOnce();

    let timer: number | undefined;
    if (pollInterval && pollInterval > 0) {
      timer = window.setInterval(() => {
        fetchOnce();
      }, pollInterval);
    }

    return () => {
      mountedRef.current = false;
      if (controllerRef.current) {
        try {
          controllerRef.current.abort();
        } catch {}
        controllerRef.current = null;
      }
      if (timer) window.clearInterval(timer);
    };
    // note: we stringify options in the callback's deps to avoid object identity issues
  }, [fetchOnce, pollInterval]);

  const refetch = useCallback(async () => {
    await fetchOnce();
  }, [fetchOnce]);

  return { data, loading, error, refetch };
}

export default useFetch;
