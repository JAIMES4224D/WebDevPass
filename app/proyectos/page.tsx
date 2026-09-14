"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

const projects = [
  {
    number: "01",
    category: "SOFTWARE · AUDITORÍA",
    title: "SIGESAPOL",
    description:
      "Sistema orientado a la auditoría de sistemas distribuida para contribuir a la mejora de la seguridad y la infraestructura distribuida en el SIGESAPOL.",
    tags: ["Sistema distribuido", "Auditoría", "Seguridad"],
    image: "/images/proyectos/sigesapol.webp",

    // El proyecto 01 utiliza una página interna de DevPass.
    // Se abrirá en la misma pestaña.
    href: "/proyectos/sigesapol",

    type: "Demo",
    featured: true,
  },

  {
    number: "02",
    category: "DIGITALIZACIÓN · FARMACIA",
    title: "Digital Codex Alimentarius",
    description:
      "Proyecto de digitalización del libro Codex Alimentarius de químicos farmacéuticos, transformando su consulta en una experiencia digital más accesible.",
    tags: ["Digitalización", "Web", "Farmacia"],
    image: "/images/proyectos/codex-alimentarius.webp",
    href: "/proyectos/codex-alimentarius",
    type: "Demo",
    featured: false,
  },

  {
    number: "03",
    category: "SOFTWARE · SALUD",
    title: "Telemedicina",
    description:
      "Aplicación web de telemedicina desarrollada como solución digital para apoyar la atención y gestión de servicios dentro de un policlínico.",
    tags: ["Web", "Telemedicina", "Salud"],
    image: "/images/proyectos/telemedicina.webp",
    href: "/proyectos/telemedicina",
    type: "Demo",
    featured: false,
  },

  {
    number: "04",
    category: "SOFTWARE · GESTIÓN",
    title: "App de mantenimiento de equipos mayores",
    description:
      "Aplicación orientada a la gestión y seguimiento del mantenimiento de equipos mayores.",
    tags: ["Software", "Mantenimiento", "Gestión"],
    image: "/images/proyectos/mantenimiento.webp",
    href: "/proyectos/mantenimiento",
    type: "Demo",
    featured: false,
  },

  {
    number: "05",
    category: "DESARROLLO · SQL",
    title: "Generate Script SQL",
    description:
      "Herramienta para generar scripts SQL de forma sencilla, orientada a facilitar tareas relacionadas con bases de datos.",
    tags: ["SQL", "Scripts", "Desarrollo"],
    image: "/images/proyectos/sql-generator.webp",
    href: "/proyectos/generate-sql",
    type: "Demo",
    featured: false,
  },

  {
    number: "06",
    category: "SOFTWARE · C#",
    title: "Sistema Garage",
    description:
      "Sistema de garaje desarrollado para gestionar operaciones relacionadas con un servicio de estacionamiento.",
    tags: ["C#", "Software", "Gestión"],
    image: "/images/proyectos/garage.webp",
    href: "/proyectos/sistema-garage",
    type: "Demo",
    featured: false,
  },

  {
    number: "07",
    category: "AUTOMATIZACIÓN · MULTIMEDIA",
    title: "Convertidor",
    description:
      "Herramienta que permite trabajar con contenido de YouTube a partir de un enlace y realizar su conversión.",
    tags: ["Automatización", "YouTube", "Multimedia"],
    image: "/images/proyectos/convertidor.webp",
    href: "/proyectos/convertidor",
    type: "Demo",
    featured: false,
  },

  {
    number: "08",
    category: "CIENCIA DE DATOS · IA",
    title: "Algoritmo de recomendación de películas",
    description:
      "Proyecto basado en un algoritmo de recomendación aplicado al análisis y recomendación de películas.",
    tags: ["Data Science", "Recomendación", "IA"],
    image: "/images/proyectos/recomendacion-peliculas.webp",
    href: "/proyectos/recomendacion-peliculas",
    type: "Demo",
    featured: false,
  },

  {
    number: "09",
    category: "WEB · UTILIDADES",
    title: "QR Master PRO",
    description:
      "Aplicación para generar códigos QR a partir de diferentes tipos de contenido.",
    tags: ["Web", "QR", "Utilidades"],
    image: "/images/proyectos/qr-master.webp",
    href: "/proyectos/qr-master",
    type: "Demo",
    featured: false,
  },

  {
    number: "10",
    category: "WEB · E-COMMERCE",
    title: "Tienda Web E-commerce Donglai",
    description:
      "Tienda web desarrollada como solución de comercio electrónico para una empresa.",
    tags: ["E-commerce", "Web", "Tienda"],
    image: "/images/proyectos/tienda-donglai.webp",
    href: "/proyectos/tienda-donglai",
    type: "Demo",
    featured: false,
  },
];

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

