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
  "https://github.com/JAIMES4224D/Telemedicina";

const images = [
  {
    src: "https://raw.githubusercontent.com/JAIMES4224D/Telemedicina/main/imagen_2025-10-18_153113123.png",
    alt: "Vista del módulo Paciente",
    title: "Módulo Paciente",
    description: "Gestión personal de salud y acceso a funcionalidades médicas.",
  },
  {
    src: "https://raw.githubusercontent.com/JAIMES4224D/Telemedicina/main/imagen_2025-10-18_153025840.png",
    alt: "Vista del módulo Médico",
    title: "Módulo Médico",
    description: "Herramientas profesionales para la gestión de pacientes.",
  },
  {
    src: "https://raw.githubusercontent.com/JAIMES4224D/Telemedicina/main/imagen_2025-10-18_153137976.png",
    alt: "Vista del módulo Administrador",
    title: "Módulo Administrador",
    description: "Administración de usuarios, permisos, métricas y configuración.",
  },
  {
    src: "https://raw.githubusercontent.com/JAIMES4224D/Telemedicina/main/imagen_2025-10-18_153344606.png",
    alt: "Interfaz principal del sistema",
    title: "Interfaz principal",
    description: "Punto de entrada al sistema de telemedicina.",
  },
  {
    src: "https://raw.githubusercontent.com/JAIMES4224D/Telemedicina/main/imagen_2025-10-18_154018272.png",
    alt: "Sistema de reportes",
    title: "Reportes",
    description: "Visualización de información y métricas administrativas.",
  },
  {
    src: "https://raw.githubusercontent.com/JAIMES4224D/Telemedicina/main/imagen_2025-10-18_154235752.png",
    alt: "Sistema de consultas virtuales",
    title: "Consultas virtuales",
    description: "Espacio orientado a la comunicación entre pacientes y médicos.",
  },
];

const roles = [
  {
    number: "01",
    icon: "P",
    title: "Paciente",
    description:
      "El paciente dispone de herramientas para gestionar sus citas, consultar su historial médico y mantener comunicación con profesionales de salud.",
    items: [
      "Agendamiento de citas",
      "Recordatorios automáticos",
      "Historial médico digital",
      "Resultados de exámenes",
      "Medicamentos recetados",
      "Mensajería con médicos",
    ],
  },
  {
    number: "02",
    icon: "M",
    title: "Médico",
    description:
      "El módulo médico concentra las herramientas necesarias para administrar la agenda, consultar información de pacientes y realizar seguimiento clínico.",
    items: [
      "Gestión de agenda",
      "Calendario integrado",
      "Control de disponibilidad",
      "Dashboard clínico",
      "Métricas de pacientes",
      "Prescripción y notas médicas",
    ],
  },
  {
    number: "03",
    icon: "A",
    title: "Administrador",
    description:
      "El administrador dispone de una visión global del sistema para gestionar usuarios, permisos, métricas y parámetros de configuración.",
    items: [
      "Gestión de usuarios",
      "Control de roles",
      "Permisos de acceso",
      "Reportes del sistema",
      "Métricas de uso",
      "Configuración y seguridad",
    ],
  },
];

