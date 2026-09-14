"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

/* =========================================================
   TIPOS
========================================================= */

type NavItem = {
  title: string;
  description: string;
  href: string;
  code: string;
};

/* =========================================================
   SERVICIOS
========================================================= */

const services: NavItem[] = [
  {
    title: "Desarrollo Web",
    description:
      "Websites, landing pages y plataformas digitales.",
    href: "/servicios/desarrollo-web",
    code: "WEB",
  },
  {
    title: "Software a Medida",
    description:
      "Sistemas diseñados para procesos reales de negocio.",
    href: "/servicios/software",
    code: "DEV",
  },
  {
    title: "Automatización",
    description:
      "Procesos más rápidos mediante tecnología e IA.",
    href: "/servicios/automatizacion",
    code: "AUTO",
  },
];

/* =========================================================
   SOLUCIONES
========================================================= */

const solutions: NavItem[] = [
  {
    title: "Inteligencia Artificial",
    description:
      "IA aplicada a procesos y soluciones digitales.",
    href: "/soluciones/ia",
    code: "AI",
  },
  {
    title: "Transformación Digital",
    description:
      "Modernización y optimización de negocios.",
    href: "/soluciones/transformacion-digital",
    code: "DX",
  },
  {
    title: "Integraciones",
    description:
      "Conectamos herramientas, sistemas y plataformas.",
    href: "/soluciones/integraciones",
    code: "API",
  },
];

/* =========================================================
   DROPDOWN
========================================================= */

