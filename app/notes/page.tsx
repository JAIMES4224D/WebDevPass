"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Layers3,
  Network,
  Search,
  ShieldCheck,
  Terminal,
  Wrench,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

const categories = [
  { label: "Todos", value: "all" },
  { label: "DEV", value: "dev" },
  { label: "LINUX", value: "linux" },
  { label: "IA", value: "ia" },
  { label: "DATA", value: "data" },
  { label: "NETWORKING", value: "networking" },
  { label: "SECURITY", value: "security" },
  { label: "TOOLS", value: "tools" },
];

const notes = [
  {
    category: "LINUX",
    categoryValue: "linux",
    title: "Comandos Linux que uso con frecuencia",
    description:
      "Una colección práctica de comandos para trabajar con archivos, procesos, servicios, red y sistema desde la terminal.",
    date: "11 SEP 2026",
    readTime: "5 min",
    icon: Terminal,
    href: "/notes/linux-comandos",
    featured: true,
  },
  {
    category: "DEV",
    categoryValue: "dev",
    title: "Buenas prácticas para proyectos de software",
    description:
      "Apuntes sobre estructura, organización, mantenimiento y decisiones que ayudan a construir software más sólido.",
    date: "09 SEP 2026",
    readTime: "6 min",
    icon: Code2,
    href: "/notes/buenas-practicas-software",
    featured: false,
  },
  {
    category: "IA",
    categoryValue: "ia",
    title: "Agentes de inteligencia artificial",
    description:
      "Conceptos fundamentales para entender cómo funcionan los agentes y qué los diferencia de una aplicación tradicional.",
    date: "07 SEP 2026",
    readTime: "7 min",
    icon: BrainCircuit,
    href: "/notes/agentes-inteligencia-artificial",
    featured: false,
  },
  {
    category: "DATA",
    categoryValue: "data",
    title: "TF-IDF y similitud coseno",
    description:
      "Notas sobre dos conceptos fundamentales utilizados en procesamiento de lenguaje natural y sistemas de recomendación.",
    date: "04 SEP 2026",
    readTime: "6 min",
    icon: Database,
    href: "/notes/tf-idf-similitud-coseno",
    featured: false,
  },
  {
    category: "NETWORKING",
    categoryValue: "networking",
    title: "Diagnóstico básico de redes en Linux",
    description:
      "Herramientas y comandos para revisar conectividad, puertos, rutas, interfaces y servicios de red.",
    date: "01 SEP 2026",
    readTime: "5 min",
    icon: Network,
    href: "/notes/diagnostico-redes-linux",
    featured: false,
  },
  {
    category: "SECURITY",
    categoryValue: "security",
    title: "Principios básicos de seguridad web",
    description:
      "Apuntes sobre autenticación, autorización, validación de entradas y algunas prácticas esenciales de seguridad.",
    date: "29 AGO 2026",
    readTime: "7 min",
    icon: ShieldCheck,
    href: "/notes/seguridad-web",
    featured: false,
  },
  {
    category: "TOOLS",
    categoryValue: "tools",
    title: "Herramientas que forman parte de mi stack",
    description:
      "Un vistazo a las herramientas que utilizo para desarrollar, probar, documentar y mantener proyectos.",
    date: "26 AGO 2026",
    readTime: "4 min",
    icon: Wrench,
    href: "/notes/herramientas-stack",
    featured: false,
  },
  {
    category: "DEV",
    categoryValue: "dev",
    title: "Arquitectura antes que código",
    description:
      "Por qué pensar en componentes, responsabilidades y dependencias antes de comenzar a implementar.",
    date: "22 AGO 2026",
    readTime: "5 min",
    icon: Layers3,
    href: "/notes/arquitectura-antes-codigo",
    featured: false,
  },
  {
    category: "TOOLS",
    categoryValue: "tools",
    title: "Git: flujo de trabajo que utilizo",
    description:
      "Apuntes prácticos sobre ramas, commits, repositorios remotos y resolución de problemas habituales.",
    date: "19 AGO 2026",
    readTime: "5 min",
    icon: GitBranch,
    href: "/notes/git-flujo-trabajo",
    featured: false,
  },
];

