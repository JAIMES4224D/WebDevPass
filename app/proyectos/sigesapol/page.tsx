"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createBreadcrumbSchema,
  createSoftwareApplicationSchema,
} from "@/lib/seo/schema";

/* =========================================================
   IMÁGENES PÚBLICAS DEL REPOSITORIO GITHUB
========================================================= */

const GITHUB_IMG =
  "https://raw.githubusercontent.com/JAIMES4224D/SIGESAPOL/main/img";

const auditTests = [
  {
    number: "01",
    tool: "nslookup",
    title: "Resolución DNS",
    description:
      "Verificación de la resolución del dominio institucional y obtención de la dirección IP asociada.",
    command: "nslookup sigesapol.dirsapolpnp.gob.pe",
    result: "181.176.32.82",
    status: "Correcto",
  },
  {
    number: "02",
    tool: "ping",
    title: "Conectividad ICMP",
    description:
      "Comprobación de disponibilidad del servidor y medición de la latencia de comunicación.",
    command: "ping -c 4 sigesapol.dirsapolpnp.gob.pe",
    result: "0 % pérdida · 7.9 ms promedio",
    status: "Correcto",
  },
  {
    number: "03",
    tool: "traceroute",
    title: "Análisis de ruta",
    description:
      "Análisis del recorrido seguido por los paquetes desde el equipo cliente hasta el servidor.",
    command: "traceroute sigesapol.dirsapolpnp.gob.pe",
    result: "12 saltos · destino alcanzado",
    status: "Correcto",
  },
  {
    number: "04",
    tool: "ss / netstat",
    title: "Conexiones activas",
    description:
      "Inspección de conexiones TCP y UDP, puertos, procesos asociados y estados de conexión.",
    command: "ss -tunap",
    result: "Conexiones verificadas",
    status: "Correcto",
  },
  {
    number: "05",
    tool: "Nmap 7.95",
    title: "Reconocimiento de red",
    description:
      "Evaluación de la exposición del servidor mediante reconocimiento TCP y UDP.",
    command:
      "sudo nmap -sS -sU -T4 -A -v -Pn 181.176.32.82",
    result: "F5 Networks · puertos filtrados",
    status: "Correcto",
  },
  {
    number: "06",
    tool: "curl",
    title: "Verificación HTTPS",
    description:
      "Comprobación de la respuesta del servicio web mediante comunicación HTTPS.",
    command:
      "curl -k -I https://sigesapol.dirsapolpnp.gob.pe",
    result: "302 Found · Apache 2.4.6",
    status: "Correcto",
  },
  {
    number: "07",
    tool: "htop",
    title: "Monitor del sistema",
    description:
      "Supervisión de CPU, memoria, procesos, hilos, carga del sistema y swap durante la auditoría.",
    command: "htop",
    result: "2.58 GB RAM · 0 KB Swap",
    status: "Correcto",
  },
];

/* =========================================================
   ARQUITECTURA
========================================================= */

const architectureLayers = [
  {
    number: "01",
    title: "Usuarios y Clientes",
    description:
      "Representa el punto de acceso al sistema. Incluye personal administrativo, médicos, personal policial, operadores y navegadores web.",
    image: `${GITHUB_IMG}/CAPA%201%20USUARIOS%20CLIENTES.jpeg`,
  },
  {
    number: "02",
    title: "Internet",
    description:
      "Infraestructura pública utilizada para transportar la información mediante la red y protocolos TCP/IP.",
    image: `${GITHUB_IMG}/CAPA%202%20INTERNET.jpeg`,
  },
  {
    number: "03",
    title: "Monitoreo y Captura",
    description:
      "Capa donde se ejecutaron las herramientas utilizadas para verificar disponibilidad, conectividad, latencia, seguridad, puertos y servicios.",
    image: `${GITHUB_IMG}/CAPA%203%20MONITOREO%20Y%20CAPTURA%20LOCAL.jpeg`,
  },
  {
    number: "04",
    title: "Aplicaciones",
    description:
      "Infraestructura lógica que responde las solicitudes realizadas por los usuarios. Durante las pruebas se identificaron Apache, Laravel, OpenSSL y HTTPS.",
    image: `${GITHUB_IMG}/CAPA%204%20APLICACIONES.jpeg`,
  },
  {
    number: "05",
    title: "Datos",
    description:
      "Capa destinada al almacenamiento, consulta, procesamiento y recuperación de la información.",
    image: `${GITHUB_IMG}/CAPA%20DE%20DATOS%20(VIZUALIZACION%20FUNCIONAL).jpeg`,
  },
  {
    number: "06",
    title: "Salida y Soporte",
    description:
      "Capa donde se entregan resultados, consultas, respuestas y visualizaciones, junto con procesos de soporte operativo.",
    image: `${GITHUB_IMG}/CAPA%206%20SALIDA%20Y%20SOPORTE.jpeg`,
  },
];

/* =========================================================
   EVIDENCIAS
========================================================= */

