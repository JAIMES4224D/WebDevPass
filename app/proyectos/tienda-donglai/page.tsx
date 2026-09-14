"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createBreadcrumbSchema,
  createSoftwareApplicationSchema,
} from "@/lib/seo/schema";

const GITHUB = "https://github.com/JAIMES4224D/Tienda_Web";

const IMAGES = {
  inicio: "/images/proyectos/tienda-donglai/WP_INICIO.jpeg",
  tienda: "/images/proyectos/tienda-donglai/WP_TIENDA.jpeg",
  detalle: "/images/proyectos/tienda-donglai/tiendadetalles.jpeg",
  contacto: "/images/proyectos/tienda-donglai/WP_CONTACTO.jpeg",
  contacto1: "/images/proyectos/tienda-donglai/WP_CONTACTO1.jpeg",

  login: "/images/proyectos/tienda-donglai/LOGIN.jpeg",
  loginR: "/images/proyectos/tienda-donglai/LOGINR.jpeg",
  registro: "/images/proyectos/tienda-donglai/WP_REGISTRO.jpeg",
  logout: "/images/proyectos/tienda-donglai/cerrandosesion.jpeg",

  menuAdmin:
    "/images/proyectos/tienda-donglai/menuadministracion.jpeg",
  productos: "/images/proyectos/tienda-donglai/productos.jpeg",
  categorias: "/images/proyectos/tienda-donglai/categorias.jpeg",
  usuarios:
    "/images/proyectos/tienda-donglai/gestionarusuarios.jpeg",

  proveedores:
    "/images/proyectos/tienda-donglai/proveedores.jpeg",
  grabarProveedores:
    "/images/proyectos/tienda-donglai/grabarproveedores.jpeg",
  agregarProductos:
    "/images/proyectos/tienda-donglai/agregarproductos.jpeg",
  insertarUsuario:
    "/images/proyectos/tienda-donglai/insertarusuario.jpeg",

  mensajes: "/images/proyectos/tienda-donglai/mensajesweb.jpeg",
  tiendaMayus: "/images/proyectos/tienda-donglai/TEINDA.jpeg",

  wpProveedores:
    "/images/proyectos/tienda-donglai/WP_PROVEEDORES.jpeg",
};

const clientFeatures = [
  {
    number: "01",
    title: "Catálogo dinámico",
    description:
      "Productos organizados por categorías con navegación y búsqueda orientadas a una experiencia de compra intuitiva.",
  },
  {
    number: "02",
    title: "Detalle de producto",
    description:
      "Información detallada de los productos para facilitar la evaluación antes de realizar una compra.",
  },
  {
    number: "03",
    title: "Responsive",
    description:
      "Interfaz adaptada a diferentes tamaños de pantalla mediante Bootstrap y CSS.",
  },
  {
    number: "04",
    title: "WhatsApp",
    description:
      "Integración orientada a facilitar la comunicación directa entre clientes y el negocio.",
  },
  {
    number: "05",
    title: "Google Maps",
    description:
      "Integración de ubicación para facilitar el acceso a las instalaciones físicas.",
  },
  {
    number: "06",
    title: "Búsqueda AJAX",
    description:
      "Consultas dinámicas para mejorar la interacción y reducir recargas innecesarias.",
  },
];

const adminFeatures = [
  {
    number: "01",
    title: "Gestión de productos",
    description:
      "Administración del catálogo, información de productos y control de inventario.",
  },
  {
    number: "02",
    title: "Usuarios y roles",
    description:
      "Sistema de usuarios con permisos y acceso diferenciado según el rol.",
  },
  {
    number: "03",
    title: "Proveedores",
    description:
      "Gestión centralizada de proveedores y operaciones relacionadas con la cadena de suministro.",
  },
  {
    number: "04",
    title: "Dashboard",
    description:
      "Panel administrativo para consultar información y gestionar las principales operaciones.",
  },
  {
    number: "05",
    title: "CRUD empresarial",
    description:
      "Operaciones de creación, consulta, actualización y eliminación sobre las entidades del sistema.",
  },
  {
    number: "06",
    title: "Mensajería",
    description:
      "Gestión de mensajes y comunicación desde la plataforma.",
  },
];

