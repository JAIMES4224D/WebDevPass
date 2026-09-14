import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contacto | Desarrollo de Software, IA y Soluciones Digitales | DevPass",
  description:
    "Contacta con DevPass para desarrollar software, sitios web, soluciones con inteligencia artificial, automatizaciones, auditorías y proyectos tecnológicos a medida.",
  path: "/contacto",
  keywords: [
    "contacto DevPass",
    "DevPass",
    "desarrollo de software",
    "desarrollo web",
    "desarrollo de aplicaciones",
    "software a medida",
    "soluciones digitales",
    "inteligencia artificial",
    "IA aplicada",
    "automatización de procesos",
    "automatización",
    "auditoría tecnológica",
    "consultoría tecnológica",
    "consultoría de software",
    "desarrollo de sistemas",
    "sistemas a medida",
    "aplicaciones web",
    "páginas web",
    "proyectos tecnológicos",
    "servicios tecnológicos",
    "desarrollo de software Lima",
    "desarrollo web Lima",
    "tecnología Perú",
    "software Perú",
    "soluciones tecnológicas Perú",
  ],
});

export default function ContactoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}