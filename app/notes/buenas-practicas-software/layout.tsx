import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Buenas Prácticas para Proyectos de Software | DevPass",
  description:
    "Apuntes sobre buenas prácticas para proyectos de software: organización, claridad del código, responsabilidades, control de versiones, pruebas, seguridad y mantenimiento.",
  path: "/notes/buenas-practicas-software",
  keywords: [
    "buenas prácticas de software",
    "buenas prácticas para proyectos de software",
    "buenas prácticas de programación",
    "desarrollo de software",
    "ingeniería de software",
    "software engineering",
    "calidad de software",
    "código limpio",
    "clean code",
    "organización del código",
    "mantenimiento de software",
    "mantenibilidad",
    "arquitectura de software",
    "responsabilidad única",
    "control de versiones",
    "Git",
    "testing",
    "pruebas de software",
    "seguridad en el desarrollo",
    "validación de entradas",
    "deuda técnica",
    "desarrollo seguro",
    "software mantenible",
    "DevPass",
  ],
});

export default function BuenasPracticasSoftwareLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}