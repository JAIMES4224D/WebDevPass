"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createBreadcrumbSchema,
  createSoftwareApplicationSchema,
} from "@/lib/seo/schema";

const GITHUB =
  "https://github.com/JAIMES4224D/App_Mantenimiento_de_Equipos_Mayores";

const images = [
  {
    src: "/images/proyectos/mantenimiento/Dashboard.png",
    alt: "Dashboard de MantenimientoApp",
    title: "Dashboard",
    description:
      "KPIs y gráficos para visualizar el estado general de la gestión.",
  },
  {
    src: "/images/proyectos/mantenimiento/Login.png",
    alt: "Login de MantenimientoApp",
    title: "Inicio de sesión",
    description:
      "Acceso al sistema mediante autenticación de usuarios.",
  },
  {
    src: "/images/proyectos/mantenimiento/Orden_compra.png",
    alt: "Módulo de órdenes de compra",
    title: "Órdenes",
    description:
      "Ingreso, búsqueda, edición y eliminación de órdenes.",
  },
  {
    src: "/images/proyectos/mantenimiento/Catalogo.png",
    alt: "Módulo de catálogos",
    title: "Catálogos",
    description:
      "Gestión de obras, equipos, proveedores y tipos de mantenimiento.",
  },
  {
    src: "/images/proyectos/mantenimiento/Administracion.png",
    alt: "Módulo de administración",
    title: "Administración",
    description:
      "Gestión de usuarios, roles y actividad del sistema.",
  },
  {
    src: "/images/proyectos/mantenimiento/Reporte_anual.png",
    alt: "Reporte anual",
    title: "Reporte anual",
    description:
      "Visualización de información consolidada por año.",
  },
  {
    src: "/images/proyectos/mantenimiento/Reporte_mensual.png",
    alt: "Reporte mensual",
    title: "Reporte mensual",
    description:
      "Análisis de la actividad de mantenimiento por mes.",
  },
  {
    src: "/images/proyectos/mantenimiento/Reporte_trimestral.png",
    alt: "Reporte trimestral",
    title: "Reporte trimestral",
    description:
      "Seguimiento de resultados agrupados por trimestre.",
  },
  {
    src: "/images/proyectos/mantenimiento/Reporte_semestral.png",
    alt: "Reporte semestral",
    title: "Reporte semestral",
    description:
      "Análisis de períodos semestrales.",
  },
  {
    src: "/images/proyectos/mantenimiento/Reporte_tipo.png",
    alt: "Reporte por tipo",
    title: "Reporte por tipo",
    description:
      "Información agrupada según el tipo de mantenimiento.",
  },
  {
    src: "/images/proyectos/mantenimiento/Reporte_provedores.png",
    alt: "Reporte de proveedores",
    title: "Reporte de proveedores",
    description:
      "Visualización de información relacionada con proveedores.",
  },
  {
    src: "/images/proyectos/mantenimiento/Reporte_comparativo.png",
    alt: "Reporte comparativo",
    title: "Reporte comparativo",
    description:
      "Comparación visual de diferentes períodos y categorías.",
  },
];

const modules = [
  {
    number: "01",
    title: "Dashboard",
    description:
      "Panel principal con KPIs y gráficos de resumen para obtener una visión rápida de la gestión.",
    features: [
      "KPIs",
      "Gráficos",
      "Resumen operativo",
      "Visualización de datos",
    ],
  },
  {
    number: "02",
    title: "Órdenes",
    description:
      "Módulo para registrar, editar, buscar y eliminar órdenes relacionadas con el mantenimiento.",
    features: [
      "Ingreso de órdenes",
      "Edición",
      "Búsqueda",
      "Eliminación",
    ],
  },
  {
    number: "03",
    title: "Reportes",
    description:
      "Conjunto de reportes orientados al análisis de los costos y actividad del mantenimiento.",
    features: [
      "Anual",
      "Mensual",
      "Trimestral",
      "Semestral",
      "Por tipo",
      "Proveedores",
    ],
  },
  {
    number: "04",
    title: "Catálogos",
    description:
      "Administración de la información base utilizada por el sistema.",
    features: [
      "Obras",
      "Equipos",
      "Proveedores",
      "Tipos de mantenimiento",
    ],
  },
  {
    number: "05",
    title: "Administración",
    description:
      "Módulo reservado para la gestión de usuarios, roles y registro de actividad.",
    features: [
      "Usuarios",
      "Roles",
      "Permisos",
      "Log de actividad",
    ],
  },
];

