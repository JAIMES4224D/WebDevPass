"use client";

import Link from "next/link";
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
  "https://github.com/JAIMES4224D/Sistema-Garage-";

const features = [
  {
    number: "01",
    title: "Registro automático",
    description:
      "Captura de placa y hora de entrada utilizando timestamp para registrar el ingreso del vehículo.",
  },
  {
    number: "02",
    title: "Control de salida",
    description:
      "Cálculo automático del tiempo de permanencia y de la tarifa correspondiente.",
  },
  {
    number: "03",
    title: "Tiempo real",
    description:
      "Visualización instantánea de los vehículos que permanecen actualmente en el estacionamiento.",
  },
  {
    number: "04",
    title: "Base de datos",
    description:
      "Historial integrado mediante SQL Server para conservar los registros de operación.",
  },
  {
    number: "05",
    title: "Reportes financieros",
    description:
      "Resumen de ingresos por jornada y período para facilitar el seguimiento financiero.",
  },
  {
    number: "06",
    title: "Exportación Excel",
    description:
      "Generación de reportes en formato .xlsx para su posterior análisis o gestión.",
  },
];

const technologies = [
  {
    category: "LENGUAJE",
    name: "C#",
    description:
      "Lenguaje principal utilizado para desarrollar la aplicación de escritorio.",
  },
  {
    category: "INTERFAZ",
    name: "Windows Forms",
    description:
      "Framework utilizado para construir la interfaz gráfica del sistema.",
  },
  {
    category: "PLATAFORMA",
    name: ".NET Framework",
    description:
      "Plataforma sobre la que se ejecuta la aplicación de escritorio.",
  },
  {
    category: "DATABASE",
    name: "SQL Server",
    description:
      "Motor de base de datos utilizado para almacenar el historial del sistema.",
  },
  {
    category: "DATA ACCESS",
    name: "ADO.NET",
    description:
      "Tecnología utilizada para la comunicación entre la aplicación y SQL Server.",
  },
  {
    category: "REPORTES",
    name: "Excel Interop",
    description:
      "Herramienta utilizada para generar reportes en formato Excel.",
  },
];

const architecture = [
  {
    number: "01",
    name: "Forms",
    description:
      "Contiene la interfaz principal y los recursos visuales de Windows Forms.",
  },
  {
    number: "02",
    name: "Models",
    description:
      "Define los modelos de datos utilizados por el sistema.",
  },
  {
    number: "03",
    name: "Database",
    description:
      "Gestiona la conexión y comunicación con la base de datos.",
  },
  {
    number: "04",
    name: "Program.cs",
    description:
      "Punto de entrada de la aplicación.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Ingreso",
    description:
      "El vehículo llega al garaje y se registra su placa.",
  },
  {
    number: "02",
    title: "Registro",
    description:
      "La entrada se almacena junto con su timestamp.",
  },
  {
    number: "03",
    title: "Permanencia",
    description:
      "El vehículo permanece visible entre los registros activos.",
  },
  {
    number: "04",
    title: "Salida",
    description:
      "Se registra la salida y se calcula automáticamente la permanencia.",
  },
  {
    number: "05",
    title: "Cobro",
    description:
      "El sistema determina la tarifa correspondiente.",
  },
  {
    number: "06",
    title: "Reporte",
    description:
      "La información puede exportarse a Excel.",
  },
];

const requirements = [
  {
    label: "Sistema operativo",
    value: "Windows 7 o superior",
  },
  {
    label: "Memoria RAM",
    value: "2 GB",
  },
  {
    label: ".NET Framework",
    value: "4.5 o superior",
  },
  {
    label: "SQL Server",
    value: "2012 o posterior",
  },
  {
    label: "IDE",
    value: "Visual Studio 2015+",
  },
];

