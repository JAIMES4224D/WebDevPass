"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Network,
  Sparkles,
  Terminal,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

const journey = [
  {
    number: "01",
    title: "Soporte TI y redes",
    description:
      "El camino comenzó desde la infraestructura: soporte técnico, redes, servidores y resolución de problemas en entornos reales.",
    icon: Network,
  },
  {
    number: "02",
    title: "Desarrollo COBOL",
    description:
      "La experiencia evolucionó hacia el desarrollo de software, trabajando con sistemas empresariales y lógica de negocio.",
    icon: Terminal,
  },
  {
    number: "03",
    title: "Desarrollo Full Stack",
    description:
      "La programación web se convirtió en una parte central del trabajo, construyendo aplicaciones y soluciones completas.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Infraestructura y sistemas",
    description:
      "La experiencia en redes y desarrollo comenzó a complementarse con una visión más amplia de arquitectura y sistemas.",
    icon: Layers3,
  },
  {
    number: "05",
    title: "IA, automatización y datos",
    description:
      "La exploración se amplió hacia inteligencia artificial, automatización, ciencia de datos y nuevas formas de construir software.",
    icon: BrainCircuit,
  },
  {
    number: "06",
    title: "DevPass",
    description:
      "DevPass reúne experiencia, aprendizaje y proyectos para transformar ideas en soluciones digitales reales.",
    icon: Sparkles,
  },
];

const technologies = [
  { name: "Python", icon: Terminal },
  { name: "JavaScript", icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "React", icon: Globe2 },
  { name: "Next.js", icon: Layers3 },
  { name: "Java", icon: Code2 },
  { name: "C#", icon: Code2 },
  { name: "SQL", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "Linux", icon: Terminal },
  { name: "IA", icon: BrainCircuit },
  { name: "Data Science", icon: Database },
];

const webPageSchema = createWebPageSchema({
  name: "Sobre mí | Ingeniero de Sistemas y Tecnología | DevPass",
  description:
    "Conoce la trayectoria detrás de DevPass: experiencia en infraestructura, redes, desarrollo de software, Full Stack, inteligencia artificial, automatización y tecnología.",
  path: "/sobre-mi",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "Sobre mí", path: "/sobre-mi" },
]);

