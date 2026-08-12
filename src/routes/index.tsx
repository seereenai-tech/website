import { createFileRoute } from "@tanstack/react-router";
import { MouseGlow } from "@/components/atmosphere";
import { SiteNav } from "@/components/site-nav";
import { Arrival } from "@/components/scenes/arrival";
import { Philosophy } from "@/components/scenes/philosophy";
import { Services } from "@/components/scenes/services";
import { Products } from "@/components/scenes/products";
import { Process } from "@/components/scenes/process";
import { WhyUs } from "@/components/scenes/why-us";
import { Contact } from "@/components/scenes/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SeereenAI — Inspired by Wisdom, Driven by Innovation" },
      {
        name: "description",
        content:
          "SeereenAI designs AI agents, automation, chatbots, voice AI, SaaS platforms and custom software that deliver understanding, not just answers.",
      },
      {
        property: "og:title",
        content: "SeereenAI — Inspired by Wisdom, Driven by Innovation",
      },
      {
        property: "og:description",
        content:
          "A premium AI studio building agents, automation and software with the calm precision of ancient wisdom.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-clip">
      <MouseGlow />
      <SiteNav />
      <Arrival />
      <Philosophy />
      <Services />
      <Products />
      <Process />
      <WhyUs />
      <Contact />
    </main>
  );
}
