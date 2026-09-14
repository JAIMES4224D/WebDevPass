import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Casos de Éxito y Proyectos",
  description:
    "Conoce casos y proyectos de DevPass en desarrollo de software, auditoría tecnológica, infraestructura, automatización, integración y soluciones digitales para problemas reales.",
  path: "/casos",
  keywords: [
    "casos de éxito",
    "casos tecnológicos",
    "proyectos tecnológicos",
    "proyectos de software",
    "desarrollo de software",
    "auditoría tecnológica",
    "infraestructura tecnológica",
    "automatización",
    "integración de sistemas",
    "soluciones digitales",
    "software a medida",
    "desarrollo web",
    "proyectos de tecnología",
    "casos de software Perú",
    "proyectos tecnológicos Perú",
  ],
});

export default function CasosLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}