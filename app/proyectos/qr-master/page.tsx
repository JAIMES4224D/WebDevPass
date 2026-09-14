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

const GITHUB = "https://github.com/JAIMES4224D/QR-Master-Pro";

/* ============================================================
   IMÁGENES LOCALES
   ============================================================ */

const SCREENSHOTS = {
  main: "/images/proyectos/qr-master/Captura.png",
  customization: "/images/proyectos/qr-master/Captura1.png",
  generation: "/images/proyectos/qr-master/Captura2.png",
};

const features = [
  {
    number: "01",
    title: "Generación de QR",
    description:
      "Genera códigos QR a partir de URLs, texto, vCard, credenciales Wi-Fi, correos, SMS, ubicaciones y eventos.",
  },
  {
    number: "02",
    title: "Vista previa en tiempo real",
    description:
      "Los cambios realizados sobre el contenido y diseño pueden visualizarse inmediatamente dentro de la aplicación.",
  },
  {
    number: "03",
    title: "Personalización visual",
    description:
      "Permite configurar colores HEX, tamaño, márgenes, corrección de errores e insertar un logo central.",
  },
  {
    number: "04",
    title: "Exportación profesional",
    description:
      "Generación de imágenes PNG de alta resolución con configuración de tamaño y DPI orientada a impresión.",
  },
  {
    number: "05",
    title: "Plantillas",
    description:
      "Incluye configuraciones predefinidas como Corporate, Minimal y Creative para acelerar el diseño.",
  },
  {
    number: "06",
    title: "Validación",
    description:
      "Incorpora herramientas para comprobar contraste, densidad y legibilidad del código generado.",
  },
];

const contentTypes = [
  {
    number: "01",
    name: "URL",
    example: "https://ejemplo.com",
  },
  {
    number: "02",
    name: "Texto",
    example: "Información personalizada",
  },
  {
    number: "03",
    name: "vCard",
    example: "Tarjeta de contacto",
  },
  {
    number: "04",
    name: "Wi-Fi",
    example: "WIFI:S:SSID;T:WPA;P:...",
  },
  {
    number: "05",
    name: "E-mail",
    example: "mailto:ejemplo@email.com",
  },
  {
    number: "06",
    name: "SMS",
    example: "smsto:+51999999999",
  },
  {
    number: "07",
    name: "Ubicación",
    example: "Coordenadas geográficas",
  },
  {
    number: "08",
    name: "Eventos",
    example: "Calendario y recordatorios",
  },
];

const technologies = [
  {
    category: "LANGUAGE",
    name: "Python 3.8+",
    description:
      "Lenguaje principal utilizado para desarrollar la aplicación.",
  },
  {
    category: "QR ENGINE",
    name: "qrcode",
    description:
      "Biblioteca utilizada para la generación de los códigos QR.",
  },
  {
    category: "IMAGE",
    name: "Pillow",
    description:
      "Procesamiento de imágenes, logos y generación del resultado visual.",
  },
  {
    category: "GUI",
    name: "Tkinter",
    description:
      "Base utilizada para construir la interfaz gráfica de la aplicación.",
  },
  {
    category: "DRAG & DROP",
    name: "tkinterdnd2",
    description:
      "Soporte para interacción mediante arrastrar y soltar.",
  },
];

const correctionLevels = [
  {
    level: "L",
    recovery: "~7%",
    use: "Texto simple, sin logo",
  },
  {
    level: "M",
    recovery: "~15%",
    use: "Uso general, QR pequeños",
  },
  {
    level: "Q",
    recovery: "~25%",
    use: "QR con logo, impresión",
  },
  {
    level: "H",
    recovery: "~30%",
    use: "Logo grande y aplicaciones críticas",
  },
];

