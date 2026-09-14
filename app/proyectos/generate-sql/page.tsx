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
  "https://github.com/JAIMES4224D/Generate-Script-SQL";

const images = [
  {
    src: "/images/proyectos/generate-sql/CREATE TABLE.png",
    alt: "Generador de sentencias CREATE TABLE",
    title: "CREATE TABLE",
    description:
      "Construcción visual de estructuras de tablas y configuración de sus campos.",
  },
  {
    src: "/images/proyectos/generate-sql/CREATE.png",
    alt: "Generador de sentencia CREATE",
    title: "CREATE DATABASE",
    description:
      "Generación visual de sentencias para crear bases de datos.",
  },
  {
    src: "/images/proyectos/generate-sql/INSERT.png",
    alt: "Generador de sentencia INSERT",
    title: "INSERT",
    description:
      "Creación visual de sentencias para insertar registros.",
  },
  {
    src: "/images/proyectos/generate-sql/SELECT.png",
    alt: "Generador de sentencia SELECT",
    title: "SELECT",
    description:
      "Generación de consultas SELECT mediante una interfaz gráfica.",
  },
  {
    src: "/images/proyectos/generate-sql/UPDATE.png",
    alt: "Generador de sentencia UPDATE",
    title: "UPDATE",
    description:
      "Construcción visual de sentencias para actualizar información.",
  },
  {
    src: "/images/proyectos/generate-sql/DELETE.png",
    alt: "Generador de sentencia DELETE",
    title: "DELETE",
    description:
      "Creación de sentencias para eliminar registros.",
  },
  {
    src: "/images/proyectos/generate-sql/PROCEDURE.png",
    alt: "Generador de procedimientos almacenados",
    title: "PROCEDURE",
    description:
      "Módulo dedicado a la creación de procedimientos almacenados.",
  },
  {
    src: "/images/proyectos/generate-sql/VIEW.png",
    alt: "Generador de vistas SQL",
    title: "VIEW",
    description:
      "Generación visual de objetos VIEW para bases de datos.",
  },
  {
    src: "/images/proyectos/generate-sql/TRIGER.png",
    alt: "Generador de triggers SQL",
    title: "TRIGGER",
    description:
      "Módulo para construir triggers de bases de datos.",
  },
];

const sqlObjects = [
  {
    number: "01",
    name: "CREATE DATABASE",
    category: "DDL",
    description:
      "Permite generar la estructura necesaria para crear una base de datos.",
  },
  {
    number: "02",
    name: "CREATE TABLE",
    category: "DDL",
    description:
      "Construcción visual de tablas, campos, tipos de datos y restricciones.",
  },
  {
    number: "03",
    name: "INSERT",
    category: "DML",
    description:
      "Generación de sentencias para incorporar registros a las tablas.",
  },
  {
    number: "04",
    name: "UPDATE",
    category: "DML",
    description:
      "Construcción de sentencias para modificar información existente.",
  },
  {
    number: "05",
    name: "DELETE",
    category: "DML",
    description:
      "Generación de sentencias para eliminar registros.",
  },
  {
    number: "06",
    name: "SELECT",
    category: "DML",
    description:
      "Creación visual de consultas para recuperar información.",
  },
];

const advancedObjects = [
  {
    number: "01",
    name: "PROCEDURE",
    description:
      "Herramienta para generar procedimientos almacenados mediante una interfaz visual.",
  },
  {
    number: "02",
    name: "VIEW",
    description:
      "Creación de vistas SQL para organizar consultas reutilizables.",
  },
  {
    number: "03",
    name: "TRIGGER",
    description:
      "Generación de triggers para automatizar acciones asociadas a eventos de la base de datos.",
  },
];

const technologies = [
  {
    category: "LENGUAJE",
    name: "Python 3.x",
    description:
      "Lenguaje utilizado para construir la lógica y funcionamiento de la aplicación.",
  },
  {
    category: "INTERFAZ",
    name: "Tkinter",
    description:
      "Framework de interfaz gráfica utilizado para construir la aplicación de escritorio.",
  },
  {
    category: "UI",
    name: "CustomTkinter",
    description:
      "Utilizado para proporcionar una interfaz gráfica moderna y personalizada.",
  },
  {
    category: "DATABASE",
    name: "MySQL",
    description:
      "El generador produce sintaxis compatible con bases de datos MySQL.",
  },
];

const fieldFeatures = [
  "Tipos de datos",
  "Primary Key",
  "Unique",
  "Auto Increment",
  "Nulidad",
  "Configuración de campos",
];

const workflow = [
  {
    number: "01",
    title: "Seleccionar",
    description:
      "El usuario selecciona el tipo de sentencia u objeto SQL que desea construir.",
  },
  {
    number: "02",
    title: "Configurar",
    description:
      "Los parámetros se definen desde la interfaz gráfica de la aplicación.",
  },
  {
    number: "03",
    title: "Generar",
    description:
      "El sistema construye automáticamente la sentencia SQL correspondiente.",
  },
  {
    number: "04",
    title: "Previsualizar",
    description:
      "El resultado aparece inmediatamente en el área de texto.",
  },
  {
    number: "05",
    title: "Utilizar",
    description:
      "El script queda listo para copiar y utilizar en un gestor de bases de datos.",
  },
];

