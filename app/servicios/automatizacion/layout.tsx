import type { Metadata } from "next";

import { createServiceMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createServiceMetadata({
  title: "Automatización de Procesos",
  description:
    "Automatización de procesos, integración de sistemas e inteligencia artificial para convertir tareas manuales en flujos digitales más rápidos y consistentes.",
  path: "/servicios/automatizacion",
  keywords: [
    "automatización de procesos",
    "automatización empresarial",
    "automatización de tareas",
    "automatización de sistemas",
    "automatización con IA",
    "inteligencia artificial",
    "integración de sistemas",
    "integración de APIs",
    "workflows",
    "automatización de información",
    "agentes de IA",
    "procesamiento de datos",
    "automatización Perú",
  ],
});

export default function AutomatizacionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}