import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Generate Script SQL | Generador de SQL con Python",
  description:
    "Generate Script SQL: herramienta de escritorio desarrollada en Python para generar sentencias SQL mediante una interfaz gráfica, con soporte para MySQL, DDL, DML, procedimientos, vistas y triggers.",
  path: "/proyectos/generate-sql",
  keywords: [
    "Generate Script SQL",
    "Generate-Script-SQL",
    "generador SQL",
    "generador de scripts SQL",
    "generador SQL MySQL",
    "generador de consultas SQL",
    "Python",
    "Python 3",
    "Tkinter",
    "CustomTkinter",
    "MySQL",
    "DDL",
    "DML",
    "CREATE DATABASE",
    "CREATE TABLE",
    "INSERT",
    "UPDATE",
    "DELETE",
    "SELECT",
    "SQL Procedure",
    "SQL View",
    "SQL Trigger",
    "procedimientos almacenados",
    "vistas SQL",
    "triggers SQL",
    "aplicación de escritorio",
    "herramienta para bases de datos",
    "proyecto Python",
    "software SQL",
  ],
});

export default function GenerateSQLLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}