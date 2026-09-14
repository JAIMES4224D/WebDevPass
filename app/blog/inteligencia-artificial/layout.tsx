import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title:
    "Inteligencia Artificial Aplicada al Desarrollo | DevPass",
  description:
    "Descubre cómo la inteligencia artificial está transformando el desarrollo de software mediante generación de código, debugging, testing, documentación, automatización y agentes de IA.",
  path: "/blog/inteligencia-artificial",
  keywords: [
    "inteligencia artificial aplicada al desarrollo",
    "inteligencia artificial",
    "IA aplicada al desarrollo",
    "IA para desarrolladores",
    "inteligencia artificial para programadores",
    "IA en desarrollo de software",
    "desarrollo de software con IA",
    "desarrollo de software",
    "programación con IA",
    "programación asistida por IA",
    "generación de código con IA",
    "generación automática de código",
    "AI coding",
    "AI assisted coding",
    "asistentes de programación",
    "copilotos de código",
    "debugging con IA",
    "debugging asistido por IA",
    "testing con IA",
    "testing de software",
    "automatización de pruebas",
    "documentación de software con IA",
    "agentes de IA",
    "agentes autónomos",
    "AI agents",
    "agentic AI",
    "automatización con IA",
    "ingeniería de software",
    "calidad de software",
    "software engineering",
    "NIST AI RMF",
    "GenAI",
    "inteligencia artificial generativa",
    "IA generativa",
    "DevPass",
  ],
});

export default function InteligenciaArtificialLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}