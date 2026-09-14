"use client";

import { motion, type Variants } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Desarrollo de software",
    description:
      "Diseño y desarrollo de sistemas y aplicaciones adaptados a las necesidades específicas de cada proyecto.",
  },
  {
    number: "02",
    title: "Desarrollo de páginas web",
    description:
      "Creación de páginas web modernas, rápidas, responsive y orientadas a ofrecer una experiencia digital profesional.",
  },
  {
    number: "03",
    title: "Auditorías",
    description:
      "Evaluación técnica de sistemas y proyectos para identificar problemas, riesgos, oportunidades de mejora y posibles optimizaciones.",
  },
  {
    number: "04",
    title: "Automatización",
    description:
      "Automatización de procesos y tareas repetitivas para mejorar la productividad, reducir errores y optimizar operaciones.",
  },
  {
    number: "05",
    title: "Inteligencia Artificial",
    description:
      "Integración de inteligencia artificial en productos y procesos para crear soluciones más eficientes, inteligentes y escalables.",
  },
  {
    number: "06",
    title: "Consultorías",
    description:
      "Orientación técnica para evaluar proyectos, tecnologías e ideas y tomar decisiones digitales con mayor claridad.",
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
    y: 18,
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

export default function Services() {
  return (
    <section
      id="servicios"
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
          LUZ AMBIENTAL
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[420px]
          w-[850px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#1E6BFF]/[0.035]
          blur-[140px]
        "
      />

      <div className="devpass-container relative z-10">

        {/* =====================================================
            ENCABEZADO
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
          className="
            border-b
            border-white/[0.08]
            pb-10
            sm:pb-12
          "
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
              01
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
              Servicios
            </span>
          </div>

          {/* Título */}
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
              lg:text-[64px]
            "
          >
            Tecnología para{" "}
            <span className="devpass-gradient-text">
              proyectos reales.
            </span>
          </h2>

          {/* Descripción */}
          <p
            className="
              mt-6
              max-w-3xl
              text-[15px]
              leading-7
              text-[#7F8EA3]
              sm:mt-7
              sm:text-base
              sm:leading-8
            "
          >
            Soluciones digitales desarrolladas con criterio técnico,
            enfoque práctico y una visión orientada a resultados.
          </p>
        </motion.header>

        {/* =====================================================
            LISTA DE SERVICIOS
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
            mt-8
            grid
            gap-4
            sm:mt-10
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service) => (
            <motion.article
              key={service.number}
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
              {/* Línea superior al pasar el mouse */}
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

              {/* Número */}
              <div className="flex items-center justify-between">
                <span
                  className="
                    font-mono
                    text-[11px]
                    tracking-[0.16em]
                    text-[#3DA5FF]
                  "
                >
                  {service.number}
                </span>

                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#1E6BFF]/40
                    transition-all
                    duration-300
                    group-hover:bg-[#3DA5FF]
                    group-hover:shadow-[0_0_10px_rgba(61,165,255,0.7)]
                  "
                />
              </div>

              {/* Contenido */}
              <div className="mt-10">
                <h3
                  className="
                    font-poppins
                    text-[21px]
                    font-semibold
                    leading-[1.25]
                    tracking-[-0.025em]
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-[#A7D3FF]
                  "
                >
                  {service.title}
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
                  {service.description}
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

              {/* Botón individual */}
              <motion.a
                href={`/contacto?servicio=${encodeURIComponent(
                  service.title
                )}`}
                whileHover={{
                  x: 3,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  text-[12px]
                  font-medium
                  text-[#A7D3FF]
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                <span>
                  Solicitar servicio
                </span>

                <span
                  className="
                    text-[#3DA5FF]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </motion.a>
            </motion.article>
          ))}
        </motion.div>

        {/* =====================================================
            CTA FINAL
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
            gap-5
            border-t
            border-white/[0.08]
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Texto */}
          <p
            className="
              text-sm
              text-[#718096]
            "
          >
            ¿Tienes un proyecto en mente?
          </p>

          {/* Botón */}
          <motion.a
            href="/contacto"
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
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
              shadow-[0_8px_30px_rgba(0,0,0,0.18)]
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-[#3DA5FF]/50
              hover:bg-[#0A1F3D]
              hover:shadow-[0_10px_35px_rgba(30,107,255,0.16)]
            "
          >
            <span>
              Hablemos
            </span>

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
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}