function Dropdown({
  items,
  onNavigate,
}: {
  items: NavItem[];
  onNavigate: () => void;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 8,
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className="
        absolute
        left-1/2
        top-[calc(100%+10px)]
        w-96
        -translate-x-1/2
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#020617]/96
        p-2
        shadow-[0_25px_80px_rgba(0,0,0,0.55)]
        backdrop-blur-2xl
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-10
          right-10
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#3DA5FF]/70
          to-transparent
        "
      />

      {items.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="
            group
            relative
            flex
            items-center
            gap-4
            rounded-xl
            p-3.5
            transition-all
            duration-300
            hover:bg-white/5
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-lg
              border
              border-[#3DA5FF]/10
              bg-[#0A1F3D]/50
              font-mono
              text-[9px]
              font-semibold
              tracking-wider
              text-[#3DA5FF]
              transition-all
              duration-300
              group-hover:border-[#3DA5FF]/30
              group-hover:bg-[#0A1F3D]
              group-hover:shadow-[0_0_20px_rgba(30,107,255,0.14)]
            "
          >
            {item.code}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span
                className="
                  text-[14px]
                  font-medium
                  text-white
                "
              >
                {item.title}
              </span>

              <span
                className="
                  translate-x-[-4px]
                  text-[#3DA5FF]
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:translate-x-0
                  group-hover:opacity-100
                "
              >
                →
              </span>
            </div>

            <p
              className="
                mt-1
                text-[11px]
                leading-5
                text-[#94A3B8]
              "
            >
              {item.description}
            </p>
          </div>

          {index !== items.length - 1 && (
            <span
              className="
                pointer-events-none
                absolute
                bottom-0
                left-3
                right-3
                h-px
                bg-white/5
              "
            />
          )}
        </Link>
      ))}

      <div className="px-3 pb-2 pt-3">
        <span
          className="
            font-mono
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-[#475569]
          "
        >
          0{items.length} servicios disponibles
        </span>
      </div>
    </motion.div>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  const [openMenu, setOpenMenu] = useState<
    "services" | "solutions" | null
  >(null);

  const [mobileOpen, setMobileOpen] = useState(false);

  const [mobileServicesOpen, setMobileServicesOpen] =
    useState(false);

  const [mobileSolutionsOpen, setMobileSolutionsOpen] =
    useState(false);

  /* =======================================================
     SCROLL
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =======================================================
     ESCAPE
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
        setMobileServicesOpen(false);
        setMobileSolutionsOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /* =======================================================
     BLOQUEAR SCROLL MOBILE
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =======================================================
     ESTADOS ACTIVOS
  ======================================================= */

  const isHome = pathname === "/";

  const isServices =
    pathname.startsWith("/servicios");

  const isSolutions =
    pathname.startsWith("/soluciones");

  const isAuditoria =
    pathname === "/auditoria";

  const isProjects =
    pathname.startsWith("/proyectos");

  const isInsights =
    pathname.startsWith("/blog") ||
    pathname.startsWith("/notes");

  const isVideos =
    pathname.startsWith("/videos");

  const isContacto =
    pathname.startsWith("/contacto");

  /* =======================================================
     ESTILO DESKTOP
  ======================================================= */

  const navLinkClass = `
    group
    relative
    flex
    items-center
    rounded-lg
    px-4
    py-3
    text-[15px]
    font-medium
    text-[#A7B4C8]
    transition-colors
    duration-300
    hover:text-[#A7B4C8]
  `;

  /* =======================================================
     ESTILO MOBILE
  ======================================================= */

  const mobileLinkClass = (active: boolean) => `
    group
    flex
    items-center
    justify-between
    rounded-xl
    px-4
    py-3.5
    text-[14px]
    font-medium
    transition-all
    duration-300
    ${
      active
        ? "bg-[#0A1F3D]/60 text-white"
        : "text-[#A7B4C8] hover:bg-white/5 hover:text-white"
    }
  `;

  /* =======================================================
     CERRAR NAVEGACIÓN
  ======================================================= */

  const closeNavigation = () => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileSolutionsOpen(false);
  };

  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50
      "
    >
      {/* =================================================
          FONDO NAVBAR
      ================================================= */}

      <motion.div
        animate={{
          opacity: scrolled ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
        }}
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-24
          border-b
          border-white/10
          bg-[#020617]/85
          backdrop-blur-xl
        "
      />

      <div className="devpass-container relative">
        <nav
          className={`
            relative
            flex
            items-center
            justify-between
            transition-all
            duration-500
            ${
              scrolled
                ? "h-20"
                : "h-24"
            }
          `}
        >
          {/* =================================================
              LÍNEA SUPERIOR
          ================================================= */}

          <motion.div
            animate={{
              opacity: scrolled ? 0.85 : 0.35,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              pointer-events-none
              absolute
              left-[12%]
              right-[12%]
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#3DA5FF]
              to-transparent
            "
          />

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            onClick={closeNavigation}
            aria-label="DevPass - Inicio"
            className="
              group
              relative
              z-10
              flex
              items-center
              gap-2.5
              font-poppins
              text-[18px]
              font-semibold
              tracking-[-0.02em]
            "
          >
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
                h-11
                w-11
                shrink-0
                items-center
                justify-center
              "
            >
              <motion.span
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                  scale: [0.92, 1.06, 0.92],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  h-10
                  w-10
                  rounded-full
                  bg-[#3DA5FF]
                  blur-xl
                "
              />

              <Image
                src="/images/devpass-robot.png"
                alt="DevPass"
                width={40}
                height={40}
                priority
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

            <span className="text-white">
              Dev
              <span className="text-[#3DA5FF]">
                Pass
              </span>
            </span>
          </Link>

          {/* =================================================
              DESKTOP
          ================================================= */}

          <div
            className="
              absolute
              left-1/2
              hidden
              -translate-x-1/2
              items-center
              gap-2
              md:flex
            "
          >
            {/* =================================================
                SERVICIOS
            ================================================= */}

            <div
              className="relative flex items-center"
              onMouseEnter={() =>
                setOpenMenu("services")
              }
              onMouseLeave={() =>
                setOpenMenu(null)
              }
            >
              <Link
                href="/servicios"
                className={`
                  ${navLinkClass}
                  rounded-r-none
                  pr-1.5
                `}
              >
                <span>Servicios</span>

                <span
                  className={`
                    absolute
                    bottom-1
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    rounded-full
                    bg-[#3DA5FF]
                    shadow-[0_0_8px_rgba(61,165,255,0.8)]
                    transition-all
                    duration-300
                    ${
                      isServices
                        ? "w-6"
                        : "w-0 group-hover:w-6"
                    }
                  `}
                />
              </Link>

              <button
                type="button"
                aria-label="Mostrar servicios"
                aria-haspopup="true"
                aria-expanded={
                  openMenu === "services"
                }
                onClick={() =>
                  setOpenMenu(
                    openMenu === "services"
                      ? null
                      : "services"
                  )
                }
                className="
                  flex
                  h-[42px]
                  items-center
                  rounded-r-lg
                  px-2
                  text-[#A7B4C8]
                  transition-colors
                  duration-300
                  hover:bg-white/5
                "
              >
                <motion.span
                  animate={{
                    rotate:
                      openMenu === "services"
                        ? 180
                        : 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="text-[10px]"
                >
                  ↓
                </motion.span>
              </button>

              <AnimatePresence>
                {openMenu === "services" && (
                  <Dropdown
                    items={services}
                    onNavigate={() =>
                      setOpenMenu(null)
                    }
                  />
                )}
              </AnimatePresence>
            </div>

            {/* =================================================
                SOLUCIONES
            ================================================= */}

            <div
              className="relative flex items-center"
              onMouseEnter={() =>
                setOpenMenu("solutions")
              }
              onMouseLeave={() =>
                setOpenMenu(null)
              }
            >
              <Link
                href="/soluciones"
                className={`
                  ${navLinkClass}
                  rounded-r-none
                  pr-1.5
                `}
              >
                <span>Soluciones</span>

                <span
                  className={`
                    absolute
                    bottom-1
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    rounded-full
                    bg-[#3DA5FF]
                    shadow-[0_0_8px_rgba(61,165,255,0.8)]
                    transition-all
                    duration-300
                    ${
                      isSolutions
                        ? "w-6"
                        : "w-0 group-hover:w-6"
                    }
                  `}
                />
              </Link>

              <button
                type="button"
                aria-label="Mostrar soluciones"
                aria-haspopup="true"
                aria-expanded={
                  openMenu === "solutions"
                }
                onClick={() =>
                  setOpenMenu(
                    openMenu === "solutions"
                      ? null
                      : "solutions"
                  )
                }
                className="
                  flex
                  h-[42px]
                  items-center
                  rounded-r-lg
                  px-2
                  text-[#A7B4C8]
                  transition-colors
                  duration-300
                  hover:bg-white/5
                "
              >
                <motion.span
                  animate={{
                    rotate:
                      openMenu === "solutions"
                        ? 180
                        : 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="text-[10px]"
                >
                  ↓
                </motion.span>
              </button>

              <AnimatePresence>
                {openMenu === "solutions" && (
                  <Dropdown
                    items={solutions}
                    onNavigate={() =>
                      setOpenMenu(null)
                    }
                  />
                )}
              </AnimatePresence>
            </div>

            {/* =================================================
                AUDITORÍA
            ================================================= */}

            <Link
              href="/auditoria"
              className={navLinkClass}
            >
              <span>Auditoría</span>

              <span
                className={`
                  absolute
                  bottom-1
                  left-1/2
                  h-[2px]
                  -translate-x-1/2
                  rounded-full
                  bg-[#3DA5FF]
                  shadow-[0_0_8px_rgba(61,165,255,0.8)]
                  transition-all
                  duration-300
                  ${
                    isAuditoria
                      ? "w-6"
                      : "w-0 group-hover:w-6"
                  }
                `}
              />
            </Link>

            {/* =================================================
                PROYECTOS
            ================================================= */}

            <Link
              href="/proyectos"
              className={navLinkClass}
            >
              <span>Proyectos</span>

              <span
                className={`
                  absolute
                  bottom-1
                  left-1/2
                  h-[2px]
                  -translate-x-1/2
                  rounded-full
                  bg-[#3DA5FF]
                  shadow-[0_0_8px_rgba(61,165,255,0.8)]
                  transition-all
                  duration-300
                  ${
                    isProjects
                      ? "w-6"
                      : "w-0 group-hover:w-6"
                  }
                `}
              />
            </Link>

            {/* =================================================
                INSIGHTS
            ================================================= */}

            <Link
              href="/blog"
              className={navLinkClass}
            >
              <span>Insights</span>

              <span
                className={`
                  absolute
                  bottom-1
                  left-1/2
                  h-[2px]
                  -translate-x-1/2
                  rounded-full
                  bg-[#3DA5FF]
                  shadow-[0_0_8px_rgba(61,165,255,0.8)]
                  transition-all
                  duration-300
                  ${
                    isInsights
                      ? "w-6"
                      : "w-0 group-hover:w-6"
                  }
                `}
              />
            </Link>

            {/* =================================================
                VIDEOS
            ================================================= */}

            <Link
              href="/videos"
              className={navLinkClass}
            >
              <span>Videos</span>

              <span
                className={`
                  absolute
                  bottom-1
                  left-1/2
                  h-[2px]
                  -translate-x-1/2
                  rounded-full
                  bg-[#3DA5FF]
                  shadow-[0_0_8px_rgba(61,165,255,0.8)]
                  transition-all
                  duration-300
                  ${
                    isVideos
                      ? "w-6"
                      : "w-0 group-hover:w-6"
                  }
                `}
              />
            </Link>
          </div>

          {/* =================================================
              DERECHA
          ================================================= */}

          <div
            className="
              relative
              z-10
              flex
              items-center
              gap-6
            "
          >
            <Link
              href="/contacto"
              className="
                group
                relative
                hidden
                px-1
                py-3
                text-[15px]
                font-medium
                text-[#A7B4C8]
                transition-colors
                duration-300
                hover:text-[#A7B4C8]
                sm:block
              "
            >
              <span>Contacto</span>

              <span
                className={`
                  absolute
                  bottom-1
                  left-1/2
                  h-[2px]
                  -translate-x-1/2
                  rounded-full
                  bg-[#3DA5FF]
                  shadow-[0_0_8px_rgba(61,165,255,0.8)]
                  transition-all
                  duration-300
                  ${
                    isContacto
                      ? "w-6"
                      : "w-0 group-hover:w-6"
                  }
                `}
              />
            </Link>

            <Link
              href="/contacto"
              className="
                hidden
                rounded-full
                border
                border-[#3DA5FF]/30
                bg-[#0A1F3D]/35
                px-6
                py-3
                text-[14px]
                font-semibold
                text-[#D7E9FF]
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#3DA5FF]/55
                hover:bg-[#0A1F3D]/75
                hover:text-white
                hover:shadow-[0_0_28px_rgba(30,107,255,0.18)]
                md:block
              "
            >
              Hablemos
            </Link>

            {/* =================================================
                MOBILE BUTTON
            ================================================= */}

            <button
              type="button"
              aria-label={
                mobileOpen
                  ? "Cerrar menú"
                  : "Abrir menú"
              }
              aria-expanded={mobileOpen}
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-[#A7B4C8]
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#3DA5FF]/30
                hover:text-white
                md:hidden
              "
            >
              <span className="flex flex-col gap-[5px]">
                <motion.span
                  animate={{
                    rotate: mobileOpen
                      ? 45
                      : 0,
                    y: mobileOpen ? 3 : 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    h-px
                    w-[18px]
                    bg-current
                  "
                />

                <motion.span
                  animate={{
                    opacity:
                      mobileOpen ? 0 : 1,
                  }}
                  transition={{
                    duration: 0.15,
                  }}
                  className="
                    h-px
                    w-[18px]
                    bg-current
                  "
                />

                <motion.span
                  animate={{
                    rotate:
                      mobileOpen ? -45 : 0,
                    y:
                      mobileOpen ? -3 : 0,
                    width:
                      mobileOpen ? 18 : 12,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    h-px
                    w-[12px]
                    bg-current
                  "
                />
              </span>
            </button>
          </div>
        </nav>

        {/* =====================================================
            MENÚ MOBILE
        ===================================================== */}

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -12,
              }}
              transition={{
                duration: 0.22,
                ease: "easeOut",
              }}
              className="
                absolute
                left-0
                right-0
                top-[80px]
                max-h-[calc(100vh-100px)]
                overflow-y-auto
                rounded-2xl
                border
                border-white/10
                bg-[#020617]/96
                p-2
                shadow-[0_25px_80px_rgba(0,0,0,0.55)]
                backdrop-blur-2xl
                md:hidden
              "
            >
              {/* =================================================
                  INICIO
              ================================================= */}

              <Link
                href="/"
                onClick={closeNavigation}
                className={mobileLinkClass(isHome)}
              >
                <span>Inicio</span>

                <span className="text-[#3DA5FF]">
                  →
                </span>
              </Link>

              {/* =================================================
                  SERVICIOS
              ================================================= */}

              <div>
                <div className="flex items-center">
                  <Link
                    href="/servicios"
                    onClick={closeNavigation}
                    className="
                      flex-1
                      rounded-l-xl
                      px-4
                      py-3.5
                      text-[14px]
                      font-medium
                      text-[#A7B4C8]
                      transition-all
                      duration-300
                      hover:bg-white/5
                      hover:text-white
                    "
                  >
                    Servicios
                  </Link>

                  <button
                    type="button"
                    aria-label="Mostrar servicios"
                    aria-expanded={
                      mobileServicesOpen
                    }
                    onClick={() =>
                      setMobileServicesOpen(
                        !mobileServicesOpen
                      )
                    }
                    className="
                      flex
                      items-center
                      justify-center
                      rounded-r-xl
                      px-4
                      py-3.5
                      text-[#A7B4C8]
                      transition-all
                      duration-300
                      hover:bg-white/5
                      hover:text-white
                    "
                  >
                    <motion.span
                      animate={{
                        rotate:
                          mobileServicesOpen
                            ? 180
                            : 0,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="text-[#A7B4C8]"
                    >
                      ↓
                    </motion.span>
                  </button>
                </div>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="ml-3 border-l border-[#3DA5FF]/10 pl-3">
                        {services.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeNavigation}
                            className="
                              flex
                              items-center
                              justify-between
                              rounded-lg
                              px-3
                              py-3
                              text-[13px]
                              font-medium
                              text-[#7F8EA3]
                              transition-colors
                              hover:bg-white/5
                              hover:text-white
                            "
                          >
                            <span>{item.title}</span>

                            <span className="text-[#3DA5FF]">
                              →
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* =================================================
                  SOLUCIONES
              ================================================= */}

              <div>
                <div className="flex items-center">
                  <Link
                    href="/soluciones"
                    onClick={closeNavigation}
                    className="
                      flex-1
                      rounded-l-xl
                      px-4
                      py-3.5
                      text-[14px]
                      font-medium
                      text-[#A7B4C8]
                      transition-all
                      duration-300
                      hover:bg-white/5
                      hover:text-white
                    "
                  >
                    Soluciones
                  </Link>

                  <button
                    type="button"
                    aria-label="Mostrar soluciones"
                    aria-expanded={
                      mobileSolutionsOpen
                    }
                    onClick={() =>
                      setMobileSolutionsOpen(
                        !mobileSolutionsOpen
                      )
                    }
                    className="
                      flex
                      items-center
                      justify-center
                      rounded-r-xl
                      px-4
                      py-3.5
                      text-[#A7B4C8]
                      transition-all
                      duration-300
                      hover:bg-white/5
                      hover:text-white
                    "
                  >
                    <motion.span
                      animate={{
                        rotate:
                          mobileSolutionsOpen
                            ? 180
                            : 0,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="text-[#A7B4C8]"
                    >
                      ↓
                    </motion.span>
                  </button>
                </div>

                <AnimatePresence>
                  {mobileSolutionsOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="ml-3 border-l border-[#3DA5FF]/10 pl-3">
                        {solutions.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeNavigation}
                            className="
                              flex
                              items-center
                              justify-between
                              rounded-lg
                              px-3
                              py-3
                              text-[13px]
                              font-medium
                              text-[#7F8EA3]
                              transition-colors
                              hover:bg-white/5
                              hover:text-white
                            "
                          >
                            <span>{item.title}</span>

                            <span className="text-[#3DA5FF]">
                              →
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* =================================================
                  AUDITORÍA
              ================================================= */}

              <Link
                href="/auditoria"
                onClick={closeNavigation}
                className={mobileLinkClass(
                  isAuditoria
                )}
              >
                <span>Auditoría</span>

                <span className="text-[#3DA5FF]">
                  →
                </span>
              </Link>

              {/* =================================================
                  PROYECTOS
              ================================================= */}

              <Link
                href="/proyectos"
                onClick={closeNavigation}
                className={mobileLinkClass(
                  isProjects
                )}
              >
                <span>Proyectos</span>

                <span className="text-[#3DA5FF]">
                  →
                </span>
              </Link>

              {/* =================================================
                  INSIGHTS
              ================================================= */}

              <Link
                href="/blog"
                onClick={closeNavigation}
                className={mobileLinkClass(
                  isInsights
                )}
              >
                <span>Insights</span>

                <span className="text-[#3DA5FF]">
                  →
                </span>
              </Link>

              {/* =================================================
                  VIDEOS
              ================================================= */}

              <Link
                href="/videos"
                onClick={closeNavigation}
                className={mobileLinkClass(
                  isVideos
                )}
              >
                <span>Videos</span>

                <span className="text-[#3DA5FF]">
                  →
                </span>
              </Link>

              {/* =================================================
                  HABLEMOS
              ================================================= */}

              <div className="mt-2 border-t border-white/10 pt-2">
                <Link
                  href="/contacto"
                  onClick={closeNavigation}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-[#3DA5FF]/15
                    bg-[#0A1F3D]/40
                    px-4
                    py-3.5
                    text-[14px]
                    font-semibold
                    text-[#A7D3FF]
                    transition-all
                    duration-300
                    hover:border-[#3DA5FF]/35
                    hover:bg-[#0A1F3D]/70
                    hover:text-white
                  "
                >
                  <span>Hablemos</span>

                  <span className="text-[#3DA5FF]">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}