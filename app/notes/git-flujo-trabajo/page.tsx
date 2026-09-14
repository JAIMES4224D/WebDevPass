"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  GitFork,
  Terminal,
  UploadCloud,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

const workflow = [
  {
    number: "01",
    icon: GitBranch,
    title: "Crear o actualizar una rama",
    command: "git switch -c feature/nueva-funcionalidad",
    description:
      "Cuando trabajo en una funcionalidad nueva, prefiero mantener los cambios separados del código principal.",
  },
  {
    number: "02",
    icon: Terminal,
    title: "Revisar el estado",
    command: "git status",
    description:
      "Antes de modificar o guardar cambios, revisar el estado del repositorio permite saber exactamente qué está ocurriendo.",
  },
  {
    number: "03",
    icon: GitCommit,
    title: "Construir y probar",
    command: "npm run build",
    description:
      "Los cambios deben probarse antes de convertirse en una versión que otros puedan utilizar.",
  },
  {
    number: "04",
    icon: GitCommit,
    title: "Crear un commit",
    command: 'git commit -m "feat: nueva funcionalidad"',
    description:
      "El commit representa un cambio concreto y debería explicar de manera clara qué se modificó.",
  },
  {
    number: "05",
    icon: UploadCloud,
    title: "Subir los cambios",
    command: "git push origin feature/nueva-funcionalidad",
    description:
      "Una vez revisados los cambios, los envío al repositorio remoto para conservarlos y compartirlos.",
  },
  {
    number: "06",
    icon: GitPullRequest,
    title: "Integrar",
    command: "Pull Request → Review → Merge",
    description:
      "Cuando el flujo lo requiere, los cambios pasan por revisión antes de integrarse a la rama principal.",
  },
];

const commands = [
  {
    command: "git status",
    description: "Ver el estado actual del repositorio.",
  },
  {
    command: "git branch",
    description: "Listar las ramas disponibles.",
  },
  {
    command: "git switch -c feature/nombre",
    description: "Crear y cambiar a una nueva rama.",
  },
  {
    command: "git add .",
    description: "Preparar los cambios para el commit.",
  },
  {
    command: 'git commit -m "mensaje"',
    description: "Guardar un conjunto de cambios.",
  },
  {
    command: "git pull",
    description: "Actualizar el repositorio local.",
  },
  {
    command: "git push",
    description: "Enviar commits al repositorio remoto.",
  },
  {
    command: "git log --oneline",
    description: "Consultar el historial resumido.",
  },
];

const commitExamples = [
  {
    type: "feat",
    text: "feat: agregar formulario de contacto",
  },
  {
    type: "fix",
    text: "fix: corregir validación del formulario",
  },
  {
    type: "refactor",
    text: "refactor: separar lógica de autenticación",
  },
  {
    type: "docs",
    text: "docs: actualizar documentación",
  },
  {
    type: "chore",
    text: "chore: actualizar dependencias",
  },
];

const principles = [
  "Un commit debe representar un cambio comprensible.",
  "No subir archivos sensibles al repositorio.",
  "Revisar los cambios antes de hacer commit.",
  "Probar el proyecto antes de integrar cambios importantes.",
  "Mantener las ramas con nombres descriptivos.",
  "Evitar commits gigantes que mezclen demasiadas cosas.",
  "Actualizar la rama antes de comenzar un trabajo importante.",
  "Usar el historial como herramienta para entender el proyecto.",
];

const checklist = [
  "Revisar git status",
  "Comprobar qué archivos cambiaron",
  "Revisar diferencias con git diff",
  "Ejecutar pruebas o build",
  "Confirmar que no existan secretos",
  "Crear un commit descriptivo",
  "Hacer push",
  "Revisar el resultado en el repositorio remoto",
];

const webPageSchema = createWebPageSchema({
  name: "Git: flujo de trabajo que utilizo | DevPass",
  description:
    "Apuntes sobre el flujo de trabajo con Git: ramas, commits, pruebas, push, pull requests, repositorios remotos y buenas prácticas para mantener un historial claro.",
  path: "/notes/git-flujo-trabajo",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "Notes", path: "/notes" },
  {
    name: "Git: flujo de trabajo que utilizo",
    path: "/notes/git-flujo-trabajo",
  },
]);

