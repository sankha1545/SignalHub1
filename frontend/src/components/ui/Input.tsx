"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    data-slot="input"
    className={cn(
      "h-10 w-full rounded-xl border border-input bg-card/90 px-3 text-sm text-foreground shadow-sm transition focus-visible:border-primary/40 focus-visible:ring-3 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-60",
      className
    )}
    {...props}
  />
));

Input.displayName = "Input";

export { Input };
