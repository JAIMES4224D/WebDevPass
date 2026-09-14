import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Diagnóstico Básico de Redes en Linux | DevPass",
  description:
    "Guía práctica para diagnosticar redes en Linux desde la terminal: interfaces, direcciones IP, rutas, conectividad, puertos, DNS y servicios HTTP.",
  path: "/notes/diagnostico-redes-linux",
  keywords: [
    "diagnóstico de redes Linux",
    "diagnostico de redes en Linux",
    "diagnóstico de red",
    "redes en Linux",
    "networking Linux",
    "Linux networking",
    "comandos de redes Linux",
    "comandos Linux para redes",
    "comandos de networking",
    "ip addr",
    "ip route",
    "ping",
    "traceroute",
    "ss -tulpn",
    "curl",
    "resolvectl",
    "DNS Linux",
    "puertos Linux",
    "interfaces de red Linux",
    "conectividad Linux",
    "tabla de rutas Linux",
    "diagnóstico de conectividad",
    "diagnóstico DNS",
    "servicios de red Linux",
    "HTTP Linux",
    "terminal Linux",
    "administración de redes",
    "administración Linux",
    "DevPass",
  ],
});

export default function DiagnosticoRedesLinuxLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}