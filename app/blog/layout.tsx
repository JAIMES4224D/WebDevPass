import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Blog de Tecnología, IA y Desarrollo de Software | DevPass",
  description:
    "Insights de DevPass sobre desarrollo de software, inteligencia artificial, testing, QA, sistemas, automatización, arquitectura y tecnología aplicada.",
  path: "/blog",
  keywords: [
    "DevPass blog",
    "blog de tecnología",
    "blog de desarrollo de software",
    "blog de programación",
    "desarrollo de software",
    "ingeniería de software",
    "inteligencia artificial",
    "IA aplicada",
    "inteligencia artificial aplicada al desarrollo",
    "testing",
    "QA",
    "testing con IA",
    "agentes autónomos",
    "agentes de IA",
    "automatización",
    "automatización de procesos",
    "arquitectura de software",
    "sistemas",
    "infraestructura",
    "data science",
    "datos",
    "tecnología",
    "programación",
    "machine learning",
    "desarrollo web",
  ],
});

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}