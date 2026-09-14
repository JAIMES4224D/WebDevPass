"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Check,
  ChevronRight,
  Database,
  FileText,
  Layers3,
  Sigma,
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

const tfidfSteps = [
  {
    number: "01",
    title: "Frecuencia del término",
    description:
      "TF mide qué tan frecuente aparece una palabra dentro de un documento.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Frecuencia inversa",
    description:
      "IDF reduce el peso de palabras que aparecen en muchos documentos y destaca términos más específicos.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Peso TF-IDF",
    description:
      "La combinación de ambas medidas permite representar cada término según su importancia relativa.",
    icon: Sigma,
  },
];

const pipeline = [
  ["01", "Texto", "Información original"],
  ["02", "Preprocesamiento", "Limpieza y normalización"],
  ["03", "TF-IDF", "Vectorización"],
  ["04", "Coseno", "Comparación"],
  ["05", "Ranking", "Resultados similares"],
];

const applications = [
  {
    title: "Sistemas de recomendación",
    description:
      "Permite comparar la descripción o características de elementos para encontrar aquellos con contenido similar.",
    icon: Sparkles,
  },
  {
    title: "Búsqueda de documentos",
    description:
      "Una consulta puede representarse de forma comparable a una colección de documentos.",
    icon: Database,
  },
  {
    title: "Clasificación de texto",
    description:
      "Los vectores generados pueden utilizarse como representación de entrada para diferentes modelos.",
    icon: BrainCircuit,
  },
  {
    title: "Análisis de contenido",
    description:
      "Ayuda a identificar términos relevantes dentro de documentos y colecciones de texto.",
    icon: FileText,
  },
];

const practicalNotes = [
  "TF-IDF trabaja con la importancia estadística de los términos.",
  "El preprocesamiento puede modificar considerablemente los resultados.",
  "La similitud coseno compara la orientación de los vectores.",
  "Dos textos pueden ser similares aunque tengan diferente longitud.",
  "El método funciona especialmente bien cuando las características textuales son importantes.",
];

function FormulaBlock({
  title,
  formula,
  description,
}: {
  title: string;
  formula: string;
  description: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#3da5ff]/10 bg-[#020711]">
      <div className="border-b border-white/[0.05] px-5 py-3">
        <span className="font-mono text-[9px] font-semibold tracking-[0.14em] text-[#475569]">
          {title}
        </span>
      </div>

      <div className="px-5 py-6">
        <div className="overflow-x-auto rounded-xl border border-white/[0.05] bg-[#050d1a] px-5 py-5 text-center">
          <code className="whitespace-nowrap font-mono text-sm text-[#a7d3ff] sm:text-base">
            {formula}
          </code>
        </div>

        <p className="mt-4 text-xs leading-6 text-[#64748b]">
          {description}
        </p>
      </div>
    </div>
  );
}

function VectorBlock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#020711]">
      <div className="flex items-center justify-between border-b border-white/[0.05] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-400/60" />
          <span className="h-2 w-2 rounded-full bg-amber-400/60" />
          <span className="h-2 w-2 rounded-full bg-green-400/60" />

          <span className="ml-2 font-mono text-[9px] tracking-[0.14em] text-[#475569]">
            VECTOR REPRESENTATION
          </span>
        </div>

        <Terminal size={12} className="text-[#334155]" />
      </div>

      <div className="space-y-3 px-5 py-5 font-mono text-xs">
        <div>
          <span className="text-[#475569]">document_A = </span>
          <span className="text-[#a7d3ff]">
            [0.72, 0.00, 0.31, 0.84]
          </span>
        </div>

        <div>
          <span className="text-[#475569]">document_B = </span>
          <span className="text-[#a7d3ff]">
            [0.68, 0.05, 0.28, 0.79]
          </span>
        </div>

        <div className="pt-2">
          <span className="text-[#475569]">similarity = </span>
          <span className="text-[#3da5ff]">0.97</span>
        </div>
      </div>
    </div>
  );
}

