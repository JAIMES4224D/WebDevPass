import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Inteligencia Artificial",
  description:
    "Soluciones de inteligencia artificial para analizar información, asistir usuarios, automatizar tareas e integrar capacidades inteligentes en aplicaciones y procesos.",
  path: "/soluciones/ia",
  keywords: [
    "inteligencia artificial",
    "IA",
    "soluciones de inteligencia artificial",
    "IA aplicada",
    "agentes de IA",
    "asistentes inteligentes",
    "automatización con IA",
    "IA para empresas",
    "inteligencia artificial para empresas",
    "procesamiento de documentos",
    "RAG",
    "LLM",
    "embeddings",
    "agentes inteligentes",
    "soluciones IA Perú",
  ],
});

export default function InteligenciaArtificialLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}