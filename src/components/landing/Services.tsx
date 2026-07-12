import { MessageCircle } from "lucide-react";
import { SERVICE_CATEGORIES, WHATSAPP_URL } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="bg-nude/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Serviços</span>
          <h2 className="font-display mt-4 text-3xl font-semibold md:text-5xl">Tabela de Serviços</h2>
          <p className="mt-5 text-muted-foreground">
            Escolha o cuidado ideal para as suas unhas.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICE_CATEGORIES.map((category, index) => (
            <Reveal key={category.title} delay={index * 120} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border bg-card p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                <h3 className="font-display text-2xl font-semibold">{category.title}</h3>
                <div className="mt-3 h-px w-12 bg-gradient-gold" />
                <ul className="mt-6 flex-1 space-y-4">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex items-baseline justify-between gap-3">
                      <span className="text-sm text-foreground">{item.name}</span>
                      <span className="flex-1 border-b border-dotted border-border" />
                      <span className="text-sm font-semibold whitespace-nowrap text-primary">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-medium text-primary transition-all duration-300 hover:bg-gradient-gold hover:text-primary-foreground hover:shadow-gold"
                >
                  <MessageCircle className="h-4 w-4" />
                  Agendar
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
