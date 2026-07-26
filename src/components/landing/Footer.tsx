import { Link } from "@tanstack/react-router";
import { Mail, Instagram, Linkedin } from "lucide-react";
import logoAsset from "@/assets/farmsilo-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logoAsset.url} alt="" className="h-8 w-8" width={32} height={32} style={{ filter: "brightness(0) invert(1)" }} />
              <span className="text-xl font-bold tracking-tight text-foreground">farmsilo</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              O agronegócio na palma da mão. Compre, venda, conecte-se e receba ajuda de inteligência artificial.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Navegação</h3>
            <ul className="mt-4 space-y-2">
              {[
                { label: "Início", href: "#" },
                { label: "Funcionalidades", href: "#features" },
                { label: "Sobre", href: "#about" },
                { label: "Contato", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contato</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:contato@farmsilo.net"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  contato@farmsilo.net
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} farmsilo. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Privacidade
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