const cliParameters = [
  ["--text", "Contenido del QR", "Texto o URL"],
  ["--size", "Tamaño", "100–3000 px"],
  ["--background", "Color de fondo", "HEX"],
  ["--foreground", "Color de módulos", "HEX"],
  ["--margin", "Margen", "0–50 px"],
  ["--error-correction", "Corrección", "L / M / Q / H"],
  ["--logo", "Logo", "PNG / JPG"],
  ["--logo-size", "Tamaño del logo", "10–30%"],
  ["--dpi", "Resolución", "72–600"],
  ["--output", "Archivo de salida", "nombre.png"],
];

const printProfiles = [
  {
    use: "Web / Redes",
    size: "500 px",
    dpi: "72",
    margin: "8 px",
  },
  {
    use: "Documentos",
    size: "1000 px",
    dpi: "150",
    margin: "12 px",
  },
  {
    use: "Impresión estándar",
    size: "2000 px",
    dpi: "300",
    margin: "16 px",
  },
  {
    use: "Impresión profesional",
    size: "3000 px",
    dpi: "600",
    margin: "20 px",
  },
];

const faq = [
  {
    question: "¿Puedo utilizar un logo dentro del código QR?",
    answer:
      "Sí. La documentación recomienda limitar el logo al 20% del área total, mantener una zona silenciosa de 4 módulos y utilizar el nivel de corrección H cuando se incorpora un logo.",
  },
  {
    question: "¿Qué tipos de contenido puedo convertir en QR?",
    answer:
      "El proyecto contempla URLs, texto, vCard, credenciales Wi-Fi, correos electrónicos, SMS, ubicaciones y eventos.",
  },
  {
    question: "¿Puedo cambiar los colores?",
    answer:
      "Sí. La aplicación permite configurar mediante HEX tanto el color de fondo como el color de los módulos del código.",
  },
  {
    question: "¿Qué tamaño puedo utilizar?",
    answer:
      "La herramienta documenta un rango de 100 px hasta 3000 px, permitiendo generar códigos orientados tanto a pantalla como a impresión.",
  },
  {
    question: "¿Puedo utilizar la aplicación desde la línea de comandos?",
    answer:
      "Sí. QR Master Pro incluye parámetros CLI para generar códigos de forma automatizada y controlar tamaño, colores, margen, logo, DPI y nivel de corrección.",
  },
];

