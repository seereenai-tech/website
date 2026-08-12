import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import laptop from "@/assets/laptop-mockup.webp";
import phone from "@/assets/phone-mockup.webp";
import { Reveal } from "@/components/reveal";

const panels = [
  { label: "Automation runtime", value: "Always on" },
  { label: "Response quality", value: "Human-reviewed" },
  { label: "Deployment", value: "Private cloud" },
];

export function Products() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const laptopY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const phoneY = useTransform(scrollYProgress, [0, 1], ["22%", "-18%"]);
  const glassY = useTransform(scrollYProgress, [0, 1], ["30%", "-24%"]);

  return (
    <section id="products" ref={ref} className="relative overflow-hidden py-36 sm:py-44">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">What We Build</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-7 text-[clamp(2rem,5vw,3.6rem)] leading-[1.08] text-espresso">
              Digital products that actually{" "}
              <span className="italic text-gold">solve problems.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-24 flex justify-center">
          <motion.img
            src={laptop}
            alt="Business dashboard built by SeereenAI"
            loading="lazy"
            width={1440}
            height={960}
            style={{ y: laptopY }}
            className="w-[min(88vw,880px)] drop-shadow-[0_60px_90px_oklch(0.32_0.05_52/0.3)]"
          />
          <motion.img
            src={phone}
            alt="Mobile AI assistant interface built by SeereenAI"
            loading="lazy"
            width={768}
            height={1200}
            style={{ y: phoneY }}
            className="absolute -right-2 bottom-0 w-[26vw] max-w-[240px] drop-shadow-[0_40px_70px_oklch(0.32_0.05_52/0.32)] sm:right-4"
          />
          <motion.div
            style={{ y: glassY }}
            className="glass absolute -left-2 bottom-8 hidden w-64 rounded-2xl p-6 lg:block"
          >
            <p className="eyebrow">Live signal</p>
            <p className="mt-4 text-4xl leading-none text-espresso">98.6%</p>
            <p className="mt-3 text-xs tracking-wide text-espresso/60">
              Automated resolutions without human handoff
            </p>
          </motion.div>
        </div>

        <div className="mt-24 grid gap-6 sm:grid-cols-3">
          {panels.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.12}>
              <div className="glass rounded-2xl px-7 py-8">
                <p className="eyebrow">{p.label}</p>
                <p className="mt-4 text-xl font-light text-espresso">{p.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}