export default function SistemaGaragePage() {

  const webPageSchema = createWebPageSchema({
    name: "SistemaGarage | Sistema de Gestión para Garajes y Estacionamientos",
    description:
      "Aplicación de escritorio desarrollada con C# y Windows Forms para gestionar vehículos, entradas, salidas, permanencia, cobros y reportes mediante SQL Server y Excel.",
    path: "/proyectos/sistema-garage",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Proyectos", path: "/proyectos" },
    {
      name: "SistemaGarage",
      path: "/proyectos/sistema-garage",
    },
  ]);

  const softwareSchema = createSoftwareApplicationSchema({
    name: "SistemaGarage",
    description:
      "Sistema de escritorio para la gestión de garajes y estacionamientos, desarrollado con C#, Windows Forms, .NET Framework y SQL Server, con funciones de control de vehículos, permanencia, tarifas y reportes.",
    path: "/proyectos/sistema-garage",
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
              left-[10%]
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
              right-[-180px]
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
                  SOFTWARE · C# · GESTIÓN
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
                    Sistema
                    <br />

                    <span className="devpass-gradient-text">
                      Garage.
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
                    Sistema integral de gestión para garajes y
                    estacionamientos, desarrollado como aplicación de
                    escritorio para digitalizar el registro de vehículos,
                    control de salidas, cobros y reportes.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {[
                      "C#",
                      "Windows Forms",
                      ".NET Framework",
                      "SQL Server",
                      "ADO.NET",
                      "Excel",
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

                    <Link
                      href="/proyectos"
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
                      Más proyectos
                    </Link>
                  </div>
                </div>

                {/* VISUAL SYSTEM */}

                <motion.div
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                  }}
                  className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-[#3DA5FF]/15
                    bg-[#050D1A]
                    p-3
                    shadow-[0_30px_90px_rgba(0,0,0,0.45)]
                  "
                >
                  <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#020617]">

                    {/* WINDOW HEADER */}

                    <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                      <div className="flex items-center gap-3">

                        <div className="flex gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-[#3DA5FF]/70" />
                          <span className="h-2 w-2 rounded-full bg-[#3DA5FF]/35" />
                          <span className="h-2 w-2 rounded-full bg-[#3DA5FF]/15" />
                        </div>

                        <span className="font-mono text-[10px] text-[#718096]">
                          SistemaGarage.exe
                        </span>

                      </div>

                      <span className="text-[9px] uppercase tracking-[0.15em] text-[#3DA5FF]">
                        ONLINE
                      </span>
                    </div>

                    {/* DASHBOARD */}

                    <div className="p-5 sm:p-7">

                      <div className="mb-6">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#64748B]">
                          SISTEMA GARAGE
                        </span>

                        <h3 className="mt-2 font-poppins text-xl font-semibold">
                          Panel principal
                        </h3>
                      </div>

                      <div className="grid grid-cols-3 gap-2">

                        <div className="rounded-xl border border-white/[0.06] bg-[#050D1A] p-4">
                          <span className="text-[9px] text-[#64748B]">
                            ACTIVOS
                          </span>

                          <div className="mt-2 font-poppins text-2xl font-semibold text-[#A7D3FF]">
                            08
                          </div>
                        </div>

                        <div className="rounded-xl border border-white/[0.06] bg-[#050D1A] p-4">
                          <span className="text-[9px] text-[#64748B]">
                            SALIDAS
                          </span>

                          <div className="mt-2 font-poppins text-2xl font-semibold text-[#A7D3FF]">
                            24
                          </div>
                        </div>

                        <div className="rounded-xl border border-white/[0.06] bg-[#050D1A] p-4">
                          <span className="text-[9px] text-[#64748B]">
                            INGRESOS
                          </span>

                          <div className="mt-2 font-poppins text-xl font-semibold text-[#A7D3FF]">
                            S/.
                          </div>
                        </div>

                      </div>

                      {/* TABLE */}

                      <div className="mt-4 overflow-hidden rounded-xl border border-white/[0.06]">

                        <div className="grid grid-cols-4 border-b border-white/[0.06] bg-[#050D1A] px-4 py-3">
                          <span className="font-mono text-[8px] uppercase text-[#64748B]">
                            ID
                          </span>

                          <span className="font-mono text-[8px] uppercase text-[#64748B]">
                            PLACA
                          </span>

                          <span className="font-mono text-[8px] uppercase text-[#64748B]">
                            ENTRADA
                          </span>

                          <span className="font-mono text-[8px] uppercase text-[#64748B]">
                            ESTADO
                          </span>
                        </div>

                        {[
                          ["01", "ABC-123", "09:30", "ACTIVO"],
                          ["02", "XYZ-789", "10:15", "ACTIVO"],
                          ["03", "MNO-456", "11:20", "ACTIVO"],
                        ].map((row) => (
                          <div
                            key={row[0]}
                            className="
                              grid
                              grid-cols-4
                              border-b
                              border-white/[0.04]
                              px-4
                              py-3
                              last:border-b-0
                            "
                          >
                            <span className="font-mono text-[9px] text-[#64748B]">
                              {row[0]}
                            </span>

                            <span className="font-mono text-[9px] text-[#A7B4C8]">
                              {row[1]}
                            </span>

                            <span className="font-mono text-[9px] text-[#718096]">
                              {row[2]}
                            </span>

                            <span className="text-[8px] text-[#3DA5FF]">
                              ● {row[3]}
                            </span>
                          </div>
                        ))}

                      </div>

                      <div className="mt-4 flex items-center justify-between rounded-xl border border-[#3DA5FF]/10 bg-[#0A1F3D]/30 px-4 py-4">
                        <span className="text-[9px] uppercase tracking-[0.15em] text-[#64748B]">
                          Sistema operativo
                        </span>

                        <span className="font-mono text-[9px] text-[#A7D3FF]">
                          WINDOWS
                        </span>
                      </div>

                    </div>
                  </div>
                </motion.div>

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
                    01 · EL PROYECTO
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
                    Digitalizar la operación de un garaje.
                  </h2>
                </div>

                <div className="space-y-6 text-[15px] leading-8 text-[#94A3B8]">

                  <p>
                    SistemaGarage fue planteado como una solución de escritorio
                    para pequeños y medianos negocios que necesitan controlar
                    sus operaciones de estacionamiento de manera organizada.
                  </p>

                  <p>
                    El sistema permite registrar vehículos, controlar sus
                    entradas y salidas, calcular la permanencia y administrar
                    la información mediante una base de datos SQL Server.
                  </p>

                  <p>
                    Además, incorpora reportes financieros y exportación a
                    Excel, permitiendo llevar la información operacional a
                    formatos útiles para análisis y gestión.
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
                    C#
                  </span>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Lenguaje principal
                  </p>
                </div>

                <div className="bg-[#020617] p-7">
                  <span className="font-poppins text-3xl font-semibold text-[#A7D3FF]">
                    SQL
                  </span>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Persistencia de datos
                  </p>
                </div>

                <div className="bg-[#020617] p-7">
                  <span className="font-poppins text-3xl font-semibold text-[#A7D3FF]">
                    XLSX
                  </span>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Exportación de reportes
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
                  02 · FUNCIONALIDADES
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
                  Las operaciones esenciales del garaje.
                </h2>

                <p className="mt-5 leading-8 text-[#94A3B8]">
                  El sistema concentra las principales operaciones necesarias
                  para administrar vehículos y controlar los ingresos.
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
                          bg-[#3DA5FF]/70
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
              WORKFLOW
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
                    Del ingreso del vehículo al reporte.
                  </h2>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    El flujo del sistema sigue el proceso operativo de un
                    estacionamiento desde el registro hasta la generación de
                    información.
                  </p>

                </div>

                <div className="space-y-3">

                  {workflow.map((item, index) => (

                    <motion.div
                      key={item.number}
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
                        duration: 0.4,
                        delay: index * 0.05,
                      }}
                      className="
                        group
                        flex
                        gap-5
                        rounded-2xl
                        border
                        border-white/[0.07]
                        bg-[#050D1A]
                        p-5
                        transition
                        hover:border-[#3DA5FF]/20
                      "
                    >

                      <span
                        className="
                          flex
                          h-9
                          w-9
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
                        {item.number}
                      </span>

                      <div>

                        <h3 className="font-poppins text-sm font-semibold">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-[#64748B]">
                          {item.description}
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
                  Una estructura de proyecto clara.
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-[#94A3B8]">
                  El proyecto organiza la aplicación separando la interfaz,
                  modelos, conexión con la base de datos y punto de entrada.
                </p>

              </div>

              <div
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.07]
                  bg-[#050D1A]
                "
              >

                <div className="border-b border-white/[0.06] px-6 py-4">

                  <div className="flex items-center gap-2">

                    <span className="h-2 w-2 rounded-full bg-[#3DA5FF]/60" />

                    <span className="font-mono text-xs text-[#64748B]">
                      Sistema-Garage-
                    </span>

                  </div>

                </div>

                <div className="grid md:grid-cols-2">

                  {architecture.map((item, index) => (

                    <div
                      key={item.number}
                      className={`
                        border-white/[0.06]
                        p-7
                        ${
                          index < 2
                            ? "border-b"
                            : ""
                        }
                        ${
                          index % 2 === 0
                            ? "md:border-r"
                            : ""
                        }
                      `}
                    >

                      <div className="flex items-center gap-4">

                        <span className="font-mono text-xs text-[#3DA5FF]">
                          {item.number}
                        </span>

                        <span className="font-mono text-sm text-[#DCEBFF]">
                          {item.name}
                        </span>

                      </div>

                      <p className="mt-4 text-sm leading-7 text-[#64748B]">
                        {item.description}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

              {/* TREE */}

              <div className="mt-6 rounded-2xl border border-white/[0.06] bg-[#020617] p-6">

                <pre className="overflow-x-auto font-mono text-xs leading-7 text-[#718096]">
{`SistemaGarage/
├── Forms/
│   ├── Form1.cs
│   ├── Form1.Designer.cs
│   └── Form1.resx
│
├── Models/
│   └── Vehiculo.cs
│
├── Database/
│   └── Conexion.cs
│
├── Program.cs
│
└── Properties/`}
                </pre>

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
                    05 · PERSISTENCIA
                  </span>

                  <h2
                    className="
                      mt-5
                      font-poppins
                      text-3xl
                      font-semibold
                    "
                  >
                    SQL Server.
                  </h2>

                </div>

                <div>

                  <p className="text-lg leading-9 text-[#CBD5E1]">
                    El sistema integra un historial de vehículos mediante
                    <span className="text-[#A7D3FF]">
                      {" "}SQL Server
                    </span>.
                  </p>

                  <p className="mt-5 text-sm leading-8 text-[#718096]">
                    La conexión se configura mediante una cadena de conexión
                    en <span className="font-mono text-[#A7D3FF]">
                      App.config
                    </span>
                    , permitiendo establecer los parámetros del servidor y
                    de la base de datos.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">

                    <div className="rounded-xl border border-white/[0.07] bg-[#020617] p-4">
                      <span className="text-[9px] uppercase tracking-[0.15em] text-[#64748B]">
                        MOTOR
                      </span>

                      <p className="mt-2 text-sm text-[#A7B4C8]">
                        SQL Server
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/[0.07] bg-[#020617] p-4">
                      <span className="text-[9px] uppercase tracking-[0.15em] text-[#64748B]">
                        ACCESO
                      </span>

                      <p className="mt-2 text-sm text-[#A7B4C8]">
                        ADO.NET
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/[0.07] bg-[#020617] p-4">
                      <span className="text-[9px] uppercase tracking-[0.15em] text-[#64748B]">
                        CONFIG
                      </span>

                      <p className="mt-2 font-mono text-sm text-[#A7B4C8]">
                        App.config
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </section>

          {/* =================================================
              REPORTING
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
                    06 · REPORTES
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
                    Información lista para analizar.
                  </h2>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    El sistema incorpora reportes financieros y exportación de
                    información para facilitar el seguimiento de los ingresos.
                  </p>

                </div>

                <div className="grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl border border-white/[0.07] bg-[#050D1A] p-7">

                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#3DA5FF]">
                      FINANZAS
                    </span>

                    <h3 className="mt-5 font-poppins text-xl font-semibold">
                      Reportes financieros
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#718096]">
                      Resumen de ingresos organizados por jornada y período.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/[0.07] bg-[#050D1A] p-7">

                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#3DA5FF]">
                      EXPORTACIÓN
                    </span>

                    <h3 className="mt-5 font-poppins text-xl font-semibold">
                      Excel
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#718096]">
                      Generación de archivos .xlsx para trabajar con los datos
                      fuera de la aplicación.
                    </p>

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
                  Una arquitectura orientada a aplicaciones de escritorio
                  Windows, persistencia de datos y generación de reportes.
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
              REQUIREMENTS
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
                    08 · ENTORNO
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
                    Requisitos del sistema.
                  </h2>

                  <p className="mt-5 leading-8 text-[#94A3B8]">
                    El proyecto está orientado a entornos Windows con .NET
                    Framework y SQL Server.
                  </p>

                </div>

                <div className="overflow-hidden rounded-2xl border border-white/[0.07]">

                  {requirements.map((requirement) => (

                    <div
                      key={requirement.label}
                      className="
                        flex
                        items-center
                        justify-between
                        gap-5
                        border-b
                        border-white/[0.06]
                        bg-[#050D1A]
                        px-6
                        py-5
                        last:border-b-0
                      "
                    >

                      <span className="text-sm text-[#718096]">
                        {requirement.label}
                      </span>

                      <span className="text-right text-sm text-[#A7B4C8]">
                        {requirement.value}
                      </span>

                    </div>

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
                    Una solución de escritorio para la operación diaria.
                  </h2>

                </div>

                <div>

                  <p className="text-lg leading-9 text-[#CBD5E1]">
                    SistemaGarage integra en una única aplicación el control
                    de vehículos, permanencia, tarifas, historial y
                    generación de reportes.
                  </p>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    El proyecto muestra una implementación de software de
                    escritorio utilizando C#, Windows Forms y SQL Server,
                    orientada a resolver un proceso operativo concreto.
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
                      SistemaGarage
                    </span>

                    <p className="mt-3 text-sm leading-7 text-[#718096]">
                      Sistema integral de gestión para garajes y
                      estacionamientos.
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
                    SISTEMAGARAGE
                  </span>

                  <h2 className="mt-3 font-poppins text-2xl font-semibold">
                    Explora el código del proyecto.
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#64748B]">
                    Revisa la implementación y estructura completa del sistema
                    en GitHub.
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
    </>
  );
}