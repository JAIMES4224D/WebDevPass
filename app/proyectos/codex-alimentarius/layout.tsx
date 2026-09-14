import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Codex Digital Alimentarius | Digitalización y Consulta Web",
  description:
    "Codex Digital Alimentarius: proyecto de digitalización y estructuración de información mediante Python y JSON para facilitar la consulta del Codex Alimentarius a través de una aplicación web.",
  path: "/proyectos/codex-alimentarius",
  keywords: [
    "Codex Digital Alimentarius",
    "Codex Alimentarius",
    "digitalización de documentos",
    "digitalización de información",
    "procesamiento de documentos",
    "extracción de información",
    "estructuración de datos",
    "Python",
    "JSON",
    "React",
    "Vue",
    "Next.js",
    "aplicación web",
    "consulta de información",
    "software de digitalización",
    "proyecto de software",
    "desarrollo web Perú",
  ],
});

export default function CodexAlimentariusLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}