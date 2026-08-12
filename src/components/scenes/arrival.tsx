import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import dunes from "@/assets/sunset-hero.webp";
import camel from "@/assets/glass-camel.webp";
import laptop from "@/assets/laptop-mockup.webp";
import { SandParticles } from "@/components/atmosphere";
import { MaskedLines, Reveal } from "@/components/reveal";

export function Arrival() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const skyScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.22]);
  const veilOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const camelY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const camelOpacity = useTransform(scrollYProgress, [0, 0.8], [0.07, 0.02]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-16%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentBlur = useTransform(scrollYProgress, [0, 0.8], ["blur(0px)", "blur(6px)"]);
  const laptopY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const laptopScale = useTransform(scrollYProgress, [0, 1], [0.94, 1.16]);
  const laptopRotate = useTransform(scrollYProgress, [0, 1], [-3, 4]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex flex-col items-center justify-center overflow-hidden pt-36 pb-20 sm:pt-40"
    >
      <motion.img
        src={dunes}
        alt="Desert dunes at golden sunset"
        width={1920}
        height={1088}
        style={{ y: skyY, scale: skyScale }}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          opacity: veilOpacity,
          background:
            "radial-gradient(120% 80% at 50% 10%, oklch(0.99 0.02 88 / 0.42), oklch(0.95 0.04 82 / 0.3) 45%, oklch(0.88 0.05 74 / 0.34) 100%)",
        }}
      />

      <motion.img
        src={camel}
        alt=""
        aria-hidden
        width={1024}
        height={1024}
        style={{ y: camelY, opacity: camelOpacity }}
        className="pointer-events-none absolute top-1/2 left-1/2 w-[92vw] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"
      />

      <SandParticles />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity, filter: contentBlur }}
        className="relative z-10 flex w-full max-w-5xl flex-col items-center px-6 text-center"
      >
        <Reveal delay={0.15}>
          <p className="eyebrow">SeereenAI · Intelligent Business Solutions</p>
        </Reveal>

        <h1 className="mt-8 text-[clamp(2.6rem,7.4vw,6rem)] leading-[1.02] text-espresso">
          <span className="sr-only">
            SeereenAI — AI agents, automation, SaaS platforms and custom software development
          </span>
          <MaskedLines
            delay={0.3}
            lines={[
              <span key="a" className="italic">Inspired by Wisdom.</span>,
              <span key="b" className="text-gold">Driven by Innovation.</span>,
            ]}
          />
        </h1>

        <Reveal delay={0.9} className="mt-8 max-w-xl">
          <p className="text-[1.02rem] leading-relaxed font-light text-espresso/75">
            We build AI agents, automation and software that don&apos;t just generate
            responses — they deliver understanding.
          </p>
        </Reveal>

        <Reveal delay={1.1} className="mt-11 flex flex-wrap items-center justify-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-bronze to-gold px-9 py-3.5 text-[0.74rem] tracking-[0.24em] text-primary-foreground uppercase shadow-[0_20px_45px_-20px_oklch(0.55_0.09_62/0.8)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
            >
              Begin the Journey
            </a>
            <a
              href="#services"
              className="glass rounded-full px-9 py-3.5 text-[0.74rem] tracking-[0.24em] text-espresso uppercase transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
            >
              Explore Services
            </a>
          </div>
        </Reveal>
      </motion.div>

      <motion.img
        src={laptop}
        alt="SeereenAI analytics dashboard shown on a laptop"
        width={1440}
        height={960}
        style={{ y: laptopY, scale: laptopScale, rotate: laptopRotate }}
        className="relative z-10 mt-16 w-[min(90vw,900px)] drop-shadow-[0_50px_80px_oklch(0.32_0.05_52/0.28)] will-change-transform"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(0.941 0.028 80 / 0.9))",
        }}
      />
    </section>
  );
}