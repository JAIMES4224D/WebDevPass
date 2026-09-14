"use client";

import { motion, type Variants } from "framer-motion";

const projects = [
  {
    number: "01",
    category: "SOFTWARE · AUDITORÍA",
    title: "SIGESAPOL",
    description:
      "Sistema orientado a la auditoría de sistemas distribuida para contribuir a la mejora de la seguridad y la infraestructura distribuida en el SIGESAPOL.",
    technologies: ["Sistema distribuido", "Auditoría", "Seguridad"],
    featured: true,
    href: "/proyectos/sigesapol",
  },
  {
    number: "02",
    category: "DIGITALIZACIÓN · FARMACIA",
    title: "Digital Codex Alimentarius",
    description:
      "Proyecto de digitalización del libro Codex Alimentarius de químicos farmacéuticos, transformando su consulta en una experiencia digital más accesible.",
    technologies: ["Digitalización", "Web", "Farmacia"],
    featured: false,
    href: "/proyectos/codex-alimentarius",
  },
  {
    number: "03",
    category: "SOFTWARE · SALUD",
    title: "Telemedicina",
    description:
      "Aplicación web de telemedicina desarrollada como solución digital para apoyar la atención y gestión de servicios dentro de un policlínico.",
    technologies: ["Web", "Telemedicina", "Salud"],
    featured: false,
    href: "/proyectos/telemedicina",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="
        relative
        overflow-hidden
        bg-[#020617]
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          AMBIENTE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#1E6BFF]/[0.025]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-200px]
          left-[-180px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#3DA5FF]/[0.018]
          blur-[140px]
        "
      />

      <div className="devpass-container relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.header
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
        >
          <div className="mb-6 flex items-center gap-3">
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

          <div
            className="
              border-b
              border-white/[0.08]
              pb-10
            "
          >
            <h2
              className="
                max-w-5xl
                font-poppins
                text-4xl
                font-semibold
                leading-[1.03]
                tracking-[-0.045em]
                text-white
                sm:text-5xl
                lg:text-[60px]
              "
            >
              Ideas que se
              <br />
              convierten en{" "}
              <span className="devpass-gradient-text">
                soluciones.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-3xl
                text-[15px]
                leading-7
                text-[#7F8EA3]
                sm:text-base
                sm:leading-8
              "
            >
              Una selección de proyectos y soluciones desarrolladas
              desde la idea inicial hasta su implementación.
            </p>
          </div>
        </motion.header>

        {/* =====================================================
            PROYECTOS
        ====================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="
            mt-10
            grid
            gap-4
            lg:grid-cols-2
          "
        >
          {projects.map((project) => (
            <motion.article
              key={project.number}
              variants={itemVariants}
              className={`
                group
                relative
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
                ${
                  project.featured
                    ? "lg:col-span-2"
                    : ""
                }
              `}
            >
              {/* Línea superior */}

              <span
                className="
                  absolute
                  left-0
                  top-0
                  h-[2px]
                  w-0
                  bg-gradient-to-r
                  from-[#1E6BFF]
                  to-[#3DA5FF]
                  transition-all
                  duration-500
                  group-hover:w-24
                "
              />

              {project.featured ? (
                /* =================================================
                   PROYECTO DESTACADO
                ================================================== */

                <div
                  className="
                    grid
                    lg:grid-cols-[1.05fr_0.95fr]
                  "
                >
                  {/* Información */}

                  <div
                    className="
                      flex
                      min-h-[390px]
                      flex-col
                      p-7
                      sm:p-9
                      lg:p-10
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="
                          font-mono
                          text-[11px]
                          tracking-[0.16em]
                          text-[#3DA5FF]
                        "
                      >
                        {project.number}
                      </span>

                      <span
                        className="
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.14em]
                          text-[#475569]
                        "
                      >
                        Proyecto destacado
                      </span>
                    </div>

                    <div className="mt-auto">

                      <p
                        className="
                          mb-4
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.18em]
                          text-[#64748B]
                        "
                      >
                        {project.category}
                      </p>

                      <h3
                        className="
                          font-poppins
                          text-3xl
                          font-semibold
                          tracking-[-0.035em]
                          text-white
                          sm:text-4xl
                        "
                      >
                        {project.title}
                      </h3>

                      <p
                        className="
                          mt-4
                          max-w-xl
                          text-sm
                          leading-7
                          text-[#718096]
                        "
                      >
                        {project.description}
                      </p>

                      {/* Tecnologías */}

                      <div
                        className="
                          mt-6
                          flex
                          flex-wrap
                          gap-2
                        "
                      >
                        {project.technologies.map(
                          (technology) => (
                            <span
                              key={technology}
                              className="
                                rounded-md
                                border
                                border-white/[0.07]
                                bg-white/[0.025]
                                px-2.5
                                py-1.5
                                font-mono
                                text-[9px]
                                uppercase
                                tracking-[0.08em]
                                text-[#718096]
                              "
                            >
                              {technology}
                            </span>
                          )
                        )}
                      </div>

                      {/* Botón */}

                      <motion.a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          x: 4,
                        }}
                        className="
                          mt-8
                          inline-flex
                          items-center
                          gap-3
                          text-sm
                          font-semibold
                          text-white
                          transition-colors
                          hover:text-[#A7D3FF]
                        "
                      >
                        <span>
                          Ver proyecto
                        </span>

                        <span
                          className="
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-md
                            bg-[#1E6BFF]
                            text-[12px]
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        >
                          →
                        </span>
                      </motion.a>
                    </div>
                  </div>

                  {/* =================================================
                      VISUAL SIGESAPOL
                  ================================================== */}

                  <div
                    className="
                      relative
                      min-h-[300px]
                      overflow-hidden
                      border-t
                      border-white/[0.06]
                      bg-[#030A15]
                      lg:min-h-full
                      lg:border-l
                      lg:border-t-0
                    "
                  >
                    {/* Cuadrícula */}

                    <div
                      className="
                        absolute
                        inset-0
                        opacity-[0.035]
                      "
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #3DA5FF 1px, transparent 1px), linear-gradient(to bottom, #3DA5FF 1px, transparent 1px)",
                        backgroundSize: "42px 42px",
                      }}
                    />

                    {/* Glow */}

                    <motion.div
                      animate={{
                        opacity: [0.15, 0.28, 0.15],
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-56
                        w-56
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-[#1E6BFF]/20
                        blur-[90px]
                      "
                    />

                    {/* Panel */}

                    <div
                      className="
                        absolute
                        left-[10%]
                        right-[10%]
                        top-1/2
                        h-[68%]
                        -translate-y-1/2
                        rounded-xl
                        border
                        border-[#3DA5FF]/15
                        bg-[#071426]/70
                        shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                        backdrop-blur-sm
                      "
                    >

                      {/* Barra */}

                      <div
                        className="
                          flex
                          h-9
                          items-center
                          gap-1.5
                          border-b
                          border-white/[0.06]
                          px-3
                        "
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/10" />

                        <span className="ml-2 font-mono text-[8px] text-[#475569]">
                          SIGESAPOL
                        </span>
                      </div>

                      {/* Contenido */}

                      <div
                        className="
                          grid
                          h-[calc(100%-36px)]
                          grid-cols-[0.3fr_0.7fr]
                        "
                      >

                        {/* Sidebar */}

                        <div
                          className="
                            border-r
                            border-white/[0.05]
                            p-3
                          "
                        >
                          <div className="h-2 w-14 rounded bg-[#3DA5FF]/20" />

                          <div className="mt-4 space-y-2">
                            <div className="h-1.5 w-full rounded bg-white/[0.05]" />
                            <div className="h-1.5 w-4/5 rounded bg-white/[0.04]" />
                            <div className="h-1.5 w-3/5 rounded bg-white/[0.04]" />
                            <div className="h-1.5 w-4/5 rounded bg-white/[0.04]" />
                          </div>
                        </div>

                        {/* Sistema */}

                        <div className="relative p-5">

                          <div
                            className="
                              absolute
                              left-1/2
                              top-1/2
                              h-32
                              w-32
                              -translate-x-1/2
                              -translate-y-1/2
                              rounded-full
                              border
                              border-[#3DA5FF]/20
                            "
                          />

                          <div
                            className="
                              absolute
                              left-1/2
                              top-1/2
                              h-20
                              w-20
                              -translate-x-1/2
                              -translate-y-1/2
                              rounded-full
                              border
                              border-[#1E6BFF]/30
                            "
                          />

                          <motion.span
                            animate={{
                              rotate: 360,
                            }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="
                              absolute
                              left-1/2
                              top-1/2
                              h-44
                              w-44
                              -translate-x-1/2
                              -translate-y-1/2
                              rounded-full
                              border
                              border-dashed
                              border-[#3DA5FF]/10
                            "
                          />

                          <span
                            className="
                              absolute
                              left-1/2
                              top-1/2
                              h-3
                              w-3
                              -translate-x-1/2
                              -translate-y-1/2
                              rounded-full
                              bg-[#3DA5FF]
                              shadow-[0_0_20px_rgba(61,165,255,0.7)]
                            "
                          />

                          {/* Nodos */}

                          <span
                            className="
                              absolute
                              left-[28%]
                              top-[35%]
                              h-2
                              w-2
                              rounded-full
                              bg-[#1E6BFF]/70
                              shadow-[0_0_10px_rgba(30,107,255,0.6)]
                            "
                          />

                          <span
                            className="
                              absolute
                              right-[22%]
                              top-[28%]
                              h-2
                              w-2
                              rounded-full
                              bg-[#3DA5FF]/70
                              shadow-[0_0_10px_rgba(61,165,255,0.6)]
                            "
                          />

                          <span
                            className="
                              absolute
                              bottom-[25%]
                              right-[30%]
                              h-2
                              w-2
                              rounded-full
                              bg-[#3DA5FF]/50
                            "
                          />
                        </div>
                      </div>
                    </div>

                    {/* Etiqueta */}

                    <div
                      className="
                        absolute
                        bottom-5
                        right-5
                        rounded-lg
                        border
                        border-white/[0.08]
                        bg-[#020617]/80
                        px-3
                        py-2
                        font-mono
                        text-[9px]
                        text-[#64748B]
                        backdrop-blur-md
                      "
                    >
                      Sistema distribuido
                    </div>
                  </div>
                </div>
              ) : (
                /* =================================================
                   PROYECTOS SECUNDARIOS
                ================================================== */

                <div
                  className="
                    flex
                    min-h-[350px]
                    flex-col
                    p-7
                    sm:p-8
                  "
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        font-mono
                        text-[11px]
                        tracking-[0.16em]
                        text-[#3DA5FF]
                      "
                    >
                      {project.number}
                    </span>

                    <span
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.14em]
                        text-[#475569]
                      "
                    >
                      {project.category}
                    </span>
                  </div>

                  <div className="mt-auto">

                    <h3
                      className="
                        font-poppins
                        text-2xl
                        font-semibold
                        tracking-[-0.03em]
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
                        max-w-lg
                        text-[13px]
                        leading-6
                        text-[#718096]
                      "
                    >
                      {project.description}
                    </p>

                    {/* Tecnologías */}

                    <div
                      className="
                        mt-6
                        flex
                        flex-wrap
                        gap-2
                      "
                    >
                      {project.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="
                              rounded-md
                              border
                              border-white/[0.07]
                              bg-white/[0.025]
                              px-2.5
                              py-1.5
                              font-mono
                              text-[9px]
                              uppercase
                              tracking-[0.08em]
                              text-[#718096]
                            "
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>

                    {/* Botón */}

                    <motion.a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        x: 4,
                      }}
                      className="
                        mt-7
                        inline-flex
                        items-center
                        gap-3
                        text-sm
                        font-semibold
                        text-white
                        transition-colors
                        hover:text-[#A7D3FF]
                      "
                    >
                      <span>
                        Ver proyecto
                      </span>

                      <span
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-md
                          bg-[#1E6BFF]
                          text-[12px]
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>
                    </motion.a>
                  </div>
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>

        {/* =====================================================
            VER TODOS
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
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
            duration: 0.55,
          }}
          className="
            mt-10
            flex
            items-center
            justify-between
            border-t
            border-white/[0.08]
            pt-7
          "
        >
          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.18em]
              text-[#475569]
            "
          >
            Proyectos / 01—03
          </span>

          <motion.a
            href="/proyectos"
            whileHover={{
              x: 4,
            }}
            className="
              inline-flex
              items-center
              gap-3
              text-sm
              font-semibold
              text-white
              transition-colors
              hover:text-[#A7D3FF]
            "
          >
            <span>
              Ver todos los proyectos
            </span>

            <span className="text-[#3DA5FF]">
              →
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}