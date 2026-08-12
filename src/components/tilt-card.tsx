import { useRef, type ReactNode } from "react";

/** Subtle 3D tilt with inertia-free easing; falls back to static on touch. */
export function TiltCard({
  children,
  className = "",
  intensity = 6,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1100px) rotateY(${px * intensity}deg) rotateX(${-py * intensity}deg) translate3d(0,-4px,0)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(1100px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}