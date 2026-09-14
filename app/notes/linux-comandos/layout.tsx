import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Comandos Linux que Uso con Frecuencia | DevPass",
  description:
    "Colección práctica de comandos Linux para trabajar con archivos, procesos, memoria, almacenamiento, servicios, red, conectividad y herramientas HTTP desde la terminal.",
  path: "/notes/linux-comandos",
  keywords: [
    "comandos Linux",
    "comandos Linux básicos",
    "comandos Linux esenciales",
    "comandos de terminal Linux",
    "terminal Linux",
    "Linux",
    "Linux para desarrolladores",
    "administración Linux",
    "administración de sistemas Linux",
    "navegación Linux",
    "archivos Linux",
    "procesos Linux",
    "monitorización Linux",
    "memoria RAM Linux",
    "espacio en disco Linux",
    "redes Linux",
    "networking Linux",
    "diagnóstico de redes Linux",
    "puertos Linux",
    "servicios Linux",
    "systemctl",
    "journalctl",
    "curl",
    "wget",
    "terminal",
    "DevPass",
  ],
});

export default function LinuxCommandsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}