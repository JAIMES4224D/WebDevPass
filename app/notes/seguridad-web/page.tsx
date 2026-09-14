"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Code2,
  Globe,
  KeyRound,
  Lock,
  Shield,
  Terminal,
  UserCheck,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

const principles = [
  {
    number: "01",
    icon: Lock,
    title: "Usar HTTPS",
    description:
      "Toda comunicación entre el navegador y el servidor debe viajar mediante HTTPS para proteger los datos durante el tránsito.",
  },
  {
    number: "02",
    icon: KeyRound,
    title: "Proteger credenciales",
    description:
      "Las contraseñas y secretos no deben almacenarse directamente en el código ni exponerse en repositorios públicos.",
  },
  {
    number: "03",
    icon: UserCheck,
    title: "Controlar el acceso",
    description:
      "Cada usuario debe acceder únicamente a los recursos y operaciones que realmente necesita.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Validar entradas",
    description:
      "Los datos recibidos desde formularios, URLs, APIs o cualquier cliente deben validarse antes de ser procesados.",
  },
  {
    number: "05",
    icon: Shield,
    title: "Evitar confiar en el cliente",
    description:
      "Las reglas de seguridad importantes deben comprobarse en el servidor, incluso si ya fueron verificadas en la interfaz.",
  },
  {
    number: "06",
    icon: Globe,
    title: "Reducir la superficie de ataque",
    description:
      "Mantener únicamente servicios, endpoints, permisos y dependencias necesarios ayuda a disminuir posibles puntos de entrada.",
  },
];

const checklist = [
  "HTTPS habilitado en producción",
  "Contraseñas almacenadas con hashing seguro",
  "Secretos fuera del código fuente",
  "Validación de entradas en servidor",
  "Consultas SQL parametrizadas",
  "Autorización antes de operaciones sensibles",
  "Dependencias actualizadas",
  "Mensajes de error sin información sensible",
  "Cookies configuradas con atributos de seguridad",
  "Logs sin contraseñas ni tokens",
];

