import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import sunset from "@/assets/sunset-dunes.webp";
import { MaskedLines, Reveal } from "@/components/reveal";

const whatsappMessage = encodeURIComponent("Hi SeereenAI, I'd like to learn more about your services.");
const whatsappHref = `https://wa.me/919358383671?text=${whatsappMessage}`;

const details = [
  { icon: Mail, label: "Email", value: "info.seereenai@gmail.com", href: "mailto:info.seereenai@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9358383671", href: "tel:+919358383671" },
  { icon: Instagram, label: "Instagram", value: "@seereen.ai", href: "https://instagram.com/seereen.ai" },
  { icon: MapPin, label: "Address", value: "Delhi, India" },
];

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "6%"]);

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden pt-40 pb-16">
      <motion.img
        src={sunset}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={1080}
        style={{ y: bgY }}
        className="absolute inset-0 h-[118%] w-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.941 0.028 80 / 0.95), oklch(0.55 0.09 62 / 0.45) 42%, oklch(0.238 0.038 50 / 0.86))",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="eyebrow-light">Thank You</p>
        </Reveal>

        <h2 className="mt-8 text-[clamp(2.1rem,5.4vw,4rem)] leading-[1.06] text-ivory">
          <MaskedLines
            lines={[
              <span key="1">Let&apos;s build something</span>,
              <span key="2" className="italic text-champagne">worth understanding.</span>,
            ]}
          />
        </h2>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {details.map((d, i) => {
            const inner = (
              <span className="flex items-center gap-4 text-left">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-champagne/35 bg-ivory/10">
                  <d.icon strokeWidth={1.2} className="h-4.5 w-4.5 text-champagne" />
                </span>
                <span>
                  <span className="eyebrow-light block">{d.label}</span>
                  <span className="mt-1.5 block text-[0.98rem] font-light text-ivory">
                    {d.value}
                  </span>
                </span>
              </span>
            );
            return (
              <Reveal key={d.label} delay={i * 0.1}>
                <div className="glass-deep rounded-2xl px-6 py-5 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1">
                  {d.href ? (
                    <a href={d.href} className="block">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-14 inline-block rounded-full bg-gradient-to-r from-champagne to-gold px-10 py-4 text-[0.74rem] tracking-[0.26em] text-espresso uppercase transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
          >
            Get a Quote
          </a>
        </Reveal>

        <footer className="mt-28 flex flex-col items-center gap-6">
          <div className="rule-gold w-40" />
          <p className="text-3xl tracking-wide text-champagne">
            Seereen<span className="italic">AI</span>
          </p>
          <p className="text-[0.68rem] tracking-[0.28em] text-ivory/55 uppercase">
            Inspired by Wisdom, Driven by Innovation
          </p>
          <p className="text-xs font-light text-ivory/40">
            © {new Date().getFullYear()} SeereenAI. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
