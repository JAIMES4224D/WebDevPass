import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Transformación Digital",
  description:
    "Transformación digital para modernizar procesos, organizar información, conectar sistemas y ayudar a las organizaciones a evolucionar con tecnología.",
  path: "/soluciones/transformacion-digital",
  keywords: [
    "transformación digital",
    "transformación digital empresarial",
    "digitalización de procesos",
    "modernización de sistemas",
    "digitalización empresarial",
    "automatización de procesos",
    "integración de sistemas",
    "modernización tecnológica",
    "sistemas empresariales",
    "gestión de información",
    "tecnología empresarial",
    "transformación digital Perú",
  ],
});

export default function TransformacionDigitalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}