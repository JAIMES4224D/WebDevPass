import type { Metadata } from "next";
import { createServiceMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createServiceMetadata({
  title: "Desarrollo Web Profesional y a Medida | DevPass",
  description:
    "Desarrollo de sitios web y aplicaciones web profesionales, rápidas, escalables y adaptadas a las necesidades de cada proyecto con tecnologías modernas.",
  path: "/servicios/desarrollo-web",
  keywords: [
    "desarrollo web",
    "desarrollo web profesional",
    "desarrollo web a medida",
    "páginas web",
    "sitios web",
    "aplicaciones web",
    "desarrollo de aplicaciones web",
    "web a medida",
    "software web",
    "desarrollo frontend",
    "desarrollo backend",
    "desarrollo Full Stack",
    "Full Stack",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "interfaces web",
    "diseño y desarrollo web",
    "sitios web empresariales",
    "páginas web empresariales",
    "desarrollo web para empresas",
    "soluciones web",
    "desarrollo de software",
    "software a medida",
    "desarrollo web Perú",
    "desarrollo web Lima",
    "DevPass",
  ],
});

export default function DesarrolloWebLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}