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
  "https://github.com/JAIMES4224D/Algoritmo-de-Recomendaci-n-Peliculas-";

const features = [
  {
    number: "01",
    title: "Content-Based Filtering",
    description:
      "Las recomendaciones se construyen a partir de las características y metadatos de cada película, sin depender del comportamiento de otros usuarios.",
  },
  {
    number: "02",
    title: "Metadata Soup",
    description:
      "Director, elenco y keywords reciben una ponderación estratégica para construir una representación más completa de cada película.",
  },
  {
    number: "03",
    title: "TF-IDF",
    description:
      "Los atributos textuales son transformados en vectores para identificar términos relevantes dentro del conjunto de películas.",
  },
  {
    number: "04",
    title: "Cosine Similarity",
    description:
      "La similitud matemática entre películas permite ordenar los títulos más cercanos a la película consultada.",
  },
  {
    number: "05",
    title: "Data Wrangling",
    description:
      "El pipeline contempla limpieza, transformación y procesamiento de datos provenientes de diferentes datasets.",
  },
  {
    number: "06",
    title: "Cold Start",
    description:
      "El modelo no necesita historial de otros usuarios para comenzar a generar recomendaciones.",
  },
];

const technologies = [
  {
    category: "LANGUAGE",
    name: "Python",
    description:
      "Lenguaje principal utilizado para el procesamiento de datos y construcción del algoritmo.",
  },
  {
    category: "DATA",
    name: "Pandas",
    description:
      "Manipulación, limpieza y transformación de los datasets utilizados por el proyecto.",
  },
  {
    category: "NUMERICAL",
    name: "NumPy",
    description:
      "Operaciones numéricas y vectoriales necesarias para el procesamiento.",
  },
  {
    category: "MACHINE LEARNING",
    name: "Scikit-learn",
    description:
      "Implementación de TF-IDF y cálculo de similitud del coseno.",
  },
  {
    category: "SERIALIZATION",
    name: "Joblib",
    description:
      "Serialización de los modelos y estructuras generadas durante el pipeline.",
  },
  {
    category: "DEPLOYMENT",
    name: "FastAPI / AWS EC2",
    description:
      "Arquitectura de despliegue en la nube planteada en la documentación del proyecto.",
  },
];

const pipeline = [
  {
    number: "01",
    title: "Datasets",
    description:
      "movies_metadata.csv · credits.csv · keywords.csv",
  },
  {
    number: "02",
    title: "Limpieza",
    description:
      "Normalización y tratamiento de datos faltantes.",
  },
  {
    number: "03",
    title: "Feature Engineering",
    description:
      "Construcción de la representación Metadata Soup.",
  },
  {
    number: "04",
    title: "TF-IDF",
    description:
      "Vectorización de los atributos textuales.",
  },
  {
    number: "05",
    title: "Similitud",
    description:
      "Cálculo de similitud mediante Cosine Similarity.",
  },
  {
    number: "06",
    title: "Ranking",
    description:
      "Ordenamiento de las películas más similares.",
  },
];

const metadata = [
  {
    name: "Director",
    weight: "×3",
    description:
      "La dirección se pondera para capturar parte de la firma autoral.",
  },
  {
    name: "Cast",
    weight: "×3",
    description:
      "El elenco contribuye a identificar patrones compartidos entre películas.",
  },
  {
    name: "Keywords",
    weight: "×3",
    description:
      "Las palabras clave ayudan a representar temas y características.",
  },
];

const outputs = [
  "cosine_sim_model.pkl",
  "movie_data.pkl",
  "indices.pkl",
];

const codeLines = [
  "def recomendar(titulo, num_recs=5):",
  "    idx = indices[titulo]",
  "    sim_scores = list(enumerate(cosine_sim[idx]))",
  "",
  "    sim_scores = sorted(",
  "        sim_scores,",
  "        key=lambda x: x[1],",
  "        reverse=True",
  "    )",
  "",
  "    return df['title'].iloc[",
  "        [i[0] for i in sim_scores[1:num_recs+1]]",
  "    ]",
];

