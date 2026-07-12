export const WHATSAPP_NUMBER = "5517992239221";
export const WHATSAPP_DISPLAY = "(17) 99223-9221";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, Graciane! Gostaria de agendar um horário.")}`;
export const INSTAGRAM_HANDLE = "@grahoracionails";
export const INSTAGRAM_URL = "https://instagram.com/grahoracionails";
export const ADDRESS = "R. Prudente de Morais, 1014 - Jardim Zanqueta, Santa Adélia - SP, 15951-318";
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export const NAV_LINKS = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Galeria", href: "#gallery" },
  { label: "Localização", href: "#location" },
  { label: "Contato", href: "#contact" },
];

export const SERVICE_CATEGORIES = [
  {
    title: "Unhas Simples",
    items: [
      { name: "Mão", price: "R$ 35,00" },
      { name: "Pé", price: "R$ 50,00" },
      { name: "Mão e Pé", price: "R$ 85,00" },
      { name: "Esmaltação em Gel no Pé", price: "R$ 100,00" },
    ],
  },
  {
    title: "Alongamentos",
    items: [
      { name: "Unhas de Gel", price: "R$ 200,00" },
      { name: "Banho de Gel", price: "R$ 150,00" },
      { name: "Esmaltação em Gel", price: "R$ 100,00" },
      { name: "Blindagem Normal", price: "R$ 75,00" },
      { name: "Blindagem Estrutural", price: "R$ 120,00" },
    ],
  },
  {
    title: "Manutenção",
    items: [
      { name: "Manutenção", price: "R$ 150,00" },
      { name: "Reposição de Unha (unidade)", price: "R$ 15,00" },
      { name: "Remoção de Unha", price: "R$ 50,00" },
    ],
  },
];

export const GALLERY_IMAGES = [
  {
    src: "https://raw.githubusercontent.com/oneTime999/Graciane/refs/heads/main/images/unha1.jpg",
    alt: "Unhas decoradas em tons nude",
  },
  {
    src: "https://raw.githubusercontent.com/oneTime999/Graciane/refs/heads/main/images/unha2.jpg",
    alt: "Nail art elegante",
  },
  {
    src: "https://raw.githubusercontent.com/oneTime999/Graciane/refs/heads/main/images/unha3.jpg",
    alt: "Manicure profissional em andamento",
  },
  {
    src: "https://raw.githubusercontent.com/oneTime999/Graciane/refs/heads/main/images/unha4.jpg",
    alt: "Unhas em gel finalizadas",
  },
  {
    src: "https://raw.githubusercontent.com/oneTime999/Graciane/refs/heads/main/images/unha5.jpg",
    alt: "Esmaltes de tons sofisticados",
  },
  {
    src: "https://raw.githubusercontent.com/oneTime999/Graciane/refs/heads/main/images/unha6.jpg",
    alt: "Cuidados com as unhas",
  },
];
