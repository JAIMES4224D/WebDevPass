import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Arquitectura Antes que Código | DevPass",
  description:
    "Apuntes sobre arquitectura de software y diseño de sistemas: entender el problema, definir flujos, separar responsabilidades, diseñar datos, conexiones y seguridad antes de programar.",
  path: "/notes/arquitectura-antes-codigo",
  keywords: [
    "arquitectura de software",
    "arquitectura antes que código",
    "arquitectura antes del código",
    "diseño de sistemas",
    "diseño de software",
    "software architecture",
    "system architecture",
    "ingeniería de software",
    "desarrollo de software",
    "arquitectura de sistemas",
    "diseño de aplicaciones",
    "componentes de software",
    "separación de responsabilidades",
    "responsabilidad de componentes",
    "capas de software",
    "arquitectura por capas",
    "interfaz",
    "API",
    "lógica de negocio",
    "base de datos",
    "infraestructura",
    "diseño de bases de datos",
    "modelo de datos",
    "relaciones de datos",
    "diseño de APIs",
    "seguridad desde el diseño",
    "autenticación",
    "autorización",
    "flujo de trabajo de software",
    "diseño antes de programar",
    "fundamentos de arquitectura de software",
    "sistemas mantenibles",
    "software mantenible",
    "DevPass",
  ],
});

export default function ArquitecturaAntesCodigoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}