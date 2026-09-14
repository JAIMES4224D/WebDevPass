"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  Check,
  ChevronRight,
  Database,
  FileText,
  GitBranch,
  Layers3,
  Network,
  Route,
  Server,
  ShieldCheck,
  Workflow,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

const architectureSteps = [
  {
    number: "01",
    icon: FileText,
    title: "Entender el problema",
    description:
      "Antes de pensar en tecnologías, necesito comprender qué problema existe, quién lo tiene y qué resultado debería producir la solución.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Definir el flujo",
    description:
      "Representar cómo entran los datos, qué procesos ocurren y cuál será el resultado permite descubrir necesidades antes de programar.",
  },
  {
    number: "03",
    icon: Boxes,
    title: "Separar responsabilidades",
    description:
      "Cada parte del sistema debe tener una responsabilidad clara para evitar mezclar interfaz, lógica de negocio, datos e infraestructura.",
  },
  {
    number: "04",
    icon: Database,
    title: "Diseñar los datos",
    description:
      "La estructura de los datos y sus relaciones deben responder al funcionamiento real del sistema.",
  },
  {
    number: "05",
    icon: Network,
    title: "Definir las conexiones",
    description:
      "APIs, servicios, bases de datos y componentes deben comunicarse mediante límites claros.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Pensar en seguridad",
    description:
      "Permisos, autenticación, validaciones y protección de información deben considerarse desde la arquitectura.",
  },
];

const layers = [
  {
    number: "01",
    title: "INTERFAZ",
    text: "Lo que el usuario ve e interactúa.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "API",
    text: "Entrada y salida de información.",
    icon: Route,
  },
  {
    number: "03",
    title: "NEGOCIO",
    text: "Reglas y procesos de la aplicación.",
    icon: Workflow,
  },
  {
    number: "04",
    title: "DATOS",
    text: "Persistencia y consulta de información.",
    icon: Database,
  },
  {
    number: "05",
    title: "INFRAESTRUCTURA",
    text: "Entorno donde funciona el sistema.",
    icon: Server,
  },
];

const questions = [
  "¿Cuál es el problema que estamos resolviendo?",
  "¿Quién utilizará el sistema?",
  "¿Qué información entra y qué información sale?",
  "¿Cuáles son las reglas principales del negocio?",
  "¿Qué componentes necesita el sistema?",
  "¿Cómo se comunicarán entre ellos?",
  "¿Qué información debe almacenarse?",
  "¿Qué usuarios y permisos existirán?",
  "¿Qué ocurre si un componente falla?",
  "¿Cómo se desplegará y mantendrá?",
];

