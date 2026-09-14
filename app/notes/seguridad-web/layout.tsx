import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Principios Básicos de Seguridad Web | DevPass",
  description:
    "Guía práctica sobre los principios fundamentales de seguridad web: HTTPS, credenciales, control de acceso, validación de entradas, secretos y reducción de la superficie de ataque.",
  path: "/notes/seguridad-web",
  keywords: [
    "seguridad web",
    "seguridad web básica",
    "principios de seguridad web",
    "seguridad de aplicaciones web",
    "web security",
    "seguridad informática",
    "ciberseguridad",
    "desarrollo seguro",
    "secure development",
    "secure software development",
    "HTTPS",
    "SSL TLS",
    "protección de credenciales",
    "gestión de secretos",
    "variables de entorno",
    "control de acceso",
    "autenticación",
    "autorización",
    "autenticación vs autorización",
    "validación de entradas",
    "validación en servidor",
    "SQL Injection",
    "SQL Injection prevención",
    "consultas SQL parametrizadas",
    "seguridad backend",
    "seguridad frontend",
    "seguridad de APIs",
    "seguridad de aplicaciones",
    "OWASP",
    "superficie de ataque",
    "cookies seguras",
    "logs seguros",
    "dependencias seguras",
    "DevPass",
  ],
});

export default function SeguridadWebLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}