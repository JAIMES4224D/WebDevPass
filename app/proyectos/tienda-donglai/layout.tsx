import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Tienda Web DonGlai LED | E-Commerce con Java EE y MySQL",
  description:
    "Tienda Web DonGlai LED: plataforma e-commerce empresarial desarrollada con Java EE, JSP, JSTL, MySQL 8, MVC y Apache Tomcat, con gestión de productos, usuarios, proveedores, inventario y seguridad.",
  path: "/proyectos/tienda-donglai",
  keywords: [
    "Tienda Web DonGlai LED",
    "DonGlai LED",
    "tienda online",
    "tienda web",
    "e-commerce",
    "ecommerce",
    "e-commerce empresarial",
    "plataforma e-commerce",
    "sistema e-commerce",
    "software e-commerce",
    "tienda online con Java",
    "e-commerce con Java EE",
    "Java EE",
    "Java Enterprise Edition",
    "JSP",
    "JSTL",
    "Servlets",
    "MVC",
    "Modelo Vista Controlador",
    "Apache Tomcat",
    "MySQL 8",
    "JDBC",
    "Bootstrap 5.3",
    "JavaScript ES6",
    "HTML5",
    "CSS3",
    "Git",
    "GitHub",
    "gestión de productos",
    "gestión de inventario",
    "gestión de usuarios",
    "gestión de proveedores",
    "gestión de categorías",
    "sistema de usuarios y roles",
    "control de acceso",
    "RBAC",
    "JWT",
    "seguridad web",
    "CRUD empresarial",
    "dashboard administrativo",
    "tienda responsive",
    "desarrollo de software empresarial",
  ],
});

export default function TiendaDonglaiLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}