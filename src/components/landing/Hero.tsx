import { MessageCircle, Sparkles, ArrowDown } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="bg-gradient-hero pt-28 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-4 py-1.5 text-xs font-medium tracking-widest text-primary uppercase shadow-soft">
            <Sparkles className="h-3.5 w-3.5" />
            Nail Designer
          </div>
          <h1 className="font-display mt-6 text-4xl leading-tight font-semibold md:text-6xl">
            Graciane Horácio
            <span className="mt-2 block text-2xl font-normal text-muted-foreground italic md:text-3xl">
              Nail Designer
            </span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Há 11 anos transformando unhas em verdadeiras obras de arte.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold tracking-wide text-primary-foreground shadow-gold transition-all duration-300 hover:scale-105 hover:brightness-105"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-sm font-semibold tracking-wide text-foreground shadow-soft transition-all duration-300 hover:border-primary/50 hover:text-primary"
            >
              Ver Serviços
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal className="order-1 md:order-2" delay={150}>
          <div className="relative mx-auto max-w-sm md:max-w-none">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-gold opacity-15 blur-2xl" />
            <img
              src="https://raw.githubusercontent.com/oneTime999/Graciane/refs/heads/main/images/graciane.jpg"
              alt="Trabalho de nail design por Graciane Horácio"
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft"
              loading="eager"
            />
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border bg-card px-6 py-3 shadow-soft">
              <span className="font-display text-3xl font-semibold text-primary">11</span>
              <span className="text-xs leading-tight font-medium text-muted-foreground">
                anos de
                <br />
                experiência
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
