import { MapPin, Navigation } from "lucide-react";
import { ADDRESS, MAPS_DIRECTIONS_URL, MAPS_EMBED_URL } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Location() {
  return (
    <section id="location" className="bg-nude/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
            Localização
          </span>
          <h2 className="font-display mt-4 text-3xl font-semibold md:text-5xl">Onde me encontrar</h2>
          <p className="mt-5 inline-flex items-start justify-center gap-2 text-muted-foreground">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
            {ADDRESS}
          </p>
        </Reveal>

        <Reveal className="mt-12" delay={150}>
          <div className="overflow-hidden rounded-3xl border shadow-soft">
            <iframe
              src={MAPS_EMBED_URL}
              title="Mapa com a localização do estúdio de Graciane Horácio"
              className="h-[380px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-8 text-center">
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold tracking-wide text-primary-foreground shadow-gold transition-transform duration-300 hover:scale-105"
            >
              <Navigation className="h-4 w-4" />
              Como chegar
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
