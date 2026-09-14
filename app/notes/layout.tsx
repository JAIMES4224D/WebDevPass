import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Notes | Apuntes de Tecnología, Desarrollo, IA y Linux | DevPass",
  description:
    "Notes de DevPass: apuntes prácticos sobre desarrollo de software, inteligencia artificial, Linux, datos, networking, seguridad, herramientas y arquitectura de sistemas.",
  path: "/notes",
  keywords: [
    "DevPass Notes",
    "notes de tecnología",
    "apuntes de tecnología",
    "apuntes de programación",
    "notas de programación",
    "desarrollo de software",
    "ingeniería de software",
    "buenas prácticas de software",
    "arquitectura de software",
    "inteligencia artificial",
    "agentes de inteligencia artificial",
    "IA",
    "Linux",
    "comandos Linux",
    "redes en Linux",
    "networking",
    "seguridad web",
    "seguridad informática",
    "TF-IDF",
    "similitud coseno",
    "procesamiento de lenguaje natural",
    "NLP",
    "Git",
    "herramientas de desarrollo",
    "stack tecnológico",
    "automatización",
    "sistemas",
    "programación",
    "tecnología",
  ],
});

export default function NotesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}