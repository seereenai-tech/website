import { useEffect, useMemo, useRef, useState } from "react";

/** Slow floating sand motes. Pure transform animation, GPU friendly. */
export function SandParticles({ count = 26 }: { count?: number }) {
  const motes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: (i * 37) % 100,
        top: (i * 61) % 100,
        size: 2 + ((i * 13) % 5),
        duration: 26 + ((i * 7) % 22),
        delay: -((i * 3) % 20),
        opacity: 0.12 + ((i % 5) * 0.06),
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {motes.map((m, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-bronze"
          style={{
            left: `${m.left}%`,
            top: `${m.top}%`,
            width: m.size,
            height: m.size,
            opacity: m.opacity,
            animation: `drift ${m.duration}s linear ${m.delay}s infinite alternate`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}

/** Layered atmospheric haze that softens every section seam. */
export function Fog({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 h-64 ${className}`}
      style={{
        background:
          "linear-gradient(to bottom, oklch(0.975 0.012 85 / 0), oklch(0.975 0.012 85 / 0.85))",
      }}
    />
  );
}

/** Cursor-following warm glow. Disabled on touch/reduced-motion. */
export function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;
    setEnabled(true);

    let raf = 0;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.06;
      pos.y += (target.y - pos.y) * 0.06;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.x - 260}px, ${pos.y - 260}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-30 h-[520px] w-[520px] rounded-full opacity-60 mix-blend-plus-lighter"
      style={{
        background:
          "radial-gradient(circle, oklch(0.86 0.07 78 / 0.28), transparent 68%)",
        willChange: "transform",
      }}
    />
  );
}