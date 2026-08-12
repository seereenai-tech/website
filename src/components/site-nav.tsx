import { useEffect, useState } from "react";
import logo from "@/assets/seereenai-mark.png.asset.json";

const links = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 sm:pt-6">
      <nav
        className={`glass flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-6 ${
          scrolled ? "backdrop-blur-3xl saturate-150" : "backdrop-blur-md"
        }`}
        style={{ opacity: 1 }}
      >
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="SeereenAI"
            width={96}
            height={96}
            className="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10"
          />
          <span className="font-display text-[1.05rem] tracking-[0.02em] text-espresso">
            SeereenAI
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.8rem] tracking-[0.16em] text-espresso/75 uppercase transition-colors duration-500 hover:text-bronze"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-gold/40 bg-gradient-to-r from-bronze to-gold px-5 py-2 text-[0.72rem] tracking-[0.2em] text-primary-foreground uppercase shadow-[0_10px_30px_-14px_oklch(0.55_0.09_62/0.7)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
        >
          Let&apos;s Talk
        </a>
      </nav>
    </header>
  );
}