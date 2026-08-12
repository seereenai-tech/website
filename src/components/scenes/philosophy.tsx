import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import feather from "@/assets/feather.webp";
import { MaskedLines, Reveal } from "@/components/reveal";

const pillars = [
  {
    word: "Wisdom",
    line: "Inspired by Imam Ibn Sirin, whose insight turned questions into meaning.",
  },
  {
    word: "Understanding",
    line: "We study the problem before we ever touch the technology.",
  },
  {
    word: "Intelligence",
    line: "Systems that reason, decide and act with your business in mind.",
  },
];

export function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const featherY = useTransform(scrollYProgress, [0, 1], ["12%", "-22%"]);
  const featherRotate = useTransform(scrollYProgress, [0, 1], [-14, 10]);

  return (
    <section id="philosophy" ref={ref} className="relative overflow-hidden py-36 sm:py-48">
      <motion.img
        src={feather}
        alt=""
        aria-hidden
        loading="lazy"
        width={1024}
        height={768}
        style={{ y: featherY, rotate: featherRotate }}
        className="pointer-events-none absolute -right-24 top-10 w-[46vw] max-w-[520px] opacity-25 mix-blend-multiply"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow">The Story Behind SeereenAI</p>
        </Reveal>

        <h2 className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.9rem)] leading-[1.08] text-espresso">
          <MaskedLines
            lines={[
              <span key="1">Wisdom yesterday.</span>,
              <span key="2" className="italic text-gold">Intelligence tomorrow.</span>,
            ]}
          />
        </h2>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-border md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.word} delay={i * 0.16} className="h-full">
              <div className="glass h-full rounded-none px-8 py-14">
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-[2rem] leading-none text-espresso">{p.word}</h3>
                <div className="rule-gold mt-6 w-16" />
                <p className="mt-6 text-[0.95rem] leading-relaxed font-light text-espresso/70">
                  {p.line}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <blockquote className="mx-auto mt-24 max-w-3xl text-center text-[clamp(1.3rem,2.8vw,2.1rem)] leading-snug font-light text-espresso/85 italic">
            &ldquo;We don&apos;t want AI to merely generate responses. We want it to
            deliver understanding.&rdquo;
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}