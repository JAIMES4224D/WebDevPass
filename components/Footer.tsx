"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* =========================================================
   COLUMNAS DEL FOOTER
========================================================= */

const footerColumns = [
  {
    title: "Desarrollo",
    links: [
      {
        label: "Desarrollo Web",
        href: "/servicios/desarrollo-web",
      },
      {
        label: "Software a Medida",
        href: "/servicios/software",
      },
      {
        label: "Automatización",
        href: "/servicios/automatizacion",
      },
      {
        label: "Integraciones",
        href: "/soluciones/integraciones",
      },
    ],
  },

  {
    title: "Soluciones",
    links: [
      {
        label: "Inteligencia Artificial",
        href: "/soluciones/ia",
      },
      {
        label: "Transformación Digital",
        href: "/soluciones/transformacion-digital",
      },
      {
        label: "Auditoría Digital",
        href: "/auditoria",
      },
      {
        label: "Optimización",
        href: "/soluciones",
      },
    ],
  },

  {
    title: "DevPass",
    links: [
      {
        label: "Sobre nosotros",
        href: "/sobre-mi",
      },
      {
        label: "Proyectos",
        href: "/proyectos",
      },
      {
        label: "Insights",
        href: "/blog",
      },
      {
        label: "Contacto",
        href: "/contacto",
      },
    ],
  },

  {
    title: "Recursos",
    links: [
      {
        label: "Blog",
        href: "/blog",
      },
      {
        label: "Notas",
        href: "/notes",
      },
      {
        label: "Videos",
        href: "/videos",
      },
      {
        label: "DevPass Lab",
        href: "/lab",
      },
      {
        label: "Casos",
        href: "/casos",
      },
    ],
  },
];

/* =========================================================
   REDES OFICIALES DE DEVPASS
========================================================= */

