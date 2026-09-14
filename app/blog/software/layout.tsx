import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title:
    "Construir Software Pensando Más Allá del Código | DevPass",
  description:
    "Descubre por qué construir software profesional implica mucho más que escribir código: análisis del problema, arquitectura, calidad, mantenibilidad, deuda técnica y evolución.",
  path: "/blog/software",
  keywords: [
    "construir software",
    "desarrollo de software",
    "ingeniería de software",
    "software profesional",
    "desarrollo de software profesional",
    "pensar más allá del código",
    "código y arquitectura",
    "arquitectura de software",
    "diseño de software",
    "diseño de sistemas",
    "análisis de requisitos",
    "requisitos de software",
    "calidad de software",
    "calidad del software",
    "mantenibilidad",
    "testabilidad",
    "deuda técnica",
    "technical debt",
    "software escalable",
    "software mantenible",
    "software evolutivo",
    "sistemas de software",
    "desarrollo de sistemas",
    "arquitectura antes que implementación",
    "buenas prácticas de desarrollo",
    "decisiones técnicas",
    "solución de problemas",
    "desarrollador de software",
    "software engineering",
    "software architecture",
    "DevPass",
  ],
});

export default function SoftwareLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}