export default function TfIdfSimilitudCosenoPage() {
  const webPageSchema = createWebPageSchema({
    name: "TF-IDF y similitud coseno | DevPass",
    description:
      "Apuntes sobre TF-IDF y similitud coseno: cómo transformar texto en vectores, medir la importancia de los términos y comparar documentos mediante representaciones numéricas.",
    path: "/notes/tf-idf-similitud-coseno",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Notes", path: "/notes" },
    {
      name: "TF-IDF y similitud coseno",
      path: "/notes/tf-idf-similitud-coseno",
    },
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
        <section className="relative border-b border-white/[0.06] pt-32 pb-16">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(61,165,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(61,165,255,0.8) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            <div className="absolute left-1/2 top-0 h-[500px] w-[720px] -translate-x-1/2 rounded-full bg-[#1e6bff]/10 blur-[150px]" />

            <div className="absolute right-[-100px] top-48 h-72 w-72 rounded-full bg-[#3da5ff]/5 blur-[120px]" />
          </div>

          <div className="devpass-container relative">
            <Link
              href="/notes"
              className="group inline-flex items-center gap-2 text-xs font-medium text-[#64748b] transition-colors hover:text-[#a7d3ff]"
            >
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-1"
              />
              Volver a Notes
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="mt-12 max-w-4xl"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#3da5ff]/15 bg-[#071a34]/70 px-3.5 py-2 font-poppins text-[9px] font-semibold tracking-[0.2em] text-[#94a3b8]">
                  <Sigma size={12} className="text-[#3da5ff]" />
                  DEVPASS · NOTES
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3.5 py-2 font-mono text-[9px] tracking-[0.12em] text-[#64748b]">
                  DATA SCIENCE
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
                TF-IDF y{" "}
                <span className="devpass-gradient-text">
                  similitud coseno.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#94a3b8] sm:text-lg">
                Dos conceptos fundamentales para transformar texto en
                representaciones numéricas y medir qué tan similares son
                diferentes documentos o elementos.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-[10px] font-medium tracking-[0.08em] text-[#475569]">
                <span className="flex items-center gap-2">
                  <BarChart3 size={13} className="text-[#3da5ff]" />
                  DATA
                </span>

                <span className="h-3 w-px bg-white/[0.08]" />

                <span>04 SEP 2026</span>

                <span className="h-3 w-px bg-white/[0.08]" />

                <span>6 MIN DE LECTURA</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ARTICLE */}
        <section className="relative py-16 sm:py-20">
          <div className="devpass-container">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,820px)_220px] lg:items-start lg:justify-center">
              <article className="min-w-0">
                {/* INTRO */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55 }}
                >
                  <div className="border-l border-[#3da5ff]/25 pl-5 sm:pl-6">
                    <p className="text-sm leading-8 text-[#94a3b8] sm:text-base">
                      Cuando trabajamos con texto, los algoritmos de machine
                      learning necesitan una representación numérica. Una de
                      las formas clásicas de conseguirlo es utilizar TF-IDF,
                      una técnica que asigna un peso a cada término según su
                      importancia dentro de una colección de documentos.
                    </p>

                    <p className="mt-5 text-sm leading-8 text-[#94a3b8] sm:text-base">
                      Una vez que los textos han sido convertidos en vectores,
                      podemos utilizar la similitud coseno para comparar esas
                      representaciones y determinar qué tan cercanas son.
                    </p>
                  </div>
                </motion.div>

                {/* 01 TF-IDF */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-16"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      01
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      ¿Qué es TF-IDF?
                    </h2>
                  </div>

                  <p className="text-sm leading-8 text-[#64748b] sm:text-base">
                    TF-IDF significa{" "}
                    <span className="text-[#a7d3ff]">
                      Term Frequency – Inverse Document Frequency
                    </span>
                    . Su objetivo es asignar un peso a cada palabra considerando
                    dos aspectos: cuánto aparece dentro de un documento y qué
                    tan común es dentro de toda la colección.
                  </p>

                  <p className="mt-5 text-sm leading-8 text-[#64748b] sm:text-base">
                    Una palabra que aparece muchas veces en un documento puede
                    ser importante para ese documento, mientras que una palabra
                    que aparece prácticamente en todos los documentos aporta
                    menos información para diferenciarlos.
                  </p>

                  <div className="mt-8">
                    <FormulaBlock
                      title="TF-IDF"
                      formula="TF-IDF(t,d) = TF(t,d) × IDF(t)"
                      description="El peso final combina la frecuencia del término dentro del documento con su frecuencia inversa dentro de la colección."
                    />
                  </div>
                </motion.section>

                {/* 02 COMPONENTS */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      02
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      Cómo se construye el peso
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {tfidfSteps.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.number}
                          className="group rounded-2xl border border-white/[0.06] bg-[#050d1a] p-5 transition-all duration-300 hover:border-[#3da5ff]/15 hover:bg-[#071426]"
                        >
                          <div className="flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                              <Icon size={17} />
                            </div>

                            <div>
                              <div className="flex items-center gap-3">
                                <span className="font-mono text-[9px] text-[#3da5ff]">
                                  {item.number}
                                </span>

                                <h3 className="font-poppins text-sm font-semibold text-white">
                                  {item.title}
                                </h3>
                              </div>

                              <p className="mt-2 text-sm leading-7 text-[#64748b]">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.section>

                {/* 03 SIMPLE EXAMPLE */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      03
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      Una idea sencilla
                    </h2>
                  </div>

                  <p className="text-sm leading-8 text-[#64748b] sm:text-base">
                    Imaginemos una colección de documentos sobre películas.
                    Términos como{" "}
                    <span className="text-[#a7d3ff]">película</span>,{" "}
                    <span className="text-[#a7d3ff]">cine</span> o{" "}
                    <span className="text-[#a7d3ff]">historia</span> pueden
                    aparecer muchas veces. Otros términos más específicos
                    pueden ayudar mucho más a distinguir un documento de otro.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {[
                      ["TÉRMINO COMÚN", "menor capacidad de diferenciación"],
                      ["TÉRMINO ESPECÍFICO", "mayor capacidad de diferenciación"],
                      ["PESO TF-IDF", "representación numérica"],
                    ].map(([title, description]) => (
                      <div
                        key={title}
                        className="rounded-2xl border border-white/[0.06] bg-[#050d1a] p-5"
                      >
                        <span className="font-mono text-[9px] tracking-[0.12em] text-[#3da5ff]">
                          {title}
                        </span>

                        <p className="mt-3 text-xs leading-6 text-[#475569]">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* 04 VECTORS */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      04
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      Del texto al vector
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#64748b]">
                      Después de calcular los pesos, cada documento puede
                      representarse como un vector en un espacio numérico.
                    </p>
                  </div>

                  <VectorBlock />

                  <p className="mt-5 text-sm leading-8 text-[#64748b]">
                    En una colección real existirían muchos más términos y,
                    por lo tanto, los vectores tendrían muchas dimensiones.
                    La representación numérica es la que permite aplicar
                    operaciones matemáticas sobre el contenido textual.
                  </p>
                </motion.section>

                {/* 05 COSINE */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      05
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      ¿Qué es la similitud coseno?
                    </h2>
                  </div>

                  <p className="text-sm leading-8 text-[#64748b] sm:text-base">
                    La similitud coseno compara dos vectores observando el
                    ángulo entre ellos. En lugar de centrarse únicamente en la
                    magnitud de los vectores, analiza su orientación.
                  </p>

                  <div className="mt-8">
                    <FormulaBlock
                      title="COSINE SIMILARITY"
                      formula="cos(θ) = (A · B) / (||A|| × ||B||)"
                      description="El producto punto se divide entre el producto de las magnitudes de ambos vectores."
                    />
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {[
                      ["≈ 1", "Vectores muy similares"],
                      ["≈ 0", "Poca relación"],
                      ["≈ -1", "Orientaciones opuestas"],
                    ].map(([value, description]) => (
                      <div
                        key={value}
                        className="rounded-xl border border-white/[0.05] bg-[#050d1a] p-5 text-center"
                      >
                        <span className="font-mono text-lg text-[#a7d3ff]">
                          {value}
                        </span>

                        <p className="mt-2 text-xs text-[#475569]">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* 06 PROCESS */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      06
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      El flujo completo
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#64748b]">
                      La combinación de TF-IDF y similitud coseno puede
                      utilizarse como un pipeline sencillo para comparar
                      contenido.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-5">
                    {pipeline.map(([number, title, description], index) => (
                      <div
                        key={number}
                        className="relative rounded-2xl border border-white/[0.06] bg-[#050d1a] p-4"
                      >
                        <span className="font-mono text-[9px] text-[#3da5ff]">
                          {number}
                        </span>

                        <h3 className="mt-4 font-poppins text-xs font-semibold text-white">
                          {title}
                        </h3>

                        <p className="mt-2 text-[10px] leading-5 text-[#475569]">
                          {description}
                        </p>

                        {index < pipeline.length - 1 && (
                          <ArrowRight
                            size={12}
                            className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-[#334155] sm:block"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* 07 APPLICATIONS */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      07
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      ¿Dónde puedo utilizarlo?
                    </h2>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {applications.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="group rounded-2xl border border-white/[0.06] bg-[#050d1a] p-5 transition-all duration-300 hover:border-[#3da5ff]/15 hover:bg-[#071426]"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                            <Icon size={17} />
                          </div>

                          <h3 className="mt-5 font-poppins text-sm font-semibold text-white">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-sm leading-7 text-[#64748b]">
                            {item.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </motion.section>

                {/* 08 RECOMMENDER */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      08
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      Un ejemplo: recomendación de películas
                    </h2>
                  </div>

                  <p className="text-sm leading-8 text-[#64748b] sm:text-base">
                    En un sistema de recomendación basado en contenido, cada
                    película puede representarse utilizando información textual
                    como género, palabras clave, director o reparto. Esa
                    información puede convertirse en vectores y posteriormente
                    compararse.
                  </p>

                  <div className="mt-8 overflow-hidden rounded-2xl border border-[#3da5ff]/10 bg-[#020711]">
                    <div className="border-b border-white/[0.05] px-5 py-3">
                      <span className="font-mono text-[9px] tracking-[0.14em] text-[#475569]">
                        CONTENT-BASED RECOMMENDER
                      </span>
                    </div>

                    <div className="grid gap-px bg-white/[0.04] sm:grid-cols-4">
                      {[
                        ["PELÍCULA", "Metadata"],
                        ["TF-IDF", "Vector"],
                        ["COSENO", "Similarity"],
                        ["RANKING", "Recommendation"],
                      ].map(([title, description]) => (
                        <div
                          key={title}
                          className="bg-[#050d1a] p-5"
                        >
                          <span className="font-mono text-[9px] text-[#3da5ff]">
                            {title}
                          </span>

                          <p className="mt-2 text-xs text-[#64748b]">
                            {description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/proyectos/recomendacion-peliculas"
                    className="group mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#64748b] transition-colors hover:text-[#a7d3ff]"
                  >
                    Ver proyecto de recomendación
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </motion.section>

                {/* 09 NOTES */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      09
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      Algunas consideraciones
                    </h2>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#050d1a]">
                    {practicalNotes.map((note, index) => (
                      <div
                        key={note}
                        className={`flex gap-4 px-5 py-4 ${
                          index !== practicalNotes.length - 1
                            ? "border-b border-white/[0.05]"
                            : ""
                        }`}
                      >
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-[#3da5ff]/15 bg-[#071a34]">
                          <Check size={11} className="text-[#3da5ff]" />
                        </div>

                        <p className="text-xs leading-6 text-[#64748b]">
                          {note}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* CONCLUSION */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20 rounded-2xl border border-[#3da5ff]/10 bg-gradient-to-br from-[#071a34] to-[#050d1a] p-7 sm:p-8"
                >
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#020617] text-[#3da5ff]">
                      <Layers3 size={17} />
                    </div>

                    <div>
                      <h2 className="font-poppins text-lg font-semibold text-white">
                        Convertir texto en información utilizable
                      </h2>

                      <p className="mt-3 text-sm leading-7 text-[#64748b]">
                        TF-IDF permite transformar términos de un documento en
                        pesos numéricos y la similitud coseno permite comparar
                        las representaciones resultantes.
                      </p>

                      <p className="mt-4 text-sm leading-7 text-[#64748b]">
                        La combinación es sencilla, interpretable y puede ser
                        suficiente para construir soluciones prácticas de
                        búsqueda, análisis y recomendación basadas en
                        contenido.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* NAVIGATION */}
                <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    href="/notes/agentes-inteligencia-artificial"
                    className="group inline-flex items-center gap-2 text-xs font-semibold text-[#64748b] transition-colors hover:text-[#a7d3ff]"
                  >
                    <ArrowLeft
                      size={14}
                      className="transition-transform group-hover:-translate-x-1"
                    />
                    Note anterior
                  </Link>

                  <Link
                    href="/notes/diagnostico-redes-linux"
                    className="group inline-flex items-center gap-2 text-xs font-semibold text-[#64748b] transition-colors hover:text-[#a7d3ff]"
                  >
                    Siguiente Note
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>

              {/* SIDEBAR */}
              <aside className="hidden lg:block lg:sticky lg:top-28">
                <div className="rounded-2xl border border-white/[0.06] bg-[#050d1a] p-5">
                  <div className="mb-5 flex items-center gap-2">
                    <Layers3 size={14} className="text-[#3da5ff]" />

                    <span className="font-poppins text-[10px] font-semibold tracking-[0.18em] text-[#94a3b8]">
                      EN ESTA NOTE
                    </span>
                  </div>

                  <div className="space-y-1">
                    {[
                      ["01", "¿Qué es TF-IDF?"],
                      ["02", "Construcción del peso"],
                      ["03", "Idea sencilla"],
                      ["04", "Del texto al vector"],
                      ["05", "Similitud coseno"],
                      ["06", "Flujo completo"],
                      ["07", "Aplicaciones"],
                      ["08", "Recomendación"],
                      ["09", "Consideraciones"],
                    ].map(([number, title]) => (
                      <div
                        key={number}
                        className="group rounded-lg px-2 py-2.5 transition-colors hover:bg-white/[0.025]"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[9px] text-[#3da5ff]">
                            {number}
                          </span>

                          <span className="text-[10px] leading-5 text-[#64748b] group-hover:text-[#94a3b8]">
                            {title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/notes"
                  className="group mt-4 flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#050d1a] px-4 py-3 transition-colors hover:border-[#3da5ff]/15"
                >
                  <span className="text-[10px] font-medium text-[#64748b]">
                    Ver todas las notas
                  </span>

                  <ChevronRight
                    size={13}
                    className="text-[#475569] transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </aside>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative border-t border-white/[0.06] bg-[#030a15] py-20">
          <div className="devpass-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-[#3da5ff]/10 bg-gradient-to-br from-[#071a34] via-[#050d1a] to-[#020617] p-8 sm:p-10 lg:p-12"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="font-poppins text-[10px] font-semibold tracking-[0.28em] text-[#3da5ff]">
                    DEVPASS · DATA
                  </p>

                  <h2 className="mt-4 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                    Convertir datos en soluciones.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#64748b]">
                    Explora más notas y proyectos donde los conceptos de
                    ciencia de datos se convierten en soluciones prácticas.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/notes"
                    className="group inline-flex items-center gap-2 rounded-xl bg-[#1e6bff] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#2b75ff]"
                  >
                    Explorar Notes
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/proyectos/recomendacion-peliculas"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-3 text-xs font-semibold text-[#a7b4c8] transition-colors hover:border-[#3da5ff]/20 hover:text-white"
                  >
                    Ver proyecto
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