export default function GitFlujoTrabajoPage() {
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
                  DEV · GIT
                </span>

                <span className="text-[#475569]">•</span>

                <span className="text-[#64748b]">22 AGO 2026</span>

                <span className="text-[#475569]">•</span>

                <span className="text-[#64748b]">7 MIN</span>
              </div>

              <h1 className="font-poppins text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl">
                Git: flujo de trabajo{" "}
                <span className="devpass-gradient-text">que utilizo</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#94a3b8] md:text-lg">
                El flujo que utilizo para organizar cambios, trabajar con
                ramas, crear commits claros y mantener un historial que
                realmente ayude a entender la evolución de un proyecto.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-14 flex flex-wrap items-center gap-3"
            >
              {[
                "Git",
                "GitHub",
                "Branches",
                "Commits",
                "Pull Requests",
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
                    <GitBranch size={17} />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3da5ff]">
                    Idea principal
                  </span>
                </div>

                <p className="text-base leading-8 text-[#94a3b8]">
                  Git no lo utilizo solamente para guardar una copia del
                  proyecto. Lo utilizo para organizar el trabajo, experimentar
                  sin comprometer la versión estable y conservar un historial
                  que permita saber qué ocurrió en cada etapa.
                </p>
              </motion.div>

              {/* WORKFLOW */}
              <div className="mt-16">
                <SectionHeading
                  number="01"
                  title="Mi flujo de trabajo"
                  description="Un ciclo sencillo que adapto según el tamaño y las necesidades de cada proyecto."
                />

                <div className="mt-10 space-y-3">
                  {workflow.map((item, index) => {
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
                        className="group relative rounded-2xl border border-white/[0.06] bg-[#020b18] p-6 transition-all duration-300 hover:border-[#3da5ff]/20 hover:bg-[#071a34]/50"
                      >
                        <div className="flex flex-col gap-5 md:flex-row md:items-center">
                          <div className="flex shrink-0 items-center gap-4">
                            <span className="font-mono text-[10px] tracking-[0.2em] text-[#334155]">
                              {item.number}
                            </span>

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                              <Icon size={18} />
                            </div>
                          </div>

                          <div className="min-w-0 flex-1">
                            <h3 className="font-poppins text-base font-semibold text-white">
                              {item.title}
                            </h3>

                            <p className="mt-2 text-sm leading-7 text-[#64748b] transition-colors group-hover:text-[#94a3b8]">
                              {item.description}
                            </p>
                          </div>

                          <code className="w-full overflow-x-auto rounded-lg border border-white/[0.05] bg-[#010712] px-4 py-3 font-mono text-xs text-[#64748b] md:w-auto md:max-w-[310px]">
                            {item.command}
                          </code>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* BASIC CYCLE */}
              <div className="mt-20">
                <SectionHeading
                  number="02"
                  title="El ciclo básico"
                  description="La secuencia que más utilizo cuando estoy trabajando en una funcionalidad."
                />

                <div className="mt-9 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#010712]">
                  <div className="flex flex-col md:flex-row">
                    <CycleStep number="01" title="MODIFICAR" />

                    <CycleConnector />

                    <CycleStep number="02" title="REVISAR" />

                    <CycleConnector />

                    <CycleStep number="03" title="PROBAR" />

                    <CycleConnector />

                    <CycleStep number="04" title="COMMIT" />

                    <CycleConnector />

                    <CycleStep number="05" title="PUSH" last />
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-[#64748b]">
                  La idea es evitar llegar al commit sin saber qué cambió.
                  Revisar y probar antes de guardar una versión hace que el
                  historial sea mucho más útil.
                </p>
              </div>

              {/* BRANCHES */}
              <div className="mt-20">
                <SectionHeading
                  number="03"
                  title="Trabajar con ramas"
                  description="Las ramas permiten separar una línea de trabajo de otra sin alterar inmediatamente la versión principal."
                />

                <div className="mt-9 rounded-2xl border border-white/[0.06] bg-[#020b18] p-6 md:p-8">
                  <div className="relative">
                    <div className="absolute bottom-5 left-[19px] top-5 w-px bg-[#1e6bff]/20" />

                    <BranchRow
                      icon={<GitBranch size={16} />}
                      title="main"
                      description="Versión principal y estable del proyecto."
                      active
                    />

                    <BranchRow
                      icon={<GitFork size={16} />}
                      title="feature/nueva-funcionalidad"
                      description="Trabajo aislado para desarrollar una nueva característica."
                    />

                    <BranchRow
                      icon={<GitFork size={16} />}
                      title="fix/error-formulario"
                      description="Rama específica para corregir un problema."
                    />
                  </div>
                </div>

                <div className="mt-7 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#010712]">
                  <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3">
                    <Terminal size={15} className="text-[#3da5ff]" />
                    <span className="font-mono text-xs text-[#64748b]">
                      terminal
                    </span>
                  </div>

                  <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-[#94a3b8]">
                    <code>{`git switch main
git pull

git switch -c feature/nueva-funcionalidad

# trabajar y probar

git add .
git commit -m "feat: nueva funcionalidad"
git push -u origin feature/nueva-funcionalidad`}</code>
                  </pre>
                </div>
              </div>

              {/* COMMITS */}
              <div className="mt-20">
                <SectionHeading
                  number="04"
                  title="Commits que expliquen el cambio"
                  description="Un buen commit debería permitir entender rápidamente qué ocurrió."
                />

                <p className="mt-7 text-[15px] leading-8 text-[#94a3b8]">
                  Intento evitar mensajes demasiado genéricos como{" "}
                  <span className="font-mono text-[#a7d3ff]">
                    update
                  </span>{" "}
                  o{" "}
                  <span className="font-mono text-[#a7d3ff]">
                    cambios
                  </span>
                  . Cuando el historial crece, esos mensajes dejan de aportar
                  información.
                </p>

                <div className="mt-8 grid gap-3">
                  {commitExamples.map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.04,
                      }}
                      className="flex flex-col gap-3 rounded-xl border border-white/[0.05] bg-[#020b18] p-4 md:flex-row md:items-center"
                    >
                      <span className="w-fit rounded-md border border-[#3da5ff]/10 bg-[#071a34] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-[#3da5ff]">
                        {item.type}
                      </span>

                      <code className="overflow-x-auto font-mono text-xs text-[#94a3b8]">
                        {item.text}
                      </code>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* COMMANDS */}
              <div className="mt-20">
                <SectionHeading
                  number="05"
                  title="Comandos que más utilizo"
                  description="No necesito memorizar cientos de comandos. Estos cubren buena parte de mi flujo diario."
                />

                <div className="mt-9 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#010712]">
                  <div className="border-b border-white/[0.06] px-5 py-3">
                    <div className="flex items-center gap-2">
                      <Terminal size={15} className="text-[#3da5ff]" />
                      <span className="font-mono text-xs text-[#64748b]">
                        git commands
                      </span>
                    </div>
                  </div>

                  <div className="divide-y divide-white/[0.05]">
                    {commands.map((item) => (
                      <div
                        key={item.command}
                        className="grid gap-2 px-5 py-4 md:grid-cols-[250px_1fr] md:items-center"
                      >
                        <code className="font-mono text-xs text-[#a7d3ff]">
                          {item.command}
                        </code>

                        <span className="text-sm text-[#64748b]">
                          {item.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* REMOTE */}
              <div className="mt-20">
                <SectionHeading
                  number="06"
                  title="Local y remoto"
                  description="Git permite trabajar localmente mientras GitHub puede funcionar como repositorio remoto y punto de colaboración."
                />

                <div className="mt-9 grid gap-4 md:grid-cols-3">
                  <RemoteCard
                    number="01"
                    title="LOCAL"
                    icon={Terminal}
                    text="Desarrollo, pruebas y commits en el equipo."
                  />

                  <RemoteCard
                    number="02"
                    title="REMOTE"
                    icon={UploadCloud}
                    text="Repositorio remoto con el historial compartido."
                  />

                  <RemoteCard
                    number="03"
                    title="COLABORACIÓN"
                    icon={GitPullRequest}
                    text="Revisión e integración de cambios."
                  />
                </div>

                <div className="mt-7 rounded-2xl border border-[#3da5ff]/10 bg-[#061326] p-6">
                  <div className="flex items-start gap-4">
                    <GitMerge
                      size={19}
                      className="mt-1 shrink-0 text-[#3da5ff]"
                    />

                    <p className="text-sm leading-7 text-[#94a3b8]">
                      Tener el código en remoto también permite recuperar
                      versiones anteriores, trabajar desde diferentes equipos y
                      mantener una copia del historial del proyecto.
                    </p>
                  </div>
                </div>
              </div>

              {/* PRINCIPLES */}
              <div className="mt-20">
                <SectionHeading
                  number="07"
                  title="Reglas que intento mantener"
                  description="Un flujo sencillo funciona mejor cuando existen algunas reglas claras."
                />

                <div className="mt-9 grid gap-3 md:grid-cols-2">
                  {principles.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.03,
                      }}
                      className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-[#020b18] p-5"
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

              {/* CHECKLIST */}
              <div className="mt-20">
                <SectionHeading
                  number="08"
                  title="Checklist antes del push"
                  description="Una revisión rápida antes de subir los cambios puede evitar problemas innecesarios."
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
                  <GitBranch size={20} />
                </div>

                <h2 className="mt-6 font-poppins text-xl font-semibold text-white">
                  Git es parte del proceso, no solo una herramienta
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#94a3b8]">
                  Un buen flujo con Git ayuda a construir con mayor confianza.
                  Permite experimentar, volver atrás, revisar decisiones y
                  entender cómo evolucionó un proyecto. La clave no está en
                  utilizar comandos complejos, sino en mantener un proceso
                  ordenado y consistente.
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
                      "Mi flujo de trabajo",
                      "Ciclo básico",
                      "Trabajar con ramas",
                      "Commits",
                      "Comandos",
                      "Local y remoto",
                      "Reglas",
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
                    Construir también significa saber organizar los cambios.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* BACK TO NOTES */}
        <section className="border-t border-white/[0.06]">
          <div className="devpass-container py-14">
            <div className="flex flex-col gap-5 rounded-2xl border border-white/[0.06] bg-[#020b18] p-6 md:flex-row md:items-center md:justify-between md:p-7">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                  DEVPASS NOTES
                </p>

                <h3 className="mt-2 font-poppins text-lg font-semibold text-white">
                  Explora más apuntes técnicos
                </h3>
              </div>

              <Link
                href="/notes"
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[#a7d3ff] transition-colors hover:text-white"
              >
                Ver todas las Notes
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

function CycleStep({
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
        !last
          ? "border-b border-white/[0.06] md:border-b-0"
          : ""
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

function CycleConnector() {
  return (
    <div className="hidden items-center justify-center border-white/[0.06] px-1 md:flex">
      <ArrowRight size={14} className="text-[#1e6bff]/50" />
    </div>
  );
}

function BranchRow({
  icon,
  title,
  description,
  active = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  active?: boolean;
}) {
  return (
    <div className="relative z-10 mb-5 flex items-center gap-4 last:mb-0">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
          active
            ? "border-[#3da5ff]/25 bg-[#071a34] text-[#3da5ff]"
            : "border-white/[0.06] bg-[#020b18] text-[#475569]"
        }`}
      >
        {icon}
      </div>

      <div className="min-w-0">
        <code className="font-mono text-xs text-[#a7d3ff]">{title}</code>

        <p className="mt-1 text-xs leading-6 text-[#64748b]">
          {description}
        </p>
      </div>
    </div>
  );
}

function RemoteCard({
  number,
  title,
  icon: Icon,
  text,
}: {
  number: string;
  title: string;
  icon: typeof Terminal;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-[#020b18] p-6">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
          <Icon size={18} />
        </div>

        <span className="font-mono text-[10px] tracking-[0.2em] text-[#334155]">
          {number}
        </span>
      </div>

      <p className="mt-6 text-[10px] font-semibold tracking-[0.18em] text-[#3da5ff]">
        {title}
      </p>

      <p className="mt-3 text-sm leading-7 text-[#64748b]">{text}</p>
    </div>
  );
}