"use client";

import { motion, type Variants, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const journey = [
  {
    number: "01",
    year: "2021",
    period: "INICIO",
    role: "Soporte TI · Redes",
    description:
      "Mi recorrido comenzó en soporte TI y redes, administrando servidores e infraestructura de red en un policlínico.",
  },
  {
    number: "02",
    year: "2022",
    period: "EVOLUCIÓN",
    role: "Desarrollo COBOL",
    description:
      "Después pasé al desarrollo de software trabajando con COBOL para un partner tecnológico, ampliando mi experiencia en sistemas.",
  },
  {
    number: "03",
    year: "2023",
    period: "FULL STACK",
    role: "Desarrollo de aplicaciones",
    description:
      "Posteriormente me enfoqué en desarrollo Full Stack, construyendo aplicaciones web y soluciones digitales.",
  },
  {
    number: "04",
    year: "2024",
    period: "INFRAESTRUCTURA",
    role: "Redes · Sistemas",
    description:
      "Volví al mundo de infraestructura y redes, fortaleciendo una perspectiva integral entre software, sistemas e infraestructura.",
  },
  {
    number: "05",
    year: "2025",
    period: "SOFTWARE",
    role: "Desarrollo · IA",
    description:
      "Regresé al desarrollo enfocándome en software, inteligencia artificial, automatización, datos y sistemas distribuidos.",
  },
  {
    number: "06",
    year: "2026",
    period: "ACTUALIDAD",
    role: "DevPass",
    description:
      "Actualmente impulso DevPass como mi propia empresa de desarrollo tecnológico, creando soluciones digitales para proyectos reales.",
  },
];

const areas = [
  "Desarrollo de software",
  "Desarrollo web",
  "Inteligencia artificial",
  "Automatización",
  "Sistemas distribuidos",
  "Ciencia de datos",
];

const technologies = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "C#",
  "SQL",
  "Git",
  "Linux",
  "Debian",
  "Jupyter",
  "IA",
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

/* ============================================================
   CONTADOR DE AÑOS
============================================================ */

function YearsCounter() {
  const counterRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(counterRef, {
    once: true,
    amount: 0.6,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let current = 0;

    const interval = window.setInterval(() => {
      current += 1;

      setCount(current);

      if (current >= 5) {
        window.clearInterval(interval);
      }
    }, 180);

    return () => {
      window.clearInterval(interval);
    };
  }, [isInView]);

  return (
    <div ref={counterRef}>
      <motion.span
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
              }
            : {
                opacity: 0,
                y: 10,
              }
        }
        transition={{
          duration: 0.4,
        }}
        className="
          block
          font-poppins
          text-3xl
          font-semibold
          leading-none
          tracking-[-0.04em]
          text-white
        "
      >
        {count}+
      </motion.span>

      <span
        className="
          mt-1
          block
          text-[9px]
          uppercase
          tracking-[0.14em]
          text-[#475569]
        "
      >
        años en tecnología
      </span>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="sobre-mi"
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
          right-[-200px]
          top-[8%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#1E6BFF]/[0.018]
          blur-[160px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-[-180px]
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
              05
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
              Sobre DevPass
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
              De infraestructura
              <br />
              a{" "}
              <span className="devpass-gradient-text">
                software.
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
              Soy Ingeniero de Sistemas e Informática y llevo más
              de cinco años desarrollándome en el mundo de la
              tecnología, pasando por infraestructura, redes,
              desarrollo de software y soluciones digitales.
            </p>
          </div>
        </motion.header>

        {/* =====================================================
            PRESENTACIÓN
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
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
            duration: 0.65,
            ease: "easeOut",
          }}
          className="
            grid
            gap-10
            border-b
            border-white/[0.08]
            py-12
            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-20
            lg:py-16
          "
        >
          {/* Texto */}

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
              El camino
            </span>

            <h3
              className="
                mt-5
                max-w-2xl
                font-poppins
                text-2xl
                font-semibold
                leading-[1.2]
                tracking-[-0.03em]
                text-white
                sm:text-3xl
              "
            >
              Una trayectoria construida
              desde distintos lados de la tecnología.
            </h3>

            <div
              className="
                mt-6
                max-w-2xl
                space-y-5
                text-[14px]
                leading-7
                text-[#718096]
              "
            >
              <p>
                Empecé trabajando en soporte TI y redes, donde tuve
                contacto directo con servidores e infraestructura
                tecnológica.
              </p>

              <p>
                Después pasé al desarrollo de software, trabajando
                con COBOL y posteriormente como desarrollador
                Full Stack, construyendo aplicaciones web y
                soluciones digitales.
              </p>

              <p>
                Hoy combino ambas perspectivas mientras sigo
                explorando nuevas tecnologías y construyendo
                DevPass como una empresa enfocada en el desarrollo
                de soluciones digitales.
              </p>
            </div>
          </div>

          {/* Panel */}

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-[#050D1A]
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.035]
              "
              style={{
                backgroundImage:
                  "linear-gradient(to right, #3DA5FF 1px, transparent 1px), linear-gradient(to bottom, #3DA5FF 1px, transparent 1px)",
                backgroundSize: "38px 38px",
              }}
            />

            <motion.div
              animate={{
                opacity: [0.1, 0.22, 0.1],
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
                h-48
                w-48
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#1E6BFF]/20
                blur-[80px]
              "
            />

            <div className="relative p-7 sm:p-8">

              <div className="flex items-center justify-between">
                <span
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-[#475569]
                  "
                >
                  DevPass
                </span>

                <span
                  className="
                    flex
                    items-center
                    gap-2
                    font-mono
                    text-[9px]
                    text-[#64748B]
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#3DA5FF]
                      shadow-[0_0_8px_rgba(61,165,255,0.65)]
                    "
                  />

                  Active
                </span>
              </div>

              <div className="mt-14">
                <p
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-[#3DA5FF]
                  "
                >
                  Ingeniero de Sistemas
                </p>

                <h3
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
                  DevPass
                </h3>

                <p
                  className="
                    mt-4
                    max-w-sm
                    text-sm
                    leading-7
                    text-[#718096]
                  "
                >
                  Desarrollo tecnológico, innovación y soluciones
                  digitales para proyectos reales.
                </p>
              </div>

              {/* =================================================
                  CONTADOR 0 → 5
              ================================================== */}

              <div
                className="
                  mt-12
                  flex
                  items-end
                  justify-between
                  border-t
                  border-white/[0.06]
                  pt-6
                "
              >
                <YearsCounter />

                <span
                  className="
                    font-mono
                    text-[10px]
                    text-[#475569]
                  "
                >
                  PE / 2026
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            TRAYECTORIA 0 → 1 → 2 → 3 → 4 → 5
        ====================================================== */}

        <div
          className="
            border-b
            border-white/[0.08]
            py-12
            sm:py-16
          "
        >
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
              Trayectoria
            </span>

            <h3
              className="
                mt-4
                font-poppins
                text-2xl
                font-semibold
                tracking-[-0.03em]
                text-white
                sm:text-3xl
              "
            >
              Cinco años de evolución.
            </h3>
          </motion.div>

          {/* =================================================
              TIMELINE DESKTOP
          ================================================== */}

          <div className="relative mt-14 hidden lg:block">

            {/* Línea base */}

            <div
              className="
                absolute
                left-0
                right-0
                top-[25px]
                h-px
                bg-white/[0.08]
              "
            />

            {/* Línea animada */}

            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              style={{
                originX: 0,
              }}
              className="
                absolute
                left-0
                right-0
                top-[25px]
                h-px
                bg-gradient-to-r
                from-[#1E6BFF]
                via-[#3DA5FF]
                to-[#A7D3FF]
              "
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="
                relative
                grid
                grid-cols-6
                gap-4
              "
            >
              {journey.map((item) => (
                <motion.div
                  key={item.number}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Nodo */}

                  <div className="relative z-10 flex h-[52px] items-start">
                    <motion.div
                      initial={{
                        scale: 0,
                      }}
                      whileInView={{
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.5,
                      }}
                      transition={{
                        duration: 0.45,
                        delay:
                          Number(item.number) * 0.22,
                        type: "spring",
                        stiffness: 220,
                        damping: 16,
                      }}
                      className="
                        flex
                        h-[50px]
                        w-[50px]
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#3DA5FF]/30
                        bg-[#020617]
                        shadow-[0_0_0_6px_#020617]
                      "
                    >
                      <span
                        className="
                          font-mono
                          text-sm
                          font-semibold
                          text-[#3DA5FF]
                        "
                      >
                        {item.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Información */}

                  <div className="mt-7 pr-4">
                    <span
                      className="
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.14em]
                        text-[#475569]
                      "
                    >
                      {item.year}
                    </span>

                    <p
                      className="
                        mt-2
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.14em]
                        text-[#3DA5FF]
                      "
                    >
                      {item.period}
                    </p>

                    <h4
                      className="
                        mt-3
                        font-poppins
                        text-[15px]
                        font-semibold
                        leading-[1.3]
                        tracking-[-0.02em]
                        text-white
                      "
                    >
                      {item.role}
                    </h4>

                    <p
                      className="
                        mt-3
                        text-[11px]
                        leading-5
                        text-[#718096]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* =================================================
              TIMELINE MOBILE
          ================================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
            className="
              relative
              mt-10
              space-y-4
              lg:hidden
            "
          >
            {/* Línea */}

            <div
              className="
                absolute
                bottom-8
                left-[24px]
                top-8
                w-px
                bg-white/[0.08]
              "
            />

            <motion.div
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
              style={{
                originY: 0,
              }}
              className="
                absolute
                bottom-8
                left-[24px]
                top-8
                w-px
                bg-gradient-to-b
                from-[#1E6BFF]
                to-[#3DA5FF]
              "
            />

            {journey.map((item) => (
              <motion.article
                key={item.number}
                variants={itemVariants}
                className="
                  relative
                  flex
                  gap-5
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-[#050D1A]
                  p-5
                "
              >
                {/* Número */}

                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5,
                    }}
                    transition={{
                      duration: 0.4,
                      type: "spring",
                      stiffness: 220,
                    }}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#3DA5FF]/30
                      bg-[#020617]
                    "
                  >
                    <span
                      className="
                        font-mono
                        text-xs
                        font-semibold
                        text-[#3DA5FF]
                      "
                    >
                      {item.number}
                    </span>
                  </motion.div>
                </div>

                {/* Información */}

                <div className="pt-1">
                  <span
                    className="
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.14em]
                      text-[#475569]
                    "
                  >
                    {item.year}
                  </span>

                  <p
                    className="
                      mt-2
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.14em]
                      text-[#3DA5FF]
                    "
                  >
                    {item.period}
                  </p>

                  <h4
                    className="
                      mt-3
                      font-poppins
                      text-base
                      font-semibold
                      leading-[1.3]
                      text-white
                    "
                  >
                    {item.role}
                  </h4>

                  <p
                    className="
                      mt-3
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
        </div>

        {/* =====================================================
            ESPECIALIZACIÓN
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
            border-b
            border-white/[0.08]
            py-12
            sm:py-16
          "
        >
          <div
            className="
              grid
              gap-8
              lg:grid-cols-[0.8fr_1.2fr]
              lg:items-center
              lg:gap-16
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
                Especialización
              </span>

              <h3
                className="
                  mt-4
                  font-poppins
                  text-2xl
                  font-semibold
                  leading-[1.2]
                  tracking-[-0.03em]
                  text-white
                  sm:text-3xl
                "
              >
                Tecnología enfocada
                en resolver problemas.
              </h3>

              <p
                className="
                  mt-5
                  max-w-lg
                  text-sm
                  leading-7
                  text-[#718096]
                "
              >
                Actualmente mi enfoque está en construir soluciones
                digitales combinando desarrollo de software,
                inteligencia artificial, automatización, datos y
                sistemas distribuidos.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{
                    opacity: 0,
                    x: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-[#050D1A]
                    px-5
                    py-4
                    transition-all
                    duration-300
                    hover:border-[#3DA5FF]/20
                    hover:bg-[#071426]
                  "
                >
                  <span
                    className="
                      text-[12px]
                      font-medium
                      text-[#94A3B8]
                      transition-colors
                      duration-300
                      group-hover:text-[#A7D3FF]
                    "
                  >
                    {area}
                  </span>

                  <span
                    className="
                      text-[11px]
                      text-[#3DA5FF]/50
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-[#3DA5FF]
                    "
                  >
                    →
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            TECNOLOGÍAS
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
            border-b
            border-white/[0.08]
            py-12
            sm:py-16
          "
        >
          <div
            className="
              flex
              flex-col
              gap-7
              lg:flex-row
              lg:items-center
              lg:justify-between
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
                Stack
              </span>

              <h3
                className="
                  mt-3
                  font-poppins
                  text-xl
                  font-semibold
                  tracking-[-0.025em]
                  text-white
                "
              >
                Tecnologías con las que trabajo.
              </h3>
            </div>

            <div
              className="
                flex
                max-w-3xl
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
            FILOSOFÍA
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
            amount: 0.35,
          }}
          transition={{
            duration: 0.65,
          }}
          className="py-12 sm:py-16"
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-[#3DA5FF]/10
              bg-[#050D1A]
              p-8
              sm:p-10
              lg:p-12
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                right-[-100px]
                top-1/2
                h-64
                w-64
                -translate-y-1/2
                rounded-full
                bg-[#1E6BFF]/[0.05]
                blur-[100px]
              "
            />

            <div className="relative z-10">

              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-[#3DA5FF]
                "
              >
                Filosofía
              </span>

              <blockquote
                className="
                  mt-6
                  max-w-4xl
                  font-poppins
                  text-2xl
                  font-medium
                  leading-[1.35]
                  tracking-[-0.025em]
                  text-white
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                “Me gusta la tecnología porque es la nueva forma de
                <span className="devpass-gradient-text">
                  {" "}
                  innovar y mejorar el mundo.
                </span>
                ”
              </blockquote>

              <div
                className="
                  mt-8
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-px
                    w-8
                    bg-[#3DA5FF]/40
                  "
                />

                <span
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-[#64748B]
                  "
                >
                  DevPass
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            CIERRE
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
            DevPass / About
          </span>

          <p
            className="
              text-sm
              text-[#718096]
            "
          >
            Construyo. Aprendo. Documento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}