export default function SobreMiPage() {
  return (
    <>
    <JsonLd
      data={[
        webPageSchema,
        breadcrumbSchema,
      ]}
    />
      <Navbar />

      <main className="overflow-hidden bg-[#020617] text-[#f8faff]">
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative min-h-[92vh] overflow-hidden border-b border-white/[0.06]">
          {/* Atmospheric background */}
          <div className="absolute inset-0">
            <div className="absolute left-[-15%] top-[5%] h-[550px] w-[550px] rounded-full bg-[#1e6bff]/10 blur-[130px]" />
            <div className="absolute right-[-10%] bottom-[-15%] h-[600px] w-[600px] rounded-full bg-[#3da5ff]/8 blur-[150px]" />

            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(167,211,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(167,211,255,0.8) 1px, transparent 1px)",
                backgroundSize: "70px 70px",
              }}
            />
          </div>

          <div className="relative mx-auto flex min-h-[92vh] w-[min(1180px,calc(100%-40px))] items-center py-24 md:py-28">
            <div className="grid w-full items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
              {/* Profile image */}
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative mx-auto w-full max-w-[470px] lg:mx-0"
              >
                {/* Decorative glow */}
                <div className="absolute -inset-5 rounded-[40px] bg-[#1e6bff]/10 blur-3xl" />

                {/* Outer frame */}
                <div className="relative rounded-[34px] border border-[#3da5ff]/20 bg-[#071a34]/70 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[27px] bg-[#0a1f3d]">
                    <Image
                      src="/images/sobre-mi/foto_perfil.png"
                      alt="Perfil profesional de DevPass"
                      fill
                      priority
                      sizes="(max-width: 1024px) 90vw, 470px"
                      className="object-cover object-center"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/65 via-transparent to-transparent" />

                    {/* Corner decorations */}
                    <div className="absolute left-5 top-5 h-8 w-8 border-l border-t border-[#a7d3ff]/50" />
                    <div className="absolute right-5 top-5 h-8 w-8 border-r border-t border-[#a7d3ff]/50" />
                    <div className="absolute bottom-5 left-5 h-8 w-8 border-b border-l border-[#a7d3ff]/50" />
                    <div className="absolute bottom-5 right-5 h-8 w-8 border-b border-r border-[#a7d3ff]/50" />

                    {/* Profile status */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a7d3ff]">
                          DevPass
                        </p>
                        <p className="mt-1 text-sm font-medium text-white">
                          Ingeniería · Tecnología
                        </p>
                      </div>

                      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#020617]/70 px-3 py-2 backdrop-blur-md">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[#3da5ff]" />
                        <span className="text-[11px] text-[#cbd5e1]">
                          Disponible
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Small floating card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="absolute -bottom-7 -right-4 hidden rounded-2xl border border-white/[0.08] bg-[#071a34]/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1e6bff]/10 text-[#3da5ff]">
                      <Code2 size={19} />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[#64748b]">
                        Focus
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-white">
                        Software + IA
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Hero copy */}
              <motion.div
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              >
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#3da5ff]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7fbfff]">
                    Sobre DevPass
                  </span>
                </div>

                <h1 className="font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[64px]">
                  Tecnología
                  <br />
                  <span className="devpass-gradient-text">
                    con propósito.
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-lg leading-8 text-[#94a3b8]">
                  Soy Ingeniero de Sistemas e Informática y construyo soluciones
                  digitales combinando desarrollo de software, infraestructura,
                  automatización e inteligencia artificial.
                </p>

                <p className="mt-5 max-w-xl text-base leading-7 text-[#64748b]">
                  DevPass nace como un espacio para convertir experiencia,
                  investigación e ideas en productos tecnológicos que realmente
                  puedan utilizarse.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    href="/proyectos"
                    className="group inline-flex items-center gap-3 rounded-xl bg-[#1e6bff] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(30,107,255,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2874ff]"
                  >
                    Ver proyectos
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-3 rounded-xl border border-white/[0.10] bg-white/[0.025] px-5 py-3.5 text-sm font-medium text-[#cbd5e1] transition-all duration-300 hover:border-[#3da5ff]/30 hover:bg-white/[0.05] hover:text-white"
                  >
                    Hablemos
                  </Link>
                </div>

                {/* Mini stats */}
                <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-white/[0.07] py-6">
                  <div>
                    <p className="font-poppins text-2xl font-semibold text-white">
                      01
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[#64748b]">
                      Visión
                    </p>
                  </div>

                  <div className="border-l border-white/[0.07] pl-5">
                    <p className="font-poppins text-2xl font-semibold text-white">
                      ∞
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[#64748b]">
                      Aprendizaje
                    </p>
                  </div>

                  <div className="border-l border-white/[0.07] pl-5">
                    <p className="font-poppins text-2xl font-semibold text-white">
                      100%
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[#64748b]">
                      Construcción
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            QUIÉN ESTÁ DETRÁS
        ========================================================= */}
        <section className="relative border-b border-white/[0.06] py-24 md:py-32">
          <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
            <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="font-poppins text-7xl font-semibold tracking-[-0.07em] text-white/[0.045] md:text-8xl">
                  01
                </p>

                <p className="mt-[-18px] text-xs font-semibold uppercase tracking-[0.25em] text-[#3da5ff]">
                  Quién está detrás
                </p>
              </div>

              <div>
                <h2 className="font-poppins text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                  No se trata solamente de programar.
                </h2>

                <div className="mt-7 max-w-3xl space-y-5 text-base leading-8 text-[#94a3b8]">
                  <p>
                    La tecnología siempre me ha interesado desde diferentes
                    perspectivas: desde entender cómo funciona una red hasta
                    construir una aplicación completa.
                  </p>

                  <p>
                    Esa combinación entre infraestructura y desarrollo me
                    permite analizar los problemas desde varios niveles:
                    arquitectura, software, datos, seguridad y experiencia de
                    usuario.
                  </p>

                  <p>
                    Hoy esa experiencia se concentra en DevPass: una marca
                    enfocada en construir, experimentar y documentar soluciones
                    digitales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            RECORRIDO
        ========================================================= */}
        <section className="relative border-b border-white/[0.06] bg-[#030b19] py-24 md:py-32">
          <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
            <div className="mb-16 max-w-2xl">
              <div className="flex items-center gap-4">
                <span className="font-poppins text-7xl font-semibold tracking-[-0.07em] text-white/[0.045] md:text-8xl">
                  02
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3da5ff]">
                  El recorrido
                </span>
              </div>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                De la infraestructura al software.
              </h2>

              <p className="mt-5 text-base leading-7 text-[#64748b]">
                Cada etapa fue agregando una nueva perspectiva sobre la
                tecnología.
              </p>
            </div>

            <div className="relative">

              <div className="space-y-5">
                {journey.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.number}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.05,
                      }}
                      className="group relative grid gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 transition-all duration-300 hover:border-[#3da5ff]/20 hover:bg-[#0a1f3d]/35 md:grid-cols-[50px_210px_1fr] md:items-center md:gap-7"
                    >
                      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-[#3da5ff]/20 bg-[#071a34] text-[#3da5ff]">
                        <Icon size={17} />
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                          {item.number}
                        </p>
                        <h3 className="mt-1 font-poppins text-base font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>

                      <p className="max-w-2xl text-sm leading-7 text-[#64748b] transition-colors group-hover:text-[#94a3b8]">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FORMA DE PENSAR
        ========================================================= */}
        <section className="relative border-b border-white/[0.06] py-24 md:py-32">
          <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="font-poppins text-7xl font-semibold tracking-[-0.07em] text-white/[0.045] md:text-8xl">
                  03
                </p>

                <p className="mt-[-18px] text-xs font-semibold uppercase tracking-[0.25em] text-[#3da5ff]">
                  Cómo pienso
                </p>

                <h2 className="mt-5 font-poppins text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                  Primero entender.
                  <br />
                  Después construir.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#94a3b8]">
                  No creo que una buena solución empiece escribiendo código.
                  Empieza entendiendo el problema, sus restricciones y el
                  resultado que realmente se necesita.
                </p>

                <p className="mt-5 max-w-xl text-base leading-8 text-[#64748b]">
                  Después viene la tecnología: elegir herramientas adecuadas,
                  construir una solución mantenible y aprender de lo que ocurre
                  durante el proceso.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Problema",
                    text: "Entender qué necesita realmente el proyecto.",
                    icon: BrainCircuit,
                  },
                  {
                    title: "Arquitectura",
                    text: "Pensar cómo deben conectarse sus piezas.",
                    icon: Network,
                  },
                  {
                    title: "Construcción",
                    text: "Convertir la idea en software funcional.",
                    icon: Code2,
                  },
                  {
                    title: "Evolución",
                    text: "Medir, aprender y mejorar continuamente.",
                    icon: GitBranch,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/[0.07] bg-[#071a34]/45 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#3da5ff]/20"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1e6bff]/10 text-[#3da5ff]">
                        <Icon size={19} />
                      </div>

                      <h3 className="mt-5 font-poppins text-base font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#64748b]">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            STACK
        ========================================================= */}
        <section className="relative border-b border-white/[0.06] bg-[#030b19] py-24 md:py-32">
          <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
            <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="font-poppins text-7xl font-semibold tracking-[-0.07em] text-white/[0.045] md:text-8xl">
                  04
                </p>

                <p className="mt-[-18px] text-xs font-semibold uppercase tracking-[0.25em] text-[#3da5ff]">
                  Stack
                </p>

                <h2 className="mt-5 font-poppins text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                  Herramientas para construir.
                </h2>

                <p className="mt-5 max-w-md text-base leading-7 text-[#64748b]">
                  Un stack amplio permite elegir la tecnología según el
                  problema, no intentar adaptar el problema a una herramienta.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {technologies.map((technology, index) => {
                  const Icon = technology.icon;

                  return (
                    <motion.div
                      key={technology.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.04,
                      }}
                      className="group rounded-xl border border-white/[0.06] bg-white/[0.015] p-5 transition-all duration-300 hover:border-[#3da5ff]/20 hover:bg-[#0a1f3d]/35"
                    >
                      <Icon
                        size={19}
                        className="text-[#64748b] transition-colors duration-300 group-hover:text-[#3da5ff]"
                      />

                      <p className="mt-4 text-sm font-medium text-[#cbd5e1] transition-colors group-hover:text-white">
                        {technology.name}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            DEVPASS
        ========================================================= */}
        <section className="relative border-b border-white/[0.06] py-24 md:py-32">
          <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
            <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="font-poppins text-7xl font-semibold tracking-[-0.07em] text-white/[0.045] md:text-8xl">
                  05
                </p>

                <p className="mt-[-18px] text-xs font-semibold uppercase tracking-[0.25em] text-[#3da5ff]">
                  DevPass
                </p>
              </div>

              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-[#3da5ff]/15 bg-[#1e6bff]/5 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#3da5ff]" />
                  <span className="text-xs font-medium tracking-wide text-[#a7d3ff]">
                    Technology · Development · Innovation
                  </span>
                </div>

                <h2 className="mt-7 max-w-3xl font-poppins text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  Un espacio para{" "}
                  <span className="devpass-gradient-text">
                    construir, aprender y documentar.
                  </span>
                </h2>

                <p className="mt-7 max-w-3xl text-base leading-8 text-[#94a3b8]">
                  DevPass funciona como una marca y como un laboratorio
                  personal de tecnología. Aquí conviven proyectos reales,
                  experimentos, artículos, herramientas y soluciones
                  desarrolladas a partir de problemas concretos.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="border-l border-[#3da5ff]/25 pl-5">
                    <p className="font-poppins text-lg font-semibold text-white">
                      Construir
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#64748b]">
                      Crear soluciones que puedan utilizarse.
                    </p>
                  </div>

                  <div className="border-l border-[#3da5ff]/25 pl-5">
                    <p className="font-poppins text-lg font-semibold text-white">
                      Aprender
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#64748b]">
                      Explorar tecnologías y nuevas ideas.
                    </p>
                  </div>

                  <div className="border-l border-[#3da5ff]/25 pl-5">
                    <p className="font-poppins text-lg font-semibold text-white">
                      Documentar
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#64748b]">
                      Compartir conocimiento y experiencia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FILOSOFÍA
        ========================================================= */}
        <section className="relative overflow-hidden bg-[#030b19] py-24 md:py-32">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e6bff]/8 blur-[140px]" />

          <div className="relative mx-auto w-[min(1000px,calc(100%-40px))] text-center">
            <p className="font-poppins text-7xl font-semibold tracking-[-0.07em] text-white/[0.045] md:text-8xl">
              06
            </p>

            <p className="mt-[-18px] text-xs font-semibold uppercase tracking-[0.25em] text-[#3da5ff]">
              Filosofía
            </p>

            <blockquote className="mx-auto mt-10 max-w-4xl font-poppins text-3xl font-medium leading-[1.3] tracking-[-0.035em] text-white sm:text-4xl md:text-5xl">
              “Me gusta la tecnología porque es la nueva forma de innovar y
              mejorar el mundo.”
            </blockquote>

            <div className="mx-auto mt-10 h-px w-16 bg-[#3da5ff]" />

            <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-[#64748b]">
              La tecnología no es solamente una colección de herramientas.
              También es una forma de resolver problemas, crear oportunidades
              y convertir ideas en algo tangible.
            </p>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================= */}
        <section className="border-t border-white/[0.06] py-20 md:py-24">
          <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
            <div className="relative overflow-hidden rounded-3xl border border-[#3da5ff]/15 bg-gradient-to-br from-[#0a1f3d] to-[#04101f] px-7 py-12 md:px-12 md:py-14">
              <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full bg-[#1e6bff]/15 blur-[100px]" />

              <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3da5ff]">
                    ¿Construimos algo?
                  </p>

                  <h2 className="mt-3 font-poppins text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                    Una idea puede convertirse en software.
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#64748b]">
                    Cuéntame qué necesitas y podemos convertir el problema en
                    una solución digital.
                  </p>
                </div>

                <Link
                  href="/contacto"
                  className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#1e6bff] px-6 py-4 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(30,107,255,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2874ff]"
                >
                  Hablemos
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}