import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Sobre mí | Ingeniero de Sistemas y Tecnología | DevPass",
  description:
    "Conoce la trayectoria detrás de DevPass: experiencia en infraestructura, redes, desarrollo de software, Full Stack, inteligencia artificial, automatización y tecnología.",
  path: "/sobre-mi",
  keywords: [
    "Sobre mí DevPass",
    "DevPass",
    "ingeniero de sistemas",
    "ingeniería de sistemas",
    "ingeniero de sistemas e informática",
    "desarrollo de software",
    "desarrollo web",
    "desarrollo Full Stack",
    "Full Stack",
    "programación",
    "software",
    "arquitectura de software",
    "infraestructura tecnológica",
    "infraestructura TI",
    "redes informáticas",
    "redes",
    "servidores",
    "soporte TI",
    "COBOL",
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "Next.js",
    "C#",
    "SQL",
    "Linux",
    "Git",
    "inteligencia artificial",
    "IA",
    "automatización",
    "Data Science",
    "ciencia de datos",
    "tecnología",
    "tecnología Perú",
    "desarrollo de software Perú",
  ],
});

export default function SobreMiLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}