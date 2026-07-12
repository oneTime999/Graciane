import { Instagram, MapPin, MessageCircle } from "lucide-react";
import {
  ADDRESS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/site";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer id="contact" className="border-t bg-card">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <Reveal className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold">
              Graciane <span className="text-primary">Horácio</span>
            </p>
            <p className="mt-1 text-sm tracking-widest text-muted-foreground uppercase">
              Nail Designer
            </p>
            <p className="mt-4 text-sm text-muted-foreground">10 anos de experiência</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Contato</h3>
            <div className="mt-5 space-y-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent">
                  <MessageCircle className="h-4 w-4 text-primary" />
                </span>
                {WHATSAPP_DISPLAY}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Instagram className="h-4 w-4 text-primary" />
                </span>
                {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
              Localização
            </h3>
            <p className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent">
                <MapPin className="h-4 w-4 text-primary" />
              </span>
              {ADDRESS}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 border-t pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Graciane Horácio Nail Designer. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
