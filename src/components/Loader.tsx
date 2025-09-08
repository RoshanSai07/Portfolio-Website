"use client";

import { useEffect, useState } from "react";

export default function LineWaveLoader({ loading }: { loading: boolean }) {
  if (!loading) return null; // hide loader if not loading

  const lines = Array.from({ length: 7 });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-light dark:bg-dark z-[9999]">
      <div className="relative flex space-x-1">
        {lines.map((_, i) => (
          <div
            key={i}
            className="w-1 bg-current rounded animate-wave"
            style={{
              height: "12px",
              animationDelay: `${i * 0.12}s`,
              boxShadow: "0 0 6px rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: scaleY(0.3);
          }
          50% {
            transform: scaleY(1.5);
          }
        }
        .animate-wave {
          animation: wave 0.8s ease-in-out infinite;
          transform-origin: bottom;
        }
      `}</style>
    </div>
  );
}
