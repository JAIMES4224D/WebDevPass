import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "DevPass Converter | Convertidor de Audio con Python",
  description:
    "DevPass Converter: aplicación de escritorio desarrollada con Python para descargar y convertir contenido de YouTube a MP3, utilizando yt-dlp, FFmpeg, CustomTkinter y PyInstaller.",
  path: "/proyectos/convertidor",
  keywords: [
    "DevPass Converter",
    "convertidor de audio",
    "convertidor MP3",
    "convertidor de YouTube",
    "YouTube a MP3",
    "descargar audio",
    "Python",
    "Python 3.13",
    "yt-dlp",
    "FFmpeg",
    "FFprobe",
    "CustomTkinter",
    "Tkinter",
    "PyInstaller",
    "Threading",
    "aplicación de escritorio",
    "software multimedia",
    "aplicación portable",
    "proyecto Python",
    "desarrollo de software",
  ],
});

export default function ConvertidorLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}