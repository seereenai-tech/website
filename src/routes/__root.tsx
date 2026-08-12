import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SeereenAI — Inspired by Wisdom, Driven by Innovation" },
      {
        name: "description",
        content:
          "SeereenAI builds AI agents, automation, SaaS and custom software with the calm precision of ancient wisdom.",
      },
      { name: "author", content: "SeereenAI" },
      { property: "og:title", content: "SeereenAI — Inspired by Wisdom, Driven by Innovation" },
      {
        property: "og:description",
        content:
          "AI agents, automation, SaaS and custom software, crafted as a premium digital experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://desert-wisdom-ai.lovable.app/#website",
              name: "SeereenAI",
              url: "https://desert-wisdom-ai.lovable.app/",
              description:
                "SeereenAI builds AI agents, automation, SaaS platforms and custom software.",
              publisher: { "@id": "https://desert-wisdom-ai.lovable.app/#organization" },
            },
            {
              "@type": ["Organization", "LocalBusiness"],
              "@id": "https://desert-wisdom-ai.lovable.app/#organization",
              name: "SeereenAI",
              url: "https://desert-wisdom-ai.lovable.app/",
              slogan: "Inspired by Wisdom, Driven by Innovation",
              description:
                "AI studio building AI agents, chatbots, voice assistants, automation, SaaS platforms and custom software.",
              email: "info.seereenai@gmail.com",
              telephone: "+971500000000",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
            },
            {
              "@type": "Service",
              name: "AI Agents & Automation",
              serviceType: "AI agents, chatbots, voice assistants and workflow automation",
              provider: { "@id": "https://desert-wisdom-ai.lovable.app/#organization" },
              areaServed: "Worldwide",
            },
            {
              "@type": "Service",
              name: "Custom Software Development",
              serviceType: "Websites, web applications, mobile apps and SaaS platforms",
              provider: { "@id": "https://desert-wisdom-ai.lovable.app/#organization" },
              areaServed: "Worldwide",
            },
          ],
        }),
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/seereenai-logo.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300&family=Jost:wght@300;400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
