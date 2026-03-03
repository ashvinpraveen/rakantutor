import { useCallback, useRef, useState } from "react";

export type FlashHandle = {
  /** Trigger the highlight flash on a registered element by id */
  flash: (id: string) => void;
  /** Ref-callback factory — attach the returned callback to any DOM element */
  registerRef: (id: string) => (el: HTMLElement | null) => void;
  /** The id of the element currently being flashed (null when idle) */
  activeId: string | null;
};

/**
 * Coordinates "guiding flash" highlights across multiple DOM elements.
 *
 * Usage:
 *   const { flash, registerRef, activeId } = useGuideFlash();
 *
 *   <GuidedFlash ref={registerRef("my-box")} isActive={activeId === "my-box"}>
 *     ...
 *   </GuidedFlash>
 *
 *   // Trigger flashes in sequence
 *   flash("my-box");
 *   setTimeout(() => flash("other-box"), 1400);
 */
export function useGuideFlash(durationMs = 1200): FlashHandle {
  const [activeId, setActiveId] = useState<string | null>(null);
  const elements = useRef<Map<string, HTMLElement>>(new Map());
  const timerRef = useRef<number | null>(null);

  const registerRef = useCallback(
    (id: string) =>
      (el: HTMLElement | null) => {
        if (el) elements.current.set(id, el);
        else elements.current.delete(id);
      },
    [],
  );

  const flash = useCallback(
    (id: string) => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      const el = elements.current.get(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      setActiveId(id);

      timerRef.current = window.setTimeout(() => {
        setActiveId(null);
        timerRef.current = null;
      }, durationMs);
    },
    [durationMs],
  );

  return { flash, registerRef, activeId };
}
