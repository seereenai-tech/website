import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/** Slow, intentional entrance used across every scene. */
export function Reveal({
  children,
  delay = 0,
  y = 34,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const calm = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={calm ? { opacity: 0 } : { opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1.25, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Masked line-by-line heading reveal. */
export function MaskedLines({
  lines,
  className = "",
  delay = 0,
}: {
  lines: ReactNode[];
  className?: string;
  delay?: number;
}) {
  // The clipped inner span can never intersect the viewport, so the trigger
  // lives on the unclipped wrapper and cascades through variants.
  return (
    <motion.span
      className={className}
      style={{ display: "block" }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              show: {
                y: "0%",
                opacity: 1,
                transition: { duration: 1.3, delay: delay + i * 0.14, ease },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}