// components/ui/modal.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { X } from "lucide-react";

/**
 * Improved Modal primitive
 *
 * Props:
 *  - children: content inside modal (panel)
 *  - onClose: called when modal requests close (ESC, backdrop click, close button)
 *  - ariaLabel: string for aria-label on the dialog (default: "Dialog")
 *  - className: optional className to apply to panel (merged with defaults)
 *
 * Behavior:
 *  - renders into document.body using a portal
 *  - traps focus (Tab / Shift+Tab)
 *  - ESC closes modal
 *  - click on backdrop closes modal
 *  - locks body scroll while open
 *  - provides built-in animated close button and subtle entrance/exit animations
 */

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  ariaLabel?: string;
  className?: string;
};

const FOCUSABLE_SELECTOR =
  'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]';

const getFocusableElements = (container: HTMLElement | null) => {
  if (!container) return [];
  try {
    return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
      (el) => !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length)
    );
  } catch {
    return [];
  }
};

export const Modal: React.FC<ModalProps> = ({ children, onClose, ariaLabel = "Dialog", className }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  // ensure portal root exists
  useEffect(() => {
    let root = document.getElementById("modal-root");
    if (!root) {
      root = document.createElement("div");
      root.id = "modal-root";
      document.body.appendChild(root);
    }
  }, []);

  // lock scroll + preserve/restore focus
  useEffect(() => {
    lastFocused.current = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // focus the panel (or first focusable element) shortly after mount
    const t = setTimeout(() => {
      const focusable = getFocusableElements(panelRef.current);
      if (focusable.length) focusable[0].focus();
      else panelRef.current?.focus();
    }, 30);

    return () => {
      clearTimeout(t);
      document.body.style.overflow = originalOverflow;
      try {
        lastFocused.current?.focus();
      } catch {
        // ignore
      }
    };
  }, []);

  // key handlers: ESC + focus trap (Tab / Shift+Tab)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const focusable = getFocusableElements(panelRef.current);
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const idx = focusable.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey) {
          if (idx === 0 || document.activeElement === panelRef.current) {
            e.preventDefault();
            focusable[focusable.length - 1].focus();
          }
        } else {
          if (idx === focusable.length - 1) {
            e.preventDefault();
            focusable[0].focus();
          }
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // backdrop click to close
  const onBackdropMouseDown = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  // Motion variants for panel and backdrop
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
    exit: { opacity: 0 },
  };

  const panelVariants = {
    hidden: { opacity: 0, y: 8, scale: 0.995 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 8, scale: 0.995 },
  };

  const modal = (
    <AnimatePresence>
      <div
        ref={overlayRef}
        onMouseDown={onBackdropMouseDown}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        aria-hidden={false}
      >
        {/* Backdrop */}
        <motion.div
          key="backdrop"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
          transition={{ duration: 0.18 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Panel */}
        <motion.div
          key="panel"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel}
          tabIndex={-1}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={panelVariants}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className={clsx(
            // defaults: professional panel that matches team page design
            "relative z-10 w-full max-w-2xl rounded-2xl bg-white border border-slate-100 shadow-lg overflow-hidden outline-none",
            // safe max-height and internal scroll when needed
            "max-h-[90vh] overflow-auto",
            // allow consumer to pass additional width/padding overrides
            className
          )}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          {/* Panel inner: we provide a consistent padding layout for header/body/footer */}
          <div className="relative">
            {/* Close button (top-right) */}
            <button
              aria-label="Close dialog"
              onClick={onClose}
              className="absolute right-3 top-3 z-20 inline-flex items-center justify-center rounded-md p-1.5 text-slate-600 hover:bg-slate-100 hover:text-slate-800 transition"
              type="button"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content wrapper */}
            <div className="p-4 sm:p-6">
              {/*
                Children controls layout.
                Consumers (e.g., Teams page) typically render their own header/body inside.
                We provide consistent background and padding so the child's header fits perfectly.
              */}
              {children}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  const root = typeof window !== "undefined" ? document.getElementById("modal-root") : null;
  if (root) return createPortal(modal, root);

  // Fallback inline render (shouldn't happen in client)
  return modal as any;
};

export default Modal;
