"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Globe,
  HardDrive,
  Network,
  Router,
  Search,
  Server,
  ShieldCheck,
  Terminal,
  Wifi,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

const diagnosticSteps = [
  {
    number: "01",
    title: "Comprobar la interfaz",
    command: "ip addr",
    description:
      "Permite revisar las interfaces de red disponibles, sus estados y las direcciones IP configuradas.",
    icon: Network,
  },
  {
    number: "02",
    title: "Comprobar conectividad",
    command: "ping 8.8.8.8",
    description:
      "Ayuda a determinar si existe conectividad IP hacia un destino determinado.",
    icon: Activity,
  },
  {
    number: "03",
    title: "Revisar la ruta",
    command: "traceroute example.com",
    description:
      "Permite observar los saltos que atraviesa el tráfico hasta llegar al destino.",
    icon: Router,
  },
  {
    number: "04",
    title: "Revisar puertos",
    command: "ss -tulpn",
    description:
      "Muestra sockets y servicios que están escuchando en el sistema.",
    icon: Server,
  },
  {
    number: "05",
    title: "Comprobar HTTP",
    command: "curl -I https://example.com",
    description:
      "Permite revisar rápidamente la respuesta y las cabeceras de un servicio HTTP.",
    icon: Globe,
  },
];

const commands = [
  {
    command: "ip addr",
    purpose: "Interfaces y direcciones IP",
  },
  {
    command: "ip route",
    purpose: "Tabla de rutas",
  },
  {
    command: "ping",
    purpose: "Conectividad",
  },
  {
    command: "traceroute",
    purpose: "Ruta hacia un destino",
  },
  {
    command: "ss -tulpn",
    purpose: "Puertos y sockets",
  },
  {
    command: "curl -I",
    purpose: "Cabeceras HTTP",
  },
  {
    command: "hostname",
    purpose: "Nombre del equipo",
  },
  {
    command: "resolvectl status",
    purpose: "Estado de resolución DNS",
  },
];

const scenarios = [
  {
    title: "No tengo conexión",
    description:
      "Primero revisaría la interfaz, después la dirección IP y finalmente intentaría comprobar conectividad hacia un destino conocido.",
    commands: ["ip addr", "ip route", "ping 8.8.8.8"],
    icon: Wifi,
  },
  {
    title: "El servicio no responde",
    description:
      "Comprobaría si existe conectividad, si el puerto está abierto localmente y si el servicio HTTP está devolviendo una respuesta.",
    commands: ["ping", "ss -tulpn", "curl -I"],
    icon: Server,
  },
  {
    title: "Hay problemas de resolución",
    description:
      "Revisaría la configuración DNS y comprobaría si el problema está relacionado con la resolución del nombre.",
    commands: ["resolvectl status", "ip route", "curl"],
    icon: Search,
  },
];

const checklist = [
  "¿La interfaz de red está activa?",
  "¿El equipo tiene una dirección IP válida?",
  "¿Existe una ruta hacia el destino?",
  "¿El destino responde a las pruebas de conectividad?",
  "¿El nombre de dominio puede resolverse?",
  "¿El puerto esperado está escuchando?",
  "¿El servicio responde correctamente?",
  "¿Los registros muestran algún problema?",
];

