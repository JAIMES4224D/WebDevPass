import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Sistema de Telemedicina | Java, MySQL y MVC",
  description:
    "Sistema de telemedicina desarrollado con Java y Java Swing, utilizando arquitectura MVC, MySQL y JDBC para gestionar pacientes, médicos, citas, historial médico, comunicación y administración.",
  path: "/proyectos/telemedicina",
  keywords: [
    "sistema de telemedicina",
    "software de telemedicina",
    "plataforma de telemedicina",
    "telemedicina con Java",
    "sistema médico",
    "sistema de gestión médica",
    "software para clínicas",
    "software para hospitales",
    "gestión de pacientes",
    "gestión de médicos",
    "gestión de citas médicas",
    "agendamiento de citas",
    "historial médico digital",
    "consultas virtuales",
    "comunicación médico paciente",
    "sistema multirol",
    "Java",
    "Java SE",
    "Java Swing",
    "MySQL",
    "JDBC",
    "MVC",
    "NetBeans",
    "aplicación de escritorio",
    "software médico",
    "sistema de salud",
    "proyecto Java",
    "proyecto de software",
    "desarrollo de software médico",
  ],
});

export default function TelemedicinaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}