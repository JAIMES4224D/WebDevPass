import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Proyectos de Software y Tecnología",
  description:
    "Explora los proyectos de DevPass en desarrollo de software, aplicaciones web, auditoría tecnológica, digitalización, automatización, ciencia de datos y soluciones digitales.",
  path: "/proyectos",
  keywords: [
    "proyectos de software",
    "proyectos tecnológicos",
    "desarrollo de software",
    "proyectos web",
    "aplicaciones web",
    "software a medida",
    "auditoría tecnológica",
    "digitalización",
    "automatización",
    "ciencia de datos",
    "inteligencia artificial",
    "e-commerce",
    "sistemas de gestión",
    "proyectos de programación",
    "proyectos de tecnología Perú",
    "desarrollo de software Perú",
  ],
});

export default function ProyectosLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}