const technologies = [
  {
    category: "LENGUAJE",
    name: "Python",
    description:
      "Lenguaje principal utilizado para desarrollar la aplicación y su lógica.",
  },
  {
    category: "INTERFAZ",
    name: "PyQt6",
    description:
      "Framework utilizado para construir la interfaz gráfica de escritorio.",
  },
  {
    category: "DATABASE",
    name: "SQLite",
    description:
      "Base de datos local creada automáticamente por la aplicación.",
  },
  {
    category: "VISUALIZACIÓN",
    name: "Matplotlib",
    description:
      "Biblioteca utilizada para generar gráficos y visualizaciones.",
  },
  {
    category: "DATOS",
    name: "Pandas",
    description:
      "Herramienta utilizada para trabajar y analizar información estructurada.",
  },
  {
    category: "EXCEL",
    name: "OpenPyXL",
    description:
      "Biblioteca utilizada para trabajar con archivos de Excel.",
  },
  {
    category: "SEGURIDAD",
    name: "bcrypt",
    description:
      "Biblioteca utilizada para el manejo seguro de contraseñas.",
  },
  {
    category: "CÁLCULO",
    name: "NumPy",
    description:
      "Biblioteca utilizada como soporte para operaciones numéricas.",
  },
];

const roles = [
  {
    number: "01",
    name: "admin",
    description:
      "Acceso total al sistema, incluyendo el módulo de administración.",
    access: "Acceso total",
  },
  {
    number: "02",
    name: "supervisor",
    description:
      "Acceso a reportes y catálogos, con capacidad de edición.",
    access: "Reportes + catálogos",
  },
  {
    number: "03",
    name: "operador",
    description:
      "Orientado al ingreso de órdenes y realización de consultas.",
    access: "Órdenes + consultas",
  },
];

const reportTypes = [
  "Reporte anual",
  "Reporte mensual",
  "Reporte trimestral",
  "Reporte semestral",
  "Reporte por tipo",
  "Reporte de proveedores",
  "Reporte comparativo",
];