const technologies = [
  {
    category: "FRONTEND",
    name: "HTML5",
    description: "Estructura semántica de las interfaces.",
  },
  {
    category: "STYLES",
    name: "CSS3",
    description: "Diseño, responsive y animaciones.",
  },
  {
    category: "FRAMEWORK",
    name: "Bootstrap 5.3",
    description: "Componentes y sistema responsive.",
  },
  {
    category: "JAVASCRIPT",
    name: "JavaScript ES6+",
    description: "Interactividad y comportamiento del cliente.",
  },
  {
    category: "BACKEND",
    name: "Java EE",
    description: "Base tecnológica para la lógica empresarial.",
  },
  {
    category: "SERVER",
    name: "Apache Tomcat",
    description: "Servidor de aplicaciones para el despliegue.",
  },
  {
    category: "VIEWS",
    name: "JSP / JSTL",
    description: "Generación de vistas y presentación dinámica.",
  },
  {
    category: "DATABASE",
    name: "MySQL 8",
    description: "Persistencia de información empresarial.",
  },
  {
    category: "SECURITY",
    name: "JWT / RBAC",
    description: "Autenticación y control de acceso.",
  },
  {
    category: "PERSISTENCE",
    name: "JDBC",
    description: "Conectividad y acceso a la base de datos.",
  },
  {
    category: "TOOLS",
    name: "Git / GitHub",
    description: "Control de versiones y repositorio.",
  },
  {
    category: "DATABASE",
    name: "Stored Procedures",
    description: "Lógica empresarial implementada en MySQL.",
  },
];

const securityItems = [
  "Autenticación mediante sesiones HTTP y tokens",
  "Control de acceso basado en roles",
  "Validación en cliente y servidor",
  "Prepared Statements contra SQL Injection",
  "HTTPS para comunicación segura",
  "Hashing de contraseñas",
];

const architectureLayers = [
  {
    number: "01",
    title: "Cliente",
    description:
      "Interfaz web responsive utilizada por los usuarios para navegar, consultar productos y comunicarse con el negocio.",
  },
  {
    number: "02",
    title: "Controladores",
    description:
      "Servlets y controladores encargados de recibir solicitudes y coordinar la lógica de aplicación.",
  },
  {
    number: "03",
    title: "Modelo",
    description:
      "Entidades, DTOs y DAOs que representan y gestionan los datos del sistema.",
  },
  {
    number: "04",
    title: "Persistencia",
    description:
      "JDBC, MySQL y procedimientos almacenados para la gestión de información.",
  },
];

const gallery = [
  {
    image: IMAGES.inicio,
    title: "Landing principal",
    category: "CLIENTE",
  },
  {
    image: IMAGES.tienda,
    title: "Catálogo de productos",
    category: "CLIENTE",
  },
  {
    image: IMAGES.detalle,
    title: "Detalle de producto",
    category: "CLIENTE",
  },
  {
    image: IMAGES.contacto,
    title: "Contacto",
    category: "CLIENTE",
  },
  {
    image: IMAGES.login,
    title: "Autenticación",
    category: "SEGURIDAD",
  },
  {
    image: IMAGES.registro,
    title: "Registro de usuario",
    category: "SEGURIDAD",
  },
  {
    image: IMAGES.logout,
    title: "Cierre de sesión",
    category: "SEGURIDAD",
  },
  {
    image: IMAGES.menuAdmin,
    title: "Panel administrativo",
    category: "ADMIN",
  },
  {
    image: IMAGES.productos,
    title: "Gestión de productos",
    category: "ADMIN",
  },
  {
    image: IMAGES.categorias,
    title: "Gestión de categorías",
    category: "ADMIN",
  },
  {
    image: IMAGES.usuarios,
    title: "Gestión de usuarios",
    category: "ADMIN",
  },
  {
    image: IMAGES.proveedores,
    title: "Gestión de proveedores",
    category: "ADMIN",
  },
  {
    image: IMAGES.grabarProveedores,
    title: "Registro de proveedores",
    category: "ADMIN",
  },
  {
    image: IMAGES.agregarProductos,
    title: "Alta de productos",
    category: "ADMIN",
  },
  {
    image: IMAGES.insertarUsuario,
    title: "Registro administrativo",
    category: "ADMIN",
  },
  {
    image: IMAGES.mensajes,
    title: "Mensajería web",
    category: "ADMIN",
  },
];

const stats = [
  {
    value: "MVC",
    label: "Arquitectura",
  },
  {
    value: "12+",
    label: "Tecnologías",
  },
  {
    value: "RBAC",
    label: "Control de acceso",
  },
  {
    value: "MySQL",
    label: "Persistencia",
  },
];

