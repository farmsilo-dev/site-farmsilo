import { Button } from "@/components/ui/button";
import { Check, Leaf } from "lucide-react";
import farmerImage from "@/assets/hero-farmer.jpg";

const benefits = [
  "Anuncie produtos e serviços gratuitamente",
  "Receba ajuda de IA para precificar e vender",
  "Acesse clima, commodities e alertas agrícolas",
  "Converse com compradores e vendedores em tempo real",
];

export function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10" />
            <img
              src={farmerImage}
              alt="Produtor rural sorrindo enquanto consulta o celular no campo ao pôr do sol"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
              width={1344}
              height={896}
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-card p-5 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Leaf className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Mais</p>
                  <p className="text-sm text-muted-foreground">visibilidade nas vendas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Sobre nós</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Onde o agronegócio se encontra
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Somos uma plataforma criada para conectar produtores, comerciantes e prestadores de serviços do agro. Aqui
              você anuncia, compra, vende e ainda conta com um assistente de inteligência artificial para tomar decisões
              mais assertivas no dia a dia do campo.
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-base text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button size="lg" className="bg-primary px-7 text-base font-semibold text-primary-foreground hover:bg-primary/90" asChild>
                <a href="#contact">Começar agora</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
