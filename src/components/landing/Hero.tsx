import { Button } from "@/components/ui/button";
import { Cloud, TrendingUp, ShieldCheck, Sparkles, Megaphone, Share2 } from "lucide-react";
import screenFeed from "@/assets/screen-feed.png.asset.json";
import screenAi from "@/assets/screen-ai.png.asset.json";
import screenMarket from "@/assets/screen-market.png.asset.json";

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l6.66-6.66a.999.999 0 0 1 1.607.92 1 1 0 0 1-.174.576l-3.243 5.61-5.65-5.65 1.4 1.204zm-.594 1.36l-1.4 1.204 5.65 5.65 3.243-5.61a.999.999 0 0 0-1.433-1.496l-6.06 6.252zM3.003 23.2l10.586-10.586L3.003 1.8c-.036.104-.058.213-.058.326v20.748c0 .113.022.222.058.326z" />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PhoneFrame({
  src,
  alt,
  className,
  style,
  lazy,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  lazy?: boolean;
}) {
  return (
    <div className={`relative ${className ?? ""}`} style={style}>
      {/* botões laterais */}
      <span className="absolute -left-[3px] top-[22%] h-[7%] w-[3px] rounded-l bg-muted-foreground" />
      <span className="absolute -left-[3px] top-[33%] h-[10%] w-[3px] rounded-l bg-muted-foreground" />
      <span className="absolute -right-[3px] top-[27%] h-[12%] w-[3px] rounded-r bg-muted-foreground" />
      <div className="rounded-[1.7rem] bg-gradient-to-br from-muted via-muted-foreground/70 to-muted p-[3px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] ring-1 ring-primary/25">
        <div className="rounded-[1.55rem] bg-background p-[3px]">
          <div className="relative overflow-hidden rounded-[1.4rem] bg-background">
            {/* notch */}
            <span className="absolute left-1/2 top-0 z-10 h-[3%] w-[28%] -translate-x-1/2 rounded-b-xl bg-background" />
            <img src={src} alt={alt} className="block h-auto w-full" loading={lazy ? "lazy" : undefined} />
          </div>
        </div>
      </div>
    </div>
  );
}


export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Venda mais no
              <span className="block text-primary">agronegócio</span>
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="bg-primary px-6 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
                asChild
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.farmsilo&hl=pt_BR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <GooglePlayIcon className="h-5 w-5" />
                  <span>Google Play</span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 px-6 text-base font-semibold text-primary hover:bg-primary/5"
                asChild
              >
                <a
                  href="https://apps.apple.com/br/app/farmsilo-app/id6748069456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <AppleIcon className="h-5 w-5" />
                  <span>App Store</span>
                </a>
              </Button>
            </div>
            <ul className="mt-6 space-y-2 text-base font-bold text-foreground">
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span>Assistente de IA integrado</span>
              </li>
              <li className="flex items-start gap-2">
                <Megaphone className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span>Anuncie seus produtos ou serviços gratuitamente</span>
              </li>
              <li className="flex items-start gap-2">
                <Share2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span>Divulgue e compartilhe</span>
              </li>
            </ul>

            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Cloud className="h-4 w-4 text-primary" />
                <span>Clima em tempo real</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span>Preço de commodities</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Negociação segura</span>
              </div>
            </div>
          </div>

          <div
            className="relative flex items-end justify-center gap-3 sm:gap-4 lg:justify-end"
            style={{ perspective: "1400px" }}
          >
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-full bg-primary/10 blur-3xl" />
            <PhoneFrame
              className="w-[30%] max-w-[180px] translate-y-6"
              style={{ transform: "rotateY(18deg) rotateX(4deg) rotateZ(-2deg)" }}
              src={screenAi.url}
              alt="Tela do assistente de IA Silo AI do aplicativo farmsilo respondendo dúvidas sobre plantio e pragas"
              lazy
            />
            <PhoneFrame
              className="z-10 w-[36%] max-w-[240px]"
              style={{ transform: "rotateX(4deg) rotateZ(-1deg)" }}
              src={screenMarket.url}
              alt="Tela de compre e venda do aplicativo farmsilo com produtos e serviços anunciados"
            />
            <PhoneFrame
              className="w-[30%] max-w-[180px] translate-y-6"
              style={{ transform: "rotateY(-18deg) rotateX(4deg) rotateZ(2deg)" }}
              src={screenFeed.url}
              alt="Tela de postagens do aplicativo farmsilo com anúncio de serviços agrícolas"
              lazy
            />
          </div>

        </div>
      </div>
    </section>
  );
}
