import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Videos de Tecnología, IA, Linux y Desarrollo | DevPass",
  description:
    "Videos de DevPass sobre desarrollo de software, inteligencia artificial, Linux, Windows, programación, tecnología y tutoriales prácticos.",
  path: "/videos",
  keywords: [
    "videos DevPass",
    "DevPass videos",
    "videos de tecnología",
    "videos de programación",
    "tutoriales de programación",
    "tutoriales de tecnología",
    "desarrollo de software",
    "desarrollo web",
    "programación",
    "inteligencia artificial",
    "IA",
    "tutoriales de inteligencia artificial",
    "Linux",
    "tutoriales Linux",
    "Debian",
    "Windows",
    "Windows 10",
    "Rufus",
    "USB booteable",
    "Python",
    "FizzBuzz Python",
    "Java",
    "MySQL",
    "conexión Java MySQL",
    "Gemini CLI",
    "IA desde terminal",
    "terminal",
    "tecnología",
    "hardware",
    "memoria RAM",
    "soluciones Windows",
    "Git",
    "contenido técnico",
    "tutoriales tecnológicos",
    "YouTube DevPass",
    "TikTok DevPass",
  ],
});

export default function VideosLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}