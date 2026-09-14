import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Auditoría Tecnológica",
  description:
    "Auditoría tecnológica para analizar aplicaciones, infraestructura, seguridad, arquitectura y datos, identificar riesgos y obtener recomendaciones técnicas para mejorar el entorno tecnológico.",
  path: "/auditoria",
  keywords: [
    "auditoría tecnológica",
    "auditoría informática",
    "auditoría de sistemas",
    "auditoría de software",
    "auditoría de infraestructura",
    "auditoría de seguridad",
    "seguridad informática",
    "análisis tecnológico",
    "evaluación tecnológica",
    "diagnóstico tecnológico",
    "auditoría de aplicaciones",
    "auditoría de infraestructura",
    "análisis de arquitectura",
    "análisis de rendimiento",
    "auditoría tecnológica Perú",
  ],
});

export default function AuditoriaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}