export default function QRMasterPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ============================================================
     ESC PARA CERRAR LIGHTBOX
     ============================================================ */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* ============================================================
     BLOQUEAR SCROLL CON LIGHTBOX
     ============================================================ */

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

   const webPageSchema = createWebPageSchema({
    name: "QR Master Pro | Generador de Códigos QR con Python",
    description:
      "Generador de códigos QR desarrollado con Python, Tkinter, Pillow y qrcode, con personalización visual, vista previa en tiempo real, exportación PNG y soporte mediante línea de comandos.",
    path: "/proyectos/qr-master",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Proyectos", path: "/proyectos" },
    {
      name: "QR Master Pro",
      path: "/proyectos/qr-master",
    },
  ]);

  const softwareSchema = createSoftwareApplicationSchema({
    name: "QR Master Pro",
    description:
      "Aplicación de escritorio desarrollada con Python para generar y personalizar códigos QR, con soporte para diferentes tipos de contenido, logos, corrección de errores, exportación PNG y generación mediante CLI.",
    path: "/proyectos/qr-master",
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
              left-[5%]
              top-[-300px]
              h-[720px]
              w-[720px]
              rounded-full
              bg-[#1E6BFF]/[0.04]
              blur-[180px]
            "
          />

          <div
            className="
              absolute
              right-[-250px]
              top-[35%]
              h-[700px]
              w-[700px]
              rounded-full
              bg-[#3DA5FF]/[0.025]
              blur-[180px]
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
                  PYTHON · QR · DESIGN TOOL
                </span>
              </div>

              <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
                {/* COPY */}

                <div>
                  <h1
                    className="
                      font-poppins
                      text-4xl
                      font-semibold
                      leading-[1.03]
                      tracking-[-0.05em]
                      sm:text-5xl
                      lg:text-[64px]
                    "
                  >
                    QR Master
                    <br />

                    <span className="devpass-gradient-text">Pro.</span>
                  </h1>

                  <p
                    className="
                      mt-7
                      max-w-xl
                      text-[15px]
                      leading-8
                      text-[#7F8EA3]
                      sm:text-base
                    "
                  >
                    Generador de códigos QR elegante, personalizable y con
                    vista previa en tiempo real, desarrollado como herramienta
                    para crear códigos orientados tanto a entornos digitales
                    como a impresión profesional.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {[
                      "Python",
                      "Tkinter",
                      "Pillow",
                      "qrcode",
                      "CLI",
                      "PNG",
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
                      href="#galeria"
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
                      Ver interfaz
                      <span>↓</span>
                    </a>
                  </div>
                </div>

                {/* HERO IMAGE */}

                <motion.button
                  type="button"
                  onClick={() => setSelectedImage(SCREENSHOTS.main)}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                  }}
                  aria-label="Ampliar captura principal de QR Master Pro"
                  className="
                    group
                    relative
                    block
                    w-full
                    overflow-hidden
                    rounded-3xl
                    border
                    border-[#3DA5FF]/15
                    bg-[#050D1A]
                    p-3
                    text-left
                    shadow-[0_30px_90px_rgba(0,0,0,0.5)]
                  "
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/[0.06]">
                    <Image
                      src={SCREENSHOTS.main}
                      alt="Interfaz principal de QR Master Pro"
                      width={1400}
                      height={900}
                      priority
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="
                        h-auto
                        w-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-[1.02]
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#020617]/50
                        via-transparent
                        to-transparent
                      "
                    />

                    <div
                      className="
                        absolute
                        bottom-5
                        left-5
                        rounded-xl
                        border
                        border-white/10
                        bg-[#020617]/75
                        px-4
                        py-3
                        backdrop-blur-xl
                      "
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#3DA5FF]" />

                        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#A7D3FF]">
                          QR MASTER PRO
                        </span>
                      </div>

                      <p className="mt-1 text-[10px] text-[#718096]">
                        Click para ampliar
                      </p>
                    </div>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </section>

          {/* =================================================
              INTRO
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
                    Crear un QR no debería significar sacrificar diseño.
                  </h2>
                </div>

                <div className="space-y-6 text-[15px] leading-8 text-[#94A3B8]">
                  <p>
                    QR Master Pro fue desarrollado como una herramienta para
                    generar códigos QR personalizados desde una interfaz
                    gráfica, evitando procesos innecesariamente complejos.
                  </p>

                  <p>
                    El proyecto combina generación de códigos, personalización
                    visual y exportación en una sola aplicación.
                  </p>

                  <p>
                    Su objetivo es ofrecer una herramienta práctica para
                    desarrolladores, diseñadores y marcas que necesiten
                    producir códigos QR con mayor control sobre el resultado.
                  </p>
                </div>
              </div>

              <div className="mt-20 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/[0.06] bg-[#050D1A] p-7">
                  <span className="font-poppins text-3xl font-semibold text-[#A7D3FF]">
                    3000
                  </span>

                  <p className="mt-2 text-sm text-[#64748B]">
                    px de tamaño máximo documentado
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-[#050D1A] p-7">
                  <span className="font-poppins text-3xl font-semibold text-[#A7D3FF]">
                    600
                  </span>

                  <p className="mt-2 text-sm text-[#64748B]">
                    DPI máximos para impresión
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-[#050D1A] p-7">
                  <span className="font-poppins text-3xl font-semibold text-[#A7D3FF]">
                    H
                  </span>

                  <p className="mt-2 text-sm text-[#64748B]">
                    mayor nivel de corrección
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
                  02 · CAPACIDADES
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
                  Una herramienta construida para controlar cada detalle.
                </h2>
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
                      hover:bg-[#071426]
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#3DA5FF]">
                        {feature.number}
                      </span>

                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#3DA5FF]/60
                          transition-all
                          group-hover:bg-[#3DA5FF]
                          group-hover:shadow-[0_0_12px_rgba(61,165,255,0.8)]
                        "
                      />
                    </div>

                    <h3 className="mt-9 font-poppins text-xl font-semibold">
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
              GALLERY
          ================================================== */}

          <section
            id="galeria"
            className="border-b border-white/[0.06] py-24"
          >
            <div className="devpass-container">
              <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
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
                    03 · INTERFAZ
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
                    La herramienta, por dentro.
                  </h2>

                  <p className="mt-5 max-w-2xl leading-8 text-[#94A3B8]">
                    Capturas reales de QR Master Pro. Haz clic sobre cualquier
                    imagen para verla en detalle.
                  </p>
                </div>

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#475569]">
                  REAL UI · 2026
                </span>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                {/* SCREEN 01 */}

                <motion.button
                  type="button"
                  onClick={() => setSelectedImage(SCREENSHOTS.main)}
                  whileHover={{ y: -3 }}
                  aria-label="Ampliar interfaz principal"
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-[#050D1A]
                    text-left
                  "
                >
                  <Image
                    src={SCREENSHOTS.main}
                    alt="Interfaz principal de QR Master Pro"
                    width={1400}
                    height={900}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="
                      h-auto
                      w-full
                      transition
                      duration-500
                      group-hover:scale-[1.02]
                    "
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020617]/95 to-transparent p-6 pt-16">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#3DA5FF]">
                      SCREEN 01
                    </span>

                    <p className="mt-2 text-sm font-medium text-white">
                      Interfaz principal
                    </p>
                  </div>
                </motion.button>

                {/* SCREEN 02 */}

                <motion.button
                  type="button"
                  onClick={() =>
                    setSelectedImage(SCREENSHOTS.customization)
                  }
                  whileHover={{ y: -3 }}
                  aria-label="Ampliar pantalla de personalización"
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-[#050D1A]
                    text-left
                  "
                >
                  <Image
                    src={SCREENSHOTS.customization}
                    alt="Personalización de QR Master Pro"
                    width={1400}
                    height={900}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="
                      h-auto
                      w-full
                      transition
                      duration-500
                      group-hover:scale-[1.02]
                    "
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020617]/95 to-transparent p-6 pt-16">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#3DA5FF]">
                      SCREEN 02
                    </span>

                    <p className="mt-2 text-sm font-medium text-white">
                      Personalización
                    </p>
                  </div>
                </motion.button>

                {/* SCREEN 03 */}

                <motion.button
                  type="button"
                  onClick={() => setSelectedImage(SCREENSHOTS.generation)}
                  whileHover={{ y: -3 }}
                  aria-label="Ampliar pantalla de generación"
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-[#050D1A]
                    text-left
                    lg:col-span-2
                  "
                >
                  <Image
                    src={SCREENSHOTS.generation}
                    alt="Configuración y generación de QR Master Pro"
                    width={1800}
                    height={1000}
                    sizes="(max-width: 1024px) 100vw, 100vw"
                    className="
                      h-auto
                      max-h-[620px]
                      w-full
                      object-cover
                      object-top
                      transition
                      duration-500
                      group-hover:scale-[1.015]
                    "
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020617]/95 to-transparent p-6 pt-16">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#3DA5FF]">
                      SCREEN 03
                    </span>

                    <p className="mt-2 text-sm font-medium text-white">
                      Flujo de generación
                    </p>
                  </div>
                </motion.button>
              </div>
            </div>
          </section>

          {/* =================================================
              CONTENT TYPES
          ================================================== */}

          <section className="border-b border-white/[0.06] py-24">
            <div className="devpass-container">
              <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
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
                    04 · FORMATOS
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
                    Diferentes tipos de contenido.
                  </h2>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    La aplicación no está limitada a simples URLs. La
                    documentación contempla diferentes estructuras de
                    información.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {contentTypes.map((item, index) => (
                    <motion.div
                      key={item.name}
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
                        duration: 0.35,
                        delay: index * 0.04,
                      }}
                      className="
                        rounded-2xl
                        border
                        border-white/[0.07]
                        bg-[#050D1A]
                        p-5
                        transition
                        hover:border-[#3DA5FF]/20
                      "
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] text-[#3DA5FF]">
                          {item.number}
                        </span>

                        <span className="text-[8px] uppercase tracking-[0.15em] text-[#475569]">
                          QR
                        </span>
                      </div>

                      <h3 className="mt-5 font-poppins text-sm font-semibold">
                        {item.name}
                      </h3>

                      <p className="mt-2 truncate font-mono text-[9px] text-[#64748B]">
                        {item.example}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              ERROR CORRECTION
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
                  05 · CORRECCIÓN
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
                  Control sobre la tolerancia del código.
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-[#94A3B8]">
                  QR Master Pro permite seleccionar diferentes niveles de
                  corrección de errores según el uso del código.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/[0.07]">
                <div className="hidden grid-cols-[100px_160px_1fr] border-b border-white/[0.06] bg-[#050D1A] px-6 py-4 sm:grid">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-[#475569]">
                    NIVEL
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.15em] text-[#475569]">
                    RECUPERACIÓN
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.15em] text-[#475569]">
                    USO
                  </span>
                </div>

                {correctionLevels.map((item) => (
                  <div
                    key={item.level}
                    className="
                      grid
                      gap-3
                      border-b
                      border-white/[0.06]
                      bg-[#020617]
                      px-6
                      py-5
                      last:border-b-0
                      sm:grid-cols-[100px_160px_1fr]
                      sm:items-center
                    "
                  >
                    <span className="font-poppins text-xl font-semibold text-[#A7D3FF]">
                      {item.level}
                    </span>

                    <span className="font-mono text-xs text-[#3DA5FF]">
                      {item.recovery}
                    </span>

                    <span className="text-sm text-[#718096]">
                      {item.use}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =================================================
              CLI
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
                    06 · CLI
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
                    También desde terminal.
                  </h2>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    Además de la interfaz gráfica, la documentación incluye
                    ejemplos de uso mediante línea de comandos.
                  </p>
                </div>

                <div>
                  <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#050D1A]">
                    <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-4">
                      <div className="flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#3DA5FF]/70" />
                        <span className="h-2 w-2 rounded-full bg-[#3DA5FF]/35" />
                        <span className="h-2 w-2 rounded-full bg-[#3DA5FF]/15" />
                      </div>

                      <span className="font-mono text-[9px] text-[#64748B]">
                        terminal
                      </span>
                    </div>

                    <div className="overflow-x-auto p-6">
                      <pre className="font-mono text-[11px] leading-7 text-[#718096]">
{`python QR_Master_Pro_Design.py \\
  --text "https://github.com/JAIMES4224D" \\
  --size 1200 \\
  --background "#0f1724" \\
  --foreground "#00b4d8" \\
  --margin 12 \\
  --error-correction H \\
  --dpi 300 \\
  --output "qr_profesional.png"`}
                      </pre>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {cliParameters.map((parameter) => (
                      <div
                        key={parameter[0]}
                        className="
                          rounded-xl
                          border
                          border-white/[0.06]
                          bg-[#050D1A]
                          p-4
                        "
                      >
                        <code className="font-mono text-[10px] text-[#3DA5FF]">
                          {parameter[0]}
                        </code>

                        <p className="mt-2 text-xs text-[#A7B4C8]">
                          {parameter[1]}
                        </p>

                        <p className="mt-1 text-[9px] text-[#475569]">
                          {parameter[2]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              PRINT
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
                  07 · EXPORTACIÓN
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
                  Diseñado también para impresión.
                </h2>

                <p className="mt-5 leading-8 text-[#94A3B8]">
                  La documentación incluye configuraciones específicas según
                  el destino final del código QR.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {printProfiles.map((profile, index) => (
                  <motion.div
                    key={profile.use}
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
                    "
                  >
                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#3DA5FF]">
                      {profile.use}
                    </span>

                    <div className="mt-7">
                      <p className="font-poppins text-2xl font-semibold text-[#A7D3FF]">
                        {profile.size}
                      </p>

                      <p className="mt-2 text-xs text-[#64748B]">tamaño</p>
                    </div>

                    <div className="mt-6 flex justify-between border-t border-white/[0.06] pt-5">
                      <div>
                        <p className="font-mono text-xs text-[#CBD5E1]">
                          {profile.dpi}
                        </p>

                        <p className="mt-1 text-[9px] text-[#475569]">
                          DPI
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="font-mono text-xs text-[#CBD5E1]">
                          {profile.margin}
                        </p>

                        <p className="mt-1 text-[9px] text-[#475569]">
                          MARGEN
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
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
                  08 · STACK
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

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                      transition
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
              FAQ
          ================================================== */}

          <section className="border-b border-white/[0.06] py-24">
            <div className="devpass-container">
              <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
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
                    09 · FAQ
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
                    Preguntas frecuentes.
                  </h2>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    Algunos detalles técnicos documentados en el proyecto.
                  </p>
                </div>

                <div className="space-y-3">
                  {faq.map((item, index) => {
                    const isOpen = openFaq === index;

                    return (
                      <div
                        key={item.question}
                        className="
                          overflow-hidden
                          rounded-2xl
                          border
                          border-white/[0.07]
                          bg-[#050D1A]
                        "
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenFaq(isOpen ? null : index)
                          }
                          aria-expanded={isOpen}
                          className="
                            flex
                            w-full
                            items-center
                            justify-between
                            gap-6
                            px-6
                            py-5
                            text-left
                          "
                        >
                          <span className="text-sm font-medium text-[#CBD5E1]">
                            {item.question}
                          </span>

                          <span
                            className={`
                              text-xl
                              text-[#3DA5FF]
                              transition-transform
                              duration-300
                              ${isOpen ? "rotate-45" : ""}
                            `}
                          >
                            +
                          </span>
                        </button>

                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-sm leading-7 text-[#64748B]">
                            {item.answer}
                          </p>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
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
                    10 · RESULTADO
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
                    Una herramienta completa para generar QR.
                  </h2>
                </div>

                <div>
                  <p className="text-lg leading-9 text-[#CBD5E1]">
                    QR Master Pro reúne generación, personalización,
                    previsualización y exportación en una única herramienta.
                  </p>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    El proyecto muestra cómo una aplicación de escritorio puede
                    convertir una tarea aparentemente sencilla en una
                    experiencia más controlada, configurable y orientada a
                    diferentes escenarios de uso.
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
                      QR Master Pro
                    </span>

                    <p className="mt-3 text-sm leading-7 text-[#718096]">
                      Generación · Diseño · Validación · Exportación
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
                    QR MASTER PRO
                  </span>

                  <h2 className="mt-3 font-poppins text-2xl font-semibold">
                    Explora el proyecto en GitHub.
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#64748B]">
                    Revisa el código, documentación y evolución de la
                    herramienta.
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

      {/* =====================================================
          IMAGE LIGHTBOX
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
            p-4
            backdrop-blur-xl
            sm:p-8
          "
          onClick={() => setSelectedImage(null)}
        >
          {/* CLOSE */}

          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar imagen"
            className="
              absolute
              right-5
              top-5
              z-20
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-[#050D1A]
              text-xl
              text-[#A7B4C8]
              transition
              hover:border-[#3DA5FF]/30
              hover:text-white
            "
          >
            ×
          </button>

          {/* IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              relative
              max-h-[90vh]
              max-w-[1400px]
              overflow-hidden
              rounded-2xl
              border
              border-[#3DA5FF]/15
              bg-[#050D1A]
              shadow-[0_30px_100px_rgba(0,0,0,0.7)]
            "
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Vista ampliada de QR Master Pro"
              width={1800}
              height={1200}
              sizes="90vw"
              className="
                max-h-[88vh]
                w-auto
                max-w-full
                object-contain
              "
            />
          </motion.div>
        </div>
      )}

      <Footer />
    </>
  );
}