const checklist = [
  "Problema claramente definido",
  "Usuarios y roles identificados",
  "Flujos principales documentados",
  "Componentes separados por responsabilidad",
  "Modelo de datos definido",
  "APIs y comunicaciones identificadas",
  "Autenticación y autorización consideradas",
  "Manejo de errores previsto",
  "Estrategia de despliegue definida",
  "Documentación mínima disponible",
];
const webPageSchema = createWebPageSchema({
  name: "Arquitectura antes que código | DevPass",
  description:
    "Apuntes sobre arquitectura de software y diseño de sistemas: entender el problema, definir flujos, separar responsabilidades, diseñar datos, conexiones y seguridad antes de programar.",
  path: "/notes/arquitectura-antes-codigo",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "Notes", path: "/notes" },
  {
    name: "Arquitectura antes que código",
    path: "/notes/arquitectura-antes-codigo",
  },
]);
export default function ArquitecturaAntesCodigoPage() {

  return (
    <>
    <JsonLd
        data={[
          webPageSchema,
          breadcrumbSchema,
        ]}
      />
      <Navbar />

      <main className="min-h-screen bg-[#020617] text-[#f8faff]">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/[0.06]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(61,165,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(61,165,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />

          <div className="absolute left-1/2 top-[-180px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#1e6bff]/10 blur-[120px]" />

          <div className="devpass-container relative py-24 md:py-32">
            <Link
              href="/notes"
              className="mb-10 inline-flex items-center gap-2 text-sm text-[#64748b] transition-colors hover:text-[#a7d3ff]"
            >
              <ArrowLeft size={16} />
              Volver a Notes
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="mb-6 flex flex-wrap items-center gap-3 text-[11px] font-semibold tracking-[0.2em]">
                <span className="rounded-full border border-[#3da5ff]/20 bg-[#071a34] px-3 py-1.5 text-[#3da5ff]">
                  SOFTWARE · ARCHITECTURE
                </span>

                <span className="text-[#475569]">•</span>

                <span className="text-[#64748b]">25 AGO 2026</span>

                <span className="text-[#475569]">•</span>

                <span className="text-[#64748b]">7 MIN</span>
              </div>

              <h1 className="font-poppins text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl">
                Arquitectura antes{" "}
                <span className="devpass-gradient-text">que código</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#94a3b8] md:text-lg">
                Antes de escribir cientos de líneas de código, conviene
                entender cómo debería funcionar el sistema. La arquitectura
                permite convertir una idea en una estructura que pueda
                construirse, probarse y mantenerse.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-14 flex flex-wrap items-center gap-3"
            >
              {[
                "Problema",
                "Flujo",
                "Componentes",
                "Datos",
                "APIs",
                "Seguridad",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/[0.06] bg-[#020b18] px-3 py-2 font-mono text-xs text-[#64748b]"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="devpass-container py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            <article className="min-w-0">
              {/* INTRO */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[#3da5ff]/10 bg-[#061326] p-7 md:p-9"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1e6bff]/10 text-[#3da5ff]">
                    <Layers3 size={17} />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3da5ff]">
                    Idea principal
                  </span>
                </div>

                <p className="text-base leading-8 text-[#94a3b8]">
                  Programar demasiado pronto puede llevar a construir una
                  solución que funciona, pero que resulta difícil de mantener,
                  ampliar o corregir. Pensar primero en la arquitectura ayuda
                  a tomar decisiones con mayor claridad antes de convertirlas
                  en código.
                </p>
              </motion.div>

              {/* STEPS */}
              <div className="mt-16">
                <SectionHeading
                  number="01"
                  title="Primero entender, después construir"
                  description="Una arquitectura útil comienza mucho antes de elegir un framework."
                />

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  {architectureSteps.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.number}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.04,
                        }}
                        className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#020b18] p-6 transition-all duration-300 hover:border-[#3da5ff]/20 hover:bg-[#071a34]/50"
                      >
                        <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#1e6bff]/5 blur-3xl" />

                        <div className="relative">
                          <div className="flex items-start justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                              <Icon size={18} />
                            </div>

                            <span className="font-mono text-[10px] tracking-[0.2em] text-[#334155]">
                              {item.number}
                            </span>
                          </div>

                          <h3 className="mt-6 font-poppins text-base font-semibold text-white">
                            {item.title}
                          </h3>

                          <p className="mt-3 text-sm leading-7 text-[#64748b] transition-colors group-hover:text-[#94a3b8]">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* PROBLEM FIRST */}
              <div className="mt-20">
                <SectionHeading
                  number="02"
                  title="El problema antes que la tecnología"
                  description="Elegir el framework primero puede hacer que intentemos adaptar el problema a la herramienta."
                />

                <p className="mt-7 text-[15px] leading-8 text-[#94a3b8]">
                  Cuando aparece una idea, es tentador comenzar pensando en
                  React, Next.js, Python, una base de datos o cualquier otra
                  tecnología. Pero una decisión técnica tiene más sentido
                  cuando sabemos primero qué necesitamos resolver.
                </p>

                <div className="mt-9 grid gap-4 md:grid-cols-2">
                  <ComparisonCard
                    title="EVITAR"
                    icon={<X size={15} />}
                    items={[
                      "Elegir tecnología inmediatamente",
                      "Empezar a programar sin flujo",
                      "Crear componentes sin responsabilidades",
                      "Diseñar la base de datos sin entender el proceso",
                    ]}
                    danger
                  />

                  <ComparisonCard
                    title="PREFERIR"
                    icon={<Check size={15} />}
                    items={[
                      "Definir el problema",
                      "Entender usuarios y procesos",
                      "Separar responsabilidades",
                      "Elegir tecnología después",
                    ]}
                  />
                </div>
              </div>

              {/* LAYERS */}
              <div className="mt-20">
                <SectionHeading
                  number="03"
                  title="Pensar en capas"
                  description="Separar responsabilidades permite que cada parte del sistema tenga un propósito claro."
                />

                <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#010712]">
                  {layers.map((layer, index) => {
                    const Icon = layer.icon;

                    return (
                      <motion.div
                        key={layer.number}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.05,
                        }}
                        className={`group flex items-center gap-5 p-5 transition-colors hover:bg-[#071a34]/40 ${
                          index < layers.length - 1
                            ? "border-b border-white/[0.06]"
                            : ""
                        }`}
                      >
                        <span className="font-mono text-[10px] tracking-[0.2em] text-[#334155]">
                          {layer.number}
                        </span>

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                          <Icon size={16} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="text-xs font-semibold tracking-[0.12em] text-white">
                            {layer.title}
                          </h3>

                          <p className="mt-1 text-sm text-[#64748b]">
                            {layer.text}
                          </p>
                        </div>

                        {index < layers.length - 1 && (
                          <ChevronRight
                            size={15}
                            className="text-[#334155]"
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                <p className="mt-6 text-sm leading-7 text-[#64748b]">
                  No todos los proyectos necesitan exactamente las mismas
                  capas ni una arquitectura compleja. La idea es mantener
                  responsabilidades claras y evitar dependencias innecesarias.
                </p>
              </div>

              {/* DATA */}
              <div className="mt-20">
                <SectionHeading
                  number="04"
                  title="Los datos también forman parte de la arquitectura"
                  description="Una aplicación puede cambiar de interfaz, pero los datos y sus relaciones suelen permanecer."
                />

                <div className="mt-9 rounded-2xl border border-white/[0.06] bg-[#020b18] p-6 md:p-8">
                  <div className="grid gap-5 md:grid-cols-3">
                    <ArchitectureMiniCard
                      icon={Database}
                      title="ENTIDADES"
                      text="Qué información necesita representar el sistema."
                    />

                    <ArchitectureMiniCard
                      icon={GitBranch}
                      title="RELACIONES"
                      text="Cómo se relacionan las diferentes entidades."
                    />

                    <ArchitectureMiniCard
                      icon={ShieldCheck}
                      title="REGLAS"
                      text="Qué restricciones deben respetarse."
                    />
                  </div>
                </div>

                <p className="mt-6 text-[15px] leading-8 text-[#94a3b8]">
                  Diseñar los datos después de haber definido los procesos
                  permite evitar estructuras que funcionan únicamente para una
                  pantalla concreta y que luego resultan difíciles de ampliar.
                </p>
              </div>

              {/* QUESTIONS */}
              <div className="mt-20">
                <SectionHeading
                  number="05"
                  title="Preguntas que ayudan antes de programar"
                  description="No existe una única plantilla para todos los proyectos, pero estas preguntas ayudan a descubrir problemas temprano."
                />

                <div className="mt-9 grid gap-3">
                  {questions.map((question, index) => (
                    <motion.div
                      key={question}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.025,
                      }}
                      className="flex items-start gap-4 rounded-xl border border-white/[0.05] bg-[#020b18] px-5 py-4"
                    >
                      <span className="font-mono text-[10px] tracking-[0.15em] text-[#3da5ff]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-sm leading-6 text-[#94a3b8]">
                        {question}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* SIMPLE FLOW */}
              <div className="mt-20">
                <SectionHeading
                  number="06"
                  title="Una arquitectura no tiene que ser complicada"
                  description="El objetivo no es crear diagramas enormes, sino conseguir claridad."
                />

                <div className="mt-9 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#010712]">
                  <div className="flex flex-col md:flex-row">
                    <FlowBlock number="01" title="PROBLEMA" />

                    <FlowConnector />

                    <FlowBlock number="02" title="PROCESO" />

                    <FlowConnector />

                    <FlowBlock number="03" title="COMPONENTES" />

                    <FlowConnector />

                    <FlowBlock number="04" title="CÓDIGO" last />
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-[#64748b]">
                  Una arquitectura simple y comprensible suele ser más útil
                  que una arquitectura excesivamente sofisticada para un
                  problema que no la necesita.
                </p>
              </div>

              {/* CHECKLIST */}
              <div className="mt-20">
                <SectionHeading
                  number="07"
                  title="Checklist antes de escribir código"
                  description="Una pequeña revisión inicial puede ahorrar bastante trabajo posteriormente."
                />

                <div className="mt-9 rounded-2xl border border-white/[0.06] bg-[#020b18] p-6 md:p-8">
                  <div className="grid gap-3 md:grid-cols-2">
                    {checklist.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.03,
                        }}
                        className="flex items-start gap-3 rounded-xl border border-white/[0.04] bg-[#061326] px-4 py-3"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e6bff]/10 text-[#3da5ff]">
                          <Check size={12} />
                        </span>

                        <span className="text-sm leading-6 text-[#94a3b8]">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CONCLUSION */}
              <div className="mt-20 rounded-2xl border border-[#3da5ff]/10 bg-gradient-to-br from-[#071a34] to-[#020b18] p-7 md:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3da5ff]/20 bg-[#1e6bff]/10 text-[#3da5ff]">
                  <Workflow size={20} />
                </div>

                <h2 className="mt-6 font-poppins text-xl font-semibold text-white">
                  Pensar antes de programar también es desarrollar
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#94a3b8]">
                  La arquitectura no busca predecir absolutamente todo lo que
                  ocurrirá durante un proyecto. Busca crear suficiente claridad
                  para comenzar a construir con una dirección definida y poder
                  evolucionar el sistema cuando aparezcan nuevas necesidades.
                </p>
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="rounded-2xl border border-white/[0.06] bg-[#020b18] p-5">
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                    EN ESTA NOTE
                  </p>

                  <nav className="mt-5 space-y-1">
                    {[
                      "Entender antes de construir",
                      "Problema antes que tecnología",
                      "Pensar en capas",
                      "Arquitectura de datos",
                      "Preguntas iniciales",
                      "Flujo de arquitectura",
                      "Checklist",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-lg px-3 py-2.5 text-xs leading-5 text-[#64748b]"
                      >
                        <span className="font-mono text-[#334155]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>{item}</span>
                      </div>
                    ))}
                  </nav>
                </div>

                <div className="mt-4 rounded-2xl border border-white/[0.06] bg-[#020b18] p-5">
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                    DEVPASS
                  </p>

                  <p className="mt-3 text-sm leading-6 text-[#64748b]">
                    Antes del código existe una decisión: cómo debería
                    funcionar el sistema.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* NEXT NOTE */}
        <section className="border-t border-white/[0.06]">
          <div className="devpass-container py-14">
            <div className="flex flex-col gap-5 rounded-2xl border border-white/[0.06] bg-[#020b18] p-6 md:flex-row md:items-center md:justify-between md:p-7">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                  SIGUIENTE NOTE
                </p>

                <h3 className="mt-2 font-poppins text-lg font-semibold text-white">
                  Git: un flujo de trabajo que sí funciona
                </h3>
              </div>

              <Link
                href="/notes/git-flujo-trabajo"
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[#a7d3ff] transition-colors hover:text-white"
              >
                Leer siguiente
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-[#3da5ff]">
          {number}
        </span>

        <span className="h-px w-10 bg-[#3da5ff]/30" />
      </div>

      <h2 className="mt-4 font-poppins text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {title}
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#64748b]">
        {description}
      </p>
    </div>
  );
}

function ComparisonCard({
  title,
  icon,
  items,
  danger = false,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
  danger?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        danger
          ? "border-red-400/10 bg-red-400/[0.025]"
          : "border-emerald-400/10 bg-emerald-400/[0.02]"
      }`}
    >
      <div className="flex items-center gap-2">
        <span
          className={danger ? "text-red-400/70" : "text-emerald-400/70"}
        >
          {icon}
        </span>

        <span className="text-xs font-semibold tracking-[0.16em] text-[#64748b]">
          {title}
        </span>
      </div>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <span
              className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
                danger ? "bg-red-400/50" : "bg-emerald-400/50"
              }`}
            />

            <p className="text-sm leading-6 text-[#94a3b8]">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArchitectureMiniCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Database;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.05] bg-[#061326] p-5">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
        <Icon size={16} />
      </div>

      <p className="mt-5 text-[10px] font-semibold tracking-[0.18em] text-[#3da5ff]">
        {title}
      </p>

      <p className="mt-2 text-sm leading-6 text-[#64748b]">{text}</p>
    </div>
  );
}

function FlowBlock({
  number,
  title,
  last = false,
}: {
  number: string;
  title: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex-1 p-6 ${
        !last ? "border-b border-white/[0.06] md:border-b-0" : ""
      }`}
    >
      <span className="font-mono text-[10px] tracking-[0.2em] text-[#3da5ff]">
        {number}
      </span>

      <h3 className="mt-3 text-xs font-semibold tracking-[0.12em] text-white">
        {title}
      </h3>
    </div>
  );
}

function FlowConnector() {
  return (
    <div className="hidden items-center justify-center border-white/[0.06] px-1 md:flex">
      <ArrowRight size={14} className="text-[#1e6bff]/50" />
    </div>
  );
}