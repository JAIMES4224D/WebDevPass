"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createBreadcrumbSchema,
  createSoftwareApplicationSchema,
} from "@/lib/seo/schema";

const projectImages = [
  {
    src: "/images/proyectos/convertidor/convertidor.webp",
    alt: "DevPass Converter - Interfaz principal",
  },
  {
    src: "/images/proyectos/convertidor/02.webp",
    alt: "DevPass Converter - Conversión de audio",
  },
  {
    src: "/images/proyectos/convertidor/03.webp",
    alt: "DevPass Converter - Gestión de archivos",
  },
  {
    src: "/images/proyectos/convertidor/04.webp",
    alt: "DevPass Converter - Aplicación de escritorio",
  },
];

const features = [
  {
    number: "01",
    title: "Calidad de audio",
    description:
      "Extracción de audio mediante libmp3lame con una configuración de 320 kbps para obtener archivos MP3 de alta calidad.",
  },
  {
    number: "02",
    title: "Interfaz moderna",
    description:
      "Interfaz gráfica desarrollada con CustomTkinter, con una experiencia visual minimalista inspirada en Windows 11.",
  },
  {
    number: "03",
    title: "Procesamiento concurrente",
    description:
      "Uso de hilos separados para ejecutar procesos de descarga sin bloquear la interfaz de usuario.",
  },
  {
    number: "04",
    title: "Destino personalizado",
    description:
      "El usuario puede seleccionar la ubicación donde desea almacenar los archivos generados.",
  },
  {
    number: "05",
    title: "Aplicación portable",
    description:
      "El proyecto puede distribuirse como un único ejecutable .exe con FFmpeg integrado.",
  },
  {
    number: "06",
    title: "Distribución sencilla",
    description:
      "La aplicación compilada mediante PyInstaller está pensada para ejecutarse sin una instalación compleja.",
  },
];

const technologies = [
  {
    name: "Python 3.13",
    category: "Lenguaje",
    description:
      "Lenguaje principal utilizado para desarrollar la aplicación de escritorio.",
  },
  {
    name: "yt-dlp",
    category: "Core",
    description:
      "Motor utilizado para gestionar las descargas y el procesamiento del contenido.",
  },
  {
    name: "FFmpeg",
    category: "Conversión",
    description:
      "Motor utilizado para procesar y convertir el contenido multimedia a MP3.",
  },
  {
    name: "FFprobe",
    category: "Media",
    description:
      "Herramienta complementaria de FFmpeg para trabajar con información multimedia.",
  },
  {
    name: "CustomTkinter",
    category: "Interfaz",
    description:
      "Framework utilizado para construir la interfaz gráfica moderna de escritorio.",
  },
  {
    name: "Tkinter",
    category: "GUI",
    description:
      "Biblioteca de interfaz gráfica utilizada como parte de la aplicación.",
  },
  {
    name: "Threading",
    category: "Concurrencia",
    description:
      "Utilizado para separar los procesos pesados de la interfaz gráfica.",
  },
  {
    name: "PyInstaller",
    category: "Compilación",
    description:
      "Utilizado para empaquetar la aplicación como ejecutable portable.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Enlace",
    description:
      "El usuario proporciona el enlace del contenido que desea procesar.",
  },
  {
    number: "02",
    title: "yt-dlp",
    description:
      "La aplicación utiliza yt-dlp para gestionar la descarga del contenido.",
  },
  {
    number: "03",
    title: "FFmpeg",
    description:
      "El contenido descargado es procesado mediante FFmpeg para realizar la conversión.",
  },
  {
    number: "04",
    title: "MP3",
    description:
      "El resultado final se genera como un archivo MP3 configurado a 320 kbps.",
  },
  {
    number: "05",
    title: "Destino",
    description:
      "El archivo generado se almacena en la ubicación seleccionada por el usuario.",
  },
];

