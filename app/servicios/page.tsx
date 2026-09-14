"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Braces,
  Check,
  ChevronRight,
  Code2,
  Database,
  Globe2,
  Layers3,
  Settings2,
  Workflow,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import JsonLd from "@/components/seo/JsonLd";

import {
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Desarrollo Web",
    description:
      "Diseño y desarrollo de sitios web modernos, rápidos y adaptados a las necesidades de cada proyecto.",
    features: [
      "Sitios corporativos",
      "Landing pages",
      "Experiencias responsive",
      "Optimización y rendimiento",
    ],
    href: "/servicios/desarrollo-web",
  },
  {
    number: "02",
    icon: Code2,
    title: "Software a Medida",
    description:
      "Construcción de aplicaciones y sistemas personalizados para resolver procesos y necesidades específicas.",
    features: [
      "Aplicaciones web",
      "Sistemas empresariales",
      "Paneles administrativos",
      "Arquitecturas personalizadas",
    ],
    href: "/servicios/software",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Automatización",
    description:
      "Transformación de procesos manuales en flujos automatizados para mejorar productividad, precisión y eficiencia.",
    features: [
      "Automatización de procesos",
      "Integración de herramientas",
      "Flujos de trabajo",
      "Procesamiento de información",
    ],
    href: "/servicios/automatizacion",
  },
];

const capabilities = [
  {
    icon: Braces,
    title: "Desarrollo",
    text: "Frontend, backend y aplicaciones completas.",
  },
  {
    icon: Database,
    title: "Datos",
    text: "Bases de datos, procesamiento e integración.",
  },
  {
    icon: Bot,
    title: "Inteligencia",
    text: "IA y automatización aplicada a procesos reales.",
  },
  {
    icon: Settings2,
    title: "Integración",
    text: "Conexión entre sistemas, APIs y servicios.",
  },
];

const process = [
  {
    number: "01",
    title: "Entender",
    text: "Conocer el problema, los objetivos y el contexto del proyecto.",
  },
  {
    number: "02",
    title: "Diseñar",
    text: "Definir una solución, arquitectura y experiencia adecuadas.",
  },
  {
    number: "03",
    title: "Construir",
    text: "Desarrollar la solución con tecnologías apropiadas.",
  },
  {
    number: "04",
    title: "Evolucionar",
    text: "Medir, mejorar y preparar el producto para crecer.",
  },
];

