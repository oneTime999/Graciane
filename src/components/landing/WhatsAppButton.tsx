import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-gold transition-transform duration-300 hover:scale-110 md:right-8 md:bottom-8"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
