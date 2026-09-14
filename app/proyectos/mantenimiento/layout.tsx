import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "MantenimientoApp | Sistema de Gestión de Mantenimiento",
  description:
    "MantenimientoApp: sistema de escritorio desarrollado con Python y PyQt6 para gestionar órdenes, equipos, proveedores, catálogos, reportes y costos de mantenimiento.",
  path: "/proyectos/mantenimiento",
  keywords: [
    "MantenimientoApp",
    "sistema de mantenimiento",
    "gestión de mantenimiento",
    "gestión de costos de mantenimiento",
    "mantenimiento de equipos",
    "mantenimiento de equipos mayores",
    "software de mantenimiento",
    "sistema de gestión",
    "aplicación de escritorio",
    "Python",
    "PyQt6",
    "SQLite",
    "Matplotlib",
    "Pandas",
    "OpenPyXL",
    "bcrypt",
    "NumPy",
    "gestión de órdenes",
    "gestión de proveedores",
    "reportes de mantenimiento",
    "software empresarial",
    "proyecto de software",
  ],
});

export default function MantenimientoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}