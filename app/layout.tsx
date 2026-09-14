import type { Metadata } from "next";

import { Inter, Poppins } from "next/font/google";

import "./globals.css";

import { createMetadata } from "@/lib/seo/metadata";
import {
  createOrganizationSchema,
  createWebSiteSchema,
} from "@/lib/seo/schema";

import JsonLd from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: "DevPass",
  description:
    "DevPass: tecnología, desarrollo de software, inteligencia artificial, automatización, proyectos y soluciones digitales.",
  path: "/",
  keywords: [
    "DevPass",
    "tecnología",
    "desarrollo de software",
    "desarrollo web",
    "inteligencia artificial",
    "programación",
    "ingeniería de software",
    "automatización",
    "soluciones digitales",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = createOrganizationSchema();
  const websiteSchema = createWebSiteSchema();

  return (
    <html lang="es">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <JsonLd
          data={[organizationSchema, websiteSchema]}
        />

        {children}
      </body>
    </html>
  );
}