"use client";

import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export default function InkCursor() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [showRing, setShowRing] = useState(false);
  const [clickPulse, setClickPulse] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    document.body.style.cursor = "none";

    let clickId = 0;

    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      const hoveringInteractive = !!target?.closest?.(
        "a, button, [role='button'], input, textarea, select, [data-hover]"
      );
      setShowRing(hoveringInteractive);
    };

    const onClick = () => {
      clickId++;
      setClickPulse(true);
      setTimeout(() => setClickPulse(false), 200);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  if (!enabled) return null;

  const ringScale = showRing ? (clickPulse ? 0.8 : 1.1) : 0.6;
  const ringOpacity = showRing ? 1 : 0;
  const dotScale = showRing ? (clickPulse ? 1.6 : 1.3) : 1;

  return (
    <>
      <div
        style={{
          animation: showRing ? "wobble 0.6s ease-in-out infinite" : "none",
          position: "fixed",
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate3d(-50%, -50%, 0) scale(${ringScale})`,
          transition:
            "transform 150ms cubic-bezier(.2,.9,.2,1), opacity 150ms ease-out",
          opacity: ringOpacity,
          width: 30,
          height: 30,
          borderRadius: "50%",
          border: "1px solid currentColor",
          pointerEvents: "none",
          zIndex: 9998,
          boxSizing: "border-box",
        }}
        className="text-light"
      />

      <div
        style={{
          position: "fixed",
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate3d(-50%, -50%, 0) scale(${dotScale})`,
          transition:
            "transform 120ms ease-out, width 120ms, height 120ms, opacity 120ms",
          width: showRing ? 10 : 14,
          height: showRing ? 10 : 14,
          borderRadius: "50%",
          background: "white",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}
