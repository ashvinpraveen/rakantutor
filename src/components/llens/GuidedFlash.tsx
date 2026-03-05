import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GuidedFlashProps {
  /** When true the flash ring animation plays and the element is scrolled into view */
  isActive: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * Wraps any block-level element and shows a pulsing white highlight ring
 * when `isActive` is true. Pair with the `useGuideFlash` hook for coordinated,
 * sequenced guidance across a chapter.
 *
 * The wrapper is a plain `<div>` that forwards its ref so `useGuideFlash` can
 * call `scrollIntoView` on it.
 */
export const GuidedFlash = forwardRef<HTMLDivElement, GuidedFlashProps>(
  ({ isActive, className, children }, ref) => {
    return (
      <div ref={ref} className={cn("relative", className)}>
        {/* Flash ring overlay — sits on top of children, pointer-events-none */}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 z-10 rounded-[inherit]",
            "ring-2 ring-white/70",
            isActive ? "animate-guide-flash" : "opacity-0",
          )}
        />
        {children}
      </div>
    );
  },
);

GuidedFlash.displayName = "GuidedFlash";