export default function RecomendacionPeliculasPage() {

  const webPageSchema = createWebPageSchema({
    name: "Algoritmo de Recomendación de Películas | Machine Learning con Python",
    description:
      "Sistema de recomendación de películas basado en contenido que utiliza Python, procesamiento de lenguaje natural, TF-IDF y Cosine Similarity para encontrar películas relacionadas.",
    path: "/proyectos/recomendacion-de-peliculas",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Proyectos", path: "/proyectos" },
    {
      name: "Algoritmo de Recomendación de Películas",
      path: "/proyectos/recomendacion-de-peliculas",
    },
  ]);

  const softwareSchema = createSoftwareApplicationSchema({
    name: "Algoritmo de Recomendación de Películas",
    description:
      "Sistema de recomendación basado en contenido desarrollado con Python, Pandas, NumPy y Scikit-learn, utilizando Metadata Soup, TF-IDF y Cosine Similarity.",
    path: "/proyectos/recomendacion-de-peliculas",
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
              left-[8%]
              top-[-300px]
              h-[720px]
              w-[720px]
              rounded-full
              bg-[#1E6BFF]/[0.035]
              blur-[180px]
            "
          />

          <div
            className="
              absolute
              right-[-220px]
              top-[35%]
              h-[650px]
              w-[650px]
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
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
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
                  MACHINE LEARNING · DATA SCIENCE · NLP
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
                      lg:text-[62px]
                    "
                  >
                    Algoritmo de
                    <br />

                    <span className="devpass-gradient-text">
                      Recomendación.
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
                    Sistema de recomendación de películas basado en contenido
                    que utiliza procesamiento de lenguaje natural, ingeniería
                    de características y similitud matemática para encontrar
                    películas relacionadas.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">

                    {[
                      "Python",
                      "Pandas",
                      "NumPy",
                      "Scikit-learn",
                      "NLP",
                      "TF-IDF",
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

                {/* =================================================
                    ML VISUAL
                ================================================== */}

                <motion.div
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

                  <div className="rounded-2xl border border-white/[0.06] bg-[#020617] p-5 sm:p-7">

                    {/* TOP */}

                    <div className="flex items-center justify-between">

                      <div>

                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#64748B]">
                          RECOMMENDATION ENGINE
                        </span>

                        <h3 className="mt-2 font-poppins text-lg font-semibold">
                          Content-Based Model
                        </h3>

                      </div>

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-[#3DA5FF]/10
                          bg-[#0A1F3D]/50
                          px-3
                          py-1.5
                        "
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#3DA5FF]" />

                        <span className="font-mono text-[8px] text-[#A7D3FF]">
                          MODEL READY
                        </span>

                      </div>

                    </div>

                    {/* INPUT */}

                    <div className="mt-7">

                      <div className="mb-2 flex items-center justify-between">

                        <span className="text-[9px] uppercase tracking-[0.15em] text-[#64748B]">
                          INPUT
                        </span>

                        <span className="font-mono text-[9px] text-[#3DA5FF]">
                          movie
                        </span>

                      </div>

                      <div
                        className="
                          rounded-xl
                          border
                          border-[#3DA5FF]/15
                          bg-[#050D1A]
                          px-4
                          py-4
                        "
                      >

                        <span className="font-poppins text-sm font-medium text-[#DCEBFF]">
                          The Dark Knight
                        </span>

                      </div>

                    </div>

                    {/* PROCESS */}

                    <div className="relative my-5">

                      <div className="absolute left-4 top-0 h-full w-px bg-[#3DA5FF]/10" />

                      <div className="space-y-3">

                        {[
                          ["01", "Metadata", "director · cast · keywords"],
                          ["02", "TF-IDF", "text → vectors"],
                          ["03", "Cosine", "similarity score"],
                        ].map((item) => (

                          <div
                            key={item[0]}
                            className="
                              relative
                              flex
                              items-center
                              gap-4
                              rounded-xl
                              border
                              border-white/[0.05]
                              bg-[#050D1A]
                              p-3
                            "
                          >

                            <span
                              className="
                                relative
                                z-10
                                flex
                                h-8
                                w-8
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                bg-[#0A1F3D]
                                font-mono
                                text-[9px]
                                text-[#3DA5FF]
                              "
                            >
                              {item[0]}
                            </span>

                            <div>

                              <p className="text-xs font-medium text-[#CBD5E1]">
                                {item[1]}
                              </p>

                              <p className="mt-1 font-mono text-[8px] text-[#64748B]">
                                {item[2]}
                              </p>

                            </div>

                          </div>

                        ))}

                      </div>

                    </div>

                    {/* OUTPUT */}

                    <div>

                      <div className="mb-2 flex items-center justify-between">

                        <span className="text-[9px] uppercase tracking-[0.15em] text-[#64748B]">
                          OUTPUT
                        </span>

                        <span className="font-mono text-[9px] text-[#3DA5FF]">
                          TOP 5
                        </span>

                      </div>

                      <div className="space-y-2">

                        {[
                          ["01", "Inception", "0.812"],
                          ["02", "The Prestige", "0.764"],
                          ["03", "Batman Begins", "0.731"],
                        ].map((movie) => (

                          <div
                            key={movie[0]}
                            className="
                              flex
                              items-center
                              justify-between
                              rounded-lg
                              border
                              border-white/[0.05]
                              bg-[#050D1A]
                              px-4
                              py-3
                            "
                          >

                            <div className="flex items-center gap-3">

                              <span className="font-mono text-[8px] text-[#3DA5FF]">
                                {movie[0]}
                              </span>

                              <span className="text-xs text-[#A7B4C8]">
                                {movie[1]}
                              </span>

                            </div>

                            <span className="font-mono text-[9px] text-[#718096]">
                              {movie[2]}
                            </span>

                          </div>

                        ))}

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
                    Encontrar una película entre miles de opciones.
                  </h2>

                </div>

                <div className="space-y-6 text-[15px] leading-8 text-[#94A3B8]">

                  <p>
                    Las plataformas de streaming ofrecen enormes cantidades de
                    contenido, lo que puede generar una sobrecarga de
                    información y dificultar la elección de una película.
                  </p>

                  <p>
                    Este proyecto aborda el problema mediante un sistema de
                    recomendación basado en contenido, capaz de encontrar
                    películas similares a partir de sus propios metadatos.
                  </p>

                  <p>
                    Al no depender de las preferencias históricas de otros
                    usuarios, el enfoque también permite afrontar el problema
                    conocido como <span className="text-[#A7D3FF]">
                      Cold Start
                    </span>.
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
                    NLP
                  </span>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Procesamiento de lenguaje
                  </p>

                </div>

                <div className="bg-[#020617] p-7">

                  <span className="font-poppins text-3xl font-semibold text-[#A7D3FF]">
                    TF-IDF
                  </span>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Vectorización textual
                  </p>

                </div>

                <div className="bg-[#020617] p-7">

                  <span className="font-poppins text-3xl font-semibold text-[#A7D3FF]">
                    COS
                  </span>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Similitud matemática
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
                  Un recomendador construido alrededor de los datos.
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
              METADATA SOUP
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
                    03 · FEATURE ENGINEERING
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
                    Metadata Soup.
                  </h2>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    El proyecto combina diferentes atributos de cada película
                    para construir una representación textual utilizada por el
                    modelo.
                  </p>

                </div>

                <div className="space-y-3">

                  {metadata.map((item, index) => (

                    <motion.div
                      key={item.name}
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
                        delay: index * 0.07,
                      }}
                      className="
                        flex
                        items-center
                        gap-5
                        rounded-2xl
                        border
                        border-white/[0.07]
                        bg-[#050D1A]
                        p-6
                      "
                    >

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#1E6BFF]/10
                          font-mono
                          text-sm
                          font-semibold
                          text-[#3DA5FF]
                        "
                      >
                        {item.weight}
                      </div>

                      <div className="flex-1">

                        <h3 className="font-poppins text-sm font-semibold">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-xs leading-6 text-[#64748B]">
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
              PIPELINE
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
                  04 · PIPELINE
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
                  De los datasets a las recomendaciones.
                </h2>

                <p className="mt-5 leading-8 text-[#94A3B8]">
                  El procesamiento sigue un flujo de transformación de datos
                  hasta obtener el modelo de similitud utilizado durante la
                  inferencia.
                </p>

              </div>

              <div className="rounded-3xl border border-[#3DA5FF]/10 bg-[#050D1A] p-6 sm:p-10">

                <div className="grid gap-3 lg:grid-cols-6">

                  {pipeline.map((item, index) => (

                    <div
                      key={item.number}
                      className="relative"
                    >

                      <div
                        className="
                          h-full
                          rounded-2xl
                          border
                          border-white/[0.07]
                          bg-[#020617]
                          p-5
                        "
                      >

                        <span className="font-mono text-xs text-[#3DA5FF]">
                          {item.number}
                        </span>

                        <h3 className="mt-6 font-poppins text-sm font-semibold">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-[10px] leading-6 text-[#64748B]">
                          {item.description}
                        </p>

                      </div>

                      {index < pipeline.length - 1 && (
                        <span
                          className="
                            absolute
                            -right-3
                            top-1/2
                            z-10
                            hidden
                            -translate-y-1/2
                            text-[#3DA5FF]/50
                            lg:block
                          "
                        >
                          →
                        </span>
                      )}

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              DATASETS
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
                    05 · DATA
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
                    Tres fuentes para construir el modelo.
                  </h2>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    La documentación especifica tres datasets necesarios para
                    ejecutar el pipeline completo del proyecto.
                  </p>

                </div>

                <div className="space-y-3">

                  {[
                    ["movies_metadata.csv", "METADATA", "Información general de películas"],
                    ["credits.csv", "CREDITS", "Directores y elenco"],
                    ["keywords.csv", "KEYWORDS", "Palabras clave asociadas"],
                  ].map((dataset, index) => (

                    <motion.div
                      key={dataset[0]}
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
                        delay: index * 0.06,
                      }}
                      className="
                        flex
                        items-center
                        justify-between
                        gap-5
                        rounded-2xl
                        border
                        border-white/[0.07]
                        bg-[#050D1A]
                        p-5
                      "
                    >

                      <div className="flex items-center gap-4">

                        <span
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-lg
                            bg-[#1E6BFF]/10
                            font-mono
                            text-[9px]
                            text-[#3DA5FF]
                          "
                        >
                          CSV
                        </span>

                        <div>

                          <p className="font-mono text-xs text-[#CBD5E1]">
                            {dataset[0]}
                          </p>

                          <p className="mt-1 text-[10px] text-[#64748B]">
                            {dataset[2]}
                          </p>

                        </div>

                      </div>

                      <span className="text-[8px] uppercase tracking-[0.15em] text-[#3DA5FF]">
                        {dataset[1]}
                      </span>

                    </motion.div>

                  ))}

                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              INFERENCE
          ================================================== */}

          <section className="border-b border-white/[0.06] py-24">

            <div className="devpass-container">

              <div
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#3DA5FF]/10
                  bg-[#050D1A]
                "
              >

                <div className="border-b border-white/[0.06] px-6 py-4">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex gap-1.5">

                        <span className="h-2 w-2 rounded-full bg-[#3DA5FF]/70" />
                        <span className="h-2 w-2 rounded-full bg-[#3DA5FF]/35" />
                        <span className="h-2 w-2 rounded-full bg-[#3DA5FF]/15" />

                      </div>

                      <span className="font-mono text-[10px] text-[#64748B]">
                        inference.py
                      </span>

                    </div>

                    <span className="font-mono text-[9px] text-[#3DA5FF]">
                      PYTHON
                    </span>

                  </div>

                </div>

                <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                  <div className="border-b border-white/[0.06] p-8 lg:border-b-0 lg:border-r">

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-[#3DA5FF]
                      "
                    >
                      06 · INFERENCIA
                    </span>

                    <h2
                      className="
                        mt-5
                        font-poppins
                        text-3xl
                        font-semibold
                      "
                    >
                      Una película entra.
                      <br />
                      Varias recomendaciones salen.
                    </h2>

                    <p className="mt-6 text-sm leading-7 text-[#718096]">
                      El modelo serializado puede ser cargado posteriormente
                      para realizar recomendaciones a partir del título de una
                      película.
                    </p>

                    <div className="mt-8 rounded-xl border border-[#3DA5FF]/10 bg-[#020617] p-5">

                      <span className="text-[9px] uppercase tracking-[0.15em] text-[#64748B]">
                        EJEMPLO
                      </span>

                      <p className="mt-3 font-mono text-xs text-[#A7D3FF]">
                        recomendar(&quot;The Dark Knight&quot;)
                      </p>

                    </div>

                  </div>

                  <div className="overflow-x-auto p-6 sm:p-8">

                    <div className="space-y-1 font-mono text-[11px] leading-7">

                      {codeLines.map((line, index) => (

                        <div
                          key={`${index}-${line}`}
                          className="flex"
                        >

                          <span className="mr-6 w-5 select-none text-right text-[#334155]">
                            {index + 1}
                          </span>

                          <span
                            className={
                              line.includes("def ") ||
                              line.includes("return")
                                ? "text-[#3DA5FF]"
                                : line.includes("cosine_sim") ||
                                  line.includes("indices") ||
                                  line.includes("df")
                                ? "text-[#A7D3FF]"
                                : "text-[#718096]"
                            }
                          >
                            {line || "\u00A0"}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              MODEL OUTPUT
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
                    07 · MODELO
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
                    Artefactos generados.
                  </h2>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    Después del procesamiento, el proyecto genera archivos
                    serializados que permiten reutilizar el modelo y los datos
                    preparados.
                  </p>

                </div>

                <div className="space-y-3">

                  {outputs.map((file, index) => (

                    <motion.div
                      key={file}
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
                        delay: index * 0.07,
                      }}
                      className="
                        flex
                        items-center
                        gap-5
                        rounded-2xl
                        border
                        border-white/[0.07]
                        bg-[#050D1A]
                        p-5
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
                          text-[9px]
                          text-[#3DA5FF]
                        "
                      >
                        PKL
                      </span>

                      <span className="font-mono text-sm text-[#A7B4C8]">
                        {file}
                      </span>

                    </motion.div>

                  ))}

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
              STRUCTURE
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
                    09 · ESTRUCTURA
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
                    Un pipeline concentrado en un script maestro.
                  </h2>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    La documentación del proyecto utiliza{" "}
                    <span className="font-mono text-[#A7D3FF]">
                      scriptmaestro.py
                    </span>{" "}
                    como punto de ejecución del pipeline de limpieza,
                    entrenamiento y validación.
                  </p>

                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-[#050D1A] p-6">

                  <pre className="overflow-x-auto font-mono text-xs leading-7 text-[#718096]">
{`Algoritmo-de-Recomendacion-Peliculas-/
│
├── README.md
├── requirements.txt
├── scriptmaestro.py
│
├── cosine_sim_model.pkl
├── movie_data.pkl
├── indices.pkl
│
└── data/
    ├── movies_metadata.csv
    ├── credits.csv
    └── keywords.csv`}
                  </pre>

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
                    Convertir datos de películas en recomendaciones.
                  </h2>

                </div>

                <div>

                  <p className="text-lg leading-9 text-[#CBD5E1]">
                    El proyecto demuestra cómo técnicas de procesamiento de
                    lenguaje natural y machine learning pueden utilizarse para
                    construir un sistema de recomendación basado en contenido.
                  </p>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    Desde la limpieza de datasets hasta la vectorización
                    mediante TF-IDF y el cálculo de similitud del coseno, el
                    pipeline transforma información textual en una estructura
                    capaz de encontrar películas relacionadas.
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
                      Machine Learning · NLP · Data Science
                    </span>

                    <p className="mt-3 text-sm leading-7 text-[#718096]">
                      Un proyecto centrado en transformar datos y metadatos en
                      recomendaciones personalizadas.
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
                    RECOMMENDATION ENGINE
                  </span>

                  <h2 className="mt-3 font-poppins text-2xl font-semibold">
                    Explora el código del proyecto.
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#64748B]">
                    Revisa la implementación y documentación completa del
                    algoritmo en GitHub.
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