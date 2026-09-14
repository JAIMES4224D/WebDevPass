import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Servicios de Desarrollo de Software, IA y Automatización | DevPass",
  description:
    "Servicios de DevPass para desarrollo web, software a medida, inteligencia artificial, automatización de procesos y soluciones tecnológicas orientadas a necesidades reales.",
  path: "/servicios",
  keywords: [
    "servicios DevPass",
    "DevPass",
    "servicios tecnológicos",
    "desarrollo de software",
    "desarrollo web",
    "desarrollo de aplicaciones",
    "software a medida",
    "software personalizado",
    "aplicaciones web",
    "sistemas a medida",
    "ingeniería de software",
    "inteligencia artificial",
    "IA aplicada",
    "soluciones con inteligencia artificial",
    "automatización",
    "automatización de procesos",
    "automatización empresarial",
    "integración de sistemas",
    "APIs",
    "transformación digital",
    "soluciones digitales",
    "consultoría tecnológica",
    "desarrollo de software Perú",
    "desarrollo web Perú",
    "tecnología Perú",
  ],
});

export default function ServiciosLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}