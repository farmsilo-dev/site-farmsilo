import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";

import { About } from "@/components/landing/About";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "farmsilo — Onde o Agronegócio se Encontra" },
      {
        name: "description",
        content:
          "Venda mais no agronegócio com a farmsilo. Compre e venda produtos, acompanhe clima, preços de commodities, pragas e doenças, e conte com um assistente de IA.",
      },
      { property: "og:title", content: "farmsilo — Onde o Agronegócio se Encontra" },
      {
        property: "og:description",
        content:
          "Venda mais no agronegócio com a farmsilo. Marketplace de agro com assistente de IA, clima, commodities e comunicação rápida.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
