import { Bot, Cpu, MessageCircle, Mic, Layers, Workflow } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    copy: "Intelligent agents that understand, decide and act for your business.",
  },
  {
    icon: Workflow,
    title: "Automation",
    copy: "Repetitive work quietly removed from your team's day.",
  },
  {
    icon: MessageCircle,
    title: "AI Chatbots",
    copy: "Conversations that engage customers and move them forward.",
  },
  {
    icon: Mic,
    title: "Voice AI",
    copy: "Natural voice interactions that save time and elevate experience.",
  },
  {
    icon: Layers,
    title: "SaaS Platforms",
    copy: "Scalable, secure products built for long-term growth.",
  },
  {
    icon: Cpu,
    title: "Custom Software",
    copy: "Websites, web apps and mobile apps shaped to your operation.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-36 sm:py-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%]"
        style={{
          background:
            "linear-gradient(to top, oklch(0.86 0.05 76 / 0.8), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">AI Services</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-7 text-[clamp(2rem,5vw,3.6rem)] leading-[1.08] text-espresso">
              We build AI that works <span className="italic text-gold">for you.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.12} y={54}>
              <TiltCard>
                <article className="glass group h-full rounded-3xl px-8 py-11">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-sand/60">
                    <s.icon
                      strokeWidth={1.2}
                      className="h-5 w-5 text-bronze transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    />
                  </span>
                  <h3 className="mt-7 text-2xl text-espresso">{s.title}</h3>
                  <div className="rule-gold mt-5 w-12 transition-all duration-700 group-hover:w-24" />
                  <p className="mt-5 text-[0.93rem] leading-relaxed font-light text-espresso/70">
                    {s.copy}
                  </p>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}