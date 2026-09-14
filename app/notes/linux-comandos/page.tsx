"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Copy,
  Cpu,
  FolderOpen,
  Globe,
  HardDrive,
  Network,
  Server,
  Terminal,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {  
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

const commandGroups = [
  {
    number: "01",
    title: "Navegación y archivos",
    description:
      "Comandos básicos para moverme por el sistema, consultar directorios y trabajar con archivos.",
    icon: FolderOpen,
    commands: [
      {
        command: "pwd",
        description: "Muestra el directorio actual.",
        example: "pwd",
      },
      {
        command: "ls -la",
        description:
          "Lista archivos y directorios incluyendo elementos ocultos.",
        example: "ls -la",
      },
      {
        command: "cd /ruta",
        description: "Cambia al directorio indicado.",
        example: "cd /var/www",
      },
      {
        command: "find . -name \"archivo\"",
        description:
          "Busca archivos o directorios a partir de una ubicación.",
        example: "find . -name \"config.json\"",
      },
    ],
  },
  {
    number: "02",
    title: "Procesos y recursos",
    description:
      "Herramientas que utilizo para observar procesos y conocer cómo está funcionando el sistema.",
    icon: Cpu,
    commands: [
      {
        command: "ps aux",
        description: "Muestra los procesos activos del sistema.",
        example: "ps aux",
      },
      {
        command: "htop",
        description:
          "Permite visualizar procesos y consumo de CPU y memoria de forma interactiva.",
        example: "htop",
      },
      {
        command: "free -h",
        description: "Muestra el uso de memoria RAM en formato legible.",
        example: "free -h",
      },
      {
        command: "df -h",
        description:
          "Muestra el espacio disponible y utilizado en los sistemas de archivos.",
        example: "df -h",
      },
    ],
  },
  {
    number: "03",
    title: "Red y conectividad",
    description:
      "Comandos especialmente útiles cuando necesito diagnosticar conectividad, interfaces, rutas o puertos.",
    icon: Network,
    commands: [
      {
        command: "ping 8.8.8.8",
        description:
          "Comprueba la conectividad hacia una dirección IP o dominio.",
        example: "ping 8.8.8.8",
      },
      {
        command: "ip addr",
        description:
          "Muestra las interfaces de red y sus direcciones configuradas.",
        example: "ip addr",
      },
      {
        command: "ss -tulpn",
        description:
          "Permite revisar puertos y servicios que están escuchando.",
        example: "ss -tulpn",
      },
      {
        command: "traceroute example.com",
        description:
          "Ayuda a observar los saltos que sigue el tráfico hasta un destino.",
        example: "traceroute example.com",
      },
    ],
  },
  {
    number: "04",
    title: "Servicios y sistema",
    description:
      "Comandos para consultar servicios, registros y el estado general de una máquina Linux.",
    icon: Server,
    commands: [
      {
        command: "systemctl status servicio",
        description: "Consulta el estado de un servicio.",
        example: "systemctl status apache2",
      },
      {
        command: "systemctl restart servicio",
        description: "Reinicia un servicio del sistema.",
        example: "sudo systemctl restart apache2",
      },
      {
        command: "journalctl -u servicio",
        description:
          "Consulta los registros asociados a un servicio.",
        example: "journalctl -u apache2",
      },
      {
        command: "uname -a",
        description:
          "Muestra información del kernel y del sistema operativo.",
        example: "uname -a",
      },
    ],
  },
  {
    number: "05",
    title: "HTTP y herramientas",
    description:
      "Herramientas útiles para realizar comprobaciones rápidas sobre servicios web y recursos remotos.",
    icon: Globe,
    commands: [
      {
        command: "curl -I https://example.com",
        description:
          "Consulta las cabeceras HTTP de un recurso.",
        example: "curl -I https://example.com",
      },
      {
        command: "curl -s https://example.com",
        description:
          "Realiza una solicitud HTTP mostrando el contenido de la respuesta.",
        example: "curl -s https://example.com",
      },
      {
        command: "wget URL",
        description:
          "Descarga recursos desde una URL.",
        example: "wget https://example.com/file.zip",
      },
    ],
  },
];

const quickReference = [
  ["pwd", "Directorio actual"],
  ["ls -la", "Archivos y directorios"],
  ["ps aux", "Procesos"],
  ["htop", "Monitor de procesos"],
  ["free -h", "Memoria RAM"],
  ["df -h", "Espacio en disco"],
  ["ip addr", "Interfaces de red"],
  ["ss -tulpn", "Puertos y servicios"],
  ["ping", "Conectividad"],
  ["systemctl", "Servicios"],
  ["journalctl", "Logs"],
  ["curl", "HTTP"],
];

function CodeBlock({
  command,
  index,
}: {
  command: string;
  index: number;
}) {
  return (
    <div className="group/code relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#020711]">
      <div className="flex items-center justify-between border-b border-white/[0.05] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#ef4444]/70" />
          <span className="h-2 w-2 rounded-full bg-[#f59e0b]/70" />
          <span className="h-2 w-2 rounded-full bg-[#22c55e]/70" />
          <span className="ml-2 font-mono text-[9px] tracking-[0.12em] text-[#475569]">
            TERMINAL
          </span>
        </div>

        <span className="font-mono text-[9px] text-[#334155]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex items-center gap-3 px-4 py-4">
        <span className="font-mono text-xs text-[#3da5ff]">$</span>

        <code className="min-w-0 flex-1 overflow-x-auto font-mono text-xs text-[#cbd5e1]">
          {command}
        </code>

        <button
          type="button"
          aria-label={`Copiar ${command}`}
          onClick={() => {
            navigator.clipboard?.writeText(command);
          }}
          className="shrink-0 rounded-lg border border-white/[0.05] p-2 text-[#475569] transition-colors hover:border-[#3da5ff]/20 hover:text-[#94a3b8]"
        >
          <Copy size={13} />
        </button>
      </div>
    </div>
  );
}

export default function LinuxCommandsPage() {
  const webPageSchema = createWebPageSchema({
    name: "Comandos Linux que uso con frecuencia | DevPass",
    description:
      "Colección práctica de comandos Linux para trabajar con archivos, procesos, memoria, almacenamiento, servicios, red, conectividad y herramientas HTTP desde la terminal.",
    path: "/notes/linux-comandos",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Notes", path: "/notes" },
    {
      name: "Comandos Linux que uso con frecuencia",
      path: "/notes/linux-comandos",
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

      <main className="min-h-screen overflow-hidden bg-[#020617]">
        {/* HERO */}
        <section className="relative border-b border-white/[0.06] pt-32 pb-16">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(61,165,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(61,165,255,0.8) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            <div className="absolute left-1/2 top-0 h-[480px] w-[700px] -translate-x-1/2 rounded-full bg-[#1e6bff]/10 blur-[150px]" />
          </div>

          <div className="devpass-container relative">
            <Link
              href="/notes"
              className="group inline-flex items-center gap-2 text-xs font-medium text-[#64748b] transition-colors hover:text-[#a7d3ff]"
            >
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-1"
              />
              Volver a Notes
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="mt-12 max-w-4xl"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#3da5ff]/15 bg-[#071a34]/70 px-3.5 py-2 font-poppins text-[9px] font-semibold tracking-[0.2em] text-[#94a3b8]">
                  <Terminal size={12} className="text-[#3da5ff]" />
                  DEVPASS · NOTES
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3.5 py-2 font-mono text-[9px] tracking-[0.12em] text-[#64748b]">
                  TECHNICAL NOTE
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
                Comandos Linux que uso{" "}
                <span className="devpass-gradient-text">
                  con frecuencia.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#94a3b8] sm:text-lg">
                Una colección práctica de comandos para trabajar con archivos,
                procesos, servicios, red y sistema desde la terminal.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-[10px] font-medium tracking-[0.08em] text-[#475569]">
                <span className="flex items-center gap-2">
                  <Terminal size={13} className="text-[#3da5ff]" />
                  LINUX
                </span>

                <span className="h-3 w-px bg-white/[0.08]" />

                <span>11 SEP 2026</span>

                <span className="h-3 w-px bg-white/[0.08]" />

                <span>5 MIN DE LECTURA</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="relative py-16 sm:py-20">
          <div className="devpass-container">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,820px)_220px] lg:items-start lg:justify-center">
              {/* ARTICLE */}
              <article className="min-w-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55 }}
                >
                  <div className="border-l border-[#3da5ff]/25 pl-5 sm:pl-6">
                    <p className="text-sm leading-8 text-[#94a3b8] sm:text-base">
                      Linux tiene una característica que sigo valorando:
                      muchas tareas pueden entenderse y resolverse directamente
                      desde la terminal. Con el tiempo fui reuniendo comandos
                      que utilizo para navegar por el sistema, revisar procesos,
                      diagnosticar redes y comprobar servicios.
                    </p>
                  </div>
                </motion.div>

                {/* GROUPS */}
                <div className="mt-16 space-y-16">
                  {commandGroups.map((group, groupIndex) => {
                    const Icon = group.icon;

                    return (
                      <motion.section
                        key={group.number}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-70px" }}
                        transition={{
                          duration: 0.55,
                          delay: Math.min(groupIndex * 0.04, 0.2),
                        }}
                        className="scroll-mt-28"
                      >
                        <div className="mb-7 flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                            <Icon size={17} />
                          </div>

                          <div>
                            <div className="flex items-center gap-3">
                              <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                                {group.number}
                              </span>

                              <h2 className="font-poppins text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl">
                                {group.title}
                              </h2>
                            </div>

                            <p className="mt-2 max-w-2xl text-sm leading-7 text-[#64748b]">
                              {group.description}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {group.commands.map((item, commandIndex) => (
                            <div
                              key={item.command}
                              className="rounded-2xl border border-white/[0.06] bg-[#050d1a] p-4 transition-colors hover:border-[#3da5ff]/15 sm:p-5"
                            >
                              <div className="mb-4 flex items-center justify-between gap-4">
                                <code className="font-mono text-sm font-medium text-[#a7d3ff]">
                                  {item.command}
                                </code>

                                <CheckCircle2
                                  size={14}
                                  className="shrink-0 text-[#334155]"
                                />
                              </div>

                              <p className="mb-4 text-sm leading-7 text-[#64748b]">
                                {item.description}
                              </p>

                              <CodeBlock
                                command={item.example}
                                index={commandIndex}
                              />
                            </div>
                          ))}
                        </div>
                      </motion.section>
                    );
                  })}
                </div>

                {/* COMBINATION */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-7">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      06
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white">
                      Una combinación que resulta especialmente útil
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#64748b]">
                      Cuando estoy revisando un servidor, muchas veces no
                      necesito una herramienta compleja. Puedo combinar varios
                      comandos pequeños para obtener una visión rápida del
                      sistema.
                    </p>
                  </div>

                  <CodeBlock
                    command="ss -tulpn"
                    index={0}
                  />

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {[
                      ["ss", "Inspecciona sockets."],
                      ["-t", "Conexiones TCP."],
                      ["-u", "Conexiones UDP."],
                    ].map(([command, description]) => (
                      <div
                        key={command}
                        className="rounded-xl border border-white/[0.05] bg-[#050d1a] p-4"
                      >
                        <code className="font-mono text-xs text-[#a7d3ff]">
                          {command}
                        </code>

                        <p className="mt-2 text-xs leading-6 text-[#475569]">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* FINAL */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20 rounded-2xl border border-[#3da5ff]/10 bg-gradient-to-br from-[#071a34] to-[#050d1a] p-7 sm:p-8"
                >
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#020617] text-[#3da5ff]">
                      <Terminal size={17} />
                    </div>

                    <div>
                      <h2 className="font-poppins text-lg font-semibold text-white">
                        La terminal como herramienta de diagnóstico
                      </h2>

                      <p className="mt-3 text-sm leading-7 text-[#64748b]">
                        Estos comandos no sustituyen herramientas
                        especializadas, pero permiten construir rápidamente
                        una primera lectura del estado de un sistema.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* NAVIGATION */}
                <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    href="/notes"
                    className="group inline-flex items-center gap-2 text-xs font-semibold text-[#64748b] transition-colors hover:text-[#a7d3ff]"
                  >
                    <ArrowLeft
                      size={14}
                      className="transition-transform group-hover:-translate-x-1"
                    />
                    Todas las Notes
                  </Link>

                  <Link
                    href="/notes/diagnostico-redes-linux"
                    className="group inline-flex items-center gap-2 text-xs font-semibold text-[#64748b] transition-colors hover:text-[#a7d3ff]"
                  >
                    Siguiente Note
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>

              {/* SIDEBAR */}
              <aside className="hidden lg:block lg:sticky lg:top-28">
                <div className="rounded-2xl border border-white/[0.06] bg-[#050d1a] p-5">
                  <div className="mb-5 flex items-center gap-2">
                    <HardDrive size={14} className="text-[#3da5ff]" />

                    <span className="font-poppins text-[10px] font-semibold tracking-[0.18em] text-[#94a3b8]">
                      QUICK REFERENCE
                    </span>
                  </div>

                  <div className="space-y-1">
                    {quickReference.map(([command, description]) => (
                      <div
                        key={command}
                        className="group rounded-lg px-2 py-2.5 transition-colors hover:bg-white/[0.025]"
                      >
                        <code className="font-mono text-[10px] text-[#a7d3ff]">
                          {command}
                        </code>

                        <p className="mt-1 text-[10px] leading-5 text-[#475569]">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/notes"
                  className="group mt-4 flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#050d1a] px-4 py-3 transition-colors hover:border-[#3da5ff]/15"
                >
                  <span className="text-[10px] font-medium text-[#64748b]">
                    Ver todas las notas
                  </span>

                  <ChevronRight
                    size={13}
                    className="text-[#475569] transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </aside>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative border-t border-white/[0.06] bg-[#030a15] py-20">
          <div className="devpass-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-[#3da5ff]/10 bg-gradient-to-br from-[#071a34] via-[#050d1a] to-[#020617] p-8 sm:p-10 lg:p-12"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="font-poppins text-[10px] font-semibold tracking-[0.28em] text-[#3da5ff]">
                    DEVPASS · KNOWLEDGE
                  </p>

                  <h2 className="mt-4 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                    Seguir explorando conocimiento técnico.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#64748b]">
                    Más apuntes sobre desarrollo, inteligencia artificial,
                    sistemas, datos y tecnología.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/notes"
                    className="group inline-flex items-center gap-2 rounded-xl bg-[#1e6bff] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#2b75ff]"
                  >
                    Explorar Notes
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/lab"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-3 text-xs font-semibold text-[#a7b4c8] transition-colors hover:border-[#3da5ff]/20 hover:text-white"
                  >
                    Explorar Lab
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}