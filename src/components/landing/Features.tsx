import {
  Bot,
  Cloud,
  TrendingUp,
  Bug,
  MessageCircle,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import siloAiLogo from "@/assets/silo-ai-logo.png.asset.json";

const features = [
  {
    icon: ShoppingCart,
    title: "Compre e venda",
    description:
      "Anuncie produtos e serviços do agro. Máquinas, sementes, insumos, grãos e muito mais, tudo na palma da mão.",
  },
  {
    icon: Bot,
    title: "Assistente de IA",
    description:
      "Tire dúvidas, receba sugestões de preço e descubra quando vender. Um especialista disponível 24 horas por dia.",
    highlight: true,
  },
  {
    icon: Cloud,
    title: "Clima e previsões",
    description:
      "Acompanhe a previsão do tempo para sua região e planeje plantio, colheita e aplicações com mais segurança.",
  },
  {
    icon: TrendingUp,
    title: "Preços de commodities",
    description:
      "Fique de olho nas cotações de soja, milho, boi e outros produtos. Dados atualizados para decidir na hora certa.",
  },
  {
    icon: Bug,
    title: "Pragas e doenças",
    description:
      "Identifique problemas na lavoura com orientações práticas e saiba os melhores manejos para proteger sua produção.",
  },
  {
    icon: MessageCircle,
    title: "Comunicação rápida",
    description:
      "Converse com compradores, vendedores e técnicos direto pelo app. Negocie com agilidade e sem intermediários.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-muted/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Tudo que você precisa</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Uma plataforma completa para o agro
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Do marketplace à inteligência artificial, reunimos as ferramentas que ajudam você a vender mais e gerenciar melhor.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className={`group border-border/60 transition-all hover:-translate-y-1 hover:shadow-lg ${
                  feature.highlight ? "border-primary/40 bg-primary/10" : "bg-card"
                }`}
              >
                <CardContent className="p-6">
                  {feature.highlight ? (
                    <img
                      src={siloAiLogo.url}
                      alt="Símbolo do assistente de IA da farmsilo"
                      className="h-16 w-16 object-contain drop-shadow-lg"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                  )}
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                  {feature.highlight && (
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      <span>Conhecer o assistente</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
