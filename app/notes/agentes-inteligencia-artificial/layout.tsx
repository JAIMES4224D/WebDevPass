import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Agentes de Inteligencia Artificial | DevPass",
  description:
    "Introducción práctica a los agentes de inteligencia artificial: qué son, cómo funcionan, sus capacidades, arquitectura, herramientas, aplicaciones y principales riesgos.",
  path: "/notes/agentes-inteligencia-artificial",
  keywords: [
    "agentes de inteligencia artificial",
    "agentes de IA",
    "agentes IA",
    "inteligencia artificial",
    "AI agents",
    "agentes autónomos",
    "sistemas agénticos",
    "agentic AI",
    "arquitectura de agentes de IA",
    "herramientas para agentes de IA",
    "IA con herramientas",
    "IA y APIs",
    "IA y bases de datos",
    "agente vs chatbot",
    "chatbot vs agente de IA",
    "sistemas de inteligencia artificial",
    "automatización con IA",
    "desarrollo con IA",
    "ingeniería de software",
    "seguridad en agentes de IA",
    "riesgos de agentes de IA",
    "DevPass",
  ],
});

export default function AgentesInteligenciaArtificialLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}