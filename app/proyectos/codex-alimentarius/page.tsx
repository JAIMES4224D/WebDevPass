"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createBreadcrumbSchema,
  createSoftwareApplicationSchema,
} from "@/lib/seo/schema";

const projectImages = [
  {
    src: "/images/proyectos/codex-alimentarius/01.webp",
    alt: "Codex Digital Alimentarius - Vista principal",
  },
  {
    src: "/images/proyectos/codex-alimentarius/02.webp",
    alt: "Codex Digital Alimentarius - Búsqueda",
  },
  {
    src: "/images/proyectos/codex-alimentarius/03.webp",
    alt: "Codex Digital Alimentarius - Consulta de información",
  },
  {
    src: "/images/proyectos/codex-alimentarius/04.webp",
    alt: "Codex Digital Alimentarius - Interfaz",
  },
];

const technologies = [
  {
    name: "Python",
    description: "Procesamiento y extracción de información.",
  },
  {
    name: "JSON",
    description: "Estructuración de la información extraída.",
  },
  {
    name: "React",
    description: "Construcción de la interfaz web.",
  },
  {
    name: "Vue",
    description: "Tecnología utilizada en el desarrollo del proyecto.",
  },
  {
    name: "Next.js",
    description: "Aplicación y estructura web.",
  },
];

const process = [
  {
    number: "01",
    title: "Documento original",
    description:
      "El contenido del Codex Alimentarius se encontraba principalmente en un documento PDF, dificultando la consulta rápida de sus elementos.",
  },
  {
    number: "02",
    title: "Extracción",
    description:
      "Se desarrolló un proceso en Python para extraer la información contenida en el documento.",
  },
  {
    number: "03",
    title: "Estructuración",
    description:
      "La información extraída fue organizada y convertida en una estructura JSON para facilitar su procesamiento.",
  },
  {
    number: "04",
    title: "Aplicación web",
    description:
      "Los datos estructurados fueron utilizados para construir una aplicación que permitiera consultar la información de manera más sencilla.",
  },
];

