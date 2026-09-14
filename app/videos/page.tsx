"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Play,
  PlayCircle,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

type Video = {
  id: number;
  platform: "youtube" | "tiktok";
  title: string;
  description: string;
  category: string;
  date: string;
  url: string;
  thumbnail: string;
};

const videos: Video[] = [
  {
    id: 1,
    platform: "youtube",
    title: "Cómo instalar Debian fácil y rápido",
    description:
      "Guía práctica para instalar Debian de forma sencilla y comenzar a utilizar Linux.",
    category: "Linux",
    date: "12 SEP 2026",
    url: "https://youtu.be/__yp-WA8IM8?si=H1NGJuejQkMkhGxw",
    thumbnail:
      "https://img.youtube.com/vi/__yp-WA8IM8/maxresdefault.jpg",
  },
  {
    id: 2,
    platform: "youtube",
    title: "Cómo Crear un USB Booteable de Windows 10 con Rufus",
    description:
      "Guía paso a paso para crear un USB booteable de Windows 10 utilizando Rufus.",
    category: "Tecnología",
    date: "12 SEP 2026",
    url: "https://www.youtube.com/watch?v=OSBODQW9iyI&t=2s",
    thumbnail:
      "https://img.youtube.com/vi/OSBODQW9iyI/maxresdefault.jpg",
  },
  {
    id: 3,
    platform: "youtube",
    title: "Cómo resolver FIZZBUZZ en PYTHON",
    description:
      "Resuelve uno de los ejercicios clásicos de programación que suelen aparecer en entrevistas técnicas.",
    category: "Desarrollo",
    date: "12 SEP 2026",
    url: "https://www.youtube.com/watch?v=aLdHT92maXw&t=21s",
    thumbnail:
      "https://img.youtube.com/vi/aLdHT92maXw/maxresdefault.jpg",
  },
  {
    id: 4,
    platform: "youtube",
    title: "Aprende a instalar Gemini CLI en Windows en 5 minutos",
    description:
      "Instala y configura Gemini CLI en Windows de manera rápida para comenzar a trabajar desde la terminal.",
    category: "IA",
    date: "12 SEP 2026",
    url: "https://www.youtube.com/watch?v=isBWnVECeI0&t=40s",
    thumbnail:
      "https://img.youtube.com/vi/isBWnVECeI0/maxresdefault.jpg",
  },
  {
    id: 5,
    platform: "youtube",
    title: "Cómo Aumentar la RAM de tu Laptop",
    description:
      "Instalación de 4 GB adicionales de memoria RAM paso a paso para mejorar la capacidad del equipo.",
    category: "Tecnología",
    date: "12 SEP 2026",
    url: "https://www.youtube.com/watch?v=a4b6PMMtDQw",
    thumbnail:
      "https://img.youtube.com/vi/a4b6PMMtDQw/maxresdefault.jpg",
  },
  {
    id: 6,
    platform: "youtube",
    title: "Cómo RESTABLECER una USB después de hacerla Booteable",
    description:
      "Aprende a recuperar y restablecer una memoria USB después de utilizarla como dispositivo booteable.",
    category: "Tecnología",
    date: "12 SEP 2026",
    url: "https://www.youtube.com/watch?v=ba9O6UUS2KU&t=130s",
    thumbnail:
      "https://img.youtube.com/vi/ba9O6UUS2KU/maxresdefault.jpg",
  },
  {
    id: 7,
    platform: "youtube",
    title: "SOLUCIÓN: No puedo escribir en el Buscador de Windows 10",
    description:
      "Una solución práctica para resolver el problema que impide escribir correctamente en el buscador de Windows 10.",
    category: "Windows",
    date: "12 SEP 2026",
    url: "https://www.youtube.com/watch?v=3BOjZgqjzjI",
    thumbnail:
      "https://img.youtube.com/vi/3BOjZgqjzjI/maxresdefault.jpg",
  },
  {
    id: 8,
    platform: "youtube",
    title: "Cómo hacer una conexión de base de datos de Java a MySQL",
    description:
      "Aprende a realizar una conexión entre una aplicación Java y una base de datos MySQL.",
    category: "Desarrollo",
    date: "12 SEP 2026",
    url: "https://www.youtube.com/watch?v=RE5Zu2Dg1pE&t=9s",
    thumbnail:
      "https://img.youtube.com/vi/RE5Zu2Dg1pE/maxresdefault.jpg",
  },
];

const categories = [
  "Todos",
  "Desarrollo",
  "IA",
  "Linux",
  "Windows",
  "Tecnología",
];

const webPageSchema = createWebPageSchema({
  name: "Videos de Tecnología, IA, Linux y Desarrollo | DevPass",
  description:
    "Videos de DevPass sobre desarrollo de software, inteligencia artificial, Linux, Windows, programación, tecnología y tutoriales prácticos.",
  path: "/videos",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "Videos", path: "/videos" },
]);


export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredVideos =
    activeCategory === "Todos"
      ? videos
      : videos.filter((video) => video.category === activeCategory);

  return (
    <>
    <JsonLd
        data={[
          webPageSchema,
          breadcrumbSchema,
        ]}
      />
      <Navbar />

      <main className="min-h-screen bg-[#020617] text-[#f8faff]">
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative overflow-hidden border-b border-white/[0.06]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(61,165,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(61,165,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />

          <div className="absolute left-1/2 top-[-180px] h-[430px] w-[760px] -translate-x-1/2 rounded-full bg-[#1e6bff]/10 blur-[120px]" />

          <div className="absolute right-[10%] top-32 hidden h-40 w-40 rounded-full border border-[#3da5ff]/10 md:block" />

          <div className="absolute right-[11.8%] top-[152px] hidden h-32 w-32 rounded-full border border-[#3da5ff]/10 md:block" />

          <div className="devpass-container relative py-24 md:py-32">
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 text-sm text-[#64748b] transition-colors hover:text-[#a7d3ff]"
            >
              <ArrowLeft size={16} />
              Volver al inicio
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="mb-6 flex flex-wrap items-center gap-3 text-[11px] font-semibold tracking-[0.2em]">
                <span className="rounded-full border border-[#3da5ff]/20 bg-[#071a34] px-3 py-1.5 text-[#3da5ff]">
                  DEVPASS · VIDEOS
                </span>

                <span className="text-[#475569]">•</span>

                <span className="text-[#64748b]">
                  YOUTUBE · TIKTOK
                </span>
              </div>

              <h1 className="font-poppins text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl">
                Tecnología que también{" "}
                <span className="devpass-gradient-text">
                  comparto en video
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#94a3b8] md:text-lg">
                Tutoriales, experimentos, desarrollo, inteligencia artificial
                y contenido tecnológico que comparto en mis diferentes
                plataformas.
              </p>
            </motion.div>

            {/* PLATAFORMAS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-12 flex flex-wrap gap-3"
            >
              <a
                href="https://www.youtube.com/results?search_query=devpass_oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-[#020b18] px-4 py-2.5 text-xs text-[#64748b] transition-all hover:border-[#3da5ff]/20 hover:bg-[#071a34] hover:text-white"
              >
                <PlayCircle
                  size={15}
                  className="text-[#3da5ff] transition-transform group-hover:scale-110"
                />

                YouTube

                <ExternalLink
                  size={12}
                  className="text-[#334155] transition-colors group-hover:text-[#3da5ff]"
                />
              </a>

              <a
                href="https://www.tiktok.com/@devpass_oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-[#020b18] px-4 py-2.5 text-xs text-[#64748b] transition-all hover:border-[#3da5ff]/20 hover:bg-[#071a34] hover:text-white"
              >
                <Play
                  size={14}
                  className="text-[#3da5ff] transition-transform group-hover:scale-110"
                />

                TikTok

                <ExternalLink
                  size={12}
                  className="text-[#334155] transition-colors group-hover:text-[#3da5ff]"
                />
              </a>

              <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-[#020b18] px-4 py-2.5 text-xs text-[#64748b]">
                <Sparkles size={14} className="text-[#3da5ff]" />
                Contenido técnico
              </span>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            VIDEOS
        ========================================================== */}
        <section className="devpass-container py-16 md:py-24">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                    01
                  </span>

                  <span className="h-px w-10 bg-[#3da5ff]/30" />

                  <span className="text-[10px] font-semibold tracking-[0.18em] text-[#64748b]">
                    CONTENIDO
                  </span>
                </div>

                <h2 className="mt-4 font-poppins text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Últimos videos
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-[#64748b]">
                  Tutoriales, soluciones y contenido tecnológico publicado en
                  los canales de DevPass.
                </p>
              </div>

              {/* FILTROS */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const isActive = activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-lg border px-3 py-2 text-xs transition-all ${
                        isActive
                          ? "border-[#3da5ff]/20 bg-[#071a34] text-[#a7d3ff]"
                          : "border-white/[0.06] bg-[#020b18] text-[#64748b] hover:border-[#3da5ff]/15 hover:text-[#94a3b8]"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CONTADOR */}
            <div className="flex items-center gap-3 border-b border-white/[0.05] pb-5">
              <span className="font-mono text-[10px] tracking-[0.18em] text-[#3da5ff]">
                {String(filteredVideos.length).padStart(2, "0")}
              </span>

              <span className="text-xs text-[#475569]">
                {filteredVideos.length === 1
                  ? "video disponible"
                  : "videos disponibles"}
              </span>
            </div>

            {/* GRID */}
            <motion.div
              layout
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredVideos.map((video, index) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            PLATAFORMAS
        ========================================================== */}
        <section className="border-y border-white/[0.06] bg-[#010712]">
          <div className="devpass-container py-16 md:py-20">
            <div className="mb-10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                  02
                </span>

                <span className="h-px w-10 bg-[#3da5ff]/30" />

                <span className="text-[10px] font-semibold tracking-[0.18em] text-[#64748b]">
                  PLATAFORMAS
                </span>
              </div>

              <h2 className="mt-4 font-poppins text-2xl font-semibold text-white md:text-3xl">
                Encuéntrame también aquí
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <PlatformCard
                icon={<PlayCircle size={21} />}
                label="YOUTUBE"
                title="Contenido largo"
                description="Tutoriales, proyectos, explicaciones y desarrollo de soluciones tecnológicas."
                href="https://www.youtube.com/results?search_query=devpass_oficial"
              />

              <PlatformCard
                icon={<Play size={20} />}
                label="TIKTOK"
                title="Contenido rápido"
                description="Ideas, trucos, conceptos y pequeños experimentos explicados de forma directa."
                href="https://www.tiktok.com/@devpass_oficial"
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            PHILOSOPHY
        ========================================================== */}
        <section className="devpass-container py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                  03
                </span>

                <span className="h-px w-10 bg-[#3da5ff]/30" />
              </div>

              <h2 className="mt-4 max-w-xl font-poppins text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Construir también significa compartir
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-[#64748b]">
                Los videos son otra forma de documentar lo que construyo,
                explicar lo que aprendo y compartir procesos que pueden ser
                útiles para otras personas.
              </p>

              <Link
                href="/lab"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#a7d3ff] transition-colors hover:text-white"
              >
                Explorar DevPass Lab

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-[#3da5ff]/10 bg-[#061326] p-7">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#1e6bff]/10 blur-3xl" />

              <div className="relative">
                <p className="font-mono text-[10px] tracking-[0.2em] text-[#3da5ff]">
                  DEVPASS
                </p>

                <div className="mt-6 space-y-4">
                  <FlowItem number="01" text="Construir" />
                  <FlowItem number="02" text="Experimentar" />
                  <FlowItem number="03" text="Aprender" />
                  <FlowItem number="04" text="Compartir" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================== */}
        <section className="border-t border-white/[0.06]">
          <div className="devpass-container py-14">
            <div className="flex flex-col gap-6 rounded-2xl border border-[#3da5ff]/10 bg-gradient-to-br from-[#071a34] to-[#020b18] p-7 md:flex-row md:items-center md:justify-between md:p-9">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                  DEVPASS
                </p>

                <h2 className="mt-3 font-poppins text-xl font-semibold text-white">
                  ¿Quieres construir algo?
                </h2>

                <p className="mt-2 text-sm text-[#64748b]">
                  Conoce mis proyectos o escríbeme directamente.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/proyectos"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#020b18] px-5 py-3 text-sm font-medium text-[#a7d3ff] transition-all hover:border-[#3da5ff]/20 hover:text-white"
                >
                  Ver proyectos

                  <ArrowRight size={15} />
                </Link>

                <Link
                  href="/contacto"
                  className="devpass-gradient inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Hablemos

                  <ArrowRight size={15} />
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

/* ================================================================
   VIDEO CARD
================================================================ */

function VideoCard({
  video,
  index,
}: {
  video: Video;
  index: number;
}) {
  const [thumbnail, setThumbnail] = useState(video.thumbnail);
  const [hasError, setHasError] = useState(false);

  const isYouTube = video.platform === "youtube";

  const youtubeId = video.url.includes("youtu.be/")
    ? video.url.split("youtu.be/")[1]?.split("?")[0]
    : video.url.split("v=")[1]?.split("&")[0];

  const fallbackThumbnail = youtubeId
    ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
    : video.thumbnail;

  return (
    <motion.a
      layout
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
      }}
      className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-[#020b18] transition-all duration-300 hover:-translate-y-1 hover:border-[#3da5ff]/20 hover:bg-[#071a34]/50"
    >
      {/* THUMBNAIL */}
      <div className="relative aspect-video overflow-hidden bg-[#061326]">
        {!hasError ? (
          <Image
            src={thumbnail}
            alt={`Portada: ${video.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => {
              if (thumbnail !== fallbackThumbnail) {
                setThumbnail(fallbackThumbnail);
              } else {
                setHasError(true);
              }
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#061326]">
            <div className="text-center">
              <PlayCircle
                size={34}
                className="mx-auto text-[#3da5ff]/60"
              />

              <p className="mt-3 px-6 text-xs text-[#64748b]">
                Ver video en YouTube
              </p>
            </div>
          </div>
        )}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/85 via-transparent to-transparent" />

        {/* PLATFORM */}
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#020617]/80 px-3 py-1.5 text-[10px] font-semibold tracking-[0.12em] text-[#a7d3ff] backdrop-blur-md">
            {isYouTube ? (
              <PlayCircle size={13} />
            ) : (
              <Play size={12} />
            )}

            {isYouTube ? "YOUTUBE" : "TIKTOK"}
          </span>
        </div>

        {/* PLAY */}
        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#020617]/80 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1e6bff]">
          <Play size={16} fill="currentColor" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.16em] text-[#3da5ff]">
          <span>{video.category}</span>

          <span className="text-[#334155]">•</span>

          <span className="text-[#475569]">{video.date}</span>
        </div>

        <h3 className="mt-3 font-poppins text-base font-semibold leading-6 text-white">
          {video.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#64748b]">
          {video.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-white/[0.05] pt-4">
          <span className="text-xs font-medium text-[#64748b] transition-colors group-hover:text-[#a7d3ff]">
            Ver video
          </span>

          <ExternalLink
            size={14}
            className="text-[#475569] transition-colors group-hover:text-[#3da5ff]"
          />
        </div>
      </div>
    </motion.a>
  );
}

/* ================================================================
   PLATFORM CARD
================================================================ */

function PlatformCard({
  icon,
  label,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl border border-white/[0.06] bg-[#020b18] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#3da5ff]/15 hover:bg-[#071a34]/40"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
          {icon}
        </div>

        <ExternalLink
          size={15}
          className="text-[#334155] transition-colors group-hover:text-[#3da5ff]"
        />
      </div>

      <p className="mt-6 text-[10px] font-semibold tracking-[0.2em] text-[#3da5ff]">
        {label}
      </p>

      <h3 className="mt-2 font-poppins text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 max-w-lg text-sm leading-7 text-[#64748b]">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[#64748b] transition-colors group-hover:text-[#a7d3ff]">
        Visitar plataforma

        <ArrowRight
          size={14}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </a>
  );
}

/* ================================================================
   FLOW ITEM
================================================================ */

function FlowItem({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[10px] tracking-[0.15em] text-[#3da5ff]">
        {number}
      </span>

      <div className="h-px w-8 bg-[#3da5ff]/20" />

      <span className="text-sm font-medium text-[#94a3b8]">
        {text}
      </span>

      <ChevronRight
        size={14}
        className="ml-auto text-[#334155]"
      />
    </div>
  );
}