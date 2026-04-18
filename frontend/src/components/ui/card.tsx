"use client";

import React from "react";
import clsx from "clsx";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ asChild = false, children, className, ...rest }) => {
  const mergedClass = clsx("premium-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg", className);

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      ...rest,
      className: clsx(mergedClass, child.props?.className ?? ""),
    });
  }

  return (
    <div {...rest} className={mergedClass}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => (
  <div {...rest} className={clsx("border-b border-border/70 px-5 py-4", className)}>
    {children}
  </div>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => (
  <div {...rest} className={clsx("p-5", className)}>
    {children}
  </div>
);

export default Card;

type CardSquareProps = {
  id?: string | number;
  name: string;
  subtitle?: string | null;
  avatarUrl?: string | null;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  asChild?: boolean;
  showBorder?: boolean;
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
  const sizeMap = {
    sm: { card: "p-3", avatar: "w-12 h-12", text: "text-sm", subtitle: "text-xs" },
    md: { card: "p-4", avatar: "w-16 h-16", text: "text-base", subtitle: "text-sm" },
    lg: { card: "p-6", avatar: "w-20 h-20", text: "text-lg", subtitle: "text-sm" },
  }[size];

  const baseCardClass = clsx(
    "flex w-full items-center gap-4 rounded-2xl border border-border/70 bg-card/90 transition-all duration-200 hover:border-primary/25 hover:shadow-lg",
    showBorder ? "border" : "border-transparent",
    sizeMap.card,
    className
  );

  const content = (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(e as unknown as React.MouseEvent);
        }
      }}
      data-id={id}
      className={baseCardClass}
    >
      <div className="shrink-0">
        <div className={clsx("overflow-hidden rounded-full ring-2 ring-primary/15", avatarUrl ? "bg-transparent" : "bg-muted")}>
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} className={clsx("rounded-full object-cover", sizeMap.avatar)} />
          ) : (
            <div className={clsx("flex items-center justify-center font-semibold text-foreground", sizeMap.avatar)}>{getInitials(name)}</div>
          )}
        </div>
      </div>
      <div className="min-w-0">
        <p className={clsx("truncate font-semibold text-foreground", sizeMap.text)}>{name}</p>
        {subtitle && <p className={clsx("mt-0.5 truncate text-muted-foreground", sizeMap.subtitle)}>{subtitle}</p>}
      </div>
    </div>
  );

  if (!asChild) return content;

  return (
    <Card asChild className="w-full">
      <div>{content}</div>
    </Card>
  );
};

function getInitials(name: string) {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