export default function ServiciosPage() {
  const webPageSchema = createWebPageSchema({
    name: "Servicios | DevPass",
    description:
      "Servicios de desarrollo web, software a medida y automatización para construir soluciones digitales reales.",
    path: "/servicios",
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
  ]);

  return (
    <>
      <JsonLd
        data={[webPageSchema, breadcrumbSchema]}
      />

    <main className="overflow-hidden bg-[#020617] text-[#f8faff]">
        <Navbar />
      {/* HERO */}
      <section className="relative border-b border-white/[0.05]">
        <div className="absolute inset-0">
          <div className="absolute left-[-12%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[#1e6bff]/10 blur-[150px]" />
          <div className="absolute bottom-[-15%] right-[-8%] h-[480px] w-[480px] rounded-full bg-[#3da5ff]/8 blur-[150px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(167,211,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,211,255,1) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
        </div>

        <div className="devpass-container relative z-10 py-28 lg:py-36">
          <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#3da5ff]" />
                <span className="text-[11px] font-semibold tracking-[0.28em] text-[#3da5ff]">
                  DEVPASS · SERVICIOS
                </span>
              </div>

              <h1 className="max-w-4xl font-poppins text-5xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Tecnología para
                <br />
                <span className="devpass-gradient-text">
                  proyectos reales.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-[#94a3b8] sm:text-lg">
                Desarrollo soluciones digitales pensadas para resolver
                problemas concretos, mejorar procesos y construir productos
                que puedan evolucionar con el tiempo.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#servicios"
                  className="devpass-gradient group inline-flex items-center gap-3 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Explorar servicios
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-[#cbd5e1] transition-all duration-300 hover:border-[#3da5ff]/25 hover:bg-[#071a34]"
                >
                  Cuéntame tu proyecto
                </Link>
              </div>
            </motion.div>

            {/* HERO VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="relative rounded-3xl border border-white/[0.07] bg-[#030c1c]/90 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-7">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.18em] text-[#475569]">
                      DEVPASS / SERVICES
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#cbd5e1]">
                      Digital Solutions
                    </p>
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#3da5ff]/15 bg-[#071a34]">
                    <Layers3 size={15} className="text-[#3da5ff]" />
                  </div>
                </div>

                <div className="space-y-3 py-6">
                  {services.map((service, index) => {
                    const Icon = service.icon;

                    return (
                      <motion.div
                        key={service.number}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.45,
                          delay: 0.35 + index * 0.1,
                        }}
                        className="flex items-center gap-4 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#071a34] text-[#3da5ff]">
                          <Icon size={16} strokeWidth={1.6} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-[#e2e8f0]">
                            {service.title}
                          </p>
                          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/[0.05]">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${68 + index * 12}%` }}
                              transition={{
                                duration: 0.9,
                                delay: 0.7 + index * 0.1,
                              }}
                              className="h-full rounded-full bg-[#3da5ff]/60"
                            />
                          </div>
                        </div>

                        <span className="font-mono text-[9px] text-[#334155]">
                          {service.number}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="border-t border-white/[0.06] pt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.16em] text-[#475569]">
                      BUILD · INTEGRATE · EVOLVE
                    </span>

                    <span className="flex items-center gap-2 text-[10px] text-[#3da5ff]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#3da5ff] shadow-[0_0_10px_rgba(61,165,255,0.8)]" />
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="border-b border-white/[0.05] py-28">
        <div className="devpass-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-2xl"
          >
            <p className="text-[11px] font-semibold tracking-[0.25em] text-[#3da5ff]">
              01 · SERVICIOS
            </p>

            <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Construcción digital de principio a fin.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#64748b] sm:text-base">
              Cada servicio parte de una necesidad concreta y se convierte en
              una solución tecnológica diseñada para funcionar en el mundo
              real.
            </p>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="group relative flex flex-col rounded-2xl border border-white/[0.06] bg-[#020b18] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#3da5ff]/20 hover:bg-[#071a34]/60 sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                      <Icon size={20} strokeWidth={1.6} />
                    </div>

                    <span className="font-mono text-[10px] text-[#334155]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-7 font-poppins text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-[84px] text-sm leading-7 text-[#64748b] transition-colors duration-300 group-hover:text-[#94a3b8]">
                    {service.description}
                  </p>

                  <div className="my-7 h-px bg-white/[0.06]" />

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-xs text-[#94a3b8]"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#071a34] text-[#3da5ff]">
                          <Check size={11} strokeWidth={2.5} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="group/link mt-8 inline-flex items-center gap-2 text-xs font-semibold text-[#3da5ff]"
                  >
                    Conocer servicio
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-b border-white/[0.05] bg-[#030b18] py-28">
        <div className="devpass-container">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[11px] font-semibold tracking-[0.25em] text-[#3da5ff]">
                02 · CAPACIDADES
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Una solución no termina en el código.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#64748b]">
                Desarrollo, datos, inteligencia e integración forman parte de
                una misma visión: construir tecnología útil, mantenible y
                preparada para evolucionar.
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;

                return (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="group rounded-2xl border border-white/[0.06] bg-[#020b18] p-6 transition-colors duration-300 hover:border-[#3da5ff]/15 hover:bg-[#071a34]/60"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.06] bg-[#071a34] text-[#3da5ff]">
                      <Icon size={17} strokeWidth={1.6} />
                    </div>

                    <h3 className="mt-5 font-poppins text-base font-semibold text-white">
                      {capability.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-[#64748b] transition-colors group-hover:text-[#94a3b8]">
                      {capability.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28">
        <div className="devpass-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-[11px] font-semibold tracking-[0.25em] text-[#3da5ff]">
              03 · PROCESO
            </p>

            <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Del problema a la solución.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#64748b] sm:text-base">
              Un proceso claro permite tomar mejores decisiones técnicas y
              mantener el proyecto enfocado en lo que realmente importa.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-3 md:grid-cols-4">
              {process.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="relative rounded-2xl border border-white/[0.06] bg-[#020b18] p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#3da5ff]">
                      {step.number}
                    </span>

                    {index < process.length - 1 && (
                      <ChevronRight
                        size={14}
                        className="hidden text-[#334155] md:block"
                      />
                    )}
                  </div>

                  <h3 className="mt-7 font-poppins text-base font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#64748b]">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS LINK */}
      <section className="border-t border-white/[0.05] bg-[#030b18] py-20">
        <div className="devpass-container">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-[11px] font-semibold tracking-[0.25em] text-[#3da5ff]">
                MÁS ALLÁ DEL DESARROLLO
              </p>

              <h2 className="mt-3 font-poppins text-2xl font-semibold text-white sm:text-3xl">
                ¿Buscas una solución tecnológica completa?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#64748b]">
                Explora las soluciones de DevPass para inteligencia artificial,
                transformación digital, integraciones y optimización.
              </p>
            </motion.div>

            <Link
              href="/soluciones"
              className="group inline-flex shrink-0 items-center gap-3 rounded-xl border border-[#3da5ff]/20 bg-[#071a34] px-6 py-3.5 text-sm font-semibold text-[#cbd5e1] transition-all duration-300 hover:border-[#3da5ff]/35 hover:bg-[#0b2548]"
            >
              Explorar soluciones
              <ArrowRight
                size={17}
                className="text-[#3da5ff] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/[0.05] py-24">
        <div className="devpass-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-[#3da5ff]/15 bg-[#071a34] px-7 py-14 text-center sm:px-12"
          >
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e6bff]/10 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <p className="text-[11px] font-semibold tracking-[0.25em] text-[#3da5ff]">
                04 · HABLEMOS
              </p>

              <h2 className="mt-4 font-poppins text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                ¿Tienes un proyecto que quieres construir?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#94a3b8]">
                Cuéntame qué necesitas y encontremos juntos la mejor forma de
                convertirlo en una solución digital.
              </p>

              <div className="mt-8 flex justify-center">
                <Link
                  href="/contacto"
                  className="devpass-gradient group inline-flex items-center gap-3 rounded-xl px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Hablemos
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
    </>
  );
}