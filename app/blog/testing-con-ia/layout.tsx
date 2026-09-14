import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title:
    "Testing con IA: Cómo Están Cambiando el QA los Agentes Autónomos | DevPass",
  description:
    "Descubre cómo la inteligencia artificial y los agentes autónomos están transformando el testing de software, desde la generación de pruebas hasta el análisis de resultados, regresión y evaluación de sistemas de IA.",
  path: "/blog/testing-con-ia",
  keywords: [
    "testing con IA",
    "testing con inteligencia artificial",
    "IA en testing",
    "inteligencia artificial en QA",
    "QA con IA",
    "Quality Assurance",
    "testing de software",
    "pruebas de software",
    "automatización de pruebas",
    "testing automatizado",
    "agentes autónomos",
    "agentes de IA",
    "agentes autónomos en QA",
    "AI agents",
    "agentic AI",
    "agentic AI testing",
    "QA agentic",
    "testing agentic",
    "software testing",
    "software quality assurance",
    "generación de casos de prueba",
    "generación de pruebas con IA",
    "análisis de defectos",
    "regresión de software",
    "pruebas de seguridad",
    "testing de sistemas de IA",
    "testing de IA generativa",
    "GenAI testing",
    "ISTQB CT-AI",
    "ISTQB CT-GenAI",
    "NIST AI RMF",
    "ingeniería de software",
    "calidad de software",
    "DevPass",
  ],
});

export default function TestingConIALayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}