const devpassSocials = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@devpass_oficial",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/results?search_query=devpass_oficial",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61580981483158",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/devpass-oficial/?viewAsMember=true",
  },
  {
    label: "Github",
    href: "https://github.com/JAIMES4224D",
  },
];

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020617]">
      {/* =====================================================
          LÍNEA SUPERIOR
      ===================================================== */}

      <div className="relative h-px w-full overflow-hidden bg-white/10">
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            left-0
            top-0
            h-px
            w-60
            bg-gradient-to-r
            from-transparent
            via-[#3DA5FF]/70
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          AMBIENTE VISUAL
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Glow izquierdo */}

        <motion.div
          animate={{
            x: [0, 50, 0],
            opacity: [0.015, 0.045, 0.015],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-180px]
            top-[-180px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#1E6BFF]/20
            blur-[150px]
          "
        />

        {/* Glow derecho */}

        <motion.div
          animate={{
            x: [0, -50, 0],
            opacity: [0.015, 0.04, 0.015],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-200px]
            right-[-180px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#3DA5FF]/15
            blur-[150px]
          "
        />
      </div>

      {/* =====================================================
          CONTENIDO PRINCIPAL
      ===================================================== */}

      <div className="devpass-container relative z-10">
        <div className="grid gap-16 py-20 lg:grid-cols-12 lg:gap-12">
          {/* =================================================
              IDENTIDAD DE DEVPASS
          ================================================= */}

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
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
            className="lg:col-span-4"
          >
            {/* =================================================
                LOGO DEVPASS
            ================================================= */}

            <Link
              href="/"
              className="
                group
                inline-flex
                items-center
                gap-3
              "
            >
              {/* =================================================
                  ROBOT
              ================================================= */}

              <motion.span
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="
                  relative
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                "
              >
                {/* Halo azul */}

                <motion.span
                  animate={{
                    scale: [0.92, 1.08, 0.92],
                    opacity: [0.1, 0.22, 0.1],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    h-9
                    w-9
                    rounded-full
                    bg-[#3DA5FF]
                    blur-xl
                  "
                />

                {/* Robot oficial */}

                <Image
                  src="/images/devpass-robot.png"
                  alt="DevPass"
                  width={40}
                  height={40}
                  className="
                    relative
                    z-10
                    h-10
                    w-10
                    object-contain
                    drop-shadow-[0_0_12px_rgba(61,165,255,0.35)]
                  "
                />
              </motion.span>

              {/* =================================================
                  NOMBRE
              ================================================= */}

              <span
                className="
                  font-poppins
                  text-xl
                  font-semibold
                  tracking-tight
                  text-white
                "
              >
                Dev
                <span className="text-[#3DA5FF]">
                  Pass
                </span>
              </span>
            </Link>

            {/* =================================================
                DESCRIPCIÓN
            ================================================= */}

            <p
              className="
                mt-6
                max-w-sm
                text-sm
                leading-7
                text-[#94A3B8]
              "
            >
              Tecnología, desarrollo y estrategia para construir
              soluciones digitales que generen valor real.
            </p>

            {/* =================================================
                STATUS
            ================================================= */}

            <motion.div
              whileHover={{
                y: -2,
                borderColor: "rgba(61,165,255,0.3)",
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#3DA5FF]/10
                bg-[#0A1F3D]/35
                px-3
                py-2
                font-mono
                text-[10px]
                tracking-wide
                text-[#64748B]
              "
            >
              <motion.span
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 1.7,
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

              SYSTEMS OPERATIONAL
            </motion.div>

            {/* =================================================
                REDES OFICIALES DE DEVPASS
            ================================================= */}

            <div className="mt-9">
              <p
                className="
                  mb-4
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-[#3DA5FF]/55
                "
              >
                DevPass en la red
              </p>

              <div className="flex flex-wrap gap-2">
                {devpassSocials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -2,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      rounded-lg
                      border
                      border-white/10
                      bg-white/5
                      px-3
                      py-2
                      font-mono
                      text-[10px]
                      text-[#64748B]
                      transition-all
                      duration-300
                      hover:border-[#3DA5FF]/25
                      hover:bg-[#0A1F3D]/50
                      hover:text-[#A7D3FF]
                    "
                  >
                    {social.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* =================================================
              NAVEGACIÓN
          ================================================= */}

          <div
            className="
              grid
              grid-cols-2
              gap-x-10
              gap-y-12
              sm:grid-cols-4
              lg:col-span-8
            "
          >
            {footerColumns.map((column, index) => (
              <motion.div
                key={column.title}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                {/* TÍTULO */}

                <h3
                  className="
                    mb-5
                    font-mono
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-[#3DA5FF]/55
                  "
                >
                  {column.title}
                </h3>

                {/* ENLACES */}

                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="
                          group
                          inline-flex
                          items-center
                          gap-2
                          text-[13px]
                          text-[#94A3B8]
                          transition-all
                          duration-300
                          hover:translate-x-1
                          hover:text-white
                        "
                      >
                        {/* Indicador */}

                        <span
                          className="
                            h-px
                            w-0
                            bg-[#3DA5FF]
                            shadow-[0_0_8px_rgba(61,165,255,0.8)]
                            transition-all
                            duration-300
                            group-hover:w-3
                          "
                        />

                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =====================================================
            INFORMACIÓN FINAL
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
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
            duration: 0.6,
          }}
          className="
            border-t
            border-white/10
            py-7
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            {/* =================================================
                COPYRIGHT
            ================================================= */}

            <div className="shrink-0">
              <p
                className="
                  font-mono
                  text-[10px]
                  text-[#64748B]
                "
              >
                © 2026 DevPass. All rights reserved.
              </p>

              <p
                className="
                  mt-2
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-[#334155]
                "
              >
                Construyo. Aprendo. Documento.
              </p>
            </div>

            {/* =================================================
                INFORMACIÓN DERECHA
            ================================================= */}

            <div
              className="
                flex
                flex-wrap
                items-center
                justify-start
                gap-x-5
                gap-y-2
                md:justify-end
              "
            >
              {/* Lima */}

              <span
                className="
                  font-mono
                  text-[10px]
                  text-[#475569]
                "
              >
                Lima, PE
              </span>

              <span
                className="
                  hidden
                  h-3
                  w-px
                  bg-white/10
                  sm:block
                "
              />

              {/* Disponible */}

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  font-mono
                  text-[10px]
                  text-[#475569]
                "
              >
                <motion.span
                  animate={{
                    opacity: [1, 0.3, 1],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-emerald-400
                    shadow-[0_0_7px_rgba(52,211,153,0.7)]
                  "
                />

                Disponible para proyectos
              </span>

              <span
                className="
                  hidden
                  h-3
                  w-px
                  bg-white/10
                  sm:block
                "
              />

              {/* Tagline técnica */}

              <span
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.12em]
                  text-[#263C53]
                "
              >
                Technology · Development · Innovation
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}