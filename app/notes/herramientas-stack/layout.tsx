import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Herramientas que Forman Parte de Mi Stack | DevPass",
  description:
    "Conoce las herramientas y tecnologías que forman parte del stack de DevPass: Python, TypeScript, JavaScript, React, Next.js, Node.js, C#, SQL, Linux, Git, inteligencia artificial y Data Science.",
  path: "/notes/herramientas-stack",
  keywords: [
    "stack tecnológico",
    "stack de desarrollo",
    "stack tecnológico de DevPass",
    "herramientas de desarrollo",
    "tecnologías de desarrollo",
    "lenguajes de programación",
    "frameworks de desarrollo",
    "Python",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "C#",
    "SQL",
    "Linux",
    "Git",
    "GitHub",
    "inteligencia artificial",
    "IA",
    "Data Science",
    "ciencia de datos",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Jupyter",
    "desarrollo web",
    "desarrollo frontend",
    "desarrollo backend",
    "desarrollo full stack",
    "automatización",
    "terminal Linux",
    "control de versiones",
    "DevPass",
  ],
});

export default function HerramientasStackLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}