export default function CodexAlimentariusPage() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

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
    name: "Codex Digital Alimentarius | Digitalización y Consulta Web",
    description:
      "Proyecto de digitalización y estructuración de información del Codex Alimentarius mediante Python, JSON y una aplicación web orientada a facilitar su consulta.",
    path: "/proyectos/codex-alimentarius",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Proyectos", path: "/proyectos" },
    {
      name: "Codex Digital Alimentarius",
      path: "/proyectos/codex-alimentarius",
    },
  ]);

  const softwareSchema = createSoftwareApplicationSchema({
    name: "Codex Digital Alimentarius",
    description:
      "Aplicación web desarrollada para facilitar la consulta de información del Codex Alimentarius después de un proceso de extracción y estructuración de datos.",
    path: "/proyectos/codex-alimentarius",
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
      <main className="min-h-screen bg-[#020617] text-[#f8faff]">

        <Navbar />
        {/* =========================================================
            HERO
        ========================================================= */}

        <section className="relative overflow-hidden border-b border-white/[0.06]">
          {/* Atmospheric background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-220px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#1e6bff]/10 blur-[140px]" />

            <div className="absolute right-[-100px] top-[20%] h-[400px] w-[400px] rounded-full bg-[#3da5ff]/8 blur-[120px]" />

            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(61,165,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(61,165,255,0.8) 1px, transparent 1px)",
                backgroundSize: "70px 70px",
              }}
            />
          </div>

          <div className="devpass-container relative z-10 py-28 lg:py-36">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 text-sm text-[#94a3b8] transition-colors hover:text-[#a7d3ff]"
              >
                <span>←</span>
                Volver a proyectos
              </Link>
            </motion.div>

            <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
              {/* Copy */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#3da5ff]" />

                  <span className="text-xs font-semibold tracking-[0.28em] text-[#3da5ff]">
                    SOFTWARE · DIGITALIZACIÓN
                  </span>
                </div>

                <h1 className="max-w-4xl font-poppins text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                  Codex Digital
                  <br />
                  <span className="devpass-gradient-text">
                    Alimentarius.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-[#94a3b8] sm:text-lg">
                  Digitalización y estructuración de información del Codex
                  Alimentarius para facilitar la consulta y búsqueda de sus
                  elementos mediante una aplicación web.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["Digitalización", "Python", "JSON", "Web"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#3da5ff]/15 bg-[#0a1f3d]/50 px-4 py-2 text-xs font-medium text-[#a7d3ff]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="https://jaimes4224d.github.io/Digital_Codex_Alimentarius/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#1e6bff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(30,107,255,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#2873ff]"
                  >
                    Ver demo
                    <span>↗</span>
                  </a>

                  <a
                    href="https://github.com/JAIMES4224D/Digital_Codex_Alimentarius"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-[#dbeafe] transition-all hover:border-[#3da5ff]/30 hover:bg-[#0a1f3d]"
                  >
                    GitHub
                    <span>↗</span>
                  </a>
                </div>
              </motion.div>

              {/* Hero image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(projectImages[0])}
                  className="group relative block w-full cursor-zoom-in overflow-hidden rounded-3xl border border-[#3da5ff]/15 bg-[#0a1f3d]/40 p-2 text-left shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image
                      src={projectImages[0].src}
                      alt={projectImages[0].alt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 rounded-lg border border-white/10 bg-[#020617]/70 px-3 py-2 text-xs text-[#cbd5e1] backdrop-blur-md">
                      Codex Digital Alimentarius
                    </div>
                  </div>
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SUMMARY
        ========================================================= */}

        <section className="border-b border-white/[0.06] py-24">
          <div className="devpass-container">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <span className="text-xs font-semibold tracking-[0.25em] text-[#3da5ff]">
                  01 · EL PROBLEMA
                </span>

                <h2 className="mt-5 max-w-md font-poppins text-3xl font-semibold leading-tight sm:text-4xl">
                  Convertir información difícil de consultar en información
                  accesible.
                </h2>
              </div>

              <div className="space-y-6 text-[15px] leading-8 text-[#94a3b8]">
                <p>
                  El Codex Alimentarius contiene una gran cantidad de
                  información técnica que puede resultar difícil de consultar
                  cuando se encuentra únicamente dentro de documentos PDF.
                </p>

                <p>
                  El objetivo del proyecto fue transformar esa información en
                  una estructura digital que permitiera realizar consultas de
                  manera mucho más rápida y práctica.
                </p>

                <p>
                  Para ello se desarrolló primero un proceso de extracción y
                  estructuración de los datos y posteriormente una aplicación
                  web orientada a la consulta de dicha información.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-3">
              <div className="bg-[#020617] p-7">
                <span className="text-3xl font-semibold text-[#a7d3ff]">
                  PDF
                </span>
                <p className="mt-2 text-sm text-[#64748b]">
                  Fuente original de información
                </p>
              </div>

              <div className="bg-[#020617] p-7">
                <span className="text-3xl font-semibold text-[#a7d3ff]">
                  JSON
                </span>
                <p className="mt-2 text-sm text-[#64748b]">
                  Información estructurada
                </p>
              </div>

              <div className="bg-[#020617] p-7">
                <span className="text-3xl font-semibold text-[#a7d3ff]">
                  WEB
                </span>
                <p className="mt-2 text-sm text-[#64748b]">
                  Consulta digital
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PROCESS
        ========================================================= */}

        <section className="border-b border-white/[0.06] py-24">
          <div className="devpass-container">
            <div className="mb-16 max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#3da5ff]">
                02 · PROCESO
              </span>

              <h2 className="mt-5 font-poppins text-3xl font-semibold sm:text-4xl">
                Del documento a una herramienta de consulta.
              </h2>

              <p className="mt-5 leading-8 text-[#94a3b8]">
                El desarrollo se planteó como un proceso de transformación:
                primero se obtuvo la información, luego se estructuró y
                finalmente se convirtió en una aplicación web.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {process.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-2xl border border-white/[0.07] bg-[#0a1f3d]/35 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#3da5ff]/20 hover:bg-[#0a1f3d]/55"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="font-mono text-sm text-[#3da5ff]">
                      {item.number}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#3da5ff]/70 shadow-[0_0_12px_rgba(61,165,255,0.6)]" />
                  </div>

                  <h3 className="mt-10 font-poppins text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#94a3b8]">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            DATA FLOW
        ========================================================= */}

        <section className="border-b border-white/[0.06] py-24">
          <div className="devpass-container">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <span className="text-xs font-semibold tracking-[0.25em] text-[#3da5ff]">
                  03 · TRANSFORMACIÓN
                </span>

                <h2 className="mt-5 font-poppins text-3xl font-semibold leading-tight sm:text-4xl">
                  Una fuente documental convertida en datos consultables.
                </h2>

                <p className="mt-6 leading-8 text-[#94a3b8]">
                  El proyecto permitió separar la información del formato
                  original del documento para trabajar con ella como datos
                  estructurados.
                </p>

                <p className="mt-5 leading-8 text-[#94a3b8]">
                  Esta transformación hizo posible construir posteriormente
                  una interfaz orientada a localizar y consultar los
                  elementos del Codex de una forma más práctica.
                </p>
              </div>

              {/* Data flow visual */}
              <div className="relative rounded-3xl border border-[#3da5ff]/10 bg-[#0a1f3d]/35 p-8">
                <div className="space-y-3">
                  {[
                    ["PDF", "Documento original"],
                    ["PYTHON", "Extracción de información"],
                    ["JSON", "Datos estructurados"],
                    ["WEB", "Consulta digital"],
                  ].map(([title, subtitle], index) => (
                    <div key={title}>
                      <div className="rounded-xl border border-white/[0.07] bg-[#020617]/70 p-5">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-sm font-semibold text-[#a7d3ff]">
                            {title}
                          </span>

                          <span className="text-xs text-[#64748b]">
                            0{index + 1}
                          </span>
                        </div>

                        <p className="mt-2 text-xs text-[#64748b]">
                          {subtitle}
                        </p>
                      </div>

                      {index < 3 && (
                        <div className="flex h-7 items-center justify-center">
                          <span className="text-[#3da5ff]/60">↓</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            TECHNOLOGIES
        ========================================================= */}

        <section className="border-b border-white/[0.06] py-24">
          <div className="devpass-container">
            <div className="mb-14">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#3da5ff]">
                04 · TECNOLOGÍAS
              </span>

              <h2 className="mt-5 font-poppins text-3xl font-semibold sm:text-4xl">
                Herramientas utilizadas.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {technologies.map((technology, index) => (
                <motion.div
                  key={technology.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="rounded-2xl border border-white/[0.07] bg-[#0a1f3d]/30 p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#3da5ff]" />

                    <h3 className="font-poppins font-semibold">
                      {technology.name}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[#64748b]">
                    {technology.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            GALLERY
        ========================================================= */}

        <section className="border-b border-white/[0.06] py-24">
          <div className="devpass-container">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="text-xs font-semibold tracking-[0.25em] text-[#3da5ff]">
                  05 · GALERÍA
                </span>

                <h2 className="mt-5 font-poppins text-3xl font-semibold sm:text-4xl">
                  El proyecto en funcionamiento.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[#64748b]">
                Cada imagen puede ampliarse para revisar con mayor detalle la
                interfaz y el funcionamiento de la aplicación.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {projectImages.map((image, index) => (
                <motion.button
                  key={image.src}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group relative aspect-[16/10] cursor-zoom-in overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0a1f3d]/30 text-left"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-transparent to-transparent opacity-70" />

                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                    <span className="text-xs font-medium text-white/80">
                      Vista 0{index + 1}
                    </span>

                    <span className="rounded-full border border-white/10 bg-[#020617]/60 px-3 py-1.5 text-xs text-[#cbd5e1] backdrop-blur-md">
                      Ampliar
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            RESULT
        ========================================================= */}

        <section className="py-24">
          <div className="devpass-container">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <span className="text-xs font-semibold tracking-[0.25em] text-[#3da5ff]">
                  06 · RESULTADO
                </span>

                <h2 className="mt-5 font-poppins text-3xl font-semibold leading-tight sm:text-4xl">
                  De un documento complejo a una experiencia de consulta más
                  práctica.
                </h2>
              </div>

              <div>
                <p className="text-lg leading-9 text-[#cbd5e1]">
                  El resultado fue una aplicación web que permitió trabajar
                  con la información del Codex Alimentarius de una manera más
                  organizada y accesible.
                </p>

                <p className="mt-6 text-[15px] leading-8 text-[#94a3b8]">
                  El proyecto demuestra cómo una tarea de digitalización puede
                  combinar procesamiento de información, estructuración de
                  datos y desarrollo de software para resolver una necesidad
                  concreta.
                </p>

                <div className="mt-10 rounded-2xl border border-[#3da5ff]/10 bg-[#0a1f3d]/35 p-7">
                  <span className="text-sm font-semibold text-[#a7d3ff]">
                    Idea central
                  </span>

                  <p className="mt-3 text-sm leading-7 text-[#94a3b8]">
                    No se trataba únicamente de mostrar un PDF en una página
                    web, sino de transformar su contenido para hacerlo más
                    útil y fácil de consultar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PROJECT LINKS
        ========================================================= */}

        <section className="border-t border-white/[0.06] py-20">
          <div className="devpass-container">
            <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-[#3da5ff]/10 bg-[#0a1f3d]/30 p-8 sm:p-10 lg:flex-row lg:items-center">
              <div>
                <span className="text-xs font-semibold tracking-[0.25em] text-[#3da5ff]">
                  CODEX DIGITAL ALIMENTARIUS
                </span>

                <h2 className="mt-3 font-poppins text-2xl font-semibold">
                  Explora el proyecto.
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://jaimes4224d.github.io/Digital_Codex_Alimentarius/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[#1e6bff] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2873ff]"
                >
                  Ver demo ↗
                </a>

                <a
                  href="https://github.com/JAIMES4224D/Digital_Codex_Alimentarius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-[#dbeafe] transition hover:border-[#3da5ff]/25"
                >
                  Ver código ↗
                </a>

                <Link
                  href="/proyectos"
                  className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-[#94a3b8] transition hover:text-white"
                >
                  Todos los proyectos
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================
          IMAGE LIGHTBOX
      ========================================================= */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]/95 p-5 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-[110] flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-xl text-white transition hover:bg-white/10"
            aria-label="Cerrar imagen"
          >
            ×
          </button>

          <div
            className="relative max-h-[90vh] max-w-[1200px]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="max-h-[88vh] max-w-full rounded-2xl object-contain shadow-[0_30px_100px_rgba(0,0,0,0.65)]"
            />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}