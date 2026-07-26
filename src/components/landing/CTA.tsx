import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Smartphone, ArrowRight } from "lucide-react";
import fieldAerial from "@/assets/field-aerial.jpg";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-y border-border bg-card py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-background">
        <img
          src={fieldAerial}
          alt="Vista aérea de plantação verde organizada em fileiras"
          className="h-full w-full object-cover opacity-20"
          width={1344}
          height={896}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-sm font-medium text-primary">
          <Smartphone className="h-4 w-4" />
          <span>Disponível para Android e iOS</span>
        </div>
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Pronto para vender mais no agro?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Cadastre seu celular para receber o link de download e começar a usar o farmsilo hoje mesmo.
        </p>

        <form className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
          <Input
            type="tel"
            placeholder="Seu WhatsApp (DDD + número)"
            className="h-12 border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-primary/40"
          />
          <Button
            type="submit"
            size="lg"
            className="h-12 bg-primary px-6 text-base font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Receber link
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>

        <p className="mt-4 text-sm text-muted-foreground">
          Ao cadastrar, você concorda com nossos Termos de Uso e Política de Privacidade.
        </p>
      </div>
    </section>
  );
}