export default function TiendaDonglaiPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  const faq = [
    {
      question: "¿Qué tipo de aplicación es DonGlai LED?",
      answer:
        "Es una plataforma integral de gestión comercial y tienda online que combina una experiencia e-commerce para clientes con un backend administrativo para la gestión empresarial.",
    },
    {
      question: "¿Qué arquitectura utiliza?",
      answer:
        "El proyecto utiliza el patrón Modelo-Vista-Controlador (MVC), separando modelo, controladores y vistas.",
    },
    {
      question: "¿Qué tecnologías utiliza el backend?",
      answer:
        "La documentación del proyecto especifica Java EE, Servlets, JSP, JSTL y Apache Tomcat.",
    },
    {
      question: "¿Qué base de datos utiliza?",
      answer:
        "La plataforma utiliza MySQL 8 como sistema de persistencia, junto con JDBC y procedimientos almacenados.",
    },
    {
      question: "¿Cuenta con control de usuarios?",
      answer:
        "Sí. El sistema contempla autenticación, roles y permisos diferenciados para controlar el acceso a las funcionalidades administrativas.",
    },
  ];

  const webPageSchema = createWebPageSchema({
    name: "Tienda Web DonGlai LED | E-Commerce con Java EE y MySQL",
    description:
      "Plataforma e-commerce empresarial desarrollada con Java EE, JSP, JSTL, MySQL 8, MVC y Apache Tomcat, con gestión de productos, usuarios, proveedores, inventario y seguridad.",
    path: "/proyectos/tienda-donglai",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Proyectos", path: "/proyectos" },
    {
      name: "Tienda Web DonGlai LED",
      path: "/proyectos/tienda-donglai",
    },
  ]);

  const softwareSchema = createSoftwareApplicationSchema({
    name: "Tienda Web DonGlai LED",
    description:
      "Plataforma e-commerce empresarial desarrollada con Java EE, JSP, JSTL, MySQL 8, MVC y Apache Tomcat, con catálogo de productos, gestión de usuarios, proveedores, inventario, autenticación y control de acceso.",
    path: "/proyectos/tienda-donglai",
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
              left-[-180px]
              top-[-260px]
              h-[700px]
              w-[700px]
              rounded-full
              bg-[#1E6BFF]/[0.045]
              blur-[180px]
            "
          />

          <div
            className="
              absolute
              right-[-250px]
              top-[30%]
              h-[700px]
              w-[700px]
              rounded-full
              bg-[#3DA5FF]/[0.025]
              blur-[180px]
            "
          />

          <div
            className="absolute inset-0 opacity-[0.02]"
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
                  transition
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
                  JAVA EE · E-COMMERCE · MVC
                </span>
              </div>

              <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">

                {/* COPY */}

                <div>
                  <h1
                    className="
                      font-poppins
                      text-4xl
                      font-semibold
                      leading-[1.03]
                      tracking-[-0.05em]
                      sm:text-5xl
                      lg:text-[62px]
                    "
                  >
                    DonGlai LED
                    <br />

                    <span className="devpass-gradient-text">
                      Enterprise.
                    </span>
                  </h1>

                  <p
                    className="
                      mt-7
                      max-w-xl
                      text-[15px]
                      leading-8
                      text-[#7F8EA3]
                      sm:text-base
                    "
                  >
                    Plataforma integral de gestión comercial y tienda online
                    desarrollada para digitalizar el ciclo de ventas de DonGlai
                    LED, integrando experiencia e-commerce, administración,
                    seguridad y persistencia empresarial.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {[
                      "Java EE",
                      "JSP",
                      "MySQL",
                      "MVC",
                      "Tomcat",
                      "Bootstrap",
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
                        transition
                        hover:-translate-y-0.5
                        hover:bg-[#2873ff]
                      "
                    >
                      Ver proyecto
                      <span>↗</span>
                    </a>

                    <a
                      href="#galeria"
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
                        transition
                        hover:border-[#3DA5FF]/30
                        hover:bg-[#0A1F3D]
                      "
                    >
                      Ver interfaces
                      <span>↓</span>
                    </a>
                  </div>
                </div>

                {/* HERO IMAGE */}

                <motion.button
                  type="button"
                  onClick={() => setSelectedImage(IMAGES.inicio)}
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
                    group
                    relative
                    block
                    w-full
                    overflow-hidden
                    rounded-3xl
                    border
                    border-[#3DA5FF]/15
                    bg-[#050D1A]
                    p-3
                    text-left
                    shadow-[0_30px_90px_rgba(0,0,0,0.5)]
                  "
                  aria-label="Ampliar página principal"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image
                      src={IMAGES.inicio}
                      alt="Página principal de DonGlai LED"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="
                        object-cover
                        object-top
                        transition
                        duration-700
                        group-hover:scale-[1.02]
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#020617]/70
                        via-transparent
                        to-transparent
                      "
                    />

                    <div
                      className="
                        absolute
                        bottom-5
                        left-5
                        rounded-xl
                        border
                        border-white/10
                        bg-[#020617]/75
                        px-4
                        py-3
                        backdrop-blur-xl
                      "
                    >
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#A7D3FF]">
                        DONG LAI LED
                      </span>

                      <p className="mt-1 text-[10px] text-[#718096]">
                        Click para ampliar
                      </p>
                    </div>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </section>

          {/* =================================================
              STATS
          ================================================== */}

          <section className="border-y border-white/[0.06]">
            <div className="devpass-container grid grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    p-7
                    sm:p-9
                    ${index !== stats.length - 1 ? "border-r border-white/[0.06]" : ""}
                  `}
                >
                  <p className="font-poppins text-2xl font-semibold text-[#A7D3FF] sm:text-3xl">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-[#475569]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* =================================================
              OVERVIEW
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
                    01 · VISIÓN GENERAL
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
                    Una tienda online construida como sistema empresarial.
                  </h2>
                </div>

                <div className="space-y-6 text-[15px] leading-8 text-[#94A3B8]">
                  <p>
                    Enterprise E-Commerce Solution fue planteado para
                    digitalizar completamente el ciclo comercial de DonGlai
                    LED.
                  </p>

                  <p>
                    La plataforma combina un frontend responsive para los
                    clientes con un backend administrativo orientado a la
                    gestión integral del negocio.
                  </p>

                  <p>
                    El resultado es una solución que conecta catálogo,
                    usuarios, proveedores, inventario, seguridad y
                    persistencia dentro de una arquitectura organizada.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              CLIENT
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
                  02 · EXPERIENCIA E-COMMERCE
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
                  La experiencia comienza en el cliente.
                </h2>

                <p className="mt-5 leading-8 text-[#94A3B8]">
                  El módulo público está diseñado para facilitar la navegación,
                  consulta de productos y comunicación con el negocio.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {clientFeatures.map((feature, index) => (
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
                      margin: "-60px",
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.04,
                    }}
                    className="
                      group
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-[#050D1A]
                      p-7
                      transition
                      hover:-translate-y-1
                      hover:border-[#3DA5FF]/20
                    "
                  >
                    <span className="font-mono text-xs text-[#3DA5FF]">
                      {feature.number}
                    </span>

                    <h3 className="mt-8 font-poppins text-lg font-semibold">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#718096]">
                      {feature.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* =================================================
              ARCHITECTURE
          ================================================== */}

          <section className="border-b border-white/[0.06] py-24">
            <div className="devpass-container">

              <div className="mb-14">
                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#3DA5FF]
                  "
                >
                  03 · ARQUITECTURA
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
                  MVC para separar responsabilidades.
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-[#94A3B8]">
                  La solución sigue el patrón Modelo-Vista-Controlador con una
                  separación clara entre datos, lógica de aplicación y
                  presentación.
                </p>
              </div>

              <div className="grid gap-4 lg:grid-cols-4">
                {architectureLayers.map((layer, index) => (
                  <motion.div
                    key={layer.number}
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
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    className="
                      relative
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-[#050D1A]
                      p-6
                    "
                  >
                    <span className="font-mono text-[10px] text-[#3DA5FF]">
                      {layer.number}
                    </span>

                    <h3 className="mt-6 font-poppins text-lg font-semibold">
                      {layer.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-[#64748B]">
                      {layer.description}
                    </p>

                    {index < architectureLayers.length - 1 && (
                      <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-[#3DA5FF]/20 lg:block" />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* CODE ARCHITECTURE */}

              <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#050D1A]">
                <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-4">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#3DA5FF]/70" />
                    <span className="h-2 w-2 rounded-full bg-[#3DA5FF]/35" />
                    <span className="h-2 w-2 rounded-full bg-[#3DA5FF]/15" />
                  </div>

                  <span className="font-mono text-[9px] text-[#64748B]">
                    src/
                  </span>
                </div>

                <div className="overflow-x-auto p-7">
                  <pre className="font-mono text-[11px] leading-7 text-[#718096]">
{`src/
├── Model/
│   ├── DAO/
│   ├── DTO/
│   └── Entities/
│
├── Controller/
│   ├── AdminController
│   └── AuthController
│
└── Web/
    ├── css/
    ├── js/
    └── img/`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              ADMIN
          ================================================== */}

          <section className="border-b border-white/[0.06] py-24">
            <div className="devpass-container">

              <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

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
                    04 · ADMINISTRACIÓN
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
                    Un centro de control para el negocio.
                  </h2>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    El backend administrativo concentra las operaciones
                    necesarias para gestionar productos, usuarios,
                    proveedores y demás entidades del sistema.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {adminFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.number}
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
                        delay: index * 0.04,
                      }}
                      className="
                        rounded-2xl
                        border
                        border-white/[0.07]
                        bg-[#050D1A]
                        p-6
                        transition
                        hover:border-[#3DA5FF]/20
                      "
                    >
                      <span className="font-mono text-[9px] text-[#3DA5FF]">
                        {feature.number}
                      </span>

                      <h3 className="mt-5 font-poppins text-base font-semibold">
                        {feature.title}
                      </h3>

                      <p className="mt-3 text-xs leading-6 text-[#64748B]">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              SECURITY
          ================================================== */}

          <section className="border-b border-white/[0.06] py-24">
            <div className="devpass-container">

              <div className="mb-14">
                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#3DA5FF]
                  "
                >
                  05 · SEGURIDAD
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
                  Seguridad integrada en la arquitectura.
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {securityItems.map((item, index) => (
                  <motion.div
                    key={item}
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
                    }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.04,
                    }}
                    className="
                      flex
                      items-start
                      gap-4
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-[#050D1A]
                      p-6
                    "
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1E6BFF]/10 text-[10px] text-[#3DA5FF]">
                      ✓
                    </span>

                    <p className="text-sm leading-6 text-[#94A3B8]">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* =================================================
              GALLERY
          ================================================== */}

          <section
            id="galeria"
            className="border-b border-white/[0.06] py-24"
          >
            <div className="devpass-container">

              <div className="mb-14">
                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#3DA5FF]
                  "
                >
                  06 · INTERFACES
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
                  El sistema, por dentro.
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-[#94A3B8]">
                  Capturas reales de los diferentes módulos desarrollados para
                  la plataforma.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {gallery.map((item, index) => (
                  <motion.button
                    key={item.image}
                    type="button"
                    onClick={() => setSelectedImage(item.image)}
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
                      margin: "-50px",
                    }}
                    transition={{
                      duration: 0.4,
                      delay: (index % 3) * 0.05,
                    }}
                    whileHover={{
                      y: -4,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-[#050D1A]
                      text-left
                    "
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="
                          object-cover
                          object-top
                          transition
                          duration-700
                          group-hover:scale-[1.035]
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#020617]/95
                          via-[#020617]/10
                          to-transparent
                        "
                      />

                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#3DA5FF]">
                          {item.category}
                        </span>

                        <p className="mt-1 text-sm font-medium text-white">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </section>

          {/* =================================================
              TECHNOLOGIES
          ================================================== */}

          <section className="border-b border-white/[0.06] py-24">
            <div className="devpass-container">

              <div className="mb-14">
                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#3DA5FF]
                  "
                >
                  07 · STACK TECNOLÓGICO
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
                      delay: index * 0.035,
                    }}
                    className="
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-[#050D1A]
                      p-6
                      transition
                      hover:border-[#3DA5FF]/20
                    "
                  >
                    <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#3DA5FF]">
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
              DATABASE / DEPLOYMENT
          ================================================== */}

          <section className="border-b border-white/[0.06] py-24">
            <div className="devpass-container">

              <div className="grid gap-14 lg:grid-cols-2">

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
                    08 · PERSISTENCIA
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
                    Datos y lógica empresarial.
                  </h2>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    MySQL 8 funciona como capa de persistencia, complementado
                    con JDBC, transacciones ACID y procedimientos almacenados
                    para determinadas operaciones empresariales.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {[
                      "MySQL 8",
                      "JDBC",
                      "ACID",
                      "Stored Procedures",
                    ].map((item) => (
                      <div
                        key={item}
                        className="
                          rounded-xl
                          border
                          border-white/[0.07]
                          bg-[#050D1A]
                          px-4
                          py-4
                          font-mono
                          text-[10px]
                          text-[#A7D3FF]
                        "
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

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
                    09 · DESPLIEGUE
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
                    Preparado para Tomcat.
                  </h2>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    La documentación contempla Java JDK, Apache Tomcat,
                    MySQL y Maven como parte del proceso de compilación,
                    empaquetado y despliegue.
                  </p>

                  <div className="mt-8 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#050D1A]">
                    <div className="border-b border-white/[0.06] px-5 py-4">
                      <span className="font-mono text-[9px] text-[#64748B]">
                        deployment
                      </span>
                    </div>

                    <pre className="overflow-x-auto p-6 font-mono text-[10px] leading-7 text-[#718096]">
{`mvn clean compile
mvn package

# WAR
target/tienda_web.war

# Apache Tomcat
$CATALINA_HOME/webapps/`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              FAQ
          ================================================== */}

          <section className="border-b border-white/[0.06] py-24">
            <div className="devpass-container">

              <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

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
                    10 · FAQ
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
                    Preguntas frecuentes.
                  </h2>
                </div>

                <div className="space-y-3">
                  {faq.map((item, index) => {
                    const isOpen = openFaq === index;

                    return (
                      <div
                        key={item.question}
                        className="
                          overflow-hidden
                          rounded-2xl
                          border
                          border-white/[0.07]
                          bg-[#050D1A]
                        "
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenFaq(isOpen ? null : index)
                          }
                          aria-expanded={isOpen}
                          className="
                            flex
                            w-full
                            items-center
                            justify-between
                            gap-6
                            px-6
                            py-5
                            text-left
                          "
                        >
                          <span className="text-sm font-medium text-[#CBD5E1]">
                            {item.question}
                          </span>

                          <span
                            className={`
                              text-xl
                              text-[#3DA5FF]
                              transition-transform
                              duration-300
                              ${isOpen ? "rotate-45" : ""}
                            `}
                          >
                            +
                          </span>
                        </button>

                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-sm leading-7 text-[#64748B]">
                            {item.answer}
                          </p>
                        </motion.div>
                      </div>
                    );
                  })}
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
                    11 · RESULTADO
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
                    Una solución e-commerce pensada como producto empresarial.
                  </h2>
                </div>

                <div>
                  <p className="text-lg leading-9 text-[#CBD5E1]">
                    DonGlai LED integra la experiencia de compra con las
                    herramientas necesarias para administrar la operación
                    comercial desde una misma plataforma.
                  </p>

                  <p className="mt-6 text-[15px] leading-8 text-[#94A3B8]">
                    El proyecto reúne arquitectura MVC, Java EE, MySQL,
                    seguridad, gestión de usuarios, inventario, proveedores y
                    una interfaz responsive orientada al cliente final.
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
                      Enterprise E-Commerce Solution
                    </span>

                    <p className="mt-3 text-sm leading-7 text-[#718096]">
                      E-Commerce · Administración · Seguridad · Datos
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
                    DONG LAI LED
                  </span>

                  <h2 className="mt-3 font-poppins text-2xl font-semibold">
                    Explora el proyecto completo.
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#64748B]">
                    Revisa el código fuente, arquitectura y documentación del
                    sistema en GitHub.
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

      {/* =====================================================
          LIGHTBOX
      ====================================================== */}

      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-[#020617]/95
            p-4
            backdrop-blur-xl
            sm:p-8
          "
          onClick={() => setSelectedImage(null)}
        >

          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar imagen"
            className="
              absolute
              right-5
              top-5
              z-20
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-[#050D1A]
              text-xl
              text-[#A7B4C8]
              transition
              hover:border-[#3DA5FF]/30
              hover:text-white
            "
          >
            ×
          </button>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              relative
              h-[90vh]
              w-full
              max-w-[1500px]
              overflow-hidden
              rounded-2xl
              border
              border-[#3DA5FF]/15
              bg-[#050D1A]
              shadow-[0_30px_100px_rgba(0,0,0,0.7)]
            "
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Vista ampliada del proyecto DonGlai LED"
              fill
              sizes="90vw"
              className="object-contain"
            />
          </motion.div>
        </div>
      )}

      <Footer />
    </>
  );
}