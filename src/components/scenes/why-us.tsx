import camel from "@/assets/glass-camel.webp";
import { Reveal } from "@/components/reveal";

const reasons = [
  "Wisdom-led thinking before technology",
  "Custom solutions, never templates",
  "Business outcomes over buzzwords",
  "Partnership that continues after launch",
];

export function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden py-36 sm:py-44">
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <img
              src={camel}
              alt="Translucent glass camel sculpture with gold light"
              loading="lazy"
              width={1024}
              height={1024}
              className="animate-float-slow mx-auto w-[min(78vw,520px)] drop-shadow-[0_50px_80px_oklch(0.32_0.05_52/0.25)]"
            />
            <div
              aria-hidden
              className="absolute inset-0 -z-10 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 50% 55%, oklch(0.86 0.07 78 / 0.55), transparent 65%)",
              }}
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Why SeereenAI</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-7 text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.1] text-espresso">
              Calm, considered,{" "}
              <span className="italic text-gold">deliberately crafted.</span>
            </h2>
          </Reveal>

          <ul className="mt-12 flex flex-col divide-y divide-border/70 border-y border-border/70">
            {reasons.map((r, i) => (
              <Reveal key={r} delay={0.1 + i * 0.09}>
                <li className="flex items-baseline gap-5 py-6">
                  <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[1.05rem] font-light text-espresso/85">{r}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}