const evidence = [
  {
    number: "01",
    title: "Instalación de herramientas",
    description:
      "Preparación del entorno Debian GNU/Linux 13 para ejecutar las pruebas.",
    image: `${GITHUB_IMG}/01_instalacion_herramientas.jpeg`,
  },
  {
    number: "02",
    title: "Resolución DNS",
    description:
      "Verificación de la resolución del dominio mediante nslookup.",
    image: `${GITHUB_IMG}/02_dns_nslookup.jpeg`,
  },
  {
    number: "03",
    title: "Prueba de conectividad",
    description:
      "Prueba ICMP hacia el servidor institucional.",
    image: `${GITHUB_IMG}/03_ping_conectividad.jpeg`,
  },
  {
    number: "04",
    title: "Traceroute",
    description:
      "Visualización del recorrido seguido por los paquetes.",
    image: `${GITHUB_IMG}/04_traceroute.jpeg`,
  },
  {
    number: "05",
    title: "Conexiones activas",
    description:
      "Inspección de conexiones mediante ss y netstat.",
    image: `${GITHUB_IMG}/05_ss_tunap.jpeg`,
  },
  {
    number: "06",
    title: "Script Bash",
    description:
      "Desarrollo del proceso de automatización de la auditoría.",
    image: `${GITHUB_IMG}/10_script_nano.jpeg`,
  },
  {
    number: "07",
    title: "Ejecución del script",
    description:
      "Automatización de la generación del reporte.",
    image: `${GITHUB_IMG}/11_ejecucion_script.jpeg`,
  },
  {
    number: "08",
    title: "Escaneo Nmap",
    description:
      "Reconocimiento de la infraestructura de red.",
    image: `${GITHUB_IMG}/14_nmap_resultado.jpeg`,
  },
  {
    number: "09",
    title: "Verificación HTTPS",
    description:
      "Comprobación de la respuesta HTTPS del servicio.",
    image: `${GITHUB_IMG}/17_curl_https.jpeg`,
  },
  {
    number: "10",
    title: "Monitor del sistema",
    description:
      "Supervisión de recursos mediante htop.",
    image: `${GITHUB_IMG}/18_htop.jpeg`,
  },
];

/* =========================================================
   TECNOLOGÍAS
========================================================= */

const technologies = [
  "Debian GNU/Linux 13",
  "Bash",
  "DNSUtils",
  "Ping",
  "Traceroute",
  "Netstat",
  "SS",
  "Nmap",
  "cURL",
  "htop",
  "Apache",
  "OpenSSL",
  "Laravel",
  "Git",
  "GitHub",
];

/* =========================================================
   ANIMACIONES
========================================================= */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   COMPONENTE
========================================================= */

