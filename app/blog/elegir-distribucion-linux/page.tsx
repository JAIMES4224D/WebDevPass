import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Cómo Elegir una Distribución Linux en 2026 | Guía Completa",
  description:
    "Descubre cómo elegir una distribución Linux en 2026 según tu experiencia, hardware, desarrollo, seguridad, estabilidad y necesidades de uso.",
  keywords: [
    "distribución Linux",
    "distribuciones Linux",
    "mejor distribución Linux",
    "cómo elegir distribución Linux",
    "Linux 2026",
    "Linux para principiantes",
    "Linux para programadores",
    "Ubuntu",
    "Debian",
    "Fedora",
    "Arch Linux",
  ],
  authors: [{ name: "DevPass" }],
  creator: "DevPass",
  publisher: "DevPass",
  category: "Tecnología",
  alternates: {
    canonical: "https://devpass.space/blog/elegir-distribucion-linux",
  },
  openGraph: {
    title: "Cómo Elegir una Distribución Linux en 2026",
    description:
      "Guía completa para elegir una distribución Linux según tu experiencia, hardware, desarrollo, seguridad y necesidades.",
    url: "https://devpass.space/blog/elegir-distribucion-linux",
    siteName: "DevPass",
    locale: "es_PE",
    type: "article",
    publishedTime: "2026-09-20T00:00:00.000Z",
    modifiedTime: "2026-09-20T00:00:00.000Z",
    authors: ["DevPass"],
    section: "Linux",
    tags: [
      "Linux",
      "Distribuciones Linux",
      "Desarrollo",
      "Software",
      "Tecnología",
    ],
    images: [
      {
        url: "https://devpass.space/images/blog/elegir-distribucion-linux.webp",
        width: 1200,
        height: 675,
        alt: "Cómo elegir una distribución Linux en 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo Elegir una Distribución Linux en 2026",
    description:
      "Una guía práctica para elegir la distribución Linux que mejor se adapta a tu equipo y necesidades.",
    images: [
      "https://devpass.space/images/blog/elegir-distribucion-linux.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const internalLinks = [
  {
    title: "Comandos Linux esenciales",
    description:
      "Consulta una selección de comandos útiles para trabajar desde la terminal.",
    href: "/notes/linux-comandos",
  },
  {
    title: "Diagnóstico de redes en Linux",
    description:
      "Aprende a revisar interfaces, conectividad y problemas de red desde Linux.",
    href: "/notes/diagnostico-redes-linux",
  },
  {
    title: "Buenas prácticas de software",
    description:
      "Principios para construir aplicaciones más ordenadas, mantenibles y escalables.",
    href: "/notes/buenas-practicas-software",
  },
  {
    title: "Seguridad web",
    description:
      "Explora conceptos relacionados con seguridad y desarrollo de aplicaciones web.",
    href: "/notes/seguridad-web",
  },
];

export default function ElegirDistribucionLinuxPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-[#f8faff]">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate min-h-[620px] overflow-hidden">
        <Image
          src="/images/blog/elegir-distribucion-linux.webp"
          alt="Cómo elegir una distribución Linux en 2026"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay principal */}
        <div className="absolute inset-0 bg-[#020617]/75" />

        {/* Overlay lateral */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/75 to-[#020617]/45" />

        {/* Degradado inferior */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#020617] to-transparent" />

        {/* Contenido Hero */}
        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-6xl items-center px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
           <Navbar />

            {/* Categoría */}
            <div className="mb-6">
              <span className="inline-flex rounded-full border border-[#3da5ff]/30 bg-[#0a1f3d]/70 px-4 py-2 text-sm font-medium text-[#a7d3ff] backdrop-blur-md">
                Linux · Tecnología · Desarrollo
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Cómo elegir una distribución Linux en 2026
            </h1>

            {/* Descripción */}
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              No existe una distribución Linux perfecta para todos. En esta
              guía aprenderás a elegirla según tu experiencia, hardware,
              necesidades de desarrollo, seguridad, estabilidad y forma de
              trabajo.
            </p>

            {/* Datos */}
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-400">
              <span>📅 20 de septiembre de 2026</span>
              <span>•</span>
              <span>⏱ 9 min de lectura</span>
              <span>•</span>
              <span>🐧 Linux</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTENIDO PRINCIPAL
      ========================================================== */}
      <article className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        {/* Introducción */}
        <section>
          <p className="text-xl leading-9 text-slate-300">
            Elegir una distribución Linux puede parecer complicado cuando
            aparecen nombres como Ubuntu, Debian, Fedora, Arch Linux,
            Linux Mint, openSUSE o muchas otras alternativas. Sin embargo,
            la decisión puede ser mucho más sencilla si primero defines qué
            necesitas hacer con tu sistema.
          </p>

          <p className="mt-6 leading-8 text-slate-400">
            Una distribución Linux combina el kernel de Linux con diferentes
            herramientas, gestores de paquetes, entornos de escritorio,
            configuraciones y políticas de actualización. Por eso, dos
            distribuciones pueden ofrecer experiencias bastante diferentes
            aunque ambas utilicen Linux como base.
          </p>

          <p className="mt-6 leading-8 text-slate-400">
            En lugar de preguntarte simplemente cuál es la{" "}
            <strong className="text-slate-200">
              mejor distribución Linux
            </strong>
            , una pregunta más útil es:{" "}
            <strong className="text-slate-200">
              ¿qué distribución se adapta mejor a mi situación?
            </strong>
          </p>
        </section>

        {/* =========================================================
            ÍNDICE
        ========================================================== */}
        <aside className="mt-12 rounded-2xl border border-[#3da5ff]/15 bg-[#0a1f3d]/40 p-6">
          <h2 className="text-xl font-bold text-white">
            En este artículo
          </h2>

          <ol className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href="#que-es"
                className="text-slate-400 transition hover:text-[#3da5ff]"
              >
                1. ¿Qué es una distribución Linux?
              </a>
            </li>

            <li>
              <a
                href="#factores"
                className="text-slate-400 transition hover:text-[#3da5ff]"
              >
                2. Factores para elegir una distribución
              </a>
            </li>

            <li>
              <a
                href="#principiantes"
                className="text-slate-400 transition hover:text-[#3da5ff]"
              >
                3. Linux para principiantes
              </a>
            </li>

            <li>
              <a
                href="#desarrollo"
                className="text-slate-400 transition hover:text-[#3da5ff]"
              >
                4. Linux para desarrollo
              </a>
            </li>

            <li>
              <a
                href="#hardware"
                className="text-slate-400 transition hover:text-[#3da5ff]"
              >
                5. Linux según el hardware
              </a>
            </li>

            <li>
              <a
                href="#comparacion"
                className="text-slate-400 transition hover:text-[#3da5ff]"
              >
                6. Comparación de distribuciones
              </a>
            </li>

            <li>
              <a
                href="#conclusion"
                className="text-slate-400 transition hover:text-[#3da5ff]"
              >
                7. Conclusión
              </a>
            </li>
          </ol>
        </aside>

        {/* =========================================================
            SECCIÓN 1
        ========================================================== */}
        <section id="que-es" className="mt-16 scroll-mt-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Qué es una distribución Linux?
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Linux es el núcleo del sistema operativo, pero una distribución
            incorpora muchos otros componentes necesarios para construir una
            experiencia completa. Entre ellos se encuentran herramientas del
            sistema, bibliotecas, gestores de paquetes, instaladores,
            configuraciones y, en muchos casos, un entorno gráfico.
          </p>

          <p className="mt-6 leading-8 text-slate-400">
            Esto permite que diferentes distribuciones estén orientadas a
            perfiles distintos. Algunas priorizan facilidad de uso, otras
            estabilidad, otras tecnologías recientes y otras un alto nivel
            de control y personalización.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold">
              La idea clave
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              No necesitas escoger la distribución más popular. Necesitas
              escoger una que sea coherente con el trabajo que realizarás
              con tu ordenador.
            </p>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 2
        ========================================================== */}
        <section id="factores" className="mt-16 scroll-mt-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Factores que debes considerar
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Antes de instalar una distribución Linux conviene evaluar varios
            factores. Esto evita cambiar de sistema constantemente por una
            decisión tomada únicamente por popularidad.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold">
                1. Experiencia
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Un usuario que empieza desde cero puede necesitar una
                distribución sencilla y con abundante documentación.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold">
                2. Hardware
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                La cantidad de RAM, procesador, almacenamiento y tarjeta
                gráfica influye en la experiencia de uso.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold">
                3. Estabilidad
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Para determinados entornos puede ser importante priorizar
                versiones maduras y ciclos de actualización conservadores.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold">
                4. Actualizaciones
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Algunas distribuciones ofrecen software más reciente,
                mientras que otras priorizan cambios más controlados.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold">
                5. Software disponible
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Debes comprobar que las herramientas que utilizas tengan
                soporte adecuado para tu distribución.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold">
                6. Comunidad
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Una comunidad activa facilita encontrar documentación,
                tutoriales y soluciones a problemas frecuentes.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 3
        ========================================================== */}
        <section id="principiantes" className="mt-16 scroll-mt-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Qué distribución Linux elegir si eres principiante?
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Para comenzar, normalmente conviene reducir la cantidad de
            variables que pueden generar problemas. Una distribución con
            buena documentación, herramientas gráficas y una comunidad
            amplia puede hacer que el proceso de aprendizaje sea más cómodo.
          </p>

          <p className="mt-6 leading-8 text-slate-400">
            El objetivo inicial debería ser aprender Linux, no pasar todo el
            tiempo solucionando problemas de configuración.
          </p>

          <div className="mt-8 rounded-2xl border border-[#3da5ff]/20 bg-[#0a1f3d]/30 p-6">
            <h3 className="text-xl font-semibold text-[#a7d3ff]">
              Recomendación práctica
            </h3>

            <p className="mt-3 leading-7 text-slate-300">
              Si nunca has utilizado Linux, comienza con una distribución
              conocida, documentada y sencilla. Después, cuando conozcas
              mejor la terminal y la administración del sistema, puedes
              experimentar con alternativas más especializadas.
            </p>
          </div>

          <p className="mt-6 leading-8 text-slate-400">
            Para continuar aprendiendo puedes revisar nuestra guía de{" "}
            <Link
              href="/notes/linux-comandos"
              className="font-medium text-[#3da5ff] transition hover:text-[#a7d3ff]"
            >
              comandos Linux esenciales
            </Link>
            .
          </p>
        </section>

        {/* =========================================================
            SECCIÓN 4
        ========================================================== */}
        <section id="desarrollo" className="mt-16 scroll-mt-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Qué distribución Linux es mejor para desarrollo?
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Para desarrollo de software, Linux ofrece un entorno especialmente
            interesante gracias a la terminal, gestores de paquetes,
            herramientas de automatización y compatibilidad con numerosos
            lenguajes y plataformas.
          </p>

          <p className="mt-6 leading-8 text-slate-400">
            Sin embargo, la distribución por sí sola no determina la calidad
            del entorno de desarrollo. También importan las herramientas,
            configuración, versiones de runtime y flujo de trabajo.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">
            ¿Qué debería tener un entorno de desarrollo?
          </h3>

          <ul className="mt-5 space-y-3 text-slate-400">
            <li>• Terminal y herramientas de administración.</li>
            <li>• Git y herramientas de control de versiones.</li>
            <li>• Soporte para los lenguajes utilizados.</li>
            <li>• Gestores de paquetes adecuados.</li>
            <li>• Compatibilidad con Docker y otras herramientas.</li>
            <li>• Buena documentación.</li>
            <li>• Comunidad activa.</li>
          </ul>

          <p className="mt-6 leading-8 text-slate-400">
            Si además estás interesado en construir aplicaciones y sistemas,
            puedes conocer nuestro servicio de{" "}
            <Link
              href="/servicios/software"
              className="font-medium text-[#3da5ff] transition hover:text-[#a7d3ff]"
            >
              desarrollo de software
            </Link>
            .
          </p>
        </section>

        {/* =========================================================
            SECCIÓN 5
        ========================================================== */}
        <section id="hardware" className="mt-16 scroll-mt-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Elegir Linux según tu hardware
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            El hardware debe ser uno de los primeros aspectos que revises.
            Un sistema moderno con un entorno gráfico pesado puede tener una
            experiencia diferente en un equipo antiguo frente a un ordenador
            reciente.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">
            Equipos antiguos
          </h3>

          <p className="mt-4 leading-8 text-slate-400">
            Si tu ordenador tiene poca memoria RAM o un procesador antiguo,
            puedes valorar distribuciones y entornos de escritorio ligeros.
            La finalidad es reducir el consumo de recursos para dedicar más
            capacidad a las aplicaciones que realmente necesitas.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">
            Equipos modernos
          </h3>

          <p className="mt-4 leading-8 text-slate-400">
            En equipos modernos tendrás mayor libertad para escoger un
            entorno de escritorio completo y priorizar características
            visuales, productividad o personalización.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">
            Tarjetas gráficas
          </h3>

          <p className="mt-4 leading-8 text-slate-400">
            Si utilizas una GPU dedicada, también conviene revisar la
            compatibilidad de controladores y el soporte necesario para las
            aplicaciones que utilizarás.
          </p>
        </section>

        {/* =========================================================
            SECCIÓN 6 - TABLA
        ========================================================== */}
        <section id="comparacion" className="mt-16 scroll-mt-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Comparación general de distribuciones Linux
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            La siguiente comparación sirve como orientación inicial. La
            elección definitiva dependerá de tus necesidades y del hardware
            disponible.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead className="bg-[#0a1f3d]">
                <tr>
                  <th className="border-b border-white/10 px-5 py-4">
                    Distribución
                  </th>

                  <th className="border-b border-white/10 px-5 py-4">
                    Perfil
                  </th>

                  <th className="border-b border-white/10 px-5 py-4">
                    Facilidad
                  </th>

                  <th className="border-b border-white/10 px-5 py-4">
                    Personalización
                  </th>
                </tr>
              </thead>

              <tbody className="text-sm text-slate-400">
                <tr>
                  <td className="border-b border-white/10 px-5 py-4 font-semibold text-slate-200">
                    Ubuntu
                  </td>

                  <td className="border-b border-white/10 px-5 py-4">
                    Principiantes / desarrollo
                  </td>

                  <td className="border-b border-white/10 px-5 py-4">
                    Alta
                  </td>

                  <td className="border-b border-white/10 px-5 py-4">
                    Alta
                  </td>
                </tr>

                <tr>
                  <td className="border-b border-white/10 px-5 py-4 font-semibold text-slate-200">
                    Debian
                  </td>

                  <td className="border-b border-white/10 px-5 py-4">
                    Estabilidad / servidores
                  </td>

                  <td className="border-b border-white/10 px-5 py-4">
                    Media
                  </td>

                  <td className="border-b border-white/10 px-5 py-4">
                    Alta
                  </td>
                </tr>

                <tr>
                  <td className="border-b border-white/10 px-5 py-4 font-semibold text-slate-200">
                    Fedora
                  </td>

                  <td className="border-b border-white/10 px-5 py-4">
                    Desarrollo / tecnologías recientes
                  </td>

                  <td className="border-b border-white/10 px-5 py-4">
                    Alta
                  </td>

                  <td className="border-b border-white/10 px-5 py-4">
                    Alta
                  </td>
                </tr>

                <tr>
                  <td className="border-b border-white/10 px-5 py-4 font-semibold text-slate-200">
                    Arch Linux
                  </td>

                  <td className="border-b border-white/10 px-5 py-4">
                    Usuarios avanzados
                  </td>

                  <td className="border-b border-white/10 px-5 py-4">
                    Baja
                  </td>

                  <td className="border-b border-white/10 px-5 py-4">
                    Muy alta
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-semibold text-slate-200">
                    Linux Mint
                  </td>

                  <td className="px-5 py-4">
                    Escritorio / principiantes
                  </td>

                  <td className="px-5 py-4">
                    Muy alta
                  </td>

                  <td className="px-5 py-4">
                    Alta
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 7
        ========================================================== */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Linux para servidores y administración
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Si tu objetivo es trabajar con servidores, redes o administración
            de sistemas, otros factores adquieren mayor importancia. La
            estabilidad, documentación, soporte, automatización y disponibilidad
            de paquetes pueden ser prioritarios frente a características
            visuales.
          </p>

          <p className="mt-6 leading-8 text-slate-400">
            Linux también puede ser una excelente plataforma para aprender
            administración de sistemas y diagnóstico de redes. En DevPass
            puedes continuar con nuestra nota sobre{" "}
            <Link
              href="/notes/diagnostico-redes-linux"
              className="font-medium text-[#3da5ff] hover:text-[#a7d3ff]"
            >
              diagnóstico de redes en Linux
            </Link>
            .
          </p>
        </section>

        {/* =========================================================
            SECCIÓN 8
        ========================================================== */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Linux y seguridad
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            La seguridad también puede formar parte del criterio de elección.
            Sin embargo, instalar una determinada distribución no convierte
            automáticamente un sistema en seguro.
          </p>

          <p className="mt-6 leading-8 text-slate-400">
            La configuración del sistema, actualización de paquetes,
            permisos, contraseñas, servicios expuestos y hábitos del usuario
            tienen un papel fundamental.
          </p>

          <p className="mt-6 leading-8 text-slate-400">
            Para ampliar este tema puedes consultar nuestra nota sobre{" "}
            <Link
              href="/notes/seguridad-web"
              className="font-medium text-[#3da5ff] hover:text-[#a7d3ff]"
            >
              seguridad web
            </Link>
            .
          </p>
        </section>

        {/* =========================================================
            SECCIÓN 9
        ========================================================== */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Deberías cambiar de distribución?
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            No necesariamente. Si tu distribución actual funciona bien,
            tienes las herramientas que necesitas y el sistema cumple tus
            objetivos, cambiar únicamente porque otra distribución es más
            popular no siempre aporta beneficios.
          </p>

          <p className="mt-6 leading-8 text-slate-400">
            Cambiar puede tener sentido cuando necesitas una determinada
            herramienta, un ciclo de actualización diferente, mejor soporte
            para tu hardware o simplemente quieres aprender otro ecosistema.
          </p>

          <div className="mt-8 rounded-2xl border border-[#3da5ff]/20 bg-[#0a1f3d]/40 p-7">
            <h3 className="text-xl font-semibold">
              Una buena distribución es la que te permite trabajar
            </h3>

            <p className="mt-3 leading-7 text-slate-300">
              No conviertas la elección de distribución en el objetivo.
              Utiliza Linux como una herramienta para aprender, desarrollar,
              administrar sistemas y construir proyectos.
            </p>
          </div>
        </section>

        {/* =========================================================
            CONCLUSIÓN
        ========================================================== */}
        <section id="conclusion" className="mt-16 scroll-mt-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Conclusión
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Elegir una distribución Linux en 2026 no debería reducirse a
            buscar una única opción que sea considerada la mejor para todos.
            La elección depende de tu nivel de experiencia, hardware,
            aplicaciones, objetivos y preferencias.
          </p>

          <p className="mt-6 leading-8 text-slate-400">
            Para principiantes puede ser conveniente comenzar con una
            distribución sencilla y bien documentada. Para desarrollo,
            administración o aprendizaje avanzado, puedes buscar alternativas
            que proporcionen las herramientas y el nivel de control que
            necesitas.
          </p>

          <p className="mt-6 leading-8 text-slate-400">
            Lo importante es que la distribución elegida te permita aprender,
            trabajar y construir proyectos sin convertirse en un obstáculo.
          </p>
        </section>

        {/* =========================================================
            ENLACES INTERNOS
        ========================================================== */}
        <section className="mt-20">
          <div className="mb-8">
            <span className="text-sm font-medium uppercase tracking-wider text-[#3da5ff]">
              Continúa explorando
            </span>

            <h2 className="mt-2 text-3xl font-bold">
              Más contenido de DevPass
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {internalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#3da5ff]/30 hover:bg-[#0a1f3d]/50"
              >
                <h3 className="text-lg font-semibold transition group-hover:text-[#a7d3ff]">
                  {link.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {link.description}
                </p>

                <span className="mt-5 inline-block text-sm font-medium text-[#3da5ff]">
                  Leer más →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* =========================================================
            BLOQUE SERVICIOS
        ========================================================== */}
        <section className="mt-12 rounded-3xl border border-[#3da5ff]/15 bg-gradient-to-br from-[#0a1f3d]/70 to-[#020617] p-8 sm:p-10">
          <span className="text-sm font-medium uppercase tracking-wider text-[#3da5ff]">
            DevPass
          </span>

          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Tecnología, desarrollo y soluciones digitales
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Además de compartir contenido técnico, DevPass desarrolla
            soluciones digitales, software y proyectos tecnológicos.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/servicios"
              className="rounded-xl bg-[#1e6bff] px-6 py-3 font-semibold transition hover:bg-[#3da5ff]"
            >
              Ver servicios
            </Link>

            <Link
              href="/proyectos"
              className="rounded-xl border border-white/10 px-6 py-3 font-semibold transition hover:border-[#3da5ff]/30 hover:bg-white/[0.05]"
            >
              Ver proyectos
            </Link>

            <Link
              href="/sobre-mi"
              className="rounded-xl border border-white/10 px-6 py-3 font-semibold transition hover:border-[#3da5ff]/30 hover:bg-white/[0.05]"
            >
              Sobre DevPass
            </Link>
          </div>
        </section>

        {/* =========================================================
            CTA FINAL
        ========================================================== */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold">
            ¿Quieres seguir aprendiendo?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Explora más artículos, notas técnicas y proyectos de DevPass
            relacionados con desarrollo, Linux, software e innovación.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="rounded-xl bg-[#1e6bff] px-7 py-3 font-semibold transition hover:bg-[#3da5ff]"
            >
              Explorar el blog
            </Link>

            <Link
              href="/notes"
              className="rounded-xl border border-white/10 px-7 py-3 font-semibold transition hover:bg-white/[0.05]"
            >
              Ver notas técnicas
            </Link>

            <Link
              href="/contacto"
              className="rounded-xl border border-white/10 px-7 py-3 font-semibold transition hover:bg-white/[0.05]"
            >
              Contactar
            </Link>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
}