export default function ConvertidorPage() {
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
    name: "DevPass Converter | Convertidor de Audio con Python",
    description:
      "Aplicación de escritorio desarrollada con Python para descargar y convertir contenido de YouTube a MP3 utilizando yt-dlp, FFmpeg y CustomTkinter.",
    path: "/proyectos/convertidor",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Proyectos", path: "/proyectos" },
    {
      name: "DevPass Converter",
      path: "/proyectos/convertidor",
    },
  ]);

  const softwareSchema = createSoftwareApplicationSchema({
    name: "DevPass Converter",
    description:
      "Aplicación de escritorio para descargar y convertir contenido de YouTube a formato MP3, desarrollada con Python, yt-dlp, FFmpeg y CustomTkinter.",
    path: "/proyectos/convertidor",
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

      <main className="min-h-screen bg-[#020617] text-white">
        {/* =====================================================
            AMBIENTE
        ====================================================== */}

        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div
            className="
              absolute
              left-1/2
              top-[-300px]
              h-[700px]
              w-[900px]
              -translate-x-1/2
              rounded-full
              bg-[#1E6BFF]/[0.035]
              blur-[160px]
            "
          />

          <div
            className="
              absolute
              bottom-[-250px]
              right-[-180px]
              h-[600px]
              w-[600px]
              rounded-full
              bg-[#3DA5FF]/[0.025]
              blur-[160px]
            "
          />

          <div
            className="absolute inset-0 opacity-[0.025]"
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
              pb-16
              pt-32
              sm:pb-20
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
                  03 · SOFTWARE · MULTIMEDIA
                </span>
              </div>

              <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
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
                      lg:text-[68px]
                    "
                  >
                    DevPass
                    <br />

                    <span className="devpass-gradient-text">
                      Converter.
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
                    Aplicación de escritorio desarrollada para descargar y
                    convertir contenido de YouTube a formato MP3, priorizando
                    la calidad del audio y una experiencia de uso sencilla.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {[
                      "Python",
                      "yt-dlp",
                      "FFmpeg",
                      "CustomTkinter",
                      "PyInstaller",
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
                      href="https://github.com/JAIMES4224D/Convertidor"
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
                      Ver en GitHub
                      <span>↗</span>
                    </a>

                    <a
                      href="https://github.com/JAIMES4224D/Convertidor/releases"
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
                      Releases
                      <span>↗</span>
                    </a>
                  </div>
                </div>

                {/* HERO IMAGE */}

                <motion.button
                  type="button"
                  onClick={() => setSelectedImage(projectImages[0])}
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
                    shadow-[0_30px_90px_rgba(0,0,0,0.4)]
                  "
                >
                  <div className="relative h-full overflow-hidden rounded-2xl">
                    <Image
                      src={projectImages[0].src}
                      alt={projectImages[0].alt}
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
                        from-[#020617]/70
                        via-transparent
                        to-transparent
                      "
                    />

                    <span
                      className="
                        absolute
                        bottom-5
                        left-5
                        rounded-lg
                        border
                        border-white/10
                        bg-[#020617]/70
                        px-3
                        py-2
                        text-xs
                        text-[#CBD5E1]
                        backdrop-blur-md
                      "
                    >
                      DevPass Converter
                    </span>
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
                    01 · EL PROBLEMA
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
                    Una alternativa de escritorio frente a convertidores web
                    cargados de publicidad.
                  </h2>
                </div>

                <div className="space-y-6 text-[15px] leading-8 text-[#94A3B8]">
                  <p>
                    DevPass Converter nació como una herramienta de escritorio
                    orientada a descargar y convertir contenido de YouTube a
                    formato MP3.
                  </p>

                  <p>
                    La aplicación busca ofrecer una experiencia más limpia y
                    controlada frente a los convertidores web que suelen
                    presentar publicidad excesiva o interfaces poco prácticas.
                  </p>

                  <p>
                    El proyecto combina descarga, procesamiento multimedia,
                    interfaz gráfica y empaquetado como aplicación ejecutable
                    en una única solución.
                  </p>
                </div>
              </div>

              {/* STATS */}

              <div
                className="
                  mt-20
                  grid
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.06]
                  bg-white/[0.04]
                  sm:grid-cols-3
                "
              >
                <div className="bg-[#020617] p-7">
                  <span className="font-poppins text-3xl font-semibold text-[#A7D3FF]">
                    320
                  </span>

                  <span className="ml-1 text-lg text-[#64748B]">
                    kbps
                  </span>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Bitrate configurado
                  </p>
                </div>

                <div className="bg-[#020617] p-7">
                  <span className="font-poppins text-3xl font-semibold text-[#A7D3FF]">
                    .EXE
                  </span>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Aplicación portable
                  </p>
                </div>

                <div className="bg-[#020617] p-7">
                  <span className="font-poppins text-3xl font-semibold text-[#A7D3FF]">
                    Python
                  </span>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Lenguaje principal
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              FEATURES
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
                  02 · CARACTERÍSTICAS
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
                  Diseñado para hacer una tarea concreta de forma sencilla.
                </h2>

                <p className="mt-5 leading-8 text-[#94A3B8]">
                  La aplicación concentra diferentes procesos técnicos detrás
                  de una interfaz de escritorio sencilla para el usuario.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <motion.article
                    key={feature.number}
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
                      hover:bg-[#071426]
                    "
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs text-[#3DA5FF]">
                        {feature.number}
                      </span>

                      <span className="h-1.5 w-1.5 rounded-full bg-[#3DA5FF]/70 transition-all group-hover:bg-[#3DA5FF] group-hover:shadow-[0_0_12px_rgba(61,165,255,0.8)]" />
                    </div>

                    <h3 className="mt-10 font-poppins text-xl font-semibold">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#718096]">
                      {feature.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* =================================================
              PROCESS
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
                    03 · FLUJO
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
                    Del enlace al archivo de audio.
                  </h2>

                  <p className="mt-6 leading-8 text-[#94A3B8]">
                    El flujo de procesamiento conecta el sistema de descarga
                    con el motor de conversión y finalmente con la ubicación
                    elegida por el usuario.
                  </p>
                </div>

                <div className="space-y-3">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={step.number}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.07,
                      }}
                      className="
                        flex
                        items-start
                        gap-5
                        rounded-xl
                        border
                        border-white/[0.07]
                        bg-[#050D1A]/70
                        p-5
                      "
                    >
                      <span className="min-w-[30px] font-mono text-xs text-[#3DA5FF]">
                        {step.number}
                      </span>

                      <div>
                        <h3 className="font-poppins text-sm font-semibold text-white">
                          {step.title}
                        </h3>

                        <p className="mt-1.5 text-sm leading-6 text-[#718096]">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              ARCHITECTURE
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
                  04 · ARQUITECTURA
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
                  Una aplicación de escritorio con procesamiento separado de
                  la interfaz.
                </h2>
              </div>

              <div className="rounded-3xl border border-[#3DA5FF]/10 bg-[#050D1A] p-6 sm:p-10">
                <div className="grid items-center gap-3 md:grid-cols-5">
                  {[
                    {
                      title: "Usuario",
                      subtitle: "Enlace",
                    },
                    {
                      title: "GUI",
                      subtitle: "CustomTkinter",
                    },
                    {
                      title: "yt-dlp",
                      subtitle: "Descarga",
                    },
                    {
                      title: "FFmpeg",
                      subtitle: "Conversión",
                    },
                    {
                      title: "MP3",
                      subtitle: "320 kbps",
                    },
                  ].map((item, index) => (
                    <div key={item.title} className="contents">
                      <div
                        className="
                          rounded-xl
                          border
                          border-white/[0.07]
                          bg-[#020617]
                          p-5
                          text-center
                        "
                      >
                        <div className="font-mono text-sm font-semibold text-[#A7D3FF]">
                          {item.title}
                        </div>

                        <div className="mt-2 text-[10px] uppercase tracking-[0.12em] text-[#475569]">
                          {item.subtitle}
                        </div>
                      </div>

                      {index < 4 && (
                        <div className="hidden text-center text-[#3DA5FF]/60 md:block">
                          →
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-white/[0.06] bg-[#0A1F3D]/30 p-6">
                <p className="text-sm leading-7 text-[#7F8EA3]">
                  El uso de threading permite mantener la interfaz disponible
                  mientras se ejecutan procesos que pueden requerir más tiempo,
                  evitando que la aplicación quede bloqueada durante la
                  descarga o conversión.
                </p>
              </div>
            </div>
          </section>

          {/* =================================================
              TECHNOLOGIES
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
                  05 · STACK
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
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {technologies.map((technology, index) => (
                  <motion.div
                    key={technology.name}
                    initial={{
                      opacity: 0,
                      y: 15,
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
                    "
                  >
                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#3DA5FF]">
                      {technology.category}
                    </span>

                    <h3 className="mt-4 font-poppins text-lg font-semibold">
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
                    06 · GALERÍA
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
                    La aplicación en funcionamiento.
                  </h2>
                </div>

                <p className="max-w-md text-sm leading-7 text-[#64748B]">
                  Haz clic sobre cualquier captura para verla en detalle.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {projectImages.map((image, index) => (
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
                      delay: index * 0.06,
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
                        group-hover:scale-[1.04]
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#020617]/70
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
                        items-center
                        justify-between
                      "
                    >
                      <span className="text-xs text-white/80">
                        Vista 0{index + 1}
                      </span>

                      <span
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-[#020617]/60
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
                    07 · RESULTADO
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
                    Una herramienta de escritorio enfocada en una experiencia
                    simple y controlada.
                  </h2>
                </div>

                <div>
                  <p className="text-lg leading-9 text-[#CBD5E1]">
                    DevPass Converter integra descarga, conversión multimedia,
                    procesamiento concurrente y empaquetado en una aplicación
                    de escritorio.
                  </p>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    El proyecto muestra cómo Python puede utilizarse no solo
                    para scripts, sino también para construir aplicaciones de
                    escritorio completas combinando interfaz, procesamiento
                    multimedia y distribución ejecutable.
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
                      Enfoque del proyecto
                    </span>

                    <p className="mt-3 text-sm leading-7 text-[#718096]">
                      Reducir la complejidad técnica detrás de la descarga y
                      conversión para ofrecer una herramienta de escritorio
                      directa y fácil de utilizar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              LINKS
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
                    DEVPASS CONVERTER
                  </span>

                  <h2 className="mt-3 font-poppins text-2xl font-semibold">
                    Explora el proyecto.
                  </h2>

                  <p className="mt-3 text-sm text-[#64748B]">
                    Código fuente y versiones compiladas disponibles en
                    GitHub.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/JAIMES4224D/Convertidor"
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

                  <a
                    href="https://github.com/JAIMES4224D/Convertidor/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-[#DCEBFF]
                      transition
                      hover:border-[#3DA5FF]/25
                    "
                  >
                    Releases ↗
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
              max-w-[1200px]
            "
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={900}
              className="
                max-h-[88vh]
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