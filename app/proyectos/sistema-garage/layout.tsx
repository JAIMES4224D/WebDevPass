import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "SistemaGarage | Sistema de Gestión para Garajes y Estacionamientos",
  description:
    "SistemaGarage: aplicación de escritorio desarrollada con C# y Windows Forms para gestionar vehículos, entradas, salidas, permanencia, cobros y reportes mediante SQL Server y Excel.",
  path: "/proyectos/sistema-garage",
  keywords: [
    "SistemaGarage",
    "Sistema Garage",
    "sistema de gestión de garajes",
    "sistema para estacionamientos",
    "software para estacionamientos",
    "gestión de estacionamientos",
    "gestión de vehículos",
    "control de vehículos",
    "registro de vehículos",
    "control de entradas y salidas",
    "control de estacionamiento",
    "cálculo de permanencia",
    "cálculo de tarifas",
    "reportes financieros",
    "exportación Excel",
    "C#",
    "Windows Forms",
    ".NET Framework",
    "SQL Server",
    "ADO.NET",
    "Excel Interop",
    "aplicación de escritorio",
    "software empresarial",
    "sistema de garaje",
    "proyecto C#",
  ],
});

export default function SistemaGarageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}