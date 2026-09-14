"use client";

import { motion, type Variants } from "framer-motion";

const experiments = [
  {
    number: "01",
    category: "INTELIGENCIA ARTIFICIAL",
    title: "Agentes autónomos",
    description:
      "Exploración de agentes capaces de analizar información, tomar decisiones y ejecutar tareas dentro de flujos de trabajo digitales.",
    status: "Explorando",
    statusType: "active",
  },
  {
    number: "02",
    category: "AUTOMATIZACIÓN",
    title: "Workflows inteligentes",
    description:
      "Pruebas de automatización para conectar procesos, reducir tareas repetitivas y construir flujos de trabajo más eficientes.",
    status: "En desarrollo",
    statusType: "active",
  },
  {
    number: "03",
    category: "SISTEMAS",
    title: "Arquitecturas distribuidas",
    description:
      "Experimentación con arquitecturas distribuidas, comunicación entre servicios y diferentes estrategias para construir sistemas escalables.",
    status: "Investigando",
    statusType: "active",
  },
];

const technologies = [
  "Artificial Intelligence",
  "Next.js",
  "TypeScript",
  "Python",
  "Automation",
  "Distributed Systems",
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

export default function Lab() {
  return (
    <section
      id="lab"
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
          left-1/2
          top-[15%]
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#1E6BFF]/[0.018]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          right-[-150px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#3DA5FF]/[0.015]
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
          {/* Etiqueta */}

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
              04
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
              Lab
            </span>
          </div>

          {/* Título */}

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
              Experimentar.
              <br />
              Probar.
              <br />
              <span className="devpass-gradient-text">
                Aprender.
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
              Un espacio para explorar tecnologías, construir
              prototipos y experimentar con nuevas ideas antes
              de convertirlas en soluciones reales.
            </p>
          </div>
        </motion.header>

        {/* =====================================================
            EXPERIMENTOS
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
            lg:grid-cols-3
          "
        >
          {experiments.map((experiment) => (
            <motion.article
              key={experiment.number}
              variants={itemVariants}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#050D1A]
                p-7
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#3DA5FF]/25
                hover:bg-[#071426]
                sm:p-8
              "
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
                  group-hover:w-20
                "
              />

              {/* Cabecera */}

              <div className="flex items-center justify-between">
                <span
                  className="
                    font-mono
                    text-[11px]
                    tracking-[0.16em]
                    text-[#3DA5FF]
                  "
                >
                  {experiment.number}
                </span>

                <span
                  className="
                    flex
                    items-center
                    gap-2
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-[#64748B]
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#3DA5FF]/60
                      shadow-[0_0_8px_rgba(61,165,255,0.45)]
                    "
                  />

                  {experiment.status}
                </span>
              </div>

              {/* Contenido */}

              <div className="mt-12">

                <p
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-[#64748B]
                  "
                >
                  {experiment.category}
                </p>

                <h3
                  className="
                    mt-4
                    font-poppins
                    text-[22px]
                    font-semibold
                    leading-[1.2]
                    tracking-[-0.03em]
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-[#A7D3FF]
                  "
                >
                  {experiment.title}
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
                  {experiment.description}
                </p>
              </div>

              {/* Separador */}

              <div
                className="
                  my-7
                  h-px
                  bg-white/[0.06]
                "
              />

              {/* Estado */}

              <div className="flex items-center justify-between">

                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.14em]
                    text-[#475569]
                  "
                >
                  Estado
                </span>

                <span
                  className="
                    text-[10px]
                    font-medium
                    text-[#A7D3FF]
                  "
                >
                  {experiment.status}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* =====================================================
            TECNOLOGÍAS EN EXPLORACIÓN
        ====================================================== */}

        <motion.div
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
            duration: 0.6,
          }}
          className="
            mt-10
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.08]
            bg-[#050D1A]
          "
        >
          <div
            className="
              flex
              flex-col
              gap-6
              p-7
              sm:p-8
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* Texto */}

            <div>
              <div className="flex items-center gap-3">
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#3DA5FF]
                    shadow-[0_0_10px_rgba(61,165,255,0.7)]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-[#64748B]
                  "
                >
                  Explorando actualmente
                </span>
              </div>

              <h3
                className="
                  mt-4
                  font-poppins
                  text-xl
                  font-semibold
                  tracking-[-0.025em]
                  text-white
                "
              >
                Tecnologías que estoy explorando.
              </h3>
            </div>

            {/* Tecnologías */}

            <div
              className="
                flex
                max-w-2xl
                flex-wrap
                gap-2
              "
            >
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-lg
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    px-3
                    py-2
                    font-mono
                    text-[9px]
                    tracking-[0.04em]
                    text-[#718096]
                    transition-all
                    duration-300
                    hover:border-[#3DA5FF]/20
                    hover:bg-[#3DA5FF]/[0.04]
                    hover:text-[#A7D3FF]
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FRASE FINAL
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
            flex-col
            gap-4
            border-t
            border-white/[0.08]
            pt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
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
            Lab / Experiments
          </span>

          <p
            className="
              text-sm
              text-[#718096]
            "
          >
            No todo tiene que estar terminado para empezar a construir.
          </p>
        </motion.div>
      </div>
    </section>
  );
}