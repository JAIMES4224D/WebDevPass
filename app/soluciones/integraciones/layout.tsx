import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Integraciones de Sistemas",
  description:
    "Integramos aplicaciones, APIs, bases de datos y servicios para conectar sistemas, sincronizar información y automatizar procesos dentro de un ecosistema tecnológico.",
  path: "/soluciones/integraciones",
  keywords: [
    "integración de sistemas",
    "integraciones",
    "integración de APIs",
    "APIs",
    "integración de bases de datos",
    "integración de aplicaciones",
    "integración de software",
    "automatización de procesos",
    "sincronización de datos",
    "webhooks",
    "REST API",
    "integración de servicios",
    "sistemas conectados",
    "integraciones tecnológicas",
    "integración de sistemas Perú",
  ],
});

export default function IntegracionesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}