export default function SeguridadWebPage() {
  const webPageSchema = createWebPageSchema({
  name: "Principios básicos de seguridad web | DevPass",
  description:
    "Guía práctica sobre los principios fundamentales de seguridad web: HTTPS, credenciales, control de acceso, validación de entradas, secretos y reducción de la superficie de ataque.",
  path: "/notes/seguridad-web",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "Notes", path: "/notes" },
  {
    name: "Principios básicos de seguridad web",
    path: "/notes/seguridad-web",
  },
]);
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
                  SECURITY
                </span>

                <span className="text-[#475569]">•</span>

                <span className="text-[#64748b]">30 AGO 2026</span>

                <span className="text-[#475569]">•</span>

                <span className="text-[#64748b]">6 MIN</span>
              </div>

              <h1 className="font-poppins text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl">
                Principios básicos de{" "}
                <span className="devpass-gradient-text">seguridad web</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#94a3b8] md:text-lg">
                Una guía práctica para entender las medidas fundamentales que
                debemos considerar al construir aplicaciones web seguras desde
                el diseño hasta producción.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-14 flex flex-wrap items-center gap-3 text-xs text-[#64748b]"
            >
              <span className="rounded-lg border border-white/[0.06] bg-[#020b18] px-3 py-2">
                Web Security
              </span>
              <span className="rounded-lg border border-white/[0.06] bg-[#020b18] px-3 py-2">
                Backend
              </span>
              <span className="rounded-lg border border-white/[0.06] bg-[#020b18] px-3 py-2">
                OWASP
              </span>
              <span className="rounded-lg border border-white/[0.06] bg-[#020b18] px-3 py-2">
                Secure Development
              </span>
            </motion.div>
          </div>
        </section>

        <section className="devpass-container py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            <article className="min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[#3da5ff]/10 bg-[#061326] p-7 md:p-9"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1e6bff]/10 text-[#3da5ff]">
                    <Shield size={17} />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3da5ff]">
                    Idea principal
                  </span>
                </div>

                <p className="text-base leading-8 text-[#94a3b8]">
                  La seguridad web no consiste únicamente en colocar un
                  certificado HTTPS o utilizar una contraseña. Es un proceso
                  que debe estar presente en la arquitectura, el código, la
                  gestión de usuarios, las dependencias y la infraestructura.
                </p>
              </motion.div>

              <div className="mt-16">
                <SectionHeading
                  number="01"
                  title="Los principios fundamentales"
                  description="Estas son algunas de las reglas que conviene tener presentes en cualquier aplicación web."
                />

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  {principles.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.number}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.04,
                        }}
                        className="group rounded-2xl border border-white/[0.06] bg-[#020b18] p-6 transition-all duration-300 hover:border-[#3da5ff]/20 hover:bg-[#071a34]/50"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                            <Icon size={18} />
                          </div>

                          <span className="text-[10px] font-semibold tracking-[0.2em] text-[#334155]">
                            {item.number}
                          </span>
                        </div>

                        <h3 className="mt-6 font-poppins text-base font-semibold text-white">
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

              <div className="mt-20">
                <SectionHeading
                  number="02"
                  title="Nunca confíes completamente en la entrada"
                  description="Uno de los errores más comunes es asumir que los datos enviados por el usuario son correctos."
                />

                <p className="mt-7 text-[15px] leading-8 text-[#94a3b8]">
                  Un formulario puede ser manipulado, una URL puede modificarse
                  y una petición HTTP puede enviarse directamente sin utilizar
                  la interfaz de la aplicación. Por eso, la validación
                  importante debe realizarse también en el servidor.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <CodeCard
                    title="Evitar"
                    icon={<X size={15} />}
                    code={`const id = req.query.id;

db.query(
  "SELECT * FROM users WHERE id = " + id
);`}
                    danger
                  />

                  <CodeCard
                    title="Preferir"
                    icon={<Check size={15} />}
                    code={`const id = Number(req.query.id);

db.query(
  "SELECT * FROM users WHERE id = ?",
  [id]
);`}
                  />
                </div>

                <p className="mt-5 text-sm leading-7 text-[#64748b]">
                  La idea no es únicamente evitar SQL Injection. Validar y
                  normalizar las entradas ayuda a establecer límites claros
                  sobre qué datos puede aceptar nuestro sistema.
                </p>
              </div>

              <div className="mt-20">
                <SectionHeading
                  number="03"
                  title="Los secretos no pertenecen al repositorio"
                  description="API keys, tokens, contraseñas y credenciales deben mantenerse fuera del código fuente."
                />

                <p className="mt-7 text-[15px] leading-8 text-[#94a3b8]">
                  Una buena práctica es utilizar variables de entorno y sistemas
                  adecuados para administrar secretos. Además, nunca debemos
                  asumir que un repositorio privado será siempre privado.
                </p>

                <div className="mt-8 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#010712]">
                  <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3">
                    <Terminal size={15} className="text-[#3da5ff]" />
                    <span className="font-mono text-xs text-[#64748b]">
                      .env.local
                    </span>
                  </div>

                  <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-[#94a3b8]">
                    <code>{`DATABASE_URL="..."
API_KEY="..."
JWT_SECRET="..."`}</code>
                  </pre>
                </div>

                <div className="mt-5 rounded-xl border border-amber-400/10 bg-amber-400/[0.03] p-5">
                  <p className="text-sm leading-7 text-[#94a3b8]">
                    <span className="font-semibold text-[#e2e8f0]">
                      Importante:
                    </span>{" "}
                    agregar un secreto al archivo de entorno no es suficiente.
                    También debemos asegurarnos de que ese archivo no termine
                    versionado accidentalmente.
                  </p>
                </div>
              </div>

              <div className="mt-20">
                <SectionHeading
                  number="04"
                  title="Autenticación no es autorización"
                  description="Saber quién es el usuario no significa que pueda hacer cualquier operación."
                />

                <div className="mt-8 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#010712]">
                  <div className="grid md:grid-cols-3">
                    <FlowStep
                      number="01"
                      title="Autenticación"
                      text="¿Quién eres?"
                    />

                    <FlowStep
                      number="02"
                      title="Autorización"
                      text="¿Qué puedes hacer?"
                    />

                    <FlowStep
                      number="03"
                      title="Recurso"
                      text="¿Qué puedes modificar?"
                      last
                    />
                  </div>
                </div>

                <p className="mt-6 text-[15px] leading-8 text-[#94a3b8]">
                  Por ejemplo, un usuario autenticado podría tener permiso para
                  consultar su perfil, pero no necesariamente para eliminar
                  usuarios o modificar configuraciones administrativas.
                </p>
              </div>

              <div className="mt-20">
                <SectionHeading
                  number="05"
                  title="Seguridad en cada capa"
                  description="Una aplicación segura no depende de una única medida de protección."
                />

                <div className="mt-9 space-y-3">
                  {[
                    ["Frontend", "Validación de formularios y manejo seguro de datos."],
                    ["API", "Autenticación, autorización y validación de peticiones."],
                    ["Backend", "Reglas de negocio y controles de acceso."],
                    ["Base de datos", "Consultas parametrizadas y permisos mínimos."],
                    ["Infraestructura", "Servicios necesarios, actualizaciones y configuración segura."],
                  ].map(([layer, description], index) => (
                    <motion.div
                      key={layer}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.04 }}
                      className="flex flex-col gap-2 rounded-xl border border-white/[0.05] bg-[#020b18] p-5 md:flex-row md:items-center md:gap-8"
                    >
                      <div className="flex min-w-[130px] items-center gap-2">
                        <ChevronRight size={15} className="text-[#3da5ff]" />
                        <span className="text-sm font-semibold text-white">
                          {layer}
                        </span>
                      </div>

                      <p className="text-sm leading-7 text-[#64748b]">
                        {description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-20">
                <SectionHeading
                  number="06"
                  title="Checklist antes de publicar"
                  description="Una revisión rápida puede ayudarnos a detectar errores básicos antes de llevar una aplicación a producción."
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

              <div className="mt-20 rounded-2xl border border-[#3da5ff]/10 bg-gradient-to-br from-[#071a34] to-[#020b18] p-7 md:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3da5ff]/20 bg-[#1e6bff]/10 text-[#3da5ff]">
                  <Shield size={20} />
                </div>

                <h2 className="mt-6 font-poppins text-xl font-semibold text-white">
                  Seguridad desde el diseño
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#94a3b8]">
                  La seguridad funciona mejor cuando forma parte del proceso de
                  desarrollo desde el comienzo. Pensar en amenazas, permisos,
                  validaciones y manejo de datos antes de escribir código puede
                  evitar problemas mucho más costosos después.
                </p>
              </div>
            </article>

            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="rounded-2xl border border-white/[0.06] bg-[#020b18] p-5">
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                    EN ESTA NOTE
                  </p>

                  <nav className="mt-5 space-y-1">
                    {[
                      "Principios fundamentales",
                      "Validación de entradas",
                      "Secretos",
                      "Autenticación y autorización",
                      "Seguridad por capas",
                      "Checklist",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-lg px-3 py-2.5 text-xs leading-5 text-[#64748b]"
                      >
                        <span className="font-mono text-[#334155]">
                          0{index + 1}
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
                    Construir software también significa pensar en cómo
                    protegerlo.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-white/[0.06]">
          <div className="devpass-container py-14">
            <div className="flex flex-col gap-5 rounded-2xl border border-white/[0.06] bg-[#020b18] p-6 md:flex-row md:items-center md:justify-between md:p-7">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                  SIGUIENTE NOTE
                </p>

                <h3 className="mt-2 font-poppins text-lg font-semibold text-white">
                  Herramientas que forman parte de mi stack
                </h3>
              </div>

              <Link
                href="/notes/herramientas-stack"
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

function CodeCard({
  title,
  icon,
  code,
  danger = false,
}: {
  title: string;
  icon: React.ReactNode;
  code: string;
  danger?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border ${
        danger
          ? "border-red-400/10 bg-red-400/[0.025]"
          : "border-emerald-400/10 bg-emerald-400/[0.02]"
      }`}
    >
      <div className="flex items-center gap-2 border-b border-white/[0.05] px-5 py-3">
        <span
          className={
            danger ? "text-red-400/70" : "text-emerald-400/70"
          }
        >
          {icon}
        </span>

        <span className="text-xs font-medium text-[#64748b]">{title}</span>
      </div>

      <pre className="overflow-x-auto p-5 font-mono text-xs leading-6 text-[#94a3b8]">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function FlowStep({
  number,
  title,
  text,
  last = false,
}: {
  number: string;
  title: string;
  text: string;
  last?: boolean;
}) {
  return (
    <div
      className={`relative p-6 ${
        !last ? "border-b border-white/[0.06] md:border-b-0 md:border-r" : ""
      }`}
    >
      <span className="font-mono text-[10px] tracking-[0.2em] text-[#3da5ff]">
        {number}
      </span>

      <h3 className="mt-3 text-sm font-semibold text-white">{title}</h3>

      <p className="mt-1 text-xs text-[#64748b]">{text}</p>
    </div>
  );
}