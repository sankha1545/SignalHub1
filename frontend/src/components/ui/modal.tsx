// components/ui/modal.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

/**
 * Modal primitive
 *
 * Props:
 *  - children: content inside modal (panel)
 *  - onClose: called when modal requests close (ESC, backdrop click)
 *  - ariaLabel: string for aria-label on the dialog
 *
 * Behavior:
 *  - renders into document.body using a portal
 *  - traps focus (Tab / Shift+Tab)
 *  - ESC closes modal
 *  - click on backdrop closes modal
 *  - locks body scroll while open
 */

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  ariaLabel?: string;
  className?: string;
};

/* Helper: find all focusable elements inside container */
const getFocusableElements = (container: HTMLElement | null) => {
  if (!container) return [];
  const selector =
    'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]';
  return Array.from(container.querySelectorAll<HTMLElement>(selector)).filter((el) => el.offsetParent !== null);
};

export const Modal: React.FC<ModalProps> = ({ children, onClose, ariaLabel = "Dialog", className }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  // Portal root: create if not present
  useEffect(() => {
    let root = document.getElementById("modal-root");
    if (!root) {
      root = document.createElement("div");
      root.setAttribute("id", "modal-root");
      document.body.appendChild(root);
    }
    return () => {};
  }, []);

  // open: save focus, lock scroll, focus panel
  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    // lock scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // focus first focusable in panel after mount
    setTimeout(() => {
      const focusable = getFocusableElements(panelRef.current);
      if (focusable.length) focusable[0].focus();
      else panelRef.current?.focus();
    }, 40);

    return () => {
      // restore scroll
      document.body.style.overflow = originalOverflow;
      // restore focus
      try {
        previouslyFocused.current?.focus();
      } catch (e) {
        // ignore
      }
    };
  }, []);

  // handle keydown for escape and focus trap
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key === "Tab") {
        // Focus trap
        const focusable = getFocusableElements(panelRef.current);
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const idx = focusable.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey) {
          // shift + tab
          if (idx === 0 || document.activeElement === panelRef.current) {
            e.preventDefault();
            focusable[focusable.length - 1].focus();
          }
        } else {
          // tab
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

  // backdrop click closes
  const onBackdropClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  const modalContent = (
    <AnimatePresence>
      <div
        ref={overlayRef}
        onMouseDown={onBackdropClick}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        aria-hidden={false}
      >
        {/* backdrop */}
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
          className="absolute inset-0 bg-black"
          style={{ opacity: 0.5 }}
        />

        {/* panel */}
        <motion.div
          key="panel"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel}
          tabIndex={-1}
          initial={{ opacity: 0, y: 8, scale: 0.995 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.995 }}
          transition={{ duration: 0.18 }}
          className={clsx("relative z-10 max-h-[90vh] w-full overflow-auto rounded-2xl outline-none", className)}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );

  const root = typeof window !== "undefined" ? document.getElementById("modal-root") : null;
  if (root) {
    return createPortal(modalContent, root);
  }

  // Fallback - render inline (shouldn't happen in client environment)
  return modalContent as any;
};

export default Modal;
