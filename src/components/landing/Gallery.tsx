import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const step = useCallback((direction: number) => {
    setActiveIndex((current) =>
      current === null
        ? current
        : (current + direction + GALLERY_IMAGES.length) % GALLERY_IMAGES.length,
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, step]);

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Galeria</span>
          <h2 className="font-display mt-4 text-3xl font-semibold md:text-5xl">Trabalhos Recentes</h2>
          <p className="mt-5 text-muted-foreground">Cada unha é tratada como uma obra de arte.</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <Reveal key={image.src} delay={(index % 3) * 100}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group block w-full overflow-hidden rounded-2xl shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`Ampliar imagem: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="animate-fade-in fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={close}
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-card/10 text-primary-foreground transition-colors hover:bg-card/20"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Imagem anterior"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-card/10 text-primary-foreground transition-colors hover:bg-card/20 md:left-8"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img
            src={GALLERY_IMAGES[activeIndex].src}
            alt={GALLERY_IMAGES[activeIndex].alt}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-soft"
          />
          <button
            type="button"
            aria-label="Próxima imagem"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-card/10 text-primary-foreground transition-colors hover:bg-card/20 md:right-8"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