export default function MantenimientoPage() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof images)[number] | null
  >(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  const webPageSchema = createWebPageSchema({
    name: "MantenimientoApp | Sistema de Gestión de Mantenimiento",
    description:
      "Sistema de escritorio desarrollado para gestionar órdenes, catálogos, reportes, usuarios y costos relacionados con el mantenimiento de equipos mayores.",
    path: "/proyectos/mantenimiento",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Proyectos", path: "/proyectos" },
    {
      name: "MantenimientoApp",
      path: "/proyectos/mantenimiento",
    },
  ]);

  const softwareSchema = createSoftwareApplicationSchema({
    name: "MantenimientoApp",
    description:
      "Sistema de gestión de costos de mantenimiento para equipos mayores, desarrollado con Python, PyQt6 y SQLite.",
    path: "/proyectos/mantenimiento",
  });

  return (
    <>
    <JsonLd
      data={[
        webPageSchema,
        breadcrumbSchema,
        softwareSchema,
      ]}
    />
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#020617] text-white">

        {/* =====================================================
            ATMOSPHERE
        ====================================================== */}

        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

          <div
            className="
              absolute
              left-[15%]
              top-[-280px]
              h-[700px]
              w-[700px]
              rounded-full
              bg-[#1E6BFF]/[0.035]
              blur-[170px]
            "
          />

          <div
            className="
              absolute
              bottom-[-300px]
              right-[-200px]
              h-[650px]
              w-[650px]
              rounded-full
              bg-[#3DA5FF]/[0.025]
              blur-[170px]
            "
          />

          <div
            className="absolute inset-0 opacity-[0.022]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(61,165,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(61,165,255,0.8) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

        </div>

        <div className="relative z-10">

          {/* =================================================
              HERO
          ================================================== */}

          <section
            className="
              devpass-container
              pb-20
              pt-32
              sm:pt-36
              lg:pb-28
              lg:pt-44
            "
          >

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            >

              <Link
                href="/proyectos"
                className="
                  mb-10
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  text-[#64748B]
                  transition-colors
                  hover:text-[#A7D3FF]
                "
              >
                <span>←</span>
                Volver a proyectos
              </Link>

              <div className="mb-7 flex items-center gap-3">

                <span className="h-px w-10 bg-[#3DA5FF]" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#3DA5FF]
                  "
                >
                  SOFTWARE · OPERACIONES · MANTENIMIENTO
                </span>

              </div>

              <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">

                {/* COPY */}

                <div>

                  <h1
                    className="
                      max-w-4xl
                      font-poppins
                      text-4xl
                      font-semibold
                      leading-[1.03]
                      tracking-[-0.05em]
                      sm:text-5xl
                      lg:text-[64px]
                    "
                  >
                    MantenimientoApp
                    <br />

                    <span className="devpass-gradient-text">
                      v1.0
                    </span>
                  </h1>

                  <p
                    className="
                      mt-7
                      max-w-2xl
                      text-[15px]
                      leading-8
                      text-[#7F8EA3]
                      sm:text-base
                    "
                  >
                    Sistema de gestión de costos de mantenimiento para
                    equipos mayores, diseñado para centralizar órdenes,
                    catálogos, reportes y administración dentro de una
                    aplicación de escritorio.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">

                    {[
                      "Python",
                      "PyQt6",
                      "SQLite",
                      "Matplotlib",
                      "Pandas",
                      "OpenPyXL",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-[#3DA5FF]/15
                          bg-[#0A1F3D]/50
                          px-3.5
                          py-2
                          text-[10px]
                          font-medium
                          text-[#A7D3FF]
                        "
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">

                    <a
                      href={GITHUB}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-[#1E6BFF]
                        px-6
                        py-3.5
                        text-sm
                        font-semibold
                        text-white
                        shadow-[0_10px_35px_rgba(30,107,255,0.2)]
                        transition-all
                        hover:-translate-y-0.5
                        hover:bg-[#2873ff]
                      "
                    >
                      Ver proyecto
                      <span>↗</span>
                    </a>

                    <a
                      href={`${GITHUB}/issues`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-6
                        py-3.5
                        text-sm
                        font-semibold
                        text-[#DCEBFF]
                        transition-all
                        hover:border-[#3DA5FF]/30
                        hover:bg-[#0A1F3D]
                      "
                    >
                      GitHub
                      <span>↗</span>
                    </a>

                  </div>

                </div>

                {/* HERO IMAGE */}

                <motion.button
                  type="button"
                  onClick={() => setSelectedImage(images[0])}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                  }}
                  className="
                    group
                    relative
                    aspect-[16/10]
                    cursor-zoom-in
                    overflow-hidden
                    rounded-3xl
                    border
                    border-[#3DA5FF]/15
                    bg-[#050D1A]
                    p-2
                    text-left
                    shadow-[0_30px_90px_rgba(0,0,0,0.45)]
                  "
                >

                  <div className="relative h-full overflow-hidden rounded-2xl">

                    <Image
                      src={images[0].src}
                      alt={images[0].alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-[1.035]
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#020617]/85
                        via-transparent
                        to-transparent
                      "
                    />

                    <div className="absolute bottom-5 left-5">

                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-[#A7D3FF]
                        "
                      >
                        MantenimientoApp
                      </span>

                      <p className="mt-1 text-sm font-medium text-white">
                        Dashboard
                      </p>

                    </div>

                  </div>

                </motion.button>

              </div>

            </motion.div>

          </section>

          {/* =================================================
              OVERVIEW
          ================================================== */}

          <section className="border-y border-white/[0.06] py-24">

            <div className="devpass-container">

              <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

                <div>

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#3DA5FF]
                    "
                  >
                    01 · EL SISTEMA
                  </span>

                  <h2
                    className="
                      mt-5
                      max-w-lg
                      font-poppins
                      text-3xl
                      font-semibold
                      leading-tight
                      sm:text-4xl
                    "
                  >
                    Centralizar la gestión del mantenimiento.
                  </h2>

                </div>

                <div className="space-y-6 text-[15px] leading-8 text-[#94A3B8]">

                  <p>
                    MantenimientoApp fue desarrollado como una solución para
                    gestionar información relacionada con los costos y
                    operaciones de mantenimiento de equipos mayores.
                  </p>

                  <p>
                    El sistema reúne en una sola aplicación las órdenes,
                    los catálogos, los reportes y las funciones
                    administrativas, evitando depender de diferentes
                    herramientas para cada proceso.
                  </p>

                  <p>
                    La aplicación utiliza una base de datos SQLite local que
                    se crea automáticamente, por lo que no requiere instalar
                    MySQL ni mantener un servidor de base de datos.
                  </p>

                </div>

              </div>

              <div
                className="
                  mt-20
                  grid
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.06]
                  bg-white/[0.03]
                  sm:grid-cols-3
                "
              >

                <div className="bg-[#020617] p-7">

                  <span className="font-poppins text-3xl font-semibold text-[#A7D3FF]">
                    05
                  </span>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Módulos principales
                  </p>

                </div>

                <div className="bg-[#020617] p-7">

                  <span className="font-poppins text-3xl font-semibold text-[#A7D3FF]">
                    03
                  </span>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Roles de usuario
                  </p>

                </div>

                <div className="bg-[#020617] p-7">

                  <span className="font-poppins text-3xl font-semibold text-[#A7D3FF]">
                    SQLite
                  </span>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Base de datos local
                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              MODULES
          ================================================== */}

          <section className="border-b border-white/[0.06] py-24">

            <div className="devpass-container">

              <div className="mb-14 max-w-3xl">

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#3DA5FF]
                  "
                >
                  02 · MÓDULOS
                </span>

                <h2
                  className="
                    mt-5
                    font-poppins
                    text-3xl
                    font-semibold
                    sm:text-4xl
                  "
                >
                  Todo el flujo operativo en un mismo sistema.
                </h2>

                <p className="mt-5 leading-8 text-[#94A3B8]">
                  Cada módulo responde a una parte específica de la gestión
                  de mantenimiento.
                </p>

              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                {modules.map((module, index) => (

                  <motion.article
                    key={module.number}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-70px",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="
                      group
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-[#050D1A]
                      p-7
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#3DA5FF]/20
                      hover:bg-[#071426]
                    "
                  >

                    <div className="flex items-start justify-between">

                      <span className="font-mono text-xs text-[#3DA5FF]">
                        {module.number}
                      </span>

                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#3DA5FF]/70
                          transition-all
                          group-hover:bg-[#3DA5FF]
                          group-hover:shadow-[0_0_12px_rgba(61,165,255,0.8)]
                        "
                      />

                    </div>

                    <h3 className="mt-9 font-poppins text-xl font-semibold">
                      {module.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#718096]">
                      {module.description}
                    </p>

                    <div className="mt-7 space-y-2.5 border-t border-white/[0.06] pt-6">

                      {module.features.map((feature) => (

                        <div
                          key={feature}
                          className="
                            flex
                            items-center
                            gap-3
                            text-xs
                            text-[#94A3B8]
                          "
                        >

                          <span className="h-1 w-1 shrink-0 rounded-full bg-[#3DA5FF]" />

                          {feature}

                        </div>

                      ))}

                    </div>

                  </motion.article>

                ))}

              </div>

            </div>

          </section>

          {/* =================================================
              ORDERS + CATALOGS
          ================================================== */}

          <section className="border-b border-white/[0.06] py-24">

            <div className="devpass-container">

              <div className="grid gap-5 lg:grid-cols-2">

                <div
                  className="
                    rounded-3xl
                    border
                    border-white/[0.07]
                    bg-[#050D1A]
                    p-8
                    sm:p-10
                  "
                >

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#3DA5FF]
                    "
                  >
                    ÓRDENES
                  </span>

                  <h2 className="mt-5 font-poppins text-2xl font-semibold">
                    Gestión de órdenes de mantenimiento.
                  </h2>

                  <p className="mt-5 text-sm leading-8 text-[#718096]">
                    El módulo permite centralizar el ingreso y administración
                    de las órdenes, incluyendo operaciones de edición,
                    búsqueda y eliminación.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-3">

                    {[
                      "Ingreso",
                      "Edición",
                      "Búsqueda",
                      "Eliminación",
                    ].map((item) => (

                      <div
                        key={item}
                        className="
                          rounded-xl
                          border
                          border-white/[0.06]
                          bg-[#020617]
                          px-4
                          py-3
                          text-xs
                          text-[#A7B4C8]
                        "
                      >
                        <span className="mr-2 text-[#3DA5FF]">
                          +
                        </span>

                        {item}

                      </div>

                    ))}

                  </div>

                </div>

                <div
                  className="
                    rounded-3xl
                    border
                    border-white/[0.07]
                    bg-[#050D1A]
                    p-8
                    sm:p-10
                  "
                >

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#3DA5FF]
                    "
                  >
                    CATÁLOGOS
                  </span>

                  <h2 className="mt-5 font-poppins text-2xl font-semibold">
                    Una base organizada para la operación.
                  </h2>

                  <p className="mt-5 text-sm leading-8 text-[#718096]">
                    Los catálogos permiten administrar la información de
                    referencia que utiliza el sistema para trabajar con
                    las órdenes y reportes.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-3">

                    {[
                      "Obras",
                      "Equipos",
                      "Proveedores",
                      "Tipos de mantenimiento",
                    ].map((item) => (

                      <div
                        key={item}
                        className="
                          rounded-xl
                          border
                          border-white/[0.06]
                          bg-[#020617]
                          px-4
                          py-3
                          text-xs
                          text-[#A7B4C8]
                        "
                      >

                        <span className="mr-2 text-[#3DA5FF]">
                          +
                        </span>

                        {item}

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              REPORTS
          ================================================== */}

          <section className="border-b border-white/[0.06] py-24">

            <div className="devpass-container">

              <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

                <div>

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#3DA5FF]
                    "
                  >
                    03 · REPORTES
                  </span>

                  <h2
                    className="
                      mt-5
                      font-poppins
                      text-3xl
                      font-semibold
                      leading-tight
                      sm:text-4xl
                    "
                  >
                    Convertir los datos de mantenimiento en información útil.
                  </h2>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    El sistema incorpora diferentes perspectivas para analizar
                    la información y facilitar la interpretación de los datos
                    de mantenimiento.
                  </p>

                </div>

                <div>

                  <div className="grid gap-3 sm:grid-cols-2">

                    {reportTypes.map((report, index) => (

                      <motion.div
                        key={report}
                        initial={{
                          opacity: 0,
                          x: 15,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.04,
                        }}
                        className="
                          flex
                          items-center
                          gap-4
                          rounded-xl
                          border
                          border-white/[0.07]
                          bg-[#050D1A]
                          p-5
                        "
                      >

                        <span
                          className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-[#1E6BFF]/10
                            font-mono
                            text-[10px]
                            text-[#3DA5FF]
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-sm text-[#A7B4C8]">
                          {report}
                        </span>

                      </motion.div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              ROLES
          ================================================== */}

          <section className="border-b border-white/[0.06] py-24">

            <div className="devpass-container">

              <div className="mb-14">

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#3DA5FF]
                  "
                >
                  04 · CONTROL DE ACCESO
                </span>

                <h2
                  className="
                    mt-5
                    font-poppins
                    text-3xl
                    font-semibold
                    sm:text-4xl
                  "
                >
                  Tres niveles de acceso.
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-[#94A3B8]">
                  El sistema diferencia las capacidades de los usuarios según
                  el rol asignado.
                </p>

              </div>

              <div className="grid gap-4 md:grid-cols-3">

                {roles.map((role, index) => (

                  <motion.div
                    key={role.name}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07,
                    }}
                    className="
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-[#050D1A]
                      p-7
                    "
                  >

                    <div className="flex items-center justify-between">

                      <span className="font-mono text-xs text-[#3DA5FF]">
                        {role.number}
                      </span>

                      <span
                        className="
                          rounded-full
                          border
                          border-[#3DA5FF]/15
                          bg-[#0A1F3D]
                          px-3
                          py-1
                          text-[9px]
                          uppercase
                          tracking-[0.12em]
                          text-[#A7D3FF]
                        "
                      >
                        {role.access}
                      </span>

                    </div>

                    <h3 className="mt-8 font-mono text-xl font-semibold text-white">
                      {role.name}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#718096]">
                      {role.description}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </section>

          {/* =================================================
              DATABASE
          ================================================== */}

          <section className="border-b border-white/[0.06] py-24">

            <div className="devpass-container">

              <div
                className="
                  grid
                  gap-10
                  rounded-3xl
                  border
                  border-[#3DA5FF]/10
                  bg-[#0A1F3D]/25
                  p-8
                  sm:p-10
                  lg:grid-cols-[0.7fr_1.3fr]
                  lg:p-14
                "
              >

                <div>

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#3DA5FF]
                    "
                  >
                    05 · DATOS
                  </span>

                  <h2
                    className="
                      mt-5
                      font-poppins
                      text-3xl
                      font-semibold
                    "
                  >
                    SQLite local.
                  </h2>

                </div>

                <div>

                  <p className="text-lg leading-9 text-[#CBD5E1]">

                    La base de datos se crea automáticamente como{" "}

                    <span className="font-mono text-[#A7D3FF]">
                      mantenimiento.db
                    </span>

                    .

                  </p>

                  <p className="mt-5 text-sm leading-8 text-[#718096]">
                    Esto permite ejecutar el sistema sin depender de MySQL
                    ni de un servidor de base de datos externo, manteniendo
                    la información local de la aplicación.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">

                    <span className="rounded-lg border border-white/[0.07] bg-[#020617] px-4 py-2 text-xs text-[#94A3B8]">
                      SQLite
                    </span>

                    <span className="rounded-lg border border-white/[0.07] bg-[#020617] px-4 py-2 text-xs text-[#94A3B8]">
                      Local
                    </span>

                    <span className="rounded-lg border border-white/[0.07] bg-[#020617] px-4 py-2 text-xs text-[#94A3B8]">
                      Sin servidor externo
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              TECHNOLOGIES
          ================================================== */}

          <section className="border-b border-white/[0.06] py-24">

            <div className="devpass-container">

              <div className="mb-14 max-w-2xl">

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#3DA5FF]
                  "
                >
                  06 · STACK
                </span>

                <h2
                  className="
                    mt-5
                    font-poppins
                    text-3xl
                    font-semibold
                    sm:text-4xl
                  "
                >
                  Tecnologías utilizadas.
                </h2>

                <p className="mt-5 leading-8 text-[#94A3B8]">
                  Una combinación de herramientas Python orientadas a
                  aplicaciones de escritorio, análisis de datos,
                  visualización y persistencia local.
                </p>

              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                {technologies.map((technology, index) => (

                  <motion.div
                    key={technology.name}
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.04,
                    }}
                    className="
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-[#050D1A]
                      p-6
                      transition-all
                      duration-300
                      hover:border-[#3DA5FF]/20
                    "
                  >

                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#3DA5FF]">
                      {technology.category}
                    </span>

                    <h3 className="mt-5 font-poppins text-lg font-semibold">
                      {technology.name}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-[#64748B]">
                      {technology.description}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </section>

          {/* =================================================
              GALLERY
          ================================================== */}

          <section className="border-b border-white/[0.06] py-24">

            <div className="devpass-container">

              <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">

                <div>

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#3DA5FF]
                    "
                  >
                    07 · INTERFAZ
                  </span>

                  <h2
                    className="
                      mt-5
                      font-poppins
                      text-3xl
                      font-semibold
                      sm:text-4xl
                    "
                  >
                    El sistema por dentro.
                  </h2>

                </div>

                <p className="max-w-md text-sm leading-7 text-[#64748B]">
                  Explora las diferentes pantallas y reportes de
                  MantenimientoApp.
                </p>

              </div>

              <div className="grid gap-5 md:grid-cols-2">

                {images.map((image, index) => (

                  <motion.button
                    key={image.src}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-60px",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.04,
                    }}
                    className="
                      group
                      relative
                      aspect-[16/10]
                      cursor-zoom-in
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-[#050D1A]
                      text-left
                    "
                  >

                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-[1.035]
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#020617]/90
                        via-transparent
                        to-transparent
                      "
                    />

                    <div
                      className="
                        absolute
                        bottom-5
                        left-5
                        right-5
                        flex
                        items-end
                        justify-between
                        gap-4
                      "
                    >

                      <div>

                        <span className="text-[10px] uppercase tracking-[0.16em] text-[#3DA5FF]">
                          Vista {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="mt-1 text-sm font-medium text-white">
                          {image.title}
                        </p>

                      </div>

                      <span
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-[#020617]/65
                          px-3
                          py-1.5
                          text-[10px]
                          text-[#CBD5E1]
                          backdrop-blur-md
                        "
                      >
                        Ampliar
                      </span>

                    </div>

                  </motion.button>

                ))}

              </div>

            </div>

          </section>

          {/* =================================================
              RESULT
          ================================================== */}

          <section className="py-24">

            <div className="devpass-container">

              <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

                <div>

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#3DA5FF]
                    "
                  >
                    08 · RESULTADO
                  </span>

                  <h2
                    className="
                      mt-5
                      font-poppins
                      text-3xl
                      font-semibold
                      leading-tight
                      sm:text-4xl
                    "
                  >
                    Una herramienta centralizada para la gestión del
                    mantenimiento.
                  </h2>

                </div>

                <div>

                  <p className="text-lg leading-9 text-[#CBD5E1]">
                    MantenimientoApp reúne en una aplicación de escritorio
                    la gestión de órdenes, catálogos, usuarios y reportes
                    relacionados con equipos mayores.
                  </p>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    El proyecto demuestra cómo Python puede utilizarse para
                    construir una solución de escritorio completa,
                    combinando interfaz gráfica, base de datos local,
                    visualización, análisis de datos y control de acceso.
                  </p>

                  <div
                    className="
                      mt-10
                      rounded-2xl
                      border
                      border-[#3DA5FF]/10
                      bg-[#0A1F3D]/35
                      p-7
                    "
                  >

                    <span className="text-sm font-semibold text-[#A7D3FF]">
                      MantenimientoApp v1.0
                    </span>

                    <p className="mt-3 text-sm leading-7 text-[#718096]">
                      Sistema de Gestión de Costos de Mantenimiento —
                      Equipos Mayores.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              CTA
          ================================================== */}

          <section className="border-t border-white/[0.06] py-20">

            <div className="devpass-container">

              <div
                className="
                  flex
                  flex-col
                  gap-8
                  rounded-3xl
                  border
                  border-[#3DA5FF]/10
                  bg-[#0A1F3D]/30
                  p-8
                  sm:p-10
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                "
              >

                <div>

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#3DA5FF]
                    "
                  >
                    MANTENIMIENTOAPP
                  </span>

                  <h2 className="mt-3 font-poppins text-2xl font-semibold">
                    Explora el código del proyecto.
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#64748B]">
                    Revisa la implementación y estructura completa del
                    sistema en GitHub.
                  </p>

                </div>

                <div className="flex flex-wrap gap-3">

                  <a
                    href={GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      rounded-xl
                      bg-[#1E6BFF]
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:bg-[#2873ff]
                    "
                  >
                    GitHub ↗
                  </a>

                  <Link
                    href="/proyectos"
                    className="
                      rounded-xl
                      border
                      border-white/10
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-[#94A3B8]
                      transition
                      hover:border-[#3DA5FF]/20
                      hover:text-white
                    "
                  >
                    Todos los proyectos
                  </Link>

                </div>

              </div>

            </div>

          </section>

        </div>
      </main>

      <Footer />

      {/* =====================================================
          LIGHTBOX
      ====================================================== */}

      {selectedImage && (

        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-[#020617]/95
            p-5
            backdrop-blur-md
          "
          onClick={() => setSelectedImage(null)}
        >

          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar imagen"
            className="
              absolute
              right-5
              top-5
              z-[110]
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              text-xl
              text-white
              transition
              hover:bg-white/10
            "
          >
            ×
          </button>

          <div
            className="
              relative
              max-h-[90vh]
              max-w-[1250px]
            "
            onClick={(event) => event.stopPropagation()}
          >

            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1600}
              height={1000}
              className="
                max-h-[88vh]
                w-auto
                max-w-full
                rounded-2xl
                object-contain
                shadow-[0_30px_100px_rgba(0,0,0,0.65)]
              "
            />

          </div>

        </div>

      )}

    </>
  );
}