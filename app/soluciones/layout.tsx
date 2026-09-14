import type { Metadata } from "next";

import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Soluciones Digitales",
  description:
    "Soluciones digitales para mejorar procesos, conectar sistemas, aprovechar la inteligencia artificial y convertir la tecnología en una herramienta de crecimiento.",
  path: "/soluciones",
  keywords: [
    "soluciones digitales",
    "transformación digital",
    "inteligencia artificial",
    "automatización",
    "integración de sistemas",
    "soluciones tecnológicas",
    "tecnología empresarial",
    "digitalización de procesos",
    "IA aplicada",
    "integración de APIs",
    "soluciones digitales Perú",
  ],
});

export default function SolucionesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}