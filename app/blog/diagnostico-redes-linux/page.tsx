import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Cómo diagnosticar problemas de red en Linux: comandos esenciales | DevPass",
  description:
    "Aprende a diagnosticar problemas de red en Linux utilizando ip, ping, ss, traceroute, dig, nslookup, curl y otras herramientas esenciales.",
  keywords: [
    "diagnosticar problemas de red Linux",
    "redes Linux",
    "comandos de redes Linux",
    "ip Linux",
    "ping Linux",
    "traceroute Linux",
    "dig Linux",
    "nslookup Linux",
    "ss Linux",
    "administración de redes",
  ],
  authors: [{ name: "DevPass" }],
  creator: "DevPass",
  publisher: "DevPass",
  alternates: {
    canonical: "https://devpass.space/blog/diagnostico-redes-linux",
  },
  openGraph: {
    title: "Cómo diagnosticar problemas de red en Linux",
    description:
      "Una guía práctica para identificar problemas de conectividad, rutas, DNS y servicios de red en Linux.",
    url: "https://devpass.space/blog/diagnostico-redes-linux",
    siteName: "DevPass",
    locale: "es_PE",
    type: "article",
    publishedTime: "2026-09-21T00:00:00.000Z",
    authors: ["DevPass"],
    section: "Redes",
    tags: [
      "Linux",
      "Redes",
      "Administración de sistemas",
      "Terminal",
      "Tecnología",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo diagnosticar problemas de red en Linux",
    description:
      "Comandos y técnicas prácticas para diagnosticar problemas de red desde la terminal.",
  },
};

const commands = [
  {
    command: "ip addr",
    title: "Comprobar las interfaces de red",
    description:
      "Permite consultar las interfaces disponibles, sus direcciones IP, estado y otra información relacionada con la configuración de red.",
    example: "ip addr",
    result:
      "Busca una interfaz activa y verifica si tiene una dirección IPv4 o IPv6 asignada.",
  },
  {
    command: "ip route",
    title: "Revisar la tabla de rutas",
    description:
      "Muestra cómo el sistema decide hacia dónde enviar los paquetes. Es especialmente útil cuando existe conexión local, pero no se puede acceder a otras redes.",
    example: "ip route",
    result:
      "Comprueba que exista una ruta por defecto, normalmente asociada a un gateway.",
  },
  {
    command: "ping",
    title: "Comprobar conectividad",
    description:
      "Permite verificar si existe comunicación con otro equipo o dirección IP y observar los tiempos de respuesta.",
    example: "ping -c 4 8.8.8.8",
    result:
      "Si recibes respuestas, existe conectividad hacia el destino. Si no hay respuesta, debes continuar investigando.",
  },
  {
    command: "ss",
    title: "Consultar conexiones y puertos",
    description:
      "Permite revisar sockets, conexiones activas y puertos que están escuchando en el sistema.",
    example: "ss -tulpn",
    result:
      "Puedes identificar qué servicios están escuchando y en qué puertos.",
  },
  {
    command: "traceroute",
    title: "Analizar el recorrido de los paquetes",
    description:
      "Ayuda a observar los diferentes saltos que realiza un paquete hasta alcanzar un destino.",
    example: "traceroute google.com",
    result:
      "Es útil para localizar en qué tramo de la ruta podría aparecer una demora o interrupción.",
  },
  {
    command: "dig",
    title: "Diagnosticar DNS",
    description:
      "Consulta información DNS y permite comprobar si un dominio está resolviendo correctamente.",
    example: "dig devpass.space",
    result:
      "Revisa la respuesta DNS y comprueba si el dominio devuelve los registros esperados.",
  },
  {
    command: "nslookup",
    title: "Consultar resolución de nombres",
    description:
      "Es otra herramienta útil para comprobar la resolución DNS de un dominio.",
    example: "nslookup devpass.space",
    result:
      "Permite comprobar qué servidor DNS responde y qué dirección obtiene para el dominio.",
  },
  {
    command: "curl",
    title: "Comprobar servicios HTTP",
    description:
      "Permite realizar solicitudes HTTP desde la terminal y comprobar si un servicio web responde.",
    example: "curl -I https://devpass.space",
    result:
      "Los encabezados HTTP permiten verificar rápidamente si el servidor está respondiendo.",
  },
];

export default function DiagnosticoRedesLinuxPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#020617] text-slate-100">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden border-b border-white/[0.08]">
          {/* Luces decorativas */}
          <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[140px]" />

          <div className="absolute right-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

          <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/[0.05] blur-[100px]" />

          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-28 lg:px-8">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-sm"
            >
              <Link
                href="/"
                className="text-slate-500 transition hover:text-blue-400"
              >
                Inicio
              </Link>

              <span className="text-slate-700">/</span>

              <Link
                href="/blog"
                className="text-slate-500 transition hover:text-blue-400"
              >
                Blog
              </Link>

              <span className="text-slate-700">/</span>

              <span className="text-slate-300">
                Diagnóstico de redes en Linux
              </span>
            </nav>

            {/* Categoría */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-4 py-2 text-sm text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
              Redes · Linux · Infraestructura
            </div>

            {/* Título */}
            <h1 className="max-w-5xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Cómo diagnosticar problemas de red en Linux:
              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                comandos esenciales
              </span>
            </h1>

            {/* Descripción */}
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
              Aprende a identificar problemas de conectividad, rutas,
              resolución DNS y servicios de red utilizando herramientas
              disponibles directamente desde la terminal de Linux.
            </p>

            {/* Metadata visual */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
              <span>📅 21 septiembre 2026</span>

              <span className="hidden sm:block text-slate-700">
                •
              </span>

              <span>⏱ 10 min de lectura</span>

              <span className="hidden sm:block text-slate-700">
                •
              </span>

              <span>DevPass Blog</span>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTENIDO
        ====================================================== */}
        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_290px]">
            {/* =================================================
                ARTÍCULO
            ================================================== */}
            <article className="min-w-0">
              {/* INTRODUCCIÓN */}
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-2xl shadow-blue-950/10 sm:p-8">
                <p className="text-lg leading-8 text-slate-300">
                  Los problemas de red son una de las situaciones más
                  comunes al trabajar con servidores, equipos Linux y
                  aplicaciones conectadas a Internet. Una página que no
                  carga, una conexión que se interrumpe o un servicio que
                  deja de responder pueden tener diferentes causas.
                </p>

                <p className="mt-5 leading-8 text-slate-400">
                  La ventaja de Linux es que proporciona numerosas
                  herramientas para investigar estos problemas directamente
                  desde la terminal. En lugar de probar comandos al azar,
                  podemos seguir un proceso ordenado para determinar dónde
                  se encuentra el problema.
                </p>

                <div className="mt-6 rounded-2xl border border-blue-400/10 bg-blue-500/[0.04] p-5">
                  <p className="text-sm font-semibold text-blue-300">
                    💡 Idea clave
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    El diagnóstico de red funciona mejor cuando avanzas
                    desde lo más básico hacia lo más específico:
                    interfaz → gateway → conectividad → ruta → DNS →
                    servicio.
                  </p>
                </div>
              </div>

              {/* =================================================
                  ÍNDICE
              ================================================== */}
              <div className="my-10 rounded-3xl border border-white/[0.08] bg-[#07101f] p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    ☰
                  </span>

                  <h2 className="text-lg font-semibold text-white">
                    En este artículo
                  </h2>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href="#proceso"
                    className="group rounded-xl border border-white/[0.06] p-4 text-sm text-slate-400 transition hover:border-blue-400/20 hover:text-blue-400"
                  >
                    <span className="mr-2 text-blue-400">01</span>
                    Proceso de diagnóstico
                  </a>

                  <a
                    href="#interfaces"
                    className="group rounded-xl border border-white/[0.06] p-4 text-sm text-slate-400 transition hover:border-blue-400/20 hover:text-blue-400"
                  >
                    <span className="mr-2 text-blue-400">02</span>
                    Interfaces y configuración
                  </a>

                  <a
                    href="#conectividad"
                    className="group rounded-xl border border-white/[0.06] p-4 text-sm text-slate-400 transition hover:border-blue-400/20 hover:text-blue-400"
                  >
                    <span className="mr-2 text-blue-400">03</span>
                    Conectividad y rutas
                  </a>

                  <a
                    href="#dns"
                    className="group rounded-xl border border-white/[0.06] p-4 text-sm text-slate-400 transition hover:border-blue-400/20 hover:text-blue-400"
                  >
                    <span className="mr-2 text-blue-400">04</span>
                    Diagnóstico DNS
                  </a>

                  <a
                    href="#servicios"
                    className="group rounded-xl border border-white/[0.06] p-4 text-sm text-slate-400 transition hover:border-blue-400/20 hover:text-blue-400"
                  >
                    <span className="mr-2 text-blue-400">05</span>
                    Servicios y puertos
                  </a>

                  <a
                    href="#buenas-practicas"
                    className="group rounded-xl border border-white/[0.06] p-4 text-sm text-slate-400 transition hover:border-blue-400/20 hover:text-blue-400"
                  >
                    <span className="mr-2 text-blue-400">06</span>
                    Buenas prácticas
                  </a>
                </div>
              </div>

              {/* =================================================
                  PROCESO
              ================================================== */}
              <section id="proceso" className="scroll-mt-28">
                <SectionTitle
                  number="01"
                  title="Un proceso ordenado para diagnosticar redes"
                  description="Antes de ejecutar numerosos comandos, conviene seguir una secuencia lógica para reducir el problema."
                />

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <DiagnosticStep
                    number="01"
                    title="Interfaz"
                    text="Comprueba que la interfaz de red esté disponible y tenga una dirección IP."
                  />

                  <DiagnosticStep
                    number="02"
                    title="Gateway"
                    text="Verifica que exista una ruta por defecto y que el gateway sea accesible."
                  />

                  <DiagnosticStep
                    number="03"
                    title="Conectividad"
                    text="Utiliza ping para comprobar si existe comunicación con otros destinos."
                  />

                  <DiagnosticStep
                    number="04"
                    title="DNS"
                    text="Si las IP funcionan pero los dominios no, revisa la resolución DNS."
                  />
                </div>
              </section>

              {/* =================================================
                  INTERFACES
              ================================================== */}
              <section id="interfaces" className="mt-20 scroll-mt-28">
                <SectionTitle
                  number="02"
                  title="Comprobar las interfaces de red"
                  description="El primer paso consiste en confirmar que Linux reconoce correctamente la interfaz y que dispone de una configuración válida."
                />

                <div className="mt-8 space-y-5">
                  {commands.slice(0, 2).map((item) => (
                    <CommandCard key={item.command} {...item} />
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-yellow-400/10 bg-yellow-400/[0.03] p-5">
                  <p className="font-semibold text-yellow-300">
                    ⚠️ ¿Qué debes observar?
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    Una interfaz puede aparecer disponible pero no tener
                    una dirección IP válida. También es importante revisar
                    si su estado aparece como activo.
                  </p>
                </div>
              </section>

              {/* =================================================
                  CONECTIVIDAD
              ================================================== */}
              <section id="conectividad" className="mt-20 scroll-mt-28">
                <SectionTitle
                  number="03"
                  title="Comprobar conectividad y rutas"
                  description="Cuando la interfaz está correctamente configurada, el siguiente paso es determinar hasta dónde puede comunicarse el equipo."
                />

                <div className="mt-8 space-y-5">
                  {commands.slice(2, 5).map((item) => (
                    <CommandCard key={item.command} {...item} />
                  ))}
                </div>

                {/* Flujo visual */}
                <div className="mt-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6">
                  <h3 className="font-semibold text-white">
                    Flujo recomendado
                  </h3>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <FlowItem text="Interfaz" />

                    <FlowArrow />

                    <FlowItem text="Gateway" />

                    <FlowArrow />

                    <FlowItem text="IP externa" />

                    <FlowArrow />

                    <FlowItem text="Dominio" />
                  </div>
                </div>
              </section>

              {/* =================================================
                  DNS
              ================================================== */}
              <section id="dns" className="mt-20 scroll-mt-28">
                <SectionTitle
                  number="04"
                  title="Diagnosticar problemas de DNS"
                  description="Un problema DNS puede hacer que Internet parezca estar caída aunque exista conectividad mediante direcciones IP."
                />

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {commands.slice(5, 7).map((item) => (
                    <CommandCard key={item.command} {...item} />
                  ))}
                </div>

                <div className="mt-7 rounded-3xl border border-cyan-400/10 bg-cyan-400/[0.03] p-6">
                  <h3 className="font-semibold text-cyan-300">
                    Ejemplo de diagnóstico
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    Si puedes hacer ping a una dirección IP pero no puedes
                    acceder utilizando un dominio, el problema podría
                    encontrarse en la resolución de nombres.
                  </p>

                  <div className="mt-5 overflow-x-auto rounded-xl bg-[#020617] p-5">
                    <pre className="font-mono text-sm leading-7 text-slate-300">
                      <code>
                        <span className="text-slate-500">
                          ${" "}
                        </span>
                        ping -c 4 8.8.8.8{"\n"}
                        <span className="text-slate-500">
                          ${" "}
                        </span>
                        dig devpass.space
                      </code>
                    </pre>
                  </div>
                </div>
              </section>

              {/* =================================================
                  SERVICIOS
              ================================================== */}
              <section id="servicios" className="mt-20 scroll-mt-28">
                <SectionTitle
                  number="05"
                  title="Revisar puertos y servicios"
                  description="Cuando la red funciona pero una aplicación concreta no responde, debemos comprobar los servicios que están escuchando."
                />

                <div className="mt-8 space-y-5">
                  {commands.slice(3, 4).map((item) => (
                    <CommandCard key={item.command} {...item} />
                  ))}
                </div>

                <div className="mt-6 rounded-3xl border border-white/[0.08] bg-[#07101f] p-6">
                  <h3 className="text-lg font-semibold text-white">
                    Comprobar un servicio web
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    Cuando una aplicación web no responde correctamente,
                    también puedes realizar una solicitud directamente
                    desde la terminal.
                  </p>

                  <div className="mt-5">
                    <Terminal command="curl -I https://devpass.space" />
                  </div>
                </div>
              </section>

              {/* =================================================
                  TABLA DE DIAGNÓSTICO
              ================================================== */}
              <section className="mt-20">
                <SectionTitle
                  number="06"
                  title="¿Qué comando utilizar según el problema?"
                  description="Una referencia rápida para elegir la herramienta adecuada."
                />

                <div className="mt-8 overflow-hidden rounded-2xl border border-white/[0.08]">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[650px] text-left text-sm">
                      <thead className="bg-white/[0.04]">
                        <tr>
                          <th className="px-5 py-4 font-semibold text-white">
                            Problema
                          </th>

                          <th className="px-5 py-4 font-semibold text-white">
                            Comando
                          </th>

                          <th className="px-5 py-4 font-semibold text-white">
                            Objetivo
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-white/[0.06]">
                        <tr>
                          <td className="px-5 py-4 text-slate-400">
                            No hay IP
                          </td>

                          <td className="px-5 py-4 font-mono text-blue-400">
                            ip addr
                          </td>

                          <td className="px-5 py-4 text-slate-500">
                            Revisar interfaces
                          </td>
                        </tr>

                        <tr>
                          <td className="px-5 py-4 text-slate-400">
                            No hay salida
                          </td>

                          <td className="px-5 py-4 font-mono text-blue-400">
                            ip route
                          </td>

                          <td className="px-5 py-4 text-slate-500">
                            Revisar rutas
                          </td>
                        </tr>

                        <tr>
                          <td className="px-5 py-4 text-slate-400">
                            Sin conectividad
                          </td>

                          <td className="px-5 py-4 font-mono text-blue-400">
                            ping
                          </td>

                          <td className="px-5 py-4 text-slate-500">
                            Probar comunicación
                          </td>
                        </tr>

                        <tr>
                          <td className="px-5 py-4 text-slate-400">
                            Dominio no resuelve
                          </td>

                          <td className="px-5 py-4 font-mono text-blue-400">
                            dig
                          </td>

                          <td className="px-5 py-4 text-slate-500">
                            Revisar DNS
                          </td>
                        </tr>

                        <tr>
                          <td className="px-5 py-4 text-slate-400">
                            Puerto o servicio
                          </td>

                          <td className="px-5 py-4 font-mono text-blue-400">
                            ss
                          </td>

                          <td className="px-5 py-4 text-slate-500">
                            Revisar sockets
                          </td>
                        </tr>

                        <tr>
                          <td className="px-5 py-4 text-slate-400">
                            Web no responde
                          </td>

                          <td className="px-5 py-4 font-mono text-blue-400">
                            curl
                          </td>

                          <td className="px-5 py-4 text-slate-500">
                            Probar HTTP
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* =================================================
                  BUENAS PRÁCTICAS
              ================================================== */}
              <section
                id="buenas-practicas"
                className="mt-20 scroll-mt-28"
              >
                <SectionTitle
                  number="07"
                  title="Buenas prácticas para diagnosticar redes"
                  description="Un buen diagnóstico no consiste solamente en conocer comandos, sino en utilizarlos de manera ordenada."
                />

                <div className="mt-8 space-y-4">
                  <Practice
                    number="01"
                    title="Empieza por lo más básico"
                    text="Comprueba primero la interfaz, la dirección IP y la ruta antes de investigar problemas más específicos."
                  />

                  <Practice
                    number="02"
                    title="No asumas que el problema es Internet"
                    text="Un fallo puede estar en la interfaz, el gateway, DNS, un firewall, un servicio o incluso en la aplicación."
                  />

                  <Practice
                    number="03"
                    title="Compara IP y dominio"
                    text="Si una dirección IP responde pero un dominio no, la resolución DNS merece especial atención."
                  />

                  <Practice
                    number="04"
                    title="Documenta los resultados"
                    text="Guardar las salidas de los comandos puede ayudarte a comparar estados y detectar cambios en el sistema."
                  />
                </div>
              </section>

              {/* =================================================
                  ENLACES INTERNOS
              ================================================== */}
              <section className="mt-20">
                <div className="rounded-3xl border border-blue-400/15 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-transparent p-7 sm:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                    Continúa aprendiendo
                  </p>

                  <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                    Más contenido técnico de DevPass
                  </h2>

                  <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                    Si estás aprendiendo Linux y administración de sistemas,
                    estos contenidos pueden ayudarte a complementar lo
                    aprendido en este artículo.
                  </p>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <InternalLink
                      href="/notes/linux-comandos"
                      title="Comandos Linux esenciales"
                      description="Repasa los comandos fundamentales para trabajar desde la terminal."
                    />

                    <InternalLink
                      href="/notes/seguridad-web"
                      title="Seguridad web"
                      description="Conoce conceptos importantes para desarrollar aplicaciones más seguras."
                    />

                    <InternalLink
                      href="/notes/herramientas-stack"
                      title="Herramientas para tu stack"
                      description="Explora herramientas útiles para desarrollo y tecnología."
                    />

                    <InternalLink
                      href="/blog/software"
                      title="Desarrollo de software"
                      description="Descubre más contenido de DevPass sobre desarrollo y tecnología."
                    />
                  </div>
                </div>
              </section>

              {/* =================================================
                  CTA FINAL
              ================================================== */}
              <section className="mt-10">
                <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-[#07101f] p-8 text-center sm:p-10">
                  <div className="absolute left-1/2 top-0 h-40 w-60 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[80px]" />

                  <div className="relative">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                      DevPass
                    </span>

                    <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                      Construye. Aprende. Documenta.
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
                      Explora proyectos, servicios, artículos y recursos
                      relacionados con desarrollo de software, Linux,
                      inteligencia artificial y tecnología.
                    </p>

                    <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                      <Link
                        href="/blog"
                        className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-500/20"
                      >
                        Explorar el blog
                      </Link>

                      <Link
                        href="/servicios"
                        className="rounded-xl border border-white/[0.1] px-6 py-3 font-semibold text-slate-300 transition hover:border-blue-400/30 hover:text-white"
                      >
                        Ver servicios
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </article>

            {/* =================================================
                SIDEBAR
            ================================================== */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-5">
                {/* Navegación */}
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                    En este artículo
                  </p>

                  <nav className="mt-5 space-y-1">
                    <SidebarLink
                      href="#proceso"
                      number="01"
                      text="Proceso de diagnóstico"
                    />

                    <SidebarLink
                      href="#interfaces"
                      number="02"
                      text="Interfaces"
                    />

                    <SidebarLink
                      href="#conectividad"
                      number="03"
                      text="Conectividad"
                    />

                    <SidebarLink
                      href="#dns"
                      number="04"
                      text="DNS"
                    />

                    <SidebarLink
                      href="#servicios"
                      number="05"
                      text="Servicios"
                    />

                    <SidebarLink
                      href="#buenas-practicas"
                      number="06"
                      text="Buenas prácticas"
                    />
                  </nav>
                </div>

                {/* Categoría */}
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                    Categoría
                  </p>

                  <Link
                    href="/blog"
                    className="mt-3 block font-semibold text-white transition hover:text-blue-400"
                  >
                    Redes y tecnología
                  </Link>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Artículos prácticos sobre infraestructura,
                    desarrollo y tecnología.
                  </p>
                </div>

                {/* Artículo relacionado */}
                <div className="rounded-2xl border border-blue-400/10 bg-blue-500/[0.04] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                    Relacionado
                  </p>

                  <Link
                    href="/notes/linux-comandos"
                    className="mt-3 block font-semibold leading-6 text-white transition hover:text-blue-400"
                  >
                    Comandos Linux esenciales
                  </Link>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Aprende los comandos básicos para trabajar desde la
                    terminal.
                  </p>

                  <Link
                    href="/notes/linux-comandos"
                    className="mt-4 inline-flex text-sm font-medium text-blue-400 hover:text-blue-300"
                  >
                    Leer artículo →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* =============================================================
   COMPONENTES AUXILIARES
============================================================= */

function SectionTitle({
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
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-sm font-semibold text-blue-400">
          {number}
        </span>

        <div className="h-px w-12 bg-blue-400/30" />
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 max-w-3xl leading-7 text-slate-400">
        {description}
      </p>
    </div>
  );
}

function CommandCard({
  command,
  title,
  description,
  example,
  result,
}: {
  command: string;
  title: string;
  description: string;
  example: string;
  result: string;
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-[#07101f] transition duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:shadow-2xl hover:shadow-blue-950/20">
      <div className="flex flex-col gap-4 border-b border-white/[0.06] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-mono text-xl font-bold text-blue-400">
            {command}
          </span>

          <h3 className="mt-1 text-lg font-semibold text-white">
            {title}
          </h3>
        </div>

        <span className="w-fit rounded-full border border-blue-400/10 bg-blue-400/[0.05] px-3 py-1 text-xs text-blue-300">
          Linux
        </span>
      </div>

      <div className="p-6">
        <p className="leading-7 text-slate-400">
          {description}
        </p>

        <div className="mt-5 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#020617]">
          <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

            <span className="ml-2 font-mono text-xs text-slate-600">
              terminal
            </span>
          </div>

          <pre className="overflow-x-auto p-5 font-mono text-sm leading-7">
            <code>
              <span className="text-slate-600">$ </span>
              <span className="text-cyan-300">{example}</span>
            </code>
          </pre>
        </div>

        <div className="mt-5 border-l-2 border-blue-400/30 pl-4">
          <p className="text-sm leading-6 text-slate-500">
            <span className="font-semibold text-slate-300">
              Qué revisar:
            </span>{" "}
            {result}
          </p>
        </div>
      </div>
    </div>
  );
}

function Terminal({ command }: { command: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#020617]">
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

        <span className="ml-2 font-mono text-xs text-slate-600">
          terminal
        </span>
      </div>

      <pre className="overflow-x-auto p-5 font-mono text-sm">
        <code>
          <span className="text-slate-600">$ </span>
          <span className="text-cyan-300">{command}</span>
        </code>
      </pre>
    </div>
  );
}

function DiagnosticStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:border-blue-400/20">
      <span className="font-mono text-sm font-bold text-blue-400">
        {number}
      </span>

      <h3 className="mt-3 font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {text}
      </p>
    </div>
  );
}

function FlowItem({ text }: { text: string }) {
  return (
    <div className="flex-1 rounded-xl border border-blue-400/10 bg-blue-500/[0.04] px-4 py-3 text-center text-sm font-medium text-slate-300">
      {text}
    </div>
  );
}

function FlowArrow() {
  return (
    <span className="hidden text-blue-400 sm:block">
      →
    </span>
  );
}

function Practice({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition hover:border-blue-400/20">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 font-mono text-sm font-bold text-blue-400">
        {number}
      </span>

      <div>
        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <p className="mt-2 leading-7 text-slate-400">
          {text}
        </p>
      </div>
    </div>
  );
}

function InternalLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-white/[0.07] bg-[#020617]/70 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-500/[0.04]"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-white transition group-hover:text-blue-400">
          {title}
        </h3>

        <span className="text-blue-400 transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </Link>
  );
}

function SidebarLink({
  href,
  number,
  text,
}: {
  href: string;
  number: string;
  text: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-500 transition hover:bg-blue-500/[0.05] hover:text-blue-400"
    >
      <span className="font-mono text-xs text-slate-700">
        {number}
      </span>

      <span>{text}</span>
    </a>
  );
}