export default function GenerateSQLPage() {
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
    name: "Generate Script SQL | Generador de SQL con Python",
    description:
      "Herramienta de escritorio desarrollada en Python para automatizar la creación de scripts SQL mediante una interfaz gráfica orientada a bases de datos MySQL.",
    path: "/proyectos/generate-sql",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Proyectos", path: "/proyectos" },
    {
      name: "Generate Script SQL",
      path: "/proyectos/generate-sql",
    },
  ]);

  const softwareSchema = createSoftwareApplicationSchema({
    name: "Generate Script SQL",
    description:
      "Aplicación de escritorio desarrollada con Python, Tkinter y CustomTkinter para generar visualmente sentencias y objetos SQL compatibles con MySQL.",
    path: "/proyectos/generate-sql",
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
                  SOFTWARE · PYTHON · SQL
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
                    Generate
                    <br />

                    <span className="devpass-gradient-text">
                      Script SQL.
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
                    Herramienta de escritorio desarrollada en Python para
                    automatizar la creación de scripts SQL mediante una
                    interfaz gráfica visual, rápida e intuitiva.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {[
                      "Python",
                      "Tkinter",
                      "CustomTkinter",
                      "MySQL",
                      "DDL",
                      "DML",
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
                      href={GITHUB}
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
                  <div className="relative h-full overflow-hidden rounded-2xl bg-[#020617]">
                    <Image
                      src={images[0].src}
                      alt={images[0].alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="
                        object-contain
                        transition-transform
                        duration-700
                        group-hover:scale-[1.025]
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
                        Generate-Script-SQL
                      </span>

                      <p className="mt-1 text-sm font-medium text-white">
                        CREATE TABLE
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
                    01 · CONCEPTO
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
                    SQL sin escribir cada sentencia desde cero.
                  </h2>
                </div>

                <div className="space-y-6 text-[15px] leading-8 text-[#94A3B8]">
                  <p>
                    Generate-Script-SQL nace como una herramienta para
                    simplificar la creación de scripts SQL desde una interfaz
                    gráfica.
                  </p>

                  <p>
                    En lugar de construir manualmente cada sentencia, el
                    usuario puede seleccionar el tipo de operación, configurar
                    sus parámetros y obtener el código SQL generado.
                  </p>

                  <p>
                    La herramienta está orientada a bases de datos MySQL y
                    contempla tanto operaciones DDL y DML como objetos
                    avanzados de bases de datos.
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
                    DDL
                  </span>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Estructuras de base de datos
                  </p>
                </div>

                <div className="bg-[#020617] p-7">
                  <span className="font-poppins text-3xl font-semibold text-[#A7D3FF]">
                    DML
                  </span>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Manipulación de datos
                  </p>
                </div>

                <div className="bg-[#020617] p-7">
                  <span className="font-poppins text-3xl font-semibold text-[#A7D3FF]">
                    03
                  </span>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Objetos avanzados
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              DDL + DML
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
                  02 · GENERACIÓN SQL
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
                  Las operaciones esenciales, desde una interfaz visual.
                </h2>

                <p className="mt-5 leading-8 text-[#94A3B8]">
                  El generador cubre diferentes tipos de sentencias utilizadas
                  durante el desarrollo y administración de bases de datos.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sqlObjects.map((item, index) => (
                  <motion.article
                    key={item.name}
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
                      duration: 0.45,
                      delay: index * 0.05,
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
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#3DA5FF]">
                        {item.number}
                      </span>

                      <span
                        className="
                          rounded-full
                          border
                          border-[#3DA5FF]/10
                          bg-[#0A1F3D]
                          px-3
                          py-1
                          text-[9px]
                          font-medium
                          tracking-[0.12em]
                          text-[#A7D3FF]
                        "
                      >
                        {item.category}
                      </span>
                    </div>

                    <h3 className="mt-8 font-mono text-xl font-semibold text-white">
                      {item.name}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#718096]">
                      {item.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* =================================================
              FIELD CONFIGURATION
          ================================================== */}

          <section className="border-b border-white/[0.06] py-24">
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
                    03 · ESTRUCTURAS
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
                    Configuración de campos sin complicaciones.
                  </h2>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    La creación de tablas permite definir las propiedades
                    necesarias de cada campo directamente desde la interfaz.
                  </p>
                </div>

                <div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {fieldFeatures.map((feature, index) => (
                      <motion.div
                        key={feature}
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
                          delay: index * 0.05,
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
                            text-xs
                            text-[#3DA5FF]
                          "
                        >
                          ✓
                        </span>

                        <span className="text-sm text-[#A7B4C8]">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              ADVANCED OBJECTS
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
                  04 · OBJETOS AVANZADOS
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
                  Más allá de las consultas básicas.
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-[#94A3B8]">
                  Generate-Script-SQL también incorpora herramientas para
                  trabajar con objetos avanzados de bases de datos.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {advancedObjects.map((item, index) => (
                  <motion.div
                    key={item.name}
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
                    <span className="font-mono text-xs text-[#3DA5FF]">
                      {item.number}
                    </span>

                    <h3 className="mt-7 font-mono text-xl font-semibold">
                      {item.name}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#718096]">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* =================================================
              WORKFLOW
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
                  05 · FLUJO
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
                  De la configuración al script.
                </h2>

                <p className="mt-5 leading-8 text-[#94A3B8]">
                  El objetivo es reducir el trabajo manual y permitir que el
                  usuario obtenga rápidamente una sentencia SQL lista para
                  utilizar.
                </p>
              </div>

              <div className="rounded-3xl border border-[#3DA5FF]/10 bg-[#050D1A] p-6 sm:p-10">
                <div className="grid gap-3 lg:grid-cols-5">
                  {workflow.map((item, index) => (
                    <div key={item.number} className="contents">
                      <div
                        className="
                          rounded-2xl
                          border
                          border-white/[0.07]
                          bg-[#020617]
                          p-6
                        "
                      >
                        <span className="font-mono text-xs text-[#3DA5FF]">
                          {item.number}
                        </span>

                        <h3 className="mt-5 font-poppins text-lg font-semibold">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-xs leading-6 text-[#64748B]">
                          {item.description}
                        </p>
                      </div>

                      {index < workflow.length - 1 && (
                        <div className="hidden items-center justify-center text-[#3DA5FF]/50 lg:flex">
                          →
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              REAL TIME PREVIEW
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
                  lg:grid-cols-[0.75fr_1.25fr]
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
                    06 · PREVISUALIZACIÓN
                  </span>

                  <h2
                    className="
                      mt-5
                      font-poppins
                      text-3xl
                      font-semibold
                    "
                  >
                    El SQL aparece mientras construyes.
                  </h2>
                </div>

                <div>
                  <p className="text-lg leading-9 text-[#CBD5E1]">
                    El script se genera instantáneamente en un área de texto
                    lista para copiar y utilizar.
                  </p>

                  <p className="mt-5 text-sm leading-8 text-[#718096]">
                    Esto permite revisar el resultado antes de llevarlo al
                    gestor de bases de datos y mantener el proceso de
                    generación dentro de una misma interfaz.
                  </p>

                  <div className="mt-8 overflow-hidden rounded-xl border border-white/[0.07] bg-[#020617]">
                    <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
                      <span className="h-2 w-2 rounded-full bg-[#3DA5FF]/60" />
                      <span className="font-mono text-[10px] text-[#64748B]">
                        generated.sql
                      </span>
                    </div>

                    <div className="p-5 font-mono text-xs leading-7 text-[#718096]">
                      <span className="text-[#3DA5FF]">CREATE TABLE</span>{" "}
                      <span className="text-[#CBD5E1]">
                        example
                      </span>
                      <br />
                      <span className="text-[#64748B]">
                        (
                      </span>
                      <br />
                      &nbsp;&nbsp;
                      <span className="text-[#A7D3FF]">
                        id
                      </span>{" "}
                      INT PRIMARY KEY AUTO_INCREMENT,
                      <br />
                      &nbsp;&nbsp;
                      <span className="text-[#A7D3FF]">
                        name
                      </span>{" "}
                      VARCHAR(255) NOT NULL
                      <br />
                      <span className="text-[#64748B]">
                        );
                      </span>
                    </div>
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
                  07 · STACK
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
                  Una aplicación de escritorio construida alrededor de Python
                  y herramientas para interfaces gráficas.
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
                      delay: index * 0.05,
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
                    08 · INTERFAZ
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
                    El generador por dentro.
                  </h2>
                </div>

                <p className="max-w-md text-sm leading-7 text-[#64748B]">
                  Explora las diferentes interfaces para generar sentencias y
                  objetos SQL.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
                      bg-[#020617]
                      text-left
                    "
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="
                        object-contain
                        p-2
                        transition-transform
                        duration-700
                        group-hover:scale-[1.025]
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

                        <p className="mt-1 font-mono text-sm font-medium text-white">
                          {image.title}
                        </p>
                      </div>

                      <span
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-[#020617]/70
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
                    09 · RESULTADO
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
                    Automatizar la construcción de scripts SQL.
                  </h2>
                </div>

                <div>
                  <p className="text-lg leading-9 text-[#CBD5E1]">
                    Generate-Script-SQL transforma la creación de sentencias
                    SQL en un flujo visual donde el usuario configura,
                    genera y previsualiza el resultado.
                  </p>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    El proyecto representa una aplicación de escritorio
                    enfocada en productividad para desarrolladores y usuarios
                    que trabajan con bases de datos MySQL.
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
                      Generate-Script-SQL
                    </span>

                    <p className="mt-3 text-sm leading-7 text-[#718096]">
                      Una herramienta visual para convertir configuraciones en
                      código SQL listo para utilizar.
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
                    GENERATE-SCRIPT-SQL
                  </span>

                  <h2 className="mt-3 font-poppins text-2xl font-semibold">
                    Explora el código del proyecto.
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#64748B]">
                    Revisa la implementación completa de la herramienta en
                    GitHub.
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
              max-w-[1400px]
            "
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1800}
              height={1100}
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