"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

/* =========================================================
   ANIMACIONES
========================================================= */

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
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-[#020617]
        pt-28
        pb-16
      "
    >

      {/* =====================================================
          FONDO — GLOW CENTRAL
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.75,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[52%]
          top-[35%]
          -z-10
          h-[560px]
          w-[560px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#1E6BFF]/10
          blur-[150px]
        "
      />

      {/* =====================================================
          GLOW DERECHO
      ===================================================== */}

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[-120px]
          top-[25%]
          -z-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#3DA5FF]/10
          blur-[150px]
        "
      />

      {/* =====================================================
          GLOW INFERIOR
      ===================================================== */}

      <motion.div
        animate={{
          x: [0, -25, 0],
          opacity: [0.06, 0.13, 0.06],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-[-100px]
          -z-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#1E6BFF]/10
          blur-[140px]
        "
      />

      {/* =====================================================
          GRID TECNOLÓGICO
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          opacity-[0.035]
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, #3DA5FF 1px, transparent 1px), linear-gradient(to bottom, #3DA5FF 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 42%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 42%, black 30%, transparent 100%)",
        }}
      />

      {/* =====================================================
          LÍNEAS DECORATIVAS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-1/2
          -z-10
          h-px
          w-[22%]
          bg-gradient-to-r
          from-transparent
          via-[#3DA5FF]/15
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-[30%]
          -z-10
          h-px
          w-[18%]
          bg-gradient-to-l
          from-transparent
          via-[#3DA5FF]/15
          to-transparent
        "
      />

      {/* =====================================================
          PARTÍCULAS
      ===================================================== */}

      <motion.span
        animate={{
          y: [0, -25, 0],
          opacity: [0.15, 0.6, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[13%]
          top-[34%]
          h-1
          w-1
          rounded-full
          bg-[#3DA5FF]
          shadow-[0_0_10px_rgba(61,165,255,0.7)]
        "
      />

      <motion.span
        animate={{
          y: [0, 22, 0],
          opacity: [0.1, 0.55, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="
          pointer-events-none
          absolute
          right-[16%]
          top-[23%]
          h-1
          w-1
          rounded-full
          bg-[#A7D3FF]
          shadow-[0_0_10px_rgba(167,211,255,0.7)]
        "
      />

      <motion.span
        animate={{
          y: [0, -18, 0],
          opacity: [0.1, 0.45, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="
          pointer-events-none
          absolute
          bottom-[25%]
          right-[31%]
          h-1
          w-1
          rounded-full
          bg-[#3DA5FF]
          shadow-[0_0_10px_rgba(61,165,255,0.6)]
        "
      />

      {/* =====================================================
          CONTENEDOR
      ===================================================== */}

      <div className="devpass-container relative z-10 w-full">

        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-12
            lg:gap-4
          "
        >

          {/* =================================================
              COLUMNA IZQUIERDA
          ================================================= */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="
              relative
              z-20
              max-w-2xl
              lg:col-span-7
            "
          >

            {/* =================================================
                TERMINAL BADGE
            ================================================= */}

            <motion.div
              variants={itemVariants}
              className="
                mb-6
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-[#3DA5FF]/20
                bg-[#0A1F3D]/35
                px-4
                py-2
                font-mono
                text-[11px]
                text-[#A7D3FF]
                backdrop-blur-md
              "
            >
              <span className="relative flex h-2 w-2">

                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[#3DA5FF]
                    opacity-60
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-[#3DA5FF]
                    shadow-[0_0_10px_rgba(61,165,255,0.8)]
                  "
                />

              </span>

              <span>
                devpass@terminal:~$ init --release
              </span>

            </motion.div>

            {/* =================================================
                CATEGORÍA
            ================================================= */}

            <motion.p
              variants={itemVariants}
              className="
                mb-5
                font-mono
                text-[10px]
                uppercase
                tracking-[0.32em]
                text-[#64748B]
                sm:text-[11px]
              "
            >
              Tecnología · Desarrollo · IA
            </motion.p>

            {/* =================================================
                TITULAR
            ================================================= */}

            <motion.h1
              variants={itemVariants}
              className="
                font-poppins
                text-[42px]
                font-bold
                leading-[1.02]
                tracking-[-0.04em]
                text-white
                sm:text-6xl
                lg:text-[76px]
                xl:text-[84px]
              "
            >
              Construyo.
              <br />

              <span className="devpass-gradient-text">
                Aprendo.
              </span>
              <br />

              Documento

              <motion.span
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  font-mono
                  text-[#3DA5FF]
                "
              >
                _
              </motion.span>
            </motion.h1>

            {/* =================================================
                DESCRIPCIÓN
            ================================================= */}

            <motion.p
              variants={itemVariants}
              className="
                mt-7
                max-w-xl
                text-[15px]
                leading-7
                text-[#94A3B8]
                sm:text-lg
                sm:leading-8
              "
            >
              Desarrollo software, construyo soluciones digitales
              y experimento con inteligencia artificial. DevPass es
              el espacio donde convierto ideas en proyectos y
              documento lo que aprendo durante el proceso.
            </motion.p>

            {/* =================================================
                BOTONES
            ================================================= */}

            <motion.div
              variants={itemVariants}
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-4
              "
            >

              {/* =================================================
                  BOTÓN PROYECTOS
              ================================================= */}

              <motion.a
                href="#proyectos"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-xl
                  bg-[#1E6BFF]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_0_30px_rgba(30,107,255,0.28)]
                  transition-all
                  duration-300
                  hover:bg-[#2874ff]
                  hover:shadow-[0_0_45px_rgba(30,107,255,0.42)]
                "
              >

                <span className="relative z-10">
                  Explorar proyectos
                </span>

                <motion.span
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    z-10
                    font-mono
                  "
                >
                  →
                </motion.span>

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />

              </motion.a>

              {/* =================================================
                  BOTÓN ARTÍCULOS
              ================================================= */}

              <motion.a
                href="#articulos"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-6
                  py-3.5
                  font-mono
                  text-sm
                  text-[#A7B4C8]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[#3DA5FF]/30
                  hover:bg-[#0A1F3D]/50
                  hover:text-white
                "
              >

                <span className="text-[#3DA5FF]">
                  $
                </span>

                <span>
                  cat /articulos
                </span>

                <span className="text-[#475569]">
                  →
                </span>

              </motion.a>

            </motion.div>

            {/* =================================================
                TELEMETRÍA
            ================================================= */}

            <motion.div
              variants={itemVariants}
              className="
                mt-12
                grid
                max-w-xl
                grid-cols-3
                gap-4
                border-t
                border-white/10
                pt-6
                font-mono
              "
            >

              <div>
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.12em]
                    text-[#475569]
                    sm:text-[10px]
                  "
                >
                  Stack
                </p>

                <p
                  className="
                    mt-1.5
                    text-[13px]
                    font-semibold
                    text-[#D7E9FF]
                    sm:text-sm
                  "
                >
                  TS · Next · AI
                </p>
              </div>

              <div>
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.12em]
                    text-[#475569]
                    sm:text-[10px]
                  "
                >
                  Status
                </p>

                <p
                  className="
                    mt-1.5
                    flex
                    items-center
                    gap-1.5
                    text-[13px]
                    font-semibold
                    text-emerald-400
                    sm:text-sm
                  "
                >
                  <motion.span
                    animate={{
                      opacity: [1, 0.3, 1],
                      scale: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-emerald-400
                    "
                  />

                  Building
                </p>
              </div>

              <div>
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.12em]
                    text-[#475569]
                    sm:text-[10px]
                  "
                >
                  Focus
                </p>

                <p
                  className="
                    mt-1.5
                    text-[13px]
                    font-semibold
                    text-[#D7E9FF]
                    sm:text-sm
                  "
                >
                  Software · IA
                </p>
              </div>

            </motion.div>

          </motion.div>

          {/* =================================================
              COLUMNA DERECHA — ROBOT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: "easeOut",
            }}
            className="
              relative
              flex
              min-h-[420px]
              items-center
              justify-center
              lg:col-span-5
              lg:min-h-[600px]
            "
          >

            {/* =================================================
                GLOW DETRÁS DEL ROBOT
            ================================================= */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.18, 0.32, 0.18],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-[280px]
                w-[280px]
                rounded-full
                bg-[#1E6BFF]/20
                blur-[90px]
                sm:h-[380px]
                sm:w-[380px]
              "
            />

            {/* =================================================
                ÓRBITA EXTERIOR
            ================================================= */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-[330px]
                w-[330px]
                rounded-full
                border
                border-dashed
                border-[#3DA5FF]/15
                sm:h-[470px]
                sm:w-[470px]
              "
            />

            {/* =================================================
                ÓRBITA INTERIOR
            ================================================= */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-[250px]
                w-[250px]
                rounded-full
                border
                border-[#1E6BFF]/20
                sm:h-[360px]
                sm:w-[360px]
              "
            />

            {/* =================================================
                PUNTO ORBITAL
            ================================================= */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-[390px]
                w-[390px]
                sm:h-[540px]
                sm:w-[540px]
              "
            >
              <span
                className="
                  absolute
                  left-1/2
                  top-0
                  h-1.5
                  w-1.5
                  -translate-x-1/2
                  rounded-full
                  bg-[#3DA5FF]
                  shadow-[0_0_14px_rgba(61,165,255,0.9)]
                "
              />
            </motion.div>

            {/* =================================================
                ROBOT PRINCIPAL
            ================================================= */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                w-[270px]
                sm:w-[370px]
                lg:w-[450px]
              "
            >

              {/* Halo */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[15%]
                  -z-10
                  rounded-full
                  bg-[#3DA5FF]/10
                  blur-[65px]
                "
              />

              <Image
                src="/images/devpass-robot.png"
                alt="DevPass"
                width={1024}
                height={1024}
                priority
                className="
                  h-auto
                  w-full
                  object-contain
                  drop-shadow-[0_25px_60px_rgba(30,107,255,0.38)]
                "
              />

            </motion.div>

            {/* =================================================
                HUD — ESTADO
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 1,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="
                absolute
                right-0
                top-10
                z-20
                rounded-xl
                border
                border-white/10
                bg-[#020617]/80
                p-3
                font-mono
                text-[10px]
                shadow-xl
                backdrop-blur-xl
                sm:right-2
                sm:text-[11px]
              "
            >

              <div
                className="
                  mb-1.5
                  flex
                  items-center
                  gap-2
                "
              >

                <motion.span
                  animate={{
                    opacity: [1, 0.3, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-emerald-400
                    shadow-[0_0_8px_rgba(52,211,153,0.8)]
                  "
                />

                <span className="text-[#64748B]">
                  devpass.core
                </span>

              </div>

              <p className="font-semibold text-white">
                ONLINE
              </p>

            </motion.div>

            {/* =================================================
                TERMINAL FLOTANTE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="
                absolute
                bottom-3
                left-0
                z-20
                rounded-xl
                border
                border-white/10
                bg-[#020617]/85
                p-3.5
                font-mono
                text-[11px]
                shadow-2xl
                backdrop-blur-xl
                sm:left-2
              "
            >

              <div
                className="
                  mb-2
                  flex
                  items-center
                  gap-1.5
                  border-b
                  border-white/10
                  pb-2
                "
              >

                <span className="h-2 w-2 rounded-full bg-red-500/70" />
                <span className="h-2 w-2 rounded-full bg-amber-500/70" />
                <span className="h-2 w-2 rounded-full bg-emerald-500/70" />

                <span className="ml-1 text-[9px] text-[#475569]">
                  devpass-lab.log
                </span>

              </div>

              <p className="text-[#A7B4C8]">

                <span className="text-[#3DA5FF]">
                  ❯
                </span>{" "}

                system.status()

              </p>

              <p className="mt-1 text-[10px] text-emerald-400">
                Ready for deployment
              </p>

            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.8,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-6
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          font-mono
          text-[9px]
          tracking-[0.28em]
          text-[#475569]
          md:flex
        "
      >

        <span>
          SCROLL_DOWN
        </span>

        <motion.span
          animate={{
            scaleY: [1, 0.5, 1],
            opacity: [1, 0.3, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            h-7
            w-px
            origin-top
            bg-gradient-to-b
            from-[#3DA5FF]
            to-transparent
          "
        />

      </motion.div>

    </section>
  );
}