const technologies = [
  {
    category: "LENGUAJE",
    name: "Java SE",
    description:
      "Base tecnológica utilizada para desarrollar la lógica de la aplicación.",
  },
  {
    category: "INTERFAZ",
    name: "Java Swing",
    description:
      "Tecnología utilizada para construir la interfaz gráfica de escritorio.",
  },
  {
    category: "ARQUITECTURA",
    name: "MVC",
    description:
      "Patrón utilizado para separar responsabilidades dentro de la aplicación.",
  },
  {
    category: "IDE",
    name: "NetBeans",
    description:
      "Entorno de desarrollo utilizado durante la construcción del sistema.",
  },
  {
    category: "DATABASE",
    name: "MySQL",
    description:
      "Sistema de gestión de base de datos utilizado para almacenar la información.",
  },
  {
    category: "CONEXIÓN",
    name: "JDBC",
    description:
      "Tecnología utilizada para establecer la comunicación entre Java y MySQL.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Gestión de citas",
    description:
      "El sistema contempla un mecanismo de agendamiento y administración de citas médicas.",
  },
  {
    number: "02",
    title: "Historial médico",
    description:
      "Los pacientes pueden acceder a información relacionada con su historial y resultados.",
  },
  {
    number: "03",
    title: "Comunicación",
    description:
      "Incluye funcionalidades orientadas a la comunicación directa entre pacientes y profesionales.",
  },
  {
    number: "04",
    title: "Reportes",
    description:
      "El módulo administrativo permite trabajar con reportes y métricas del sistema.",
  },
  {
    number: "05",
    title: "Multirol",
    description:
      "La aplicación diferencia las funcionalidades disponibles según el rol del usuario.",
  },
  {
    number: "06",
    title: "Tiempo real",
    description:
      "El proyecto incorpora funcionalidades orientadas a actualizaciones y comunicación en tiempo real.",
  },
];

const architecture = [
  {
    number: "01",
    title: "Usuario",
    description: "Paciente, médico o administrador.",
  },
  {
    number: "02",
    title: "Interfaz",
    description: "Java Swing para la interacción con el sistema.",
  },
  {
    number: "03",
    title: "Control",
    description: "Lógica de aplicación organizada mediante MVC.",
  },
  {
    number: "04",
    title: "JDBC",
    description: "Capa de comunicación entre la aplicación y la base de datos.",
  },
  {
    number: "05",
    title: "MySQL",
    description: "Persistencia de la información del sistema.",
  },
];

