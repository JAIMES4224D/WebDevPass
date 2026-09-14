"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code2,
  Globe,
  Layers3,
  LayoutDashboard,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Zap,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import JsonLd from "@/components/seo/JsonLd";

import {
  createWebPageSchema,
  createServiceSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

const solutions = [
  {
    icon: Globe,
    title: "Páginas web corporativas",
    description:
      "Sitios profesionales para empresas que necesitan presencia digital, autoridad y una experiencia moderna.",
  },
  {
    icon: Rocket,
    title: "Landing pages",
    description:
      "Páginas enfocadas en convertir visitas en contactos, oportunidades comerciales y clientes.",
  },
  {
    icon: LayoutDashboard,
    title: "Plataformas web",
    description:
      "Aplicaciones web con funcionalidades personalizadas, usuarios, paneles, procesos y datos.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description:
      "Tiendas online diseñadas para mostrar productos, facilitar la compra y crecer junto al negocio.",
  },
];

const benefits = [
  "Diseño profesional y adaptado a tu marca",
  "Experiencia optimizada para celulares, tablets y escritorio",
  "Arquitectura preparada para crecer",
  "Código moderno, mantenible y escalable",
  "Integración con APIs y servicios externos",
  "Formularios y canales de contacto",
  "Optimización de velocidad y rendimiento",
  "Buenas prácticas de seguridad",
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "SQL",
  "APIs",
];

const process = [
  {
    number: "01",
    title: "Descubrimos",
    description:
      "Entendemos tu negocio, objetivos, usuarios y necesidades antes de comenzar a desarrollar.",
  },
  {
    number: "02",
    title: "Diseñamos",
    description:
      "Definimos la estructura, experiencia y propuesta visual para construir una solución coherente.",
  },
  {
    number: "03",
    title: "Desarrollamos",
    description:
      "Convertimos el diseño en una solución web funcional, responsive y preparada para producción.",
  },
  {
    number: "04",
    title: "Probamos",
    description:
      "Revisamos funcionalidades, navegación, rendimiento y comportamiento en diferentes dispositivos.",
  },
  {
    number: "05",
    title: "Publicamos",
    description:
      "Ponemos tu proyecto en producción y dejamos la solución lista para comenzar a recibir usuarios.",
  },
];

const faqs = [
  {
    question: "¿Pueden desarrollar una página desde cero?",
    answer:
      "Sí. Podemos desarrollar el proyecto desde la definición de la estructura hasta el diseño, programación, pruebas y publicación.",
  },
  {
    question: "¿La página funcionará correctamente en celulares?",
    answer:
      "Sí. El desarrollo contempla una experiencia responsive para celulares, tablets y computadoras.",
  },
  {
    question: "¿Pueden conectar la web con otros sistemas?",
    answer:
      "Sí. Podemos integrar APIs, bases de datos, formularios, servicios externos y diferentes herramientas según las necesidades del proyecto.",
  },
  {
    question: "¿Puedo solicitar una tienda online?",
    answer:
      "Sí. Podemos desarrollar soluciones e-commerce adaptadas al catálogo, procesos y objetivos comerciales de tu negocio.",
  },
  {
    question: "¿Trabajan con proyectos existentes?",
    answer:
      "Sí. También podemos mejorar, modernizar, mantener o ampliar aplicaciones y sitios web que ya se encuentran desarrollados.",
  },
];

export default function DesarrolloWebPage() {
  const webPageSchema = createWebPageSchema({
    name: "Desarrollo Web | DevPass",
    description:
      "Diseño y desarrollo de sitios web, plataformas y tiendas online con tecnología moderna, rendimiento y una experiencia pensada para tus usuarios.",
    path: "/servicios/desarrollo-web",
  });

  const serviceSchema = createServiceSchema({
    name: "Desarrollo Web",
    description:
      "Diseño y desarrollo de sitios web, plataformas y tiendas online que combinan diseño, tecnología, rendimiento y una experiencia pensada para los usuarios.",
    path: "/servicios/desarrollo-web",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Servicios",
      path: "/servicios",
    },
    {
      name: "Desarrollo Web",
      path: "/servicios/desarrollo-web",
    },
  ]);
  return (
    <>
      <JsonLd
        data={[
          webPageSchema,
          serviceSchema,
          breadcrumbSchema,
        ]}
      />

      <Navbar />

      <main className="overflow-hidden bg-[#020617]">
        <section className="relative flex min-h-[calc(100vh-80px)] items-center border-b border-white/[0.05]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(30,107,255,0.16),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(61,165,255,0.07),transparent_28%)]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(167,211,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,211,255,1) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          <div className="devpass-container relative z-10 py-24 lg:py-32">
            <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#3da5ff]" />
                  <span className="text-xs font-semibold tracking-[0.24em] text-[#3da5ff]">
                    DEVPASS · DESARROLLO WEB
                  </span>
                </div>

                <h1 className="max-w-4xl font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  Una web profesional para{" "}
                  <span className="devpass-gradient-text">
                    hacer crecer tu negocio.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-[#94a3b8] sm:text-lg">
                  Diseñamos y desarrollamos sitios web, plataformas y tiendas
                  online que combinan diseño, tecnología, rendimiento y una
                  experiencia pensada para tus usuarios.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contacto"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#1e6bff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(30,107,255,0.2)] transition-all duration-300 hover:bg-[#2874ff] hover:shadow-[0_0_45px_rgba(30,107,255,0.3)]"
                  >
                    Solicitar propuesta
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/proyectos"
                    className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-[#cbd5e1] transition-all duration-300 hover:border-[#3da5ff]/30 hover:bg-[#071a34]"
                  >
                    Ver proyectos
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-[#64748b]">
                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-[#3da5ff]" />
                    Desarrollo a medida
                  </span>
                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-[#3da5ff]" />
                    Responsive
                  </span>
                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-[#3da5ff]" />
                    Tecnología moderna
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="relative hidden lg:block"
              >
                <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e6bff]/10 blur-[100px]" />

                <div className="relative mx-auto max-w-[500px]">
                  <div className="rounded-[28px] border border-[#3da5ff]/15 bg-[#061326]/90 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                    <div className="overflow-hidden rounded-[20px] border border-white/[0.06] bg-[#020b18]">
                      <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-4">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#334155]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#334155]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#334155]" />
                        <div className="ml-4 h-7 flex-1 rounded-md border border-white/[0.05] bg-white/[0.025]" />
                      </div>

                      <div className="p-7">
                        <div className="mb-8 flex items-center justify-between">
                          <div className="h-5 w-24 rounded bg-[#3da5ff]/20" />
                          <div className="h-7 w-20 rounded-md bg-[#1e6bff]" />
                        </div>

                        <div className="grid gap-4">
                          <div className="h-32 rounded-2xl bg-gradient-to-br from-[#0b2b55] to-[#061326]" />
                          <div className="grid grid-cols-3 gap-3">
                            <div className="h-24 rounded-xl border border-white/[0.05] bg-white/[0.025]" />
                            <div className="h-24 rounded-xl border border-white/[0.05] bg-white/[0.025]" />
                            <div className="h-24 rounded-xl border border-white/[0.05] bg-white/[0.025]" />
                          </div>
                        </div>

                        <div className="mt-7 flex items-center justify-between">
                          <div className="space-y-2">
                            <div className="h-2.5 w-32 rounded bg-white/[0.08]" />
                            <div className="h-2.5 w-20 rounded bg-white/[0.04]" />
                          </div>
                          <Code2 size={28} className="text-[#3da5ff]/70" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -left-8 top-20 rounded-xl border border-[#3da5ff]/15 bg-[#071a34]/90 px-4 py-3 shadow-xl backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1e6bff]/15 text-[#3da5ff]">
                        <Zap size={17} />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#64748b]">PERFORMANCE</p>
                        <p className="text-xs font-semibold text-white">
                          Optimizada
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-8 bottom-20 rounded-xl border border-[#3da5ff]/15 bg-[#071a34]/90 px-4 py-3 shadow-xl backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3da5ff]/10 text-[#3da5ff]">
                        <ShieldCheck size={17} />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#64748b]">ARQUITECTURA</p>
                        <p className="text-xs font-semibold text-white">
                          Escalable
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.05] py-24 lg:py-28">
          <div className="devpass-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                ¿QUÉ PODEMOS CONSTRUIR?
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                Más que una página web.
                <br />
                <span className="text-[#64748b]">
                  Una herramienta para tu negocio.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-[#94a3b8]">
                Cada proyecto parte de una necesidad diferente. Por eso no
                trabajamos con una solución genérica: construimos la
                experiencia y las funcionalidades que realmente necesita tu
                negocio.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {solutions.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="group rounded-2xl border border-white/[0.06] bg-[#020b18] p-7 transition-all duration-300 hover:border-[#3da5ff]/20 hover:bg-[#071a34]/60"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                        <Icon size={19} />
                      </div>

                      <span className="text-[10px] font-semibold tracking-[0.18em] text-[#334155]">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-7 font-poppins text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#64748b] transition-colors group-hover:text-[#94a3b8]">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.05] bg-[#030b18] py-24 lg:py-28">
          <div className="devpass-container">
            <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                  LO QUE RECIBES
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                  Tecnología pensada para funcionar.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#94a3b8]">
                  El objetivo no es solamente que tu web se vea bien. Queremos
                  que sea rápida, clara, confiable y capaz de acompañar el
                  crecimiento de tu proyecto.
                </p>

                <Link
                  href="/contacto"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#3da5ff] transition-colors hover:text-white"
                >
                  Cuéntanos qué necesitas
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid gap-3 sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-[#020b18] p-4"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e6bff]/15 text-[#3da5ff]">
                      <Check size={12} />
                    </div>

                    <span className="text-sm leading-6 text-[#94a3b8]">
                      {benefit}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.05] py-24 lg:py-28">
          <div className="devpass-container">
            <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                    TECNOLOGÍA
                  </p>

                  <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                    Construido con herramientas modernas.
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-[#94a3b8]">
                    Utilizamos tecnologías actuales para desarrollar productos
                    digitales rápidos, mantenibles y preparados para
                    evolucionar.
                  </p>
                </motion.div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/[0.07] bg-[#071a34]/50 px-4 py-2.5 text-sm font-medium text-[#a7b4c8]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  {
                    icon: MonitorSmartphone,
                    title: "Responsive",
                    text: "Una experiencia consistente en cualquier pantalla.",
                  },
                  {
                    icon: Zap,
                    title: "Rendimiento",
                    text: "Priorizamos velocidad y una navegación fluida.",
                  },
                  {
                    icon: Layers3,
                    title: "Escalabilidad",
                    text: "Arquitectura preparada para nuevas funcionalidades.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Buenas prácticas",
                    text: "Código organizado y desarrollo orientado a calidad.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="flex gap-4 rounded-xl border border-white/[0.05] bg-[#020b18] p-5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1e6bff]/10 text-[#3da5ff]">
                        <Icon size={18} />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs leading-6 text-[#64748b]">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.05] bg-[#030b18] py-24 lg:py-28">
          <div className="devpass-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                NUESTRO PROCESO
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                Del concepto a producción.
              </h2>
            </motion.div>

            <div className="mt-14">
              {process.map((item, index) => (
                <div key={item.number} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                    }}
                    className="relative z-10 grid gap-5 rounded-2xl border border-white/[0.06] bg-[#020b18] p-6 md:grid-cols-[60px_190px_1fr] md:items-center md:gap-7"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3da5ff]/20 bg-[#071a34] text-xs font-bold text-[#3da5ff]">
                      {item.number}
                    </div>

                    <h3 className="font-poppins text-base font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="max-w-2xl text-sm leading-7 text-[#64748b]">
                      {item.description}
                    </p>
                  </motion.div>

                  {index < process.length - 1 && (
                    <div className="relative z-0 hidden h-4 md:block">
                      <div className="absolute left-[22px] top-0 h-full w-px bg-gradient-to-b from-[#1e6bff]/45 to-[#3da5ff]/10" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.05] py-24 lg:py-28">
          <div className="devpass-container">
            <div className="mx-auto max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <p className="text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                  PREGUNTAS FRECUENTES
                </p>

                <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                  Antes de comenzar.
                </h2>
              </motion.div>

              <div className="mt-12 space-y-3">
                {faqs.map((faq, index) => (
                  <motion.details
                    key={faq.question}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.04,
                    }}
                    className="group rounded-xl border border-white/[0.06] bg-[#020b18] px-6"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
                      {faq.question}

                      <span className="text-xl font-light text-[#3da5ff] transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <div className="pb-5 pr-8 text-sm leading-7 text-[#64748b]">
                      {faq.answer}
                    </div>
                  </motion.details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-28 lg:py-36">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,107,255,0.16),transparent_38%)]" />

          <div className="devpass-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#3da5ff]/20 bg-[#071a34] text-[#3da5ff]">
                <Smartphone size={23} />
              </div>

              <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-[#3da5ff]">
                ¿TIENES UN PROYECTO?
              </p>

              <h2 className="mt-4 font-poppins text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                Hagamos que tu idea
                <span className="devpass-gradient-text"> cobre vida.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#94a3b8]">
                Cuéntanos qué quieres construir. Analizaremos tu necesidad y
                te ayudaremos a definir la mejor solución para tu proyecto.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contacto"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#1e6bff] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(30,107,255,0.2)] transition-all duration-300 hover:bg-[#2874ff] hover:shadow-[0_0_50px_rgba(30,107,255,0.3)]"
                >
                  Solicitar propuesta
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/proyectos"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.025] px-7 py-3.5 text-sm font-medium text-[#cbd5e1] transition-all duration-300 hover:border-[#3da5ff]/30 hover:bg-[#071a34]"
                >
                  Explorar proyectos
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}