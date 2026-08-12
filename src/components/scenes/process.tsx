import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/reveal";

const steps = [
  { title: "Listen", copy: "We learn your business, your friction and your ambition." },
  { title: "Interpret", copy: "We translate that into a precise, honest technical direction." },
  { title: "Build", copy: "We craft the system — carefully, iteratively, transparently." },
  { title: "Elevate", copy: "We measure, refine and keep the intelligence improving." },
];

export function Process() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" ref={ref} className="relative overflow-hidden py-36 sm:py-44">
      <div className="relative mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="eyebrow">How We Work</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-7 text-[clamp(2rem,5vw,3.4rem)] leading-[1.1] text-espresso">
            A path across the <span className="italic text-gold">dunes.</span>
          </h2>
        </Reveal>

        <div className="relative mt-20 pl-10 sm:pl-16">
          <div className="absolute top-2 bottom-2 left-[3px] w-px bg-border sm:left-[27px]" />
          <motion.div
            aria-hidden
            style={{ scaleY: lineScale }}
            className="absolute top-2 bottom-2 left-[3px] w-px origin-top bg-gradient-to-b from-bronze via-gold to-champagne sm:left-[27px]"
          />

          <div className="flex flex-col gap-16">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="relative">
                  <span className="absolute -left-10 top-2 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-gold shadow-[0_0_0_6px_oklch(0.94_0.03_80/0.9)] sm:-left-16" />
                  <span className="eyebrow">Step {String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 text-[1.9rem] leading-none text-espresso">{s.title}</h3>
                  <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed font-light text-espresso/70">
                    {s.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}