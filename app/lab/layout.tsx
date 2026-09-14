import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "DevPass Lab | Experimentos de IA, Software y Sistemas",
  description:
    "DevPass Lab es un espacio de experimentación tecnológica dedicado a inteligencia artificial, automatización, agentes inteligentes, software, sistemas y prototipos.",
  path: "/lab",
  keywords: [
    "DevPass Lab",
    "DevPass laboratorio",
    "laboratorio tecnológico",
    "laboratorio de tecnología",
    "experimentos tecnológicos",
    "experimentación tecnológica",
    "prototipos de software",
    "prototipos tecnológicos",
    "inteligencia artificial",
    "IA",
    "IA aplicada",
    "agentes inteligentes",
    "agentes de IA",
    "agentes autónomos",
    "LLM",
    "RAG",
    "automatización",
    "automatización de procesos",
    "workflows",
    "APIs",
    "sistemas",
    "arquitectura de sistemas",
    "sistemas distribuidos",
    "backend",
    "Linux",
    "desarrollo de software",
    "desarrollo web",
    "software experimental",
    "investigación tecnológica",
    "Data Science",
    "ciencia de datos",
    "Python",
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Git",
    "tecnología",
    "innovación tecnológica",
    "DevPass",
  ],
});

export default function LabLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}