export default function NotesPage() {
  const webPageSchema = createWebPageSchema({
  name: "Notes | Apuntes de Tecnología, Desarrollo, IA y Linux | DevPass",
  description:
    "Notes de DevPass: apuntes prácticos sobre desarrollo de software, inteligencia artificial, Linux, datos, networking, seguridad, herramientas y arquitectura de sistemas.",
  path: "/notes",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "Notes", path: "/notes" },
]);
  return (
    <>
      <JsonLd
        data={[
          webPageSchema,
          breadcrumbSchema,
        ]}
      />
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#020617]">
        {/* HERO */}
        <section className="relative border-b border-white/[0.06] pt-32 pb-20">
          {/* Background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(61,165,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(61,165,255,0.8) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#1e6bff]/10 blur-[140px]" />

            <div className="absolute -left-40 top-40 h-72 w-72 rounded-full bg-[#3da5ff]/5 blur-[100px]" />
          </div>

          <div className="devpass-container relative">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#3da5ff]/15 bg-[#071a34]/70 px-4 py-2 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3da5ff] shadow-[0_0_10px_rgba(61,165,255,0.8)]" />

                <span className="font-poppins text-[10px] font-semibold tracking-[0.28em] text-[#94a3b8]">
                  DEVPASS · NOTES
                </span>
              </div>

              <h1 className="font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
                Ideas, apuntes y{" "}
                <span className="devpass-gradient-text">
                  conocimiento técnico.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#94a3b8] sm:text-lg">
                Pequeñas notas sobre desarrollo, inteligencia artificial,
                Linux, datos, sistemas, networking y herramientas que voy
                aprendiendo mientras construyo.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-xs text-[#64748b]">
                  <BookOpen size={14} className="text-[#3da5ff]" />
                  Conocimiento documentado
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-xs text-[#64748b]">
                  <FileCode2 size={14} className="text-[#3da5ff]" />
                  Notas prácticas
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-xs text-[#64748b]">
                  <Terminal size={14} className="text-[#3da5ff]" />
                  Developer focused
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* NOTES */}
        <section className="relative py-20">
          <div className="devpass-container">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            >
              <div>
                <p className="font-poppins text-[10px] font-semibold tracking-[0.28em] text-[#3da5ff]">
                  KNOWLEDGE BASE
                </p>

                <h2 className="mt-3 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                  Notas recientes
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-[#64748b]">
                  Apuntes breves y prácticos sobre tecnología, desarrollo y
                  experimentación.
                </p>
              </div>

              {/* Search visual */}
              <div className="flex h-11 w-full max-w-sm items-center gap-3 rounded-xl border border-white/[0.07] bg-[#07101f]/80 px-4">
                <Search size={16} className="text-[#64748b]" />

                <span className="text-sm text-[#475569]">
                  Buscar una nota...
                </span>

                <span className="ml-auto hidden rounded-md border border-white/[0.06] px-2 py-1 font-mono text-[10px] text-[#475569] sm:block">
                  /
                </span>
              </div>
            </motion.div>

            {/* Categories */}
            <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
              {categories.map((category, index) => (
                <button
                  key={category.value}
                  type="button"
                  className={`shrink-0 rounded-lg border px-4 py-2 text-[11px] font-semibold tracking-[0.08em] transition-all ${
                    index === 0
                      ? "border-[#3da5ff]/30 bg-[#1e6bff]/10 text-[#a7d3ff]"
                      : "border-white/[0.06] bg-white/[0.015] text-[#64748b] hover:border-[#3da5ff]/20 hover:text-[#94a3b8]"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {notes.map((note, index) => {
                const Icon = note.icon;

                return (
                  <motion.article
                    key={note.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(index * 0.05, 0.25),
                    }}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#050d1a] transition-all duration-300 hover:-translate-y-1 hover:border-[#3da5ff]/20 hover:bg-[#071426] ${
                      note.featured ? "md:col-span-2 lg:col-span-2" : ""
                    }`}
                  >
                    {/* Glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#1e6bff]/5 blur-3xl transition-opacity duration-300 group-hover:bg-[#1e6bff]/10" />

                    <div className="relative flex h-full flex-col p-6 sm:p-7">
                      {/* Top */}
                      <div className="flex items-start justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff] transition-transform duration-300 group-hover:scale-105">
                          <Icon size={18} />
                        </div>

                        <span className="rounded-md border border-[#3da5ff]/10 bg-[#3da5ff]/[0.04] px-2.5 py-1 font-mono text-[9px] font-medium tracking-[0.12em] text-[#5d9ed4]">
                          {note.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="mt-7">
                        <p className="font-mono text-[10px] tracking-[0.08em] text-[#475569]">
                          {note.date} · {note.readTime}
                        </p>

                        <h3
                          className={`mt-3 font-poppins font-semibold leading-snug tracking-[-0.025em] text-white ${
                            note.featured
                              ? "text-xl sm:text-2xl"
                              : "text-lg"
                          }`}
                        >
                          {note.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#64748b] transition-colors duration-300 group-hover:text-[#7f8ea3]">
                          {note.description}
                        </p>
                      </div>

                      {/* Bottom */}
                      <div className="mt-auto pt-8">
                        <Link
                          href={note.href}
                          className="inline-flex items-center gap-2 text-xs font-semibold text-[#94a3b8] transition-colors group-hover:text-[#a7d3ff]"
                        >
                          Leer nota
                          <ArrowRight
                            size={14}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="relative border-y border-white/[0.06] bg-[#030a15] py-20">
          <div className="devpass-container">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                <p className="font-poppins text-[10px] font-semibold tracking-[0.28em] text-[#3da5ff]">
                  DOCUMENTAR
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl">
                  Aprender también es{" "}
                  <span className="devpass-gradient-text">
                    documentar.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-8 text-[#64748b]">
                  Notes nace de una idea sencilla: cada problema resuelto
                  puede convertirse en conocimiento reutilizable.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid gap-3 sm:grid-cols-4"
              >
                {[
                  ["01", "Explorar"],
                  ["02", "Construir"],
                  ["03", "Aprender"],
                  ["04", "Documentar"],
                ].map(([number, label]) => (
                  <div
                    key={number}
                    className="rounded-2xl border border-white/[0.06] bg-[#07101f] p-5"
                  >
                    <span className="font-mono text-[10px] text-[#3da5ff]">
                      {number}
                    </span>

                    <p className="mt-4 font-poppins text-sm font-medium text-white">
                      {label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ECOSYSTEM */}
        <section className="relative py-20">
          <div className="devpass-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-[#3da5ff]/10 bg-gradient-to-br from-[#071a34] via-[#050d1a] to-[#020617] p-8 sm:p-10 lg:p-12"
            >
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="font-poppins text-[10px] font-semibold tracking-[0.28em] text-[#3da5ff]">
                    ECOSISTEMA DEVPASS
                  </p>

                  <h2 className="mt-4 max-w-2xl font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                    Del conocimiento a proyectos reales.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#64748b]">
                    Explora también los proyectos y experimentos donde estas
                    ideas se convierten en soluciones.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/proyectos"
                    className="group inline-flex items-center gap-2 rounded-xl bg-[#1e6bff] px-5 py-3 text-xs font-semibold text-white transition-all hover:bg-[#2b75ff]"
                  >
                    Ver proyectos
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/lab"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-3 text-xs font-semibold text-[#a7b4c8] transition-all hover:border-[#3da5ff]/20 hover:text-white"
                  >
                    Explorar Lab
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}