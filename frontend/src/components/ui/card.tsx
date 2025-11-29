// components/ui/card.tsx
"use client";

import React from "react";
import clsx from "clsx";



type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ asChild = false, children, className, ...rest }) => {
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement;
    const mergedClass = clsx(
      "block bg-white border border-slate-100 rounded-2xl shadow-sm transition-shadow hover:shadow-md",
      className
    );

    const childProps = {
      ...rest,
      className: clsx(mergedClass, (child.props && child.props.className) || ""),
    };

    return React.cloneElement(child, childProps);
  }

  return (
    <div
      {...rest}
      className={clsx(
        "bg-white border border-slate-100 rounded-2xl shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => (
  <div {...rest} className={clsx("px-4 py-3 border-b border-slate-100", className)}>
    {children}
  </div>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => (
  <div {...rest} className={clsx("p-4", className)}>
    {children}
  </div>
);

export default Card;

/* ============================
   CardSquare - square, avatar-ring card
   ============================ */

type CardSquareProps = {
  id?: string | number;
  name: string;
  subtitle?: string | null;
  avatarUrl?: string | null;
  size?: "sm" | "md" | "lg"; // controls card and avatar sizing
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  asChild?: boolean; // if true, renders an interactive button root (accessible)
  showBorder?: boolean; // keep border (default true)
};

export const CardSquare: React.FC<CardSquareProps> = ({
  id,
  name,
  subtitle = null,
  avatarUrl = null,
  size = "md",
  className,
  onClick,
  asChild = false,
  showBorder = true,
}) => {
  // size mapping
  const sizeMap = {
    sm: { card: "p-3", avatar: "w-12 h-12", text: "text-sm", subtitle: "text-xs" },
    md: { card: "p-4", avatar: "w-16 h-16", text: "text-base", subtitle: "text-sm" },
    lg: { card: "p-6", avatar: "w-20 h-20", text: "text-lg", subtitle: "text-sm" },
  }[size];

  const baseCardClass = clsx(
    "bg-white rounded-2xl shadow-sm transition-shadow hover:shadow-md flex items-center gap-4",
    showBorder ? "border border-slate-100" : "",
    sizeMap.card,
    className
  );

  const content = (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(e as unknown as React.MouseEvent);
        }
      }}
      aria-pressed="false"
      data-id={id}
      className={clsx(baseCardClass, "w-full")}
    >
      {/* avatar with ring */}
      <div className={clsx("flex-shrink-0", "flex items-center justify-center")}>
        <div
          className={clsx(
            "rounded-full flex items-center justify-center overflow-hidden ring-2 ring-slate-100",
            // add small shadow and ring color for presence later if needed
            avatarUrl ? "bg-transparent" : "bg-slate-100"
          )}
          style={{ width: sizeMap.avatar.split(" ")[0] === undefined ? undefined : undefined }} // just preserve structure
        >
          {avatarUrl ? (
            // image inside ring
            <img
              src={avatarUrl}
              alt={name}
              className={clsx("object-cover rounded-full", sizeMap.avatar.replace(" ", " "))}
              // Tailwind width/height classes applied via className
            />
          ) : (
            // fallback initials
            <div
              className={clsx(
                "flex items-center justify-center font-semibold text-slate-700",
                sizeMap.avatar === "w-12 h-12" ? "w-12 h-12" : sizeMap.avatar === "w-16 h-16" ? "w-16 h-16" : "w-20 h-20"
              )}
            >
              {getInitials(name)}
            </div>
          )}
        </div>
      </div>

      {/* text */}
      <div className="min-w-0">
        <div className={clsx("font-semibold text-slate-900", sizeMap.text, "truncate")}>{name}</div>
        {subtitle && <div className={clsx("text-slate-500 mt-0.5 truncate", sizeMap.subtitle)}>{subtitle}</div>}
      </div>
    </div>
  );

  if (asChild) {
    // render the content inside a button so the outer CardSquare can be used as interactive element
    return (
      <Card asChild className="w-full">
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <div className={baseCardClass} role="button" tabIndex={0} onClick={onClick} onKeyDown={() => {}}>
          {content}
        </div>
      </Card>
    );
  }

  return <div className={baseCardClass}>{content}</div>;
};

/* helper: initials */
function getInitials(name: string) {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
