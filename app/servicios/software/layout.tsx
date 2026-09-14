import type { Metadata } from "next";

import { createServiceMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createServiceMetadata({
  title: "Software a Medida",
  description:
    "Desarrollo de sistemas y aplicaciones a medida para digitalizar procesos, centralizar información y construir soluciones adaptadas a las necesidades de cada organización.",
  path: "/servicios/software",
  keywords: [
    "software a medida",
    "desarrollo de software",
    "sistemas personalizados",
    "sistemas empresariales",
    "aplicaciones empresariales",
    "desarrollo de sistemas",
    "software personalizado",
    "sistemas de gestión",
    "dashboards",
    "paneles administrativos",
    "integración de APIs",
    "bases de datos",
    "software empresarial",
    "desarrollo de software Perú",
  ],
});

export default function SoftwareLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}