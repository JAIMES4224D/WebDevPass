import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "SIGESAPOL | Auditoría de Conectividad de Red",
  description:
    "SIGESAPOL: proyecto de auditoría técnica de conectividad de red realizado desde Debian GNU/Linux 13, utilizando herramientas como Nmap, Bash, cURL, DNS, Ping, Traceroute y htop.",
  path: "/proyectos/sigesapol",
  keywords: [
    "SIGESAPOL",
    "auditoría SIGESAPOL",
    "auditoría de red",
    "auditoría de conectividad",
    "auditoría tecnológica",
    "seguridad de redes",
    "análisis de infraestructura",
    "Nmap",
    "Debian GNU/Linux",
    "Bash",
    "Apache",
    "Laravel",
    "OpenSSL",
    "DNS",
    "Traceroute",
    "cURL",
    "Linux",
    "sistema distribuido",
    "auditoría informática Perú",
  ],
});

export default function SigesapolLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}