export default function TelemedicinaPage() {
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
    name: "Sistema de Telemedicina | Java, MySQL y MVC",
    description:
      "Sistema de telemedicina desarrollado con Java y Java Swing, utilizando arquitectura MVC, MySQL y JDBC para gestionar pacientes, médicos, citas, historial médico, comunicación y administración.",
    path: "/proyectos/telemedicina",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Proyectos", path: "/proyectos" },
    {
      name: "Telemedicina",
      path: "/proyectos/telemedicina",
    },
  ]);

  const softwareSchema = createSoftwareApplicationSchema({
    name: "Sistema de Telemedicina",
    description:
      "Aplicación de escritorio desarrollada con Java y Java Swing que utiliza arquitectura MVC, MySQL y JDBC para gestionar pacientes, médicos, citas, historial médico, comunicación, reportes y administración del sistema.",
    path: "/proyectos/telemedicina",
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
              left-[20%]
              top-[-260px]
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
              bottom-[-280px]
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
                  04 · SOFTWARE · SALUD
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
                      lg:text-[66px]
                    "
                  >
                    Sistema de
                    <br />

                    <span className="devpass-gradient-text">
                      Telemedicina.
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
                    Sistema de telemedicina orientado a conectar pacientes,
                    médicos y administradores mediante una plataforma de
                    escritorio con gestión de citas, historial médico,
                    comunicación y administración integral.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {[
                      "Java",
                      "Java Swing",
                      "MySQL",
                      "JDBC",
                      "MVC",
                      "NetBeans",
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

                {/* HERO VISUAL */}

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
                      unoptimized
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
                        from-[#020617]/80
                        via-transparent
                        to-transparent
                      "
                    />

                    <div className="absolute bottom-5 left-5">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A7D3FF]">
                        Telemedicina
                      </span>

                      <p className="mt-1 text-sm font-medium text-white">
                        Módulo Paciente
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
                    01 · VISIÓN
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
                    Tecnología aplicada a la atención médica.
                  </h2>
                </div>

                <div className="space-y-6 text-[15px] leading-8 text-[#94A3B8]">
                  <p>
                    El proyecto propone una solución integral de telemedicina
                    donde diferentes perfiles interactúan con el sistema según
                    sus responsabilidades.
                  </p>

                  <p>
                    La plataforma contempla tres roles principales:
                    <span className="text-[#CBD5E1]"> paciente, médico y administrador</span>,
                    cada uno con módulos y funcionalidades específicas.
                  </p>

                  <p>
                    La solución utiliza Java Swing para la interfaz de
                    escritorio, Java SE para la lógica de aplicación y MySQL
                    como sistema de almacenamiento mediante JDBC.
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
                  bg-white/[0.03]
                  sm:grid-cols-3
                "
              >
                <div className="bg-[#020617] p-7">
                  <span className="font-poppins text-3xl font-semibold text-[#A7D3FF]">
                    03
                  </span>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Roles principales
                  </p>

                  <p className="mt-1 text-xs text-[#475569]">
                    Paciente · Médico · Admin
                  </p>
                </div>

                <div className="bg-[#020617] p-7">
                  <span className="font-poppins text-3xl font-semibold text-[#A7D3FF]">
                    MVC
                  </span>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Arquitectura
                  </p>

                  <p className="mt-1 text-xs text-[#475569]">
                    Separación de responsabilidades
                  </p>
                </div>

                <div className="bg-[#020617] p-7">
                  <span className="font-poppins text-3xl font-semibold text-[#A7D3FF]">
                    MySQL
                  </span>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Persistencia
                  </p>

                  <p className="mt-1 text-xs text-[#475569]">
                    Conexión mediante JDBC
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              ROLES
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
                  02 · MULTIROL
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
                  Una plataforma. Tres perspectivas.
                </h2>

                <p className="mt-5 leading-8 text-[#94A3B8]">
                  Cada tipo de usuario dispone de funcionalidades adaptadas a
                  su interacción con el sistema.
                </p>
              </div>

              <div className="grid gap-5 lg:grid-cols-3">
                {roles.map((role, index) => (
                  <motion.article
                    key={role.number}
                    initial={{
                      opacity: 0,
                      y: 25,
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
                      delay: index * 0.08,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
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
                    <div
                      className="
                        absolute
                        right-0
                        top-0
                        h-32
                        w-32
                        rounded-full
                        bg-[#1E6BFF]/[0.06]
                        blur-3xl
                        transition-opacity
                        group-hover:opacity-100
                      "
                    />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-[#3DA5FF]">
                          {role.number}
                        </span>

                        <span
                          className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-[#3DA5FF]/15
                            bg-[#0A1F3D]
                            font-poppins
                            text-sm
                            font-semibold
                            text-[#A7D3FF]
                          "
                        >
                          {role.icon}
                        </span>
                      </div>

                      <h3 className="mt-9 font-poppins text-2xl font-semibold">
                        {role.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#718096]">
                        {role.description}
                      </p>

                      <div className="mt-7 space-y-3 border-t border-white/[0.06] pt-6">
                        {role.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 text-xs text-[#94A3B8]"
                          >
                            <span className="h-1 w-1 shrink-0 rounded-full bg-[#3DA5FF]" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* =================================================
              CAPABILITIES
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
                    03 · FUNCIONALIDADES
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
                    Un sistema pensado alrededor del flujo médico.
                  </h2>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {capabilities.map((item, index) => (
                    <motion.div
                      key={item.number}
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
                        duration: 0.45,
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
                      <span className="font-mono text-xs text-[#3DA5FF]">
                        {item.number}
                      </span>

                      <h3 className="mt-6 font-poppins text-lg font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#64748B]">
                        {item.description}
                      </p>
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
                    max-w-3xl
                    font-poppins
                    text-3xl
                    font-semibold
                    sm:text-4xl
                  "
                >
                  Una arquitectura organizada para separar interfaz, lógica y
                  datos.
                </h2>
              </div>

              <div className="rounded-3xl border border-[#3DA5FF]/10 bg-[#050D1A] p-6 sm:p-10">
                <div className="grid gap-3 lg:grid-cols-5">
                  {architecture.map((item, index) => (
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
                        <span className="font-mono text-[10px] text-[#3DA5FF]">
                          {item.number}
                        </span>

                        <h3 className="mt-5 font-poppins text-lg font-semibold">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-xs leading-6 text-[#64748B]">
                          {item.description}
                        </p>
                      </div>

                      {index < architecture.length - 1 && (
                        <div className="hidden items-center justify-center text-[#3DA5FF]/50 lg:flex">
                          →
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="
                  mt-7
                  grid
                  gap-4
                  md:grid-cols-3
                "
              >
                <div className="rounded-2xl border border-white/[0.06] bg-[#0A1F3D]/25 p-6">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#3DA5FF]">
                    INTERFAZ
                  </span>

                  <p className="mt-3 text-sm leading-7 text-[#94A3B8]">
                    Java Swing proporciona la capa de interacción visual de la
                    aplicación.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-[#0A1F3D]/25 p-6">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#3DA5FF]">
                    LÓGICA
                  </span>

                  <p className="mt-3 text-sm leading-7 text-[#94A3B8]">
                    Java SE y el patrón MVC organizan la lógica y las
                    responsabilidades del sistema.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-[#0A1F3D]/25 p-6">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#3DA5FF]">
                    DATOS
                  </span>

                  <p className="mt-3 text-sm leading-7 text-[#94A3B8]">
                    MySQL almacena la información y JDBC permite la conexión
                    con la aplicación.
                  </p>
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
                  Tecnologías implementadas.
                </h2>

                <p className="mt-5 leading-8 text-[#94A3B8]">
                  El proyecto combina desarrollo Java, arquitectura MVC,
                  interfaz gráfica de escritorio y persistencia mediante
                  MySQL.
                </p>
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
                      p-7
                      transition-all
                      duration-300
                      hover:border-[#3DA5FF]/20
                    "
                  >
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#3DA5FF]">
                      {technology.category}
                    </span>

                    <h3 className="mt-5 font-poppins text-xl font-semibold">
                      {technology.name}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#64748B]">
                      {technology.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* =================================================
              VISUAL GALLERY
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
                    06 · DEMOSTRACIÓN
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
                    Vistas principales del sistema.
                  </h2>
                </div>

                <p className="max-w-md text-sm leading-7 text-[#64748B]">
                  Explora las diferentes interfaces desarrolladas para los
                  usuarios del sistema.
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
                      unoptimized
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
                        from-[#020617]/85
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
                          Vista 0{index + 1}
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
              BENEFITS
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
                    07 · IMPACTO
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
                    Digitalizar procesos para mejorar la experiencia.
                  </h2>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    El proyecto plantea beneficios tanto para instituciones de
                    salud como para pacientes y profesionales.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Reducción de costos operativos",
                    "Optimización de recursos médicos",
                    "Digitalización de procesos",
                    "Escalabilidad del sistema",
                    "Acceso desde cualquier lugar",
                    "Reducción de tiempos de espera",
                    "Historial médico disponible",
                    "Comunicación con profesionales",
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit}
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
                        border-white/[0.06]
                        bg-[#050D1A]
                        p-5
                      "
                    >
                      <span
                        className="
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#1E6BFF]/10
                          text-xs
                          text-[#3DA5FF]
                        "
                      >
                        ✓
                      </span>

                      <span className="text-sm text-[#A7B4C8]">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
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
                    Una solución integral para gestionar la atención médica.
                  </h2>
                </div>

                <div>
                  <p className="text-lg leading-9 text-[#CBD5E1]">
                    Telemedicina reúne gestión de usuarios, citas, historial
                    médico, herramientas profesionales, reportes y
                    comunicación dentro de una misma plataforma.
                  </p>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    Desde el punto de vista de desarrollo, el proyecto
                    representa la construcción de una aplicación de escritorio
                    completa utilizando Java, Swing, MVC, MySQL y JDBC.
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
                      Conexión Médica del Futuro
                    </span>

                    <p className="mt-3 text-sm leading-7 text-[#718096]">
                      Un proyecto donde la tecnología se encuentra con el
                      cuidado de la salud.
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
                    TELEMEDICINA
                  </span>

                  <h2 className="mt-3 font-poppins text-2xl font-semibold">
                    Explora el código del proyecto.
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#64748B]">
                    Consulta el repositorio para conocer la implementación,
                    estructura y evolución del sistema.
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
              max-w-[1200px]
            "
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              unoptimized
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