import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useMousePosition } from "@/hooks/useMousePosition";

export function SpotlightCard({ children, className }) {
  const ref = useRef(null);
  useMousePosition(ref);

  return (
    <div
      ref={ref}
      className={cn(
        "relative rounded-2xl border border-[#EAE4FF] bg-white overflow-hidden",
        "spotlight-card",
        className
      )}
    >
      {/* Gradient border glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            "radial-gradient(var(--mouse-x, 50%) var(--mouse-y, 50%), circle 400px, rgba(205,184,255,0.15), transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}