export default function SigesapolPage() {
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
    name: "SIGESAPOL | Auditoría de Conectividad de Red",
    description:
      "Proyecto de auditoría técnica de conectividad de red realizado sobre SIGESAPOL, utilizando Debian GNU/Linux 13 y herramientas de diagnóstico, administración y reconocimiento de redes.",
    path: "/proyectos/sigesapol",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "SIGESAPOL", path: "/proyectos/sigesapol" },
  ]);

  const softwareSchema = createSoftwareApplicationSchema({
    name: "SIGESAPOL",
    description:
      "Proyecto de auditoría técnica de conectividad de red y análisis de infraestructura realizado sobre el sistema institucional SIGESAPOL.",
    path: "/proyectos/sigesapol",
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
            AMBIENTE
        ====================================================== */}

        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div
            className="
              absolute
              left-1/2
              top-[-320px]
              h-[720px]
              w-[900px]
              -translate-x-1/2
              rounded-full
              bg-[#1E6BFF]/[0.045]
              blur-[170px]
            "
          />

          <div
            className="
              absolute
              bottom-[-280px]
              right-[-180px]
              h-[600px]
              w-[600px]
              rounded-full
              bg-[#3DA5FF]/[0.025]
              blur-[150px]
            "
          />
        </div>

        <div className="relative z-10">

          {/* =====================================================
              HERO
          ====================================================== */}

          <section className="devpass-container pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-44">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            >

              <Link
                href="/proyectos"
                className="
                  group
                  mb-10
                  inline-flex
                  items-center
                  gap-2
                  text-[12px]
                  font-medium
                  text-[#64748B]
                  transition-colors
                  hover:text-[#A7D3FF]
                "
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>

                Volver a proyectos
              </Link>

              {/* IDENTIFICADOR */}

              <div className="mb-7 flex items-center gap-3">

                <span
                  className="
                    font-mono
                    text-[10px]
                    font-medium
                    tracking-[0.2em]
                    text-[#3DA5FF]
                  "
                >
                  01
                </span>

                <span className="h-px w-8 bg-[#3DA5FF]/40" />

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-[#64748B]
                  "
                >
                  Software · Auditoría
                </span>

              </div>

              {/* TITULO */}

              <h1
                className="
                  max-w-5xl
                  font-poppins
                  text-5xl
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.055em]
                  text-white
                  sm:text-6xl
                  lg:text-[88px]
                "
              >
                SIGESAPOL
                <br />

                <span className="devpass-gradient-text">
                  Auditoría de conectividad.
                </span>
              </h1>

              <p
                className="
                  mt-8
                  max-w-3xl
                  text-[15px]
                  leading-7
                  text-[#7F8EA3]
                  sm:text-base
                  sm:leading-8
                "
              >
                Auditoría técnica de conectividad de red realizada
                sobre el sistema institucional SIGESAPOL, utilizando
                herramientas de diagnóstico y administración de redes
                desde un entorno Debian GNU/Linux 13.
              </p>

              {/* TECNOLOGÍAS */}

              <div className="mt-10 flex flex-wrap gap-3">

                {[
                  "Debian GNU/Linux 13",
                  "Bash",
                  "Nmap",
                  "Apache",
                  "Laravel",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-lg
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      px-4
                      py-2.5
                      text-[10px]
                      text-[#8B9AB0]
                    "
                  >
                    {technology}
                  </span>
                ))}

              </div>

            </motion.div>

          </section>

          {/* =====================================================
              HERO IMAGE
          ====================================================== */}

          <section className="devpass-container">

            <motion.div
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-[#3DA5FF]/15
                bg-[#050D1A]
              "
            >

              <div className="relative h-[280px] sm:h-[420px] lg:h-[580px]">

                <button
                  type="button"
                  aria-label="Ver imagen ampliada: Auditoría SIGESAPOL - análisis Nmap"
                  onClick={() =>
                    setSelectedImage({
                      src: `${GITHUB_IMG}/14_nmap_resultado.jpeg`,
                      alt: "Auditoría SIGESAPOL - análisis Nmap",
                    })
                  }
                  className="absolute inset-0 z-10 cursor-zoom-in"
                >
                  <Image
                    src={`${GITHUB_IMG}/14_nmap_resultado.jpeg`}
                    alt="Auditoría SIGESAPOL - análisis Nmap"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 1180px"
                    className="
                      object-cover
                      transition-transform
                      duration-1000
                      group-hover:scale-[1.015]
                    "
                  />
                </button>

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#020617]
                    via-[#020617]/10
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    right-6
                    flex
                    flex-col
                    gap-3
                    sm:bottom-8
                    sm:left-8
                    sm:right-8
                    sm:flex-row
                    sm:items-end
                    sm:justify-between
                  "
                >

                  <div>

                    <span
                      className="
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-[#64748B]
                      "
                    >
                      Sistema auditado
                    </span>

                    <p
                      className="
                        mt-2
                        font-poppins
                        text-lg
                        font-medium
                        text-white
                        sm:text-xl
                      "
                    >
                      sigesapol.dirsapolpnp.gob.pe
                    </p>

                  </div>

                  <span
                    className="
                      w-fit
                      rounded-full
                      border
                      border-[#3DA5FF]/20
                      bg-[#020617]/70
                      px-3
                      py-1.5
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.14em]
                      text-[#A7D3FF]
                      backdrop-blur-md
                    "
                  >
                    Auditoría técnica
                  </span>

                </div>

              </div>

            </motion.div>

          </section>

          {/* =====================================================
              RESUMEN
          ====================================================== */}

          <section className="devpass-container py-24 sm:py-28 lg:py-36">

            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">

              <motion.div
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                }}
              >

                <span
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-[#3DA5FF]
                  "
                >
                  El proyecto
                </span>

                <h2
                  className="
                    mt-4
                    max-w-2xl
                    font-poppins
                    text-3xl
                    font-semibold
                    leading-tight
                    tracking-[-0.04em]
                    text-white
                    sm:text-4xl
                  "
                >
                  Una auditoría orientada a entender la conectividad,
                  exposición y comportamiento de una infraestructura real.
                </h2>

                <div
                  className="
                    mt-7
                    space-y-5
                    text-sm
                    leading-7
                    text-[#718096]
                    sm:text-[15px]
                    sm:leading-8
                  "
                >

                  <p>
                    El proyecto presenta una auditoría técnica de
                    conectividad de red realizada sobre el sistema
                    institucional SIGESAPOL, perteneciente a la
                    Dirección de Salud de la Policía Nacional del Perú.
                  </p>

                  <p>
                    El análisis se ejecutó desde un entorno controlado
                    utilizando Debian GNU/Linux 13 &quot;Trixie&quot; y
                    herramientas ampliamente utilizadas para diagnóstico,
                    administración y reconocimiento de redes.
                  </p>

                  <p>
                    El trabajo incluyó pruebas de DNS, conectividad,
                    trazado de rutas, conexiones activas, reconocimiento
                    mediante Nmap, verificación HTTPS, monitorización del
                    sistema y automatización mediante Bash.
                  </p>

                </div>

              </motion.div>

              {/* ESTADÍSTICAS */}

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="grid grid-cols-2 gap-3 self-start"
              >

                {[
                  ["0 %", "Pérdida de paquetes"],
                  ["7.9 ms", "Latencia promedio"],
                  ["12", "Saltos de red"],
                  ["13", "Distancia Nmap"],
                  ["2.58 GB", "RAM observada"],
                  ["124", "Procesos"],
                ].map(([value, label]) => (

                  <motion.div
                    key={label}
                    variants={itemVariants}
                    className="
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-[#050D1A]
                      p-5
                      sm:p-6
                    "
                  >

                    <div
                      className="
                        font-poppins
                        text-xl
                        font-semibold
                        tracking-[-0.03em]
                        text-[#A7D3FF]
                        sm:text-2xl
                      "
                    >
                      {value}
                    </div>

                    <div
                      className="
                        mt-2
                        text-[10px]
                        leading-5
                        text-[#64748B]
                      "
                    >
                      {label}
                    </div>

                  </motion.div>

                ))}

              </motion.div>

            </div>

          </section>

          {/* =====================================================
              OBJETIVOS
          ====================================================== */}

          <section className="border-y border-white/[0.06] bg-[#030A14]">

            <div className="devpass-container py-24 sm:py-28 lg:py-32">

              <div className="grid gap-12 lg:grid-cols-[0.75fr_1fr] lg:gap-24">

                <div>

                  <span
                    className="
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-[#3DA5FF]
                    "
                  >
                    Objetivo
                  </span>

                  <h2
                    className="
                      mt-4
                      font-poppins
                      text-3xl
                      font-semibold
                      tracking-[-0.04em]
                      text-white
                      sm:text-4xl
                    "
                  >
                    Verificar el estado operativo.
                  </h2>

                  <p
                    className="
                      mt-5
                      text-sm
                      leading-7
                      text-[#718096]
                    "
                  >
                    Realizar una auditoría técnica de conectividad hacia
                    SIGESAPOL para verificar disponibilidad, accesibilidad,
                    seguridad y estado operativo del servicio institucional.
                  </p>

                </div>

                <div>

                  <span
                    className="
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-[#475569]
                    "
                  >
                    Objetivos específicos
                  </span>

                  <div className="mt-6 divide-y divide-white/[0.06]">

                    {[
                      "Verificar la resolución DNS.",
                      "Comprobar la disponibilidad mediante ICMP.",
                      "Analizar la ruta de comunicación.",
                      "Identificar conexiones TCP y UDP activas.",
                      "Detectar mecanismos de seguridad mediante Nmap.",
                      "Verificar el funcionamiento de HTTPS.",
                      "Supervisar el consumo de recursos.",
                      "Automatizar las verificaciones mediante Bash.",
                      "Generar un reporte consolidado.",
                    ].map((objective, index) => (

                      <div
                        key={objective}
                        className="flex gap-5 py-4"
                      >

                        <span
                          className="
                            font-mono
                            text-[9px]
                            text-[#3DA5FF]
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p
                          className="
                            text-sm
                            leading-6
                            text-[#8190A4]
                          "
                        >
                          {objective}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* =====================================================
              ARQUITECTURA
          ====================================================== */}

          <section className="devpass-container py-24 sm:py-28 lg:py-36">

            <motion.div
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
              className="max-w-3xl"
            >

              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-[#3DA5FF]
                "
              >
                Arquitectura
              </span>

              <h2
                className="
                  mt-4
                  font-poppins
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Una arquitectura organizada por capas.
              </h2>

              <p
                className="
                  mt-6
                  text-sm
                  leading-7
                  text-[#718096]
                  sm:text-[15px]
                  sm:leading-8
                "
              >
                La arquitectura representa el flujo de comunicación entre
                el equipo cliente y SIGESAPOL, desde el acceso de los
                usuarios hasta los servicios de soporte y seguridad.
              </p>

            </motion.div>

            {/* FLOW */}

            <div
              className="
                mt-14
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.07]
                bg-[#050D1A]
                p-6
                sm:p-10
              "
            >

              <div className="flex flex-col items-center">

                {[
                  "USUARIOS FINALES",
                  "INTERNET",
                  "MONITOREO Y CAPTURA",
                  "APLICACIONES",
                  "CAPA DE DATOS",
                  "SALIDA Y SOPORTE",
                  "SERVICIOS TRANSVERSALES",
                ].map((layer, index, array) => (

                  <div
                    key={layer}
                    className="flex flex-col items-center"
                  >

                    <div
                      className="
                        flex
                        min-h-[58px]
                        w-full
                        max-w-xl
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#3DA5FF]/15
                        bg-[#071426]
                        px-5
                        text-center
                        font-mono
                        text-[10px]
                        tracking-[0.12em]
                        text-[#A7D3FF]
                      "
                    >
                      {layer}
                    </div>

                    {index !== array.length - 1 && (
                      <div className="flex h-8 items-center">
                        <span className="text-[#3DA5FF]/50">
                          ↓
                        </span>
                      </div>
                    )}

                  </div>

                ))}

              </div>

            </div>

            {/* CAPAS */}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.05,
              }}
              className="mt-8 grid gap-5 md:grid-cols-2"
            >

              {architectureLayers.map((layer) => (

                <motion.article
                  key={layer.number}
                  variants={itemVariants}
                  className="
                    group
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-[#050D1A]
                  "
                >

                  <div className="relative h-[220px] overflow-hidden">

                    <button
                      type="button"
                      aria-label={`Ver imagen ampliada: ${layer.title}`}
                      onClick={() =>
                        setSelectedImage({
                          src: layer.image,
                          alt: layer.title,
                        })
                      }
                      className="absolute inset-0 z-10 cursor-zoom-in"
                    >
                      <Image
                        src={layer.image}
                        alt={layer.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-[1.03]
                        "
                      />
                    </button>

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#050D1A]
                        via-transparent
                        to-transparent
                      "
                    />

                    <span
                      className="
                        absolute
                        left-5
                        top-5
                        rounded-md
                        border
                        border-white/[0.08]
                        bg-[#020617]/70
                        px-2.5
                        py-1.5
                        font-mono
                        text-[9px]
                        text-[#A7D3FF]
                        backdrop-blur-md
                      "
                    >
                      {layer.number}
                    </span>

                  </div>

                  <div className="p-6">

                    <h3
                      className="
                        font-poppins
                        text-xl
                        font-semibold
                        tracking-[-0.03em]
                        text-white
                      "
                    >
                      {layer.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        text-[13px]
                        leading-6
                        text-[#718096]
                      "
                    >
                      {layer.description}
                    </p>

                  </div>

                </motion.article>

              ))}

            </motion.div>

          </section>

          {/* =====================================================
              DIAGNÓSTICO
          ====================================================== */}

          <section className="border-y border-white/[0.06] bg-[#030A14]">

            <div className="devpass-container py-24 sm:py-28 lg:py-36">

              <div className="max-w-3xl">

                <span
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-[#3DA5FF]
                  "
                >
                  Diagnóstico técnico
                </span>

                <h2
                  className="
                    mt-4
                    font-poppins
                    text-3xl
                    font-semibold
                    tracking-[-0.04em]
                    text-white
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  Cada prueba responde una pregunta.
                </h2>

                <p
                  className="
                    mt-6
                    text-sm
                    leading-7
                    text-[#718096]
                    sm:text-[15px]
                    sm:leading-8
                  "
                >
                  La auditoría combinó diferentes herramientas para
                  observar la conectividad desde múltiples perspectivas.
                </p>

              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.05,
                }}
                className="mt-12 grid gap-4"
              >

                {auditTests.map((test) => (

                  <motion.article
                    key={test.number}
                    variants={itemVariants}
                    className="
                      group
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

                    <div
                      className="
                        grid
                        gap-6
                        lg:grid-cols-[70px_190px_1fr_auto]
                        lg:items-center
                      "
                    >

                      <span
                        className="
                          font-mono
                          text-[10px]
                          tracking-[0.15em]
                          text-[#3DA5FF]
                        "
                      >
                        {test.number}
                      </span>

                      <div>

                        <span
                          className="
                            font-mono
                            text-[9px]
                            uppercase
                            tracking-[0.15em]
                            text-[#475569]
                          "
                        >
                          {test.tool}
                        </span>

                        <h3
                          className="
                            mt-2
                            font-poppins
                            text-lg
                            font-semibold
                            text-white
                          "
                        >
                          {test.title}
                        </h3>

                      </div>

                      <div>

                        <p
                          className="
                            text-[13px]
                            leading-6
                            text-[#718096]
                          "
                        >
                          {test.description}
                        </p>

                        <code
                          className="
                            mt-3
                            block
                            overflow-x-auto
                            rounded-lg
                            border
                            border-white/[0.05]
                            bg-[#020617]
                            px-3
                            py-2
                            font-mono
                            text-[10px]
                            text-[#64748B]
                          "
                        >
                          {test.command}
                        </code>

                      </div>

                      <div className="lg:text-right">

                        <span
                          className="
                            font-mono
                            text-[10px]
                            text-[#A7D3FF]
                          "
                        >
                          {test.result}
                        </span>

                        <div className="mt-2">

                          <span
                            className="
                              inline-flex
                              rounded-full
                              border
                              border-[#3DA5FF]/15
                              bg-[#1E6BFF]/[0.06]
                              px-3
                              py-1
                              text-[9px]
                              uppercase
                              tracking-[0.12em]
                              text-[#7DBBFF]
                            "
                          >
                            {test.status}
                          </span>

                        </div>

                      </div>

                    </div>

                  </motion.article>

                ))}

              </motion.div>

            </div>

          </section>

          {/* =====================================================
              SEGURIDAD
          ====================================================== */}

          <section className="devpass-container py-24 sm:py-28 lg:py-36">

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

              <div>

                <span
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-[#3DA5FF]
                  "
                >
                  Seguridad
                </span>

                <h2
                  className="
                    mt-4
                    font-poppins
                    text-3xl
                    font-semibold
                    tracking-[-0.04em]
                    text-white
                    sm:text-4xl
                  "
                >
                  Protección perimetral observada durante el análisis.
                </h2>

                <p
                  className="
                    mt-6
                    text-sm
                    leading-7
                    text-[#718096]
                    sm:text-[15px]
                    sm:leading-8
                  "
                >
                  El reconocimiento mediante Nmap identificó una
                  infraestructura asociada a F5 Networks TMOS, descrita
                  en el informe como un mecanismo de protección
                  perimetral y balanceo de carga.
                </p>

                <p
                  className="
                    mt-5
                    text-sm
                    leading-7
                    text-[#718096]
                    sm:text-[15px]
                    sm:leading-8
                  "
                >
                  Los resultados mostraron los puertos TCP filtrados y
                  UDP en estado Open / Filtered, limitando el
                  reconocimiento directo de servicios desde Internet.
                </p>

              </div>

              <div
                className="
                  rounded-3xl
                  border
                  border-[#3DA5FF]/15
                  bg-[#050D1A]
                  p-7
                  sm:p-9
                "
              >

                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    text-[#475569]
                  "
                >
                  Infraestructura identificada
                </span>

                <div
                  className="
                    mt-6
                    font-poppins
                    text-3xl
                    font-semibold
                    tracking-[-0.04em]
                    text-[#A7D3FF]
                  "
                >
                  F5 Networks
                </div>

                <div
                  className="
                    mt-2
                    font-mono
                    text-[10px]
                    text-[#64748B]
                  "
                >
                  TMOS
                </div>

                <div className="mt-8 space-y-3">

                  {[
                    "Firewall",
                    "Balanceador de carga",
                    "Protección perimetral",
                    "Distribución de tráfico",
                  ].map((item) => (

                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-3
                        border-b
                        border-white/[0.05]
                        pb-3
                        text-sm
                        text-[#8190A4]
                      "
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#3DA5FF]" />
                      {item}
                    </div>

                  ))}

                </div>

              </div>

            </div>

          </section>

          {/* =====================================================
              HTTPS
          ====================================================== */}

          <section className="border-y border-white/[0.06] bg-[#030A14]">

            <div className="devpass-container py-24 sm:py-28 lg:py-32">

              <div className="grid gap-6 md:grid-cols-4">

                {[
                  ["HTTP", "302 Found"],
                  ["Servidor", "Apache 2.4.6"],
                  ["Framework", "Laravel"],
                  ["SSL", "OpenSSL"],
                ].map(([label, value]) => (

                  <div
                    key={label}
                    className="
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-[#050D1A]
                      p-6
                    "
                  >

                    <span
                      className="
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.16em]
                        text-[#475569]
                      "
                    >
                      {label}
                    </span>

                    <p
                      className="
                        mt-3
                        font-poppins
                        text-lg
                        font-semibold
                        text-[#A7D3FF]
                      "
                    >
                      {value}
                    </p>

                  </div>

                ))}

              </div>

              <div
                className="
                  mt-10
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-[#050D1A]
                  p-7
                  sm:p-9
                "
              >

                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    text-[#475569]
                  "
                >
                  Respuesta observada
                </span>

                <code
                  className="
                    mt-5
                    block
                    overflow-x-auto
                    rounded-xl
                    border
                    border-white/[0.05]
                    bg-[#020617]
                    p-5
                    font-mono
                    text-[11px]
                    leading-7
                    text-[#7DBBFF]
                  "
                >
                  HTTP/1.1 302 Found
                  <br />
                  Server: Apache 2.4.6
                  <br />
                  Framework: Laravel
                  <br />
                  Redirect: /auth/login
                </code>

              </div>

            </div>

          </section>

          {/* =====================================================
              AUTOMATIZACIÓN
          ====================================================== */}

          <section className="devpass-container py-24 sm:py-28 lg:py-36">

            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">

              <div>

                <span
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-[#3DA5FF]
                  "
                >
                  Automatización
                </span>

                <h2
                  className="
                    mt-4
                    font-poppins
                    text-3xl
                    font-semibold
                    tracking-[-0.04em]
                    text-white
                    sm:text-4xl
                  "
                >
                  Del diagnóstico manual al reporte reproducible.
                </h2>

                <p
                  className="
                    mt-6
                    max-w-2xl
                    text-sm
                    leading-7
                    text-[#718096]
                    sm:text-[15px]
                    sm:leading-8
                  "
                >
                  Para simplificar el proceso de auditoría se desarrolló
                  un script Bash capaz de ejecutar verificaciones y
                  generar un reporte consolidado.
                </p>

              </div>

              <div
                className="
                  rounded-3xl
                  border
                  border-[#3DA5FF]/15
                  bg-[#050D1A]
                  p-7
                  sm:p-9
                "
              >

                <div
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.14em]
                    text-[#475569]
                  "
                >
                  Ejecución
                </div>

                <code
                  className="
                    mt-6
                    block
                    rounded-xl
                    border
                    border-white/[0.05]
                    bg-[#020617]
                    p-5
                    font-mono
                    text-[11px]
                    leading-7
                    text-[#7DBBFF]
                  "
                >
                  chmod +x automatizacion.bash
                  <br />
                  <span className="text-[#64748B]">
                    &gt;
                  </span>{" "}
                  ./automatizacion.bash
                </code>

                <div
                  className="
                    mt-6
                    border-t
                    border-white/[0.06]
                    pt-5
                  "
                >

                  <span
                    className="
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.14em]
                      text-[#475569]
                    "
                  >
                    Salida
                  </span>

                  <p
                    className="
                      mt-2
                      font-mono
                      text-sm
                      text-[#A7D3FF]
                    "
                  >
                    reporte_red.txt
                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* =====================================================
              TECNOLOGÍAS
          ====================================================== */}

          <section className="border-y border-white/[0.06] bg-[#030A14]">

            <div className="devpass-container py-24 sm:py-28 lg:py-32">

              <div className="max-w-3xl">

                <span
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-[#3DA5FF]
                  "
                >
                  Stack
                </span>

                <h2
                  className="
                    mt-4
                    font-poppins
                    text-3xl
                    font-semibold
                    tracking-[-0.04em]
                    text-white
                    sm:text-4xl
                  "
                >
                  Herramientas utilizadas.
                </h2>

              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                className="mt-10 flex flex-wrap gap-3"
              >

                {technologies.map((technology) => (

                  <motion.span
                    key={technology}
                    variants={itemVariants}
                    className="
                      rounded-xl
                      border
                      border-white/[0.07]
                      bg-[#050D1A]
                      px-4
                      py-3
                      text-[11px]
                      font-medium
                      text-[#8B9AB0]
                      transition-colors
                      duration-300
                      hover:border-[#3DA5FF]/25
                      hover:text-[#A7D3FF]
                    "
                  >
                    {technology}
                  </motion.span>

                ))}

              </motion.div>

            </div>

          </section>

          {/* =====================================================
              EVIDENCIAS
          ====================================================== */}

          <section className="devpass-container py-24 sm:py-28 lg:py-36">

            <div className="max-w-3xl">

              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-[#3DA5FF]
                "
              >
                Evidencias
              </span>

              <h2
                className="
                  mt-4
                  font-poppins
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                El diagnóstico, documentado.
              </h2>

              <p
                className="
                  mt-6
                  text-sm
                  leading-7
                  text-[#718096]
                  sm:text-[15px]
                  sm:leading-8
                "
              >
                Capturas obtenidas durante la ejecución de las pruebas y
                procesos descritos en el proyecto.
              </p>

            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.05,
              }}
              className="mt-12 grid gap-5 md:grid-cols-2"
            >

              {evidence.map((item) => (

                <motion.article
                  key={item.number}
                  variants={itemVariants}
                  className="
                    group
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-[#050D1A]
                  "
                >

                  <div className="relative h-[250px] overflow-hidden">

                    <button
                      type="button"
                      aria-label={`Ver imagen ampliada: ${item.title}`}
                      onClick={() =>
                        setSelectedImage({
                          src: item.image,
                          alt: item.title,
                        })
                      }
                      className="absolute inset-0 z-10 cursor-zoom-in"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-[1.025]
                        "
                      />
                    </button>

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#050D1A]
                        via-transparent
                        to-transparent
                      "
                    />

                    <span
                      className="
                        absolute
                        left-5
                        top-5
                        rounded-md
                        border
                        border-white/[0.08]
                        bg-[#020617]/75
                        px-2.5
                        py-1.5
                        font-mono
                        text-[9px]
                        text-[#A7D3FF]
                        backdrop-blur-md
                      "
                    >
                      {item.number}
                    </span>

                  </div>

                  <div className="p-6">

                    <h3
                      className="
                        font-poppins
                        text-lg
                        font-semibold
                        text-white
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[12px]
                        leading-6
                        text-[#718096]
                      "
                    >
                      {item.description}
                    </p>

                  </div>

                </motion.article>

              ))}

            </motion.div>

          </section>

          {/* =====================================================
              RESULTADOS
          ====================================================== */}

          <section className="border-y border-white/[0.06] bg-[#030A14]">

            <div className="devpass-container py-24 sm:py-28 lg:py-36">

              <div className="grid gap-12 lg:grid-cols-[0.75fr_1fr] lg:gap-24">

                <div>

                  <span
                    className="
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-[#3DA5FF]
                    "
                  >
                    Resultado
                  </span>

                  <h2
                    className="
                      mt-4
                      font-poppins
                      text-3xl
                      font-semibold
                      tracking-[-0.04em]
                      text-white
                      sm:text-4xl
                    "
                  >
                    Una infraestructura accesible, estable y protegida.
                  </h2>

                  <p
                    className="
                      mt-6
                      text-sm
                      leading-7
                      text-[#718096]
                      sm:text-[15px]
                      sm:leading-8
                    "
                  >
                    Los resultados documentados en la auditoría mostraron
                    conectividad estable, resolución DNS correcta,
                    comunicación HTTPS y mecanismos de protección
                    perimetral frente al reconocimiento directo.
                  </p>

                </div>

                <div className="space-y-3">

                  {[
                    ["DNS", "Correcto"],
                    ["Ping", "Correcto"],
                    ["Traceroute", "Correcto"],
                    ["SS", "Correcto"],
                    ["Netstat", "Correcto"],
                    ["Nmap", "Correcto"],
                    ["HTTPS", "Correcto"],
                    ["htop", "Correcto"],
                    ["Script Bash", "Correcto"],
                    ["Reporte", "Generado"],
                  ].map(([name, status]) => (

                    <div
                      key={name}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        border
                        border-white/[0.06]
                        bg-[#050D1A]
                        px-5
                        py-4
                      "
                    >

                      <span className="text-sm text-[#8190A4]">
                        {name}
                      </span>

                      <span
                        className="
                          flex
                          items-center
                          gap-2
                          font-mono
                          text-[10px]
                          uppercase
                          tracking-[0.1em]
                          text-[#7DBBFF]
                        "
                      >

                        <span className="h-1.5 w-1.5 rounded-full bg-[#3DA5FF]" />

                        {status}

                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </section>

          {/* =====================================================
              CONCLUSIÓN
          ====================================================== */}

          <section className="devpass-container py-24 sm:py-28 lg:py-36">

            <motion.div
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
                amount: 0.25,
              }}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-[#3DA5FF]/15
                bg-[#050D1A]
                p-8
                sm:p-12
                lg:p-16
              "
            >

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[-120px]
                  top-[-120px]
                  h-[400px]
                  w-[400px]
                  rounded-full
                  bg-[#1E6BFF]/[0.05]
                  blur-[120px]
                "
              />

              <div className="relative z-10 max-w-4xl">

                <span
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-[#3DA5FF]
                  "
                >
                  Conclusión
                </span>

                <h2
                  className="
                    mt-5
                    font-poppins
                    text-3xl
                    font-semibold
                    leading-tight
                    tracking-[-0.04em]
                    text-white
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  Un diagnóstico técnico basado en evidencia.
                </h2>

                <p
                  className="
                    mt-7
                    text-sm
                    leading-8
                    text-[#8190A4]
                    sm:text-[15px]
                  "
                >
                  La auditoría permitió verificar la correcta resolución
                  DNS, conectividad, recorrido de red, funcionamiento de
                  HTTPS y comportamiento estable del entorno utilizado
                  durante las pruebas. Asimismo, el reconocimiento con
                  Nmap identificó mecanismos de protección asociados a
                  F5 Networks, mientras que la automatización mediante
                  Bash permitió consolidar los resultados en un reporte
                  reproducible.
                </p>

              </div>

            </motion.div>

          </section>

          {/* =====================================================
              ENLACES
          ====================================================== */}

          <section className="devpass-container pb-28 sm:pb-32 lg:pb-40">

            <div
              className="
                flex
                flex-col
                gap-6
                border-t
                border-white/[0.08]
                pt-8
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              <div>

                <span
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-[#475569]
                  "
                >
                  DevPass / SIGESAPOL
                </span>

                <p className="mt-3 text-sm text-[#718096]">
                  Explora el proyecto y revisa su implementación.
                </p>

              </div>

              <div className="flex flex-wrap gap-3">

                <a
                  href="https://jaimes4224d.github.io/sigesapol-simulator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-[#3DA5FF]/25
                    bg-[#0A1F3D]/60
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-[#3DA5FF]/50
                    hover:bg-[#0A1F3D]
                    hover:shadow-[0_10px_35px_rgba(30,107,255,0.16)]
                  "
                >
                  Ver demo

                  <span className="text-[#3DA5FF]">
                    ↗
                  </span>
                </a>

                <a
                  href="https://github.com/JAIMES4224D/SIGESAPOL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-[#A7B4C8]
                    transition-all
                    duration-300
                    hover:border-[#3DA5FF]/25
                    hover:text-white
                  "
                >
                  GitHub

                  <span className="text-[#3DA5FF]">
                    ↗
                  </span>
                </a>

              </div>

            </div>

          </section>

        </div>

        {/* =====================================================
            VISOR DE IMÁGENES
            Clic en cualquier captura para verla en grande.
        ====================================================== */}

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
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
            role="dialog"
            aria-modal="true"
            aria-label="Vista ampliada de imagen"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar imagen"
              className="
                absolute
                right-4
                top-4
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.10]
                bg-[#050D1A]/90
                text-xl
                text-[#A7B4C8]
                shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#3DA5FF]/40
                hover:bg-[#0A1F3D]
                hover:text-white
              "
            >
              ×
            </button>

            <div
              className="
                relative
                h-[82vh]
                w-full
                max-w-7xl
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.10]
                bg-[#050D1A]
                shadow-[0_25px_100px_rgba(0,0,0,0.65)]
              "
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-contain
                  p-3
                  sm:p-6
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-0
                  right-0
                  bg-gradient-to-t
                  from-[#020617]/80
                  to-transparent
                  px-5
                  pb-5
                  pt-14
                  sm:px-7
                  sm:pb-7
                "
              >
                <p className="text-sm font-medium text-white">
                  {selectedImage.alt}
                </p>

                <p className="mt-1 text-[10px] text-[#64748B]">
                  Presiona ESC o haz clic fuera de la imagen para cerrar.
                </p>
              </div>
            </div>
          </motion.div>
        )}

      </main>

      <Footer />
    </>
  );
}