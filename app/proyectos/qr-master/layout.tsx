import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "QR Master Pro | Generador de Códigos QR con Python",
  description:
    "QR Master Pro: generador de códigos QR desarrollado con Python, Tkinter, Pillow y qrcode, con personalización visual, vista previa en tiempo real, exportación PNG, CLI y soporte para impresión.",
  path: "/proyectos/qr-master",
  keywords: [
    "QR Master Pro",
    "generador de códigos QR",
    "generador QR",
    "crear códigos QR",
    "códigos QR personalizados",
    "QR personalizado",
    "generador QR con Python",
    "Python QR",
    "QR para impresión",
    "QR alta resolución",
    "QR PNG",
    "QR con logo",
    "personalización de códigos QR",
    "vista previa QR",
    "QR Wi-Fi",
    "QR vCard",
    "QR SMS",
    "QR email",
    "QR ubicación",
    "QR eventos",
    "QR URL",
    "QR CLI",
    "corrección de errores QR",
    "QR nivel H",
    "Tkinter",
    "Pillow",
    "qrcode Python",
    "tkinterdnd2",
    "Python 3.8",
    "aplicación de escritorio",
    "herramienta de diseño QR",
    "software para generar QR",
  ],
});

export default function QRMasterLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}