export default function ProyectosPage() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  const webPageSchema = createWebPageSchema({
    name: "Proyectos de Software y Tecnología | DevPass",
    description:
      "Explora los proyectos de DevPass en desarrollo de software, aplicaciones web, auditoría tecnológica, digitalización, automatización, ciencia de datos y soluciones digitales.",
    path: "/proyectos",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Proyectos", path: "/proyectos" },
  ]);

  return (
    <>
     <JsonLd data={[webPageSchema, breadcrumbSchema]} />
      {/* =====================================================
          NAVBAR REUTILIZADO
      ====================================================== */}

      <Navbar />

      <main className="min-h-screen bg-[#020617] text-white">
        {/* =====================================================
            AMBIENTE
        ====================================================== */}

        <div
          className="
            pointer-events-none
            fixed
            inset-0
            z-0
            overflow-hidden
          "
        >
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
              bottom-[-300px]
              right-[-200px]
              h-[600px]
              w-[600px]
              rounded-full
              bg-[#3DA5FF]/[0.02]
              blur-[160px]
            "
          />
        </div>

        {/* =====================================================
            CONTENIDO
        ====================================================== */}

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
              lg:pb-24
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
              {/* IDENTIFICADOR */}

              <div
                className="
                  mb-7
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    font-mono
                    text-[11px]
                    font-medium
                    tracking-[0.2em]
                    text-[#3DA5FF]
                  "
                >
                  02
                </span>

                <span
                  className="
                    h-px
                    w-8
                    bg-[#3DA5FF]/40
                  "
                />

                <span
                  className="
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-[#64748B]
                  "
                >
                  Proyectos
                </span>
              </div>

              {/* TÍTULO */}

              <h1
                className="
                  max-w-5xl
                  font-poppins
                  text-4xl
                  font-semibold
                  leading-[1.02]
                  tracking-[-0.05em]
                  text-white
                  sm:text-5xl
                  lg:text-[72px]
                "
              >
                Construcciones reales.
                <br />

                <span className="devpass-gradient-text">
                  Problemas reales.
                </span>
              </h1>

              {/* DESCRIPCIÓN */}

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-[15px]
                  leading-7
                  text-[#7F8EA3]
                  sm:text-base
                  sm:leading-8
                "
              >
                Una selección de proyectos desarrollados para
                explorar ideas, resolver problemas y convertir
                conceptos en soluciones digitales funcionales.
              </p>
            </motion.div>
          </section>

          {/* =================================================
              PROYECTO DESTACADO
          ================================================== */}

          {featuredProject && (
            <section
              className="
                devpass-container
                mt-4
                sm:mt-8
                lg:mt-12
              "
            >
              <motion.article
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
                  duration: 0.65,
                  ease: "easeOut",
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
                {/* GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    right-[-120px]
                    top-[-120px]
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-[#1E6BFF]/[0.06]
                    blur-[120px]
                    transition-all
                    duration-700
                    group-hover:bg-[#1E6BFF]/[0.1]
                  "
                />

                <div className="relative z-10">
                  {/* IMAGEN */}

                  <div
                    className="
                      relative
                      h-[280px]
                      overflow-hidden
                      border-b
                      border-white/[0.07]
                      sm:h-[380px]
                      lg:h-[460px]
                    "
                  >
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 1180px"
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-[1.025]
                      "
                    />

                    {/* OVERLAY */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#020617]
                        via-[#020617]/20
                        to-transparent
                      "
                    />

                    {/* NÚMERO */}

                    <div
                      className="
                        absolute
                        left-6
                        top-6
                        rounded-lg
                        border
                        border-white/[0.1]
                        bg-[#020617]/70
                        px-3
                        py-2
                        font-mono
                        text-[10px]
                        tracking-[0.16em]
                        text-[#A7D3FF]
                        backdrop-blur-md
                        sm:left-8
                        sm:top-8
                      "
                    >
                      {featuredProject.number}
                    </div>

                    {/* DESTACADO */}

                    <div
                      className="
                        absolute
                        right-6
                        top-6
                        rounded-full
                        border
                        border-[#3DA5FF]/20
                        bg-[#020617]/70
                        px-3
                        py-1.5
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.12em]
                        text-[#A7D3FF]
                        backdrop-blur-md
                        sm:right-8
                        sm:top-8
                      "
                    >
                      Proyecto destacado
                    </div>
                  </div>

                  {/* INFORMACIÓN */}

                  <div
                    className="
                      grid
                      gap-10
                      p-7
                      sm:p-10
                      lg:grid-cols-[1fr_auto]
                      lg:p-14
                    "
                  >
                    <div>
                      <p
                        className="
                          font-mono
                          text-[10px]
                          uppercase
                          tracking-[0.18em]
                          text-[#64748B]
                        "
                      >
                        {featuredProject.category}
                      </p>

                      <h2
                        className="
                          mt-4
                          font-poppins
                          text-3xl
                          font-semibold
                          leading-[1.08]
                          tracking-[-0.04em]
                          text-white
                          sm:text-4xl
                          lg:text-5xl
                        "
                      >
                        {featuredProject.title}
                      </h2>

                      <p
                        className="
                          mt-6
                          max-w-3xl
                          text-sm
                          leading-7
                          text-[#718096]
                          sm:text-[15px]
                          sm:leading-8
                        "
                      >
                        {featuredProject.description}
                      </p>

                      {/* TAGS */}

                      <div
                        className="
                          mt-8
                          flex
                          flex-wrap
                          gap-2
                        "
                      >
                        {featuredProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="
                              rounded-lg
                              border
                              border-white/[0.07]
                              bg-white/[0.025]
                              px-3
                              py-2
                              text-[10px]
                              font-medium
                              text-[#718096]
                            "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* ACCIÓN */}

                    <div
                      className="
                        flex
                        items-end
                        lg:justify-end
                      "
                    >
                      {/* IMPORTANTE:
                          SIGESAPOL ES UNA RUTA INTERNA.
                          NO usamos target="_blank".
                          Se abre en la misma pestaña.
                      */}

                      <Link
                        href="/proyectos/sigesapol"
                        className="
                          group/link
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
                          hover:shadow-[0_10px_35px_rgba(30,107,255,0.12)]
                        "
                      >
                        <span>
                          Ver proyecto
                        </span>

                        <span
                          className="
                            text-[#3DA5FF]
                            transition-transform
                            duration-300
                            group-hover/link:translate-x-1
                          "
                        >
                          ↗
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            </section>
          )}

          {/* =================================================
              OTROS PROYECTOS
          ================================================== */}

          <section
            className="
              devpass-container
              mt-24
              sm:mt-28
              lg:mt-36
            "
          >
            {/* CABECERA */}

            <motion.div
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.55,
              }}
              className="
                flex
                flex-col
                gap-4
                border-b
                border-white/[0.08]
                pb-7
                sm:flex-row
                sm:items-end
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
                    text-[#3DA5FF]
                  "
                >
                  Archivo de proyectos
                </span>

                <h2
                  className="
                    mt-3
                    font-poppins
                    text-2xl
                    font-semibold
                    tracking-[-0.03em]
                    text-white
                    sm:text-3xl
                  "
                >
                  Más construcciones
                </h2>
              </div>

              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.14em]
                  text-[#475569]
                "
              >
                {projects.length} proyectos
              </span>
            </motion.div>

            {/* GRID */}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.05,
              }}
              className="
                mt-8
                grid
                gap-5
                md:grid-cols-2
                lg:grid-cols-3
              "
            >
              {otherProjects.map((project) => (
                <motion.article
                  key={project.number}
                  variants={itemVariants}
                  className="
                    group
                    relative
                    flex
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-[#050D1A]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#3DA5FF]/25
                    hover:bg-[#071426]
                  "
                >
                  {/* IMAGEN */}

                  <div
                    className="
                      relative
                      h-[210px]
                      overflow-hidden
                      border-b
                      border-white/[0.06]
                    "
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="
                        (max-width: 768px) 100vw,
                        (max-width: 1024px) 50vw,
                        33vw
                      "
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-[1.04]
                      "
                    />

                    {/* OVERLAY */}

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

                    {/* NÚMERO */}

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
                        tracking-[0.14em]
                        text-[#A7D3FF]
                        backdrop-blur-md
                      "
                    >
                      {project.number}
                    </span>

                    {/* INDICADOR */}

                    <span
                      className="
                        absolute
                        right-5
                        top-5
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#1E6BFF]/60
                        transition-all
                        duration-300
                        group-hover:bg-[#3DA5FF]
                        group-hover:shadow-[0_0_12px_rgba(61,165,255,0.8)]
                      "
                    />
                  </div>

                  {/* CONTENIDO */}

                  <div
                    className="
                      flex
                      flex-1
                      flex-col
                      p-6
                      sm:p-7
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
                      {project.category}
                    </span>

                    <h3
                      className="
                        mt-3
                        font-poppins
                        text-xl
                        font-semibold
                        leading-[1.2]
                        tracking-[-0.025em]
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-[#A7D3FF]
                      "
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        text-[13px]
                        leading-6
                        text-[#718096]
                        transition-colors
                        duration-300
                        group-hover:text-[#8B9AB0]
                      "
                    >
                      {project.description}
                    </p>

                    {/* PARTE INFERIOR */}

                    <div className="mt-auto pt-7">
                      {/* TAGS */}

                      <div
                        className="
                          mb-6
                          flex
                          flex-wrap
                          gap-2
                        "
                      >
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="
                              rounded-md
                              border
                              border-white/[0.06]
                              bg-white/[0.02]
                              px-2.5
                              py-1.5
                              text-[9px]
                              text-[#64748B]
                            "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* LINK */}

                      <a
                        href={project.href}
                        target=""
                        rel="noopener noreferrer"
                        className="
                          group/link
                          inline-flex
                          items-center
                          gap-2
                          text-[12px]
                          font-medium
                          text-[#A7D3FF]
                          transition-colors
                          duration-300
                          hover:text-white
                        "
                      >
                        <span>
                          {project.type === "Demo"
                            ? "Ver Proyecto"
                            : "Ver en GitHub"}
                        </span>

                        <span
                          className="
                            text-[#3DA5FF]
                            transition-transform
                            duration-300
                            group-hover/link:translate-x-1
                          "
                        >
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </section>

          {/* =================================================
              CTA
          ================================================== */}

          <section
            className="
              devpass-container
              pb-28
              pt-24
              sm:pb-32
              sm:pt-32
              lg:pb-40
            "
          >
            <motion.div
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
                amount: 0.4,
              }}
              transition={{
                duration: 0.6,
              }}
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
                  DevPass / Proyectos
                </span>

                <p
                  className="
                    mt-3
                    text-sm
                    text-[#718096]
                  "
                >
                  ¿Tienes una idea que quieres convertir en
                  software?
                </p>
              </div>

              <Link
                href="/contacto"
                className="
                  group
                  inline-flex
                  w-fit
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
                <span>Hablemos</span>

                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-md
                    bg-[#1E6BFF]
                    text-[12px]
                    text-white
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                >
                  →
                </span>
              </Link>
            </motion.div>
          </section>
        </div>
      </main>

      {/* =====================================================
          FOOTER REUTILIZADO
      ====================================================== */}

      <Footer />
    </>
  );
}