import { Gem, Heart, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const HIGHLIGHTS = [
  { icon: Gem, title: "Materiais de qualidade", text: "Produtos selecionados para resultados sofisticados." },
  { icon: ShieldCheck, title: "Unhas resistentes", text: "Técnicas modernas para durabilidade e beleza." },
  { icon: Heart, title: "Cuidado em cada detalhe", text: "Atendimento dedicado e personalizado." },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Sobre</span>
          <h2 className="font-display mt-4 text-3xl font-semibold md:text-5xl">11 anos de experiência</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Há mais de uma década, Graciane Horácio oferece serviços de Nail Designer com excelência,
            dedicação e muito cuidado em cada detalhe. Seu objetivo é proporcionar unhas bonitas,
            resistentes e sofisticadas para cada cliente, utilizando materiais de qualidade e técnicas
            modernas.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <div className="h-full rounded-3xl border bg-card p-8 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