function TerminalBlock({
  command,
  output,
  label = "TERMINAL",
}: {
  command: string;
  output?: string[];
  label?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#020711]">
      <div className="flex items-center justify-between border-b border-white/[0.05] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-400/60" />
          <span className="h-2 w-2 rounded-full bg-amber-400/60" />
          <span className="h-2 w-2 rounded-full bg-green-400/60" />

          <span className="ml-2 font-mono text-[9px] tracking-[0.14em] text-[#475569]">
            {label}
          </span>
        </div>

        <Terminal size={12} className="text-[#334155]" />
      </div>

      <div className="space-y-2 px-5 py-5 font-mono text-xs">
        <div className="flex gap-3">
          <span className="select-none text-[#334155]">$</span>

          <code className="overflow-x-auto whitespace-nowrap text-[#a7d3ff]">
            {command}
          </code>
        </div>

        {output?.map((line, index) => (
          <div key={index} className="flex gap-3">
            <span className="select-none text-[#1e293b]">│</span>

            <span className="overflow-x-auto whitespace-nowrap text-[#475569]">
              {line}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DiagnosticoRedesLinuxPage() {
  const webPageSchema = createWebPageSchema({
  name: "Diagnóstico básico de redes en Linux | DevPass",
  description:
    "Guía práctica para diagnosticar redes en Linux desde la terminal: interfaces, direcciones IP, rutas, conectividad, puertos, DNS y servicios HTTP.",
  path: "/notes/diagnostico-redes-linux",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "Notes", path: "/notes" },
  {
    name: "Diagnóstico básico de redes en Linux",
    path: "/notes/diagnostico-redes-linux",
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

            <div className="absolute left-1/2 top-0 h-[500px] w-[720px] -translate-x-1/2 rounded-full bg-[#1e6bff]/10 blur-[150px]" />

            <div className="absolute right-[-120px] top-48 h-72 w-72 rounded-full bg-[#3da5ff]/5 blur-[120px]" />
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
                  <Network size={12} className="text-[#3da5ff]" />
                  DEVPASS · NOTES
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3.5 py-2 font-mono text-[9px] tracking-[0.12em] text-[#64748b]">
                  NETWORKING
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
                Diagnóstico básico de{" "}
                <span className="devpass-gradient-text">
                  redes en Linux.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#94a3b8] sm:text-lg">
                Una guía práctica para comprobar interfaces, conectividad,
                rutas, puertos, DNS y servicios de red desde la terminal.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-[10px] font-medium tracking-[0.08em] text-[#475569]">
                <span className="flex items-center gap-2">
                  <Network size={13} className="text-[#3da5ff]" />
                  NETWORKING
                </span>

                <span className="h-3 w-px bg-white/[0.08]" />

                <span>01 SEP 2026</span>

                <span className="h-3 w-px bg-white/[0.08]" />

                <span>5 MIN DE LECTURA</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ARTICLE */}
        <section className="relative py-16 sm:py-20">
          <div className="devpass-container">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,820px)_220px] lg:items-start lg:justify-center">
              <article className="min-w-0">
                {/* INTRO */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55 }}
                >
                  <div className="border-l border-[#3da5ff]/25 pl-5 sm:pl-6">
                    <p className="text-sm leading-8 text-[#94a3b8] sm:text-base">
                      Cuando una aplicación deja de responder o un servidor
                      parece no tener conectividad, no siempre es necesario
                      empezar con herramientas complejas. Linux proporciona
                      varias utilidades que permiten construir un diagnóstico
                      progresivo desde la terminal.
                    </p>

                    <p className="mt-5 text-sm leading-8 text-[#94a3b8] sm:text-base">
                      La idea es avanzar desde lo más básico hacia lo más
                      específico: primero comprobar la interfaz, después la
                      conectividad y las rutas, luego los puertos y finalmente
                      el servicio que estamos intentando alcanzar.
                    </p>
                  </div>
                </motion.div>

                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-16"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      FLUJO
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      Orden recomendado de diagnóstico
                    </h2>
                  </div>

                  <div className="grid gap-4">
                    {diagnosticSteps.map(({ number, title, command, description, icon: Icon }) => (
                      <div
                        key={number}
                        className="rounded-2xl border border-white/[0.06] bg-[#050d1a] p-4"
                      >
                        <div className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                            <Icon size={17} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-3">
                              <span className="font-mono text-[9px] tracking-[0.14em] text-[#3da5ff]">
                                {number}
                              </span>
                              <code className="font-mono text-[9px] text-[#a7d3ff]">
                                {command}
                              </code>
                            </div>

                            <h3 className="mt-2 font-poppins text-base font-semibold text-white">
                              {title}
                            </h3>

                            <p className="mt-2 text-sm leading-7 text-[#64748b]">
                              {description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* 01 */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-16"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      01
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      Empezar por la interfaz de red
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#64748b]">
                      Antes de probar Internet o un servidor remoto, conviene
                      conocer cómo está configurada la máquina local.
                    </p>
                  </div>

                  <TerminalBlock
                    command="ip addr"
                    output={[
                      "2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP>",
                      "    inet 192.168.1.20/24",
                    ]}
                  />

                  <p className="mt-5 text-sm leading-8 text-[#64748b]">
                    Con esta información podemos identificar interfaces,
                    estados y direcciones IP. Si la interfaz esperada no está
                    activa o no tiene una configuración adecuada, cualquier
                    prueba posterior puede llevarnos a conclusiones
                    equivocadas.
                  </p>
                </motion.section>

                {/* 02 */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      02
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      Revisar la tabla de rutas
                    </h2>
                  </div>

                  <p className="text-sm leading-8 text-[#64748b] sm:text-base">
                    Tener una dirección IP no significa necesariamente que la
                    máquina sepa cómo llegar a todas las redes. La tabla de
                    rutas muestra cómo se dirige el tráfico.
                  </p>

                  <div className="mt-8">
                    <TerminalBlock
                      command="ip route"
                      output={[
                        "default via 192.168.1.1 dev eth0",
                        "192.168.1.0/24 dev eth0",
                      ]}
                    />
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/[0.06] bg-[#050d1a] p-5">
                      <span className="font-mono text-[9px] tracking-[0.12em] text-[#3da5ff]">
                        DEFAULT
                      </span>

                      <p className="mt-3 text-xs leading-6 text-[#475569]">
                        Ruta utilizada cuando no existe una ruta más específica
                        para el destino.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.06] bg-[#050d1a] p-5">
                      <span className="font-mono text-[9px] tracking-[0.12em] text-[#3da5ff]">
                        GATEWAY
                      </span>

                      <p className="mt-3 text-xs leading-6 text-[#475569]">
                        Equipo que permite dirigir tráfico hacia otras redes.
                      </p>
                    </div>
                  </div>
                </motion.section>

                {/* 03 */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      03
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      Comprobar conectividad
                    </h2>
                  </div>

                  <p className="text-sm leading-8 text-[#64748b] sm:text-base">
                    Una prueba sencilla es utilizar{" "}
                    <span className="font-mono text-[#a7d3ff]">ping</span>.
                    Permite comprobar si existe conectividad IP hacia un
                    destino que responde a este tipo de solicitudes.
                  </p>

                  <div className="mt-8">
                    <TerminalBlock
                      command="ping -c 4 8.8.8.8"
                      output={[
                        "64 bytes from 8.8.8.8: icmp_seq=1 ttl=117 time=18.2 ms",
                        "64 bytes from 8.8.8.8: icmp_seq=2 ttl=117 time=17.9 ms",
                        "--- 8.8.8.8 ping statistics ---",
                        "4 packets transmitted, 4 received, 0% packet loss",
                      ]}
                    />
                  </div>

                  <p className="mt-5 text-sm leading-8 text-[#64748b]">
                    Si esta prueba funciona, sabemos que existe conectividad
                    IP hacia ese destino. Si falla, todavía no significa que
                    toda la red esté caída: puede existir filtrado ICMP o un
                    problema específico entre origen y destino.
                  </p>
                </motion.section>

                {/* 04 */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      04
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      Seguir la ruta
                    </h2>
                  </div>

                  <p className="text-sm leading-8 text-[#64748b] sm:text-base">
                    Cuando sabemos que existe conectividad, pero queremos
                    conocer dónde podría estar apareciendo un problema en el
                    camino, podemos utilizar{" "}
                    <span className="font-mono text-[#a7d3ff]">
                      traceroute
                    </span>
                    .
                  </p>

                  <div className="mt-8">
                    <TerminalBlock
                      command="traceroute example.com"
                      output={[
                        "1  192.168.1.1",
                        "2  10.20.0.1",
                        "3  203.0.113.1",
                        "4  example.com",
                      ]}
                    />
                  </div>

                  <p className="mt-5 text-sm leading-8 text-[#64748b]">
                    El resultado permite observar los saltos intermedios. No
                    todos los routers necesariamente responderán, por lo que
                    una línea sin respuesta no debe interpretarse
                    automáticamente como una falla.
                  </p>
                </motion.section>

                {/* 05 */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      05
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      Revisar puertos y servicios
                    </h2>
                  </div>

                  <p className="text-sm leading-8 text-[#64748b] sm:text-base">
                    Cuando el problema ya parece estar relacionado con un
                    servicio concreto, resulta útil revisar qué puertos están
                    escuchando en el sistema.
                  </p>

                  <div className="mt-8">
                    <TerminalBlock
                      command="ss -tulpn"
                      output={[
                        "tcp LISTEN 0 128 0.0.0.0:22",
                        "tcp LISTEN 0 511 0.0.0.0:80",
                        "tcp LISTEN 0 511 0.0.0.0:443",
                      ]}
                    />
                  </div>

                  <p className="mt-5 text-sm leading-8 text-[#64748b]">
                    Esta información ayuda a responder una pregunta concreta:
                    ¿existe realmente un proceso escuchando en el puerto que
                    esperamos utilizar?
                  </p>
                </motion.section>

                {/* 06 */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      06
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      Comprobar DNS
                    </h2>
                  </div>

                  <p className="text-sm leading-8 text-[#64748b] sm:text-base">
                    Una aplicación puede tener conectividad IP y aun así no
                    funcionar si el nombre de dominio no puede resolverse
                    correctamente.
                  </p>

                  <div className="mt-8">
                    <TerminalBlock
                      command="resolvectl status"
                      output={[
                        "DNS Servers: 192.168.1.1",
                        "DNS Domain: ~.",
                      ]}
                      label="DNS"
                    />
                  </div>

                  <p className="mt-5 text-sm leading-8 text-[#64748b]">
                    Revisar la configuración DNS ayuda a separar un problema de
                    conectividad de un problema de resolución de nombres.
                  </p>
                </motion.section>

                {/* 07 */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      07
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      Comprobar el servicio HTTP
                    </h2>
                  </div>

                  <p className="text-sm leading-8 text-[#64748b] sm:text-base">
                    Si estamos diagnosticando una aplicación web,{" "}
                    <span className="font-mono text-[#a7d3ff]">curl</span>{" "}
                    permite comprobar directamente qué responde el servidor.
                  </p>

                  <div className="mt-8">
                    <TerminalBlock
                      command="curl -I https://example.com"
                      output={[
                        "HTTP/2 200",
                        "content-type: text/html",
                        "server: example",
                      ]}
                      label="HTTP"
                    />
                  </div>

                  <p className="mt-5 text-sm leading-8 text-[#64748b]">
                    Las cabeceras permiten obtener una primera lectura de la
                    respuesta HTTP sin necesidad de abrir un navegador.
                  </p>
                </motion.section>

                {/* 08 SCENARIOS */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      08
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      Tres escenarios habituales
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#64748b]">
                      La clave no es memorizar comandos aislados, sino saber
                      qué pregunta queremos responder con cada herramienta.
                    </p>
                  </div>

                  <div className="grid gap-4">
                    {scenarios.map((scenario) => {
                      const Icon = scenario.icon;

                      return (
                        <div
                          key={scenario.title}
                          className="rounded-2xl border border-white/[0.06] bg-[#050d1a] p-6"
                        >
                          <div className="flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                              <Icon size={17} />
                            </div>

                            <div className="min-w-0">
                              <h3 className="font-poppins text-base font-semibold text-white">
                                {scenario.title}
                              </h3>

                              <p className="mt-2 text-sm leading-7 text-[#64748b]">
                                {scenario.description}
                              </p>

                              <div className="mt-4 flex flex-wrap gap-2">
                                {scenario.commands.map((command) => (
                                  <code
                                    key={command}
                                    className="rounded-md border border-white/[0.05] bg-[#020711] px-2.5 py-1.5 font-mono text-[9px] text-[#a7d3ff]"
                                  >
                                    {command}
                                  </code>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.section>

                {/* 09 CHECKLIST */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      09
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      Checklist de diagnóstico
                    </h2>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#050d1a]">
                    {checklist.map((item, index) => (
                      <div
                        key={item}
                        className={`flex gap-4 px-5 py-4 ${
                          index !== checklist.length - 1
                            ? "border-b border-white/[0.05]"
                            : ""
                        }`}
                      >
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-[#3da5ff]/15 bg-[#071a34]">
                          <Check size={11} className="text-[#3da5ff]" />
                        </div>

                        <p className="text-xs leading-6 text-[#64748b]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* 10 QUICK REFERENCE */}
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20"
                >
                  <div className="mb-8">
                    <span className="font-mono text-[9px] font-medium tracking-[0.15em] text-[#3da5ff]">
                      10
                    </span>

                    <h2 className="mt-2 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      Referencia rápida
                    </h2>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#050d1a]">
                    {commands.map((item, index) => (
                      <div
                        key={item.command}
                        className={`grid gap-2 px-5 py-4 sm:grid-cols-[190px_1fr] sm:items-center ${
                          index !== commands.length - 1
                            ? "border-b border-white/[0.05]"
                            : ""
                        }`}
                      >
                        <code className="font-mono text-xs text-[#a7d3ff]">
                          {item.command}
                        </code>

                        <span className="text-xs text-[#475569]">
                          {item.purpose}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* CONCLUSION */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55 }}
                  className="mt-20 rounded-2xl border border-[#3da5ff]/10 bg-gradient-to-br from-[#071a34] to-[#050d1a] p-7 sm:p-8"
                >
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#020617] text-[#3da5ff]">
                      <ShieldCheck size={17} />
                    </div>

                    <div>
                      <h2 className="font-poppins text-lg font-semibold text-white">
                        Diagnosticar antes de asumir
                      </h2>

                      <p className="mt-3 text-sm leading-7 text-[#64748b]">
                        Una de las ventajas de trabajar desde la terminal es
                        poder dividir un problema grande en comprobaciones
                        pequeñas y observables.
                      </p>

                      <p className="mt-4 text-sm leading-7 text-[#64748b]">
                        Interfaz, rutas, conectividad, DNS, puertos y servicios
                        forman una cadena. Revisarla paso a paso permite
                        encontrar con mayor precisión dónde está el problema.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* NAVIGATION */}
                <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    href="/notes/tf-idf-similitud-coseno"
                    className="group inline-flex items-center gap-2 text-xs font-semibold text-[#64748b] transition-colors hover:text-[#a7d3ff]"
                  >
                    <ArrowLeft
                      size={14}
                      className="transition-transform group-hover:-translate-x-1"
                    />
                    Note anterior
                  </Link>

                  <Link
                    href="/notes/seguridad-web"
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
                      EN ESTA NOTE
                    </span>
                  </div>

                  <div className="space-y-1">
                    {[
                      ["01", "Interfaz de red"],
                      ["02", "Tabla de rutas"],
                      ["03", "Conectividad"],
                      ["04", "Traceroute"],
                      ["05", "Puertos"],
                      ["06", "DNS"],
                      ["07", "HTTP"],
                      ["08", "Escenarios"],
                      ["09", "Checklist"],
                      ["10", "Referencia rápida"],
                    ].map(([number, title]) => (
                      <div
                        key={number}
                        className="group rounded-lg px-2 py-2.5 transition-colors hover:bg-white/[0.025]"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[9px] text-[#3da5ff]">
                            {number}
                          </span>

                          <span className="text-[10px] leading-5 text-[#64748b] group-hover:text-[#94a3b8]">
                            {title}
                          </span>
                        </div>
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
                    DEVPASS · NETWORKING
                  </p>

                  <h2 className="mt-4 font-poppins text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                    Entender el sistema antes de cambiarlo.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#64748b]">
                    Explora más notas sobre Linux, sistemas, desarrollo,
                    seguridad y tecnología.
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
                    href="/auditoria"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-3 text-xs font-semibold text-[#a7b4c8] transition-colors hover:border-[#3da5ff]/20 hover:text-white"
                  >
                    Ver auditoría
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