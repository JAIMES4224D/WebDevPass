import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Los 5 mejores sistemas operativos Linux en 2026 | DevPass",
  description:
    "Descubre las 5 mejores distribuciones Linux en 2026: Ubuntu, Debian, Linux Mint, Fedora y Arch Linux. Comparamos facilidad de uso, estabilidad, desarrollo y personalización.",
  keywords: [
    "mejores distribuciones Linux",
    "mejores sistemas operativos Linux",
    "mejores distros Linux",
    "Linux 2026",
    "Ubuntu",
    "Debian",
    "Linux Mint",
    "Fedora",
    "Arch Linux",
    "Linux para principiantes",
    "Linux para programar",
  ],
  authors: [{ name: "DevPass" }],
  creator: "DevPass",
  publisher: "DevPass",
  alternates: {
    canonical: "https://devpass.space/blog/mejores-distribuciones-linux",
  },
  openGraph: {
    title: "Los 5 mejores sistemas operativos Linux en 2026",
    description:
      "Ubuntu, Debian, Linux Mint, Fedora y Arch Linux: descubre qué distribución Linux se adapta mejor a tus necesidades.",
    url: "https://devpass.space/blog/mejores-distribuciones-linux",
    siteName: "DevPass",
    locale: "es_PE",
    type: "article",
    publishedTime: "2026-09-17T00:00:00-05:00",
    modifiedTime: "2026-09-17T00:00:00-05:00",
    authors: ["DevPass"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=85",
        width: 1600,
        height: 900,
        alt: "Terminal y código representando el ecosistema Linux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Los 5 mejores sistemas operativos Linux en 2026",
    description:
      "Comparativa de Ubuntu, Debian, Linux Mint, Fedora y Arch Linux.",
    images: [
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=85",
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

const distributions = [
  {
    position: "01",
    name: "Ubuntu",
    subtitle: "La mejor opción general",
    description:
      "Ubuntu es una de las distribuciones Linux más accesibles para comenzar. Su ecosistema, documentación y compatibilidad con herramientas de desarrollo la convierten en una opción muy completa para escritorio.",
    ideal: "Principiantes, desarrolladores y uso diario",
    strengths: [
      "Muy fácil de comenzar",
      "Gran cantidad de documentación",
      "Excelente ecosistema de software",
      "Muy buena compatibilidad de hardware",
    ],
    weakness:
      "Algunas decisiones de diseño y gestión de paquetes pueden no convencer a usuarios avanzados.",
    logo: "/images/blog/linux/ubuntu.webp",
    official: "https://ubuntu.com/",
    badge: "MEJOR GENERAL",
  },
  {
    position: "02",
    name: "Debian",
    subtitle: "La mejor para estabilidad",
    description:
      "Debian es una de las distribuciones más importantes del ecosistema Linux. Su enfoque en estabilidad y su enorme repositorio de paquetes la convierten en una excelente alternativa para servidores, administración de sistemas y usuarios que priorizan confiabilidad.",
    ideal: "Servidores, administración y usuarios que buscan estabilidad",
    strengths: [
      "Excelente estabilidad",
      "Gran repositorio de software",
      "Comunidad muy consolidada",
      "Base de muchas otras distribuciones",
    ],
    weakness:
      "Puede ofrecer versiones de software menos recientes que distribuciones con ciclos más rápidos.",
    logo: "/images/blog/linux/debian.webp",
    official: "https://www.debian.org/",
    badge: "ESTABILIDAD",
  },
  {
    position: "03",
    name: "Linux Mint",
    subtitle: "La mejor para quienes vienen de Windows",
    description:
      "Linux Mint busca ofrecer una experiencia de escritorio sencilla y familiar. Su enfoque 'out of the box' hace que sea una alternativa interesante para quienes quieren pasar de Windows a Linux sin enfrentarse a una curva de aprendizaje demasiado pronunciada.",
    ideal: "Principiantes y usuarios que migran desde Windows",
    strengths: [
      "Interfaz familiar",
      "Fácil de utilizar",
      "Experiencia de escritorio completa",
      "Buen equilibrio entre comodidad y rendimiento",
    ],
    weakness:
      "Está más orientada al escritorio tradicional que a escenarios especializados de administración o servidores.",
    logo: "/images/blog/linux/linux-mint.webp",
    official: "https://www.linuxmint.com/",
    badge: "MÁS AMIGABLE",
  },
  {
    position: "04",
    name: "Fedora",
    subtitle: "La mejor para desarrollo",
    description:
      "Fedora Workstation está orientada a usuarios que quieren una experiencia moderna y tecnologías recientes. Es especialmente atractiva para desarrolladores gracias a sus herramientas, integración con tecnologías de contenedores y cercanía con el ecosistema de Red Hat.",
    ideal: "Desarrolladores, creadores y usuarios técnicos",
    strengths: [
      "Tecnologías recientes",
      "Excelente entorno para desarrollo",
      "Muy buena integración con contenedores",
      "Proyecto respaldado por una comunidad amplia",
    ],
    weakness:
      "Su ciclo de actualización requiere prestar más atención que una distribución orientada exclusivamente a estabilidad a largo plazo.",
    logo: "/images/blog/linux/fedora.webp",
    official: "https://fedoraproject.org/",
    badge: "DESARROLLO",
  },
  {
    position: "05",
    name: "Arch Linux",
    subtitle: "La mejor para usuarios avanzados",
    description:
      "Arch Linux ofrece un enfoque minimalista y altamente personalizable. En lugar de esconder la complejidad, permite al usuario construir y configurar el sistema según sus propias necesidades.",
    ideal: "Usuarios avanzados, entusiastas y administradores",
    strengths: [
      "Altamente personalizable",
      "Sistema minimalista",
      "Documentación excelente",
      "Gran control sobre el sistema",
    ],
    weakness:
      "No es la opción más recomendable para alguien que nunca ha utilizado Linux.",
    logo: "/images/blog/linux/arch-linux.webp",
    official: "https://archlinux.org/",
    badge: "USUARIOS AVANZADOS",
  },
];

const faq = [
  {
    question: "¿Cuál es la mejor distribución Linux para principiantes?",
    answer:
      "Ubuntu y Linux Mint son dos de las opciones más sencillas para comenzar. Ubuntu destaca por su ecosistema y documentación, mientras que Linux Mint ofrece una experiencia de escritorio especialmente familiar.",
  },
  {
    question: "¿Debian es mejor que Ubuntu?",
    answer:
      "No existe una respuesta universal. Debian destaca por su enfoque en estabilidad, mientras que Ubuntu ofrece una experiencia más orientada a facilitar el uso de escritorio y desarrollo.",
  },
  {
    question: "¿Cuál es la mejor distribución Linux para programar?",
    answer:
      "Ubuntu y Fedora son excelentes alternativas para desarrollo. Ubuntu ofrece un ecosistema muy amplio y Fedora destaca por integrar tecnologías recientes y herramientas para desarrolladores.",
  },
  {
    question: "¿Arch Linux es recomendable para principiantes?",
    answer:
      "Generalmente no es la primera opción. Arch Linux ofrece mucho control y personalización, pero requiere que el usuario participe más activamente en la instalación y configuración del sistema.",
  },
  {
    question: "¿Linux Mint es bueno para reemplazar Windows?",
    answer:
      "Sí. Linux Mint está diseñado para ofrecer una experiencia de escritorio sencilla y familiar, por lo que puede resultar especialmente cómoda para usuarios que vienen de Windows.",
  },
];

export default function MejoresDistribucionesLinuxPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Los 5 mejores sistemas operativos Linux en 2026",
    description:
      "Comparativa de las mejores distribuciones Linux en 2026: Ubuntu, Debian, Linux Mint, Fedora y Arch Linux.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=85",
    author: {
      "@type": "Organization",
      name: "DevPass",
      url: "https://devpass.space",
    },
    publisher: {
      "@type": "Organization",
      name: "DevPass",
      url: "https://devpass.space",
    },
    datePublished: "2026-09-17",
    dateModified: "2026-09-17",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://devpass.space/blog/mejores-distribuciones-linux",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://devpass.space/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://devpass.space/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Mejores distribuciones Linux",
        item: "https://devpass.space/blog/mejores-distribuciones-linux",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* SEO STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="min-h-screen bg-[#020617] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1800&q=85"
              alt="Terminal y código relacionado con Linux"
              fill
              sizes="100vw"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-[#020617]/85" />
          </div>

          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />

          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-12 lg:px-8 lg:pb-28">
            {/* Breadcrumb */}
            <Navbar />
            <br></br>
            <br></br>
            <br></br>

            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                Linux · Tecnología · Guía 2026
              </div>

              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
                Los 5 mejores sistemas operativos{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  Linux en 2026
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                Ubuntu, Debian, Linux Mint, Fedora y Arch Linux.
                Comparamos sus ventajas, limitaciones y casos de uso
                para ayudarte a elegir la distribución adecuada.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <span>Por DevPass</span>
                <span>•</span>
                <time dateTime="2026-09-17">
                  17 de septiembre de 2026
                </time>
                <span>•</span>
                <span>10 min de lectura</span>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLE */}
        <article className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          {/* INTRO */}
          <section className="prose prose-invert max-w-none">
            <p className="text-xl leading-9 text-slate-300">
              Elegir una distribución Linux puede ser complicado cuando
              empiezas a investigar. Existen cientos de opciones y cada una
              está diseñada con prioridades diferentes: facilidad de uso,
              estabilidad, seguridad, desarrollo, rendimiento o
              personalización.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              En esta guía de DevPass vamos a centrarnos en cinco
              distribuciones especialmente relevantes:{" "}
              <strong className="text-white">
                Ubuntu, Debian, Linux Mint, Fedora y Arch Linux.
              </strong>
            </p>

            <div className="my-10 rounded-2xl border border-blue-400/20 bg-blue-500/[0.06] p-6">
              <p className="m-0 text-sm leading-7 text-slate-300">
                <strong className="text-blue-300">
                  Una aclaración importante:
                </strong>{" "}
                técnicamente hablamos de <strong>distribuciones Linux</strong>
                o &quot;distros&quot;. Linux es el núcleo (kernel), mientras
                que una distribución combina el kernel con herramientas,
                paquetes, bibliotecas, instaladores y otros componentes.
              </p>
            </div>
          </section>

          {/* TABLE OF CONTENTS */}
          <aside className="my-14 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <h2 className="text-xl font-bold">
              En este artículo
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["#como-elegir", "Cómo elegir una distribución"],
                ["#ubuntu", "1. Ubuntu"],
                ["#debian", "2. Debian"],
                ["#mint", "3. Linux Mint"],
                ["#fedora", "4. Fedora"],
                ["#arch", "5. Arch Linux"],
                ["#comparativa", "Comparativa rápida"],
                ["#conclusion", "¿Cuál deberías elegir?"],
                ["#faq", "Preguntas frecuentes"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-xl border border-white/5 px-4 py-3 text-sm text-slate-300 transition hover:border-blue-400/30 hover:bg-blue-400/5 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </aside>

          {/* CRITERIA */}
          <section id="como-elegir" className="scroll-mt-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              ¿Cómo elegir una distribución Linux?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              No existe una distribución que sea objetivamente la mejor
              para todo el mundo. La elección depende de lo que quieras
              hacer con tu computadora.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["🧑‍💻", "Facilidad", "¿Qué tan sencillo es instalarla y utilizarla?"],
                ["🛡️", "Estabilidad", "¿Qué tan importante es tener un sistema conservador?"],
                ["⚡", "Rendimiento", "¿Qué tan bien se adapta a tu hardware?"],
                ["🔧", "Desarrollo", "¿Qué tan cómodo es trabajar con herramientas modernas?"],
                ["🎨", "Personalización", "¿Cuánto control quieres sobre tu escritorio?"],
                ["📚", "Comunidad", "¿Existe buena documentación y soporte?"],
              ].map(([icon, title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
                >
                  <div className="text-2xl">{icon}</div>
                  <h3 className="mt-4 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* DISTRIBUTIONS */}
          <div className="mt-20 space-y-12">
            {distributions.map((d, index) => (
              <section
                key={d.name}
                id={
                  d.name === "Ubuntu"
                    ? "ubuntu"
                    : d.name === "Debian"
                    ? "debian"
                    : d.name === "Linux Mint"
                    ? "mint"
                    : d.name === "Fedora"
                    ? "fedora"
                    : "arch"
                }
                className="scroll-mt-24 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.045] to-white/[0.015]"
              >
                <div className="p-7 sm:p-10">
                  <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
                    <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/30 p-5">
                      <Image
                        src={d.logo}
                        alt={`Logo de ${d.name}`}
                        className="object-contain"
                        fill
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-sm text-blue-400">
                          #{d.position}
                        </span>

                        <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300">
                          {d.badge}
                        </span>
                      </div>

                      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                        {d.name}
                      </h2>

                      <p className="mt-2 text-lg font-medium text-blue-300">
                        {d.subtitle}
                      </p>

                      <p className="mt-5 text-base leading-8 text-slate-300">
                        {d.description}
                      </p>

                      <div className="mt-7 grid gap-6 md:grid-cols-2">
                        <div>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                            Ideal para
                          </h3>

                          <p className="mt-2 text-slate-200">
                            {d.ideal}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                            Puntos fuertes
                          </h3>

                          <ul className="mt-3 space-y-2">
                            {d.strengths.map((strength) => (
                              <li
                                key={strength}
                                className="flex gap-2 text-sm text-slate-300"
                              >
                                <span className="text-emerald-400">✓</span>
                                {strength}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-7 rounded-2xl border border-amber-400/10 bg-amber-400/[0.04] p-5">
                        <p className="text-sm leading-6 text-slate-300">
                          <strong className="text-amber-300">
                            A tener en cuenta:
                          </strong>{" "}
                          {d.weakness}
                        </p>
                      </div>

                      <a
                        href={d.official}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                      >
                        Sitio oficial de {d.name}
                        <span>↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* COMPARISON */}
          <section
            id="comparativa"
            className="mt-20 scroll-mt-24"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">
              Comparativa rápida de las 5 distribuciones
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Esta tabla resume el enfoque principal de cada alternativa.
              No pretende establecer una verdad absoluta: la mejor elección
              depende de tus necesidades.
            </p>

            <div className="mt-8 overflow-x-auto rounded-3xl border border-white/10">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead className="bg-white/[0.04]">
                  <tr>
                    <th className="px-5 py-4 text-sm font-semibold">
                      Distribución
                    </th>
                    <th className="px-5 py-4 text-sm font-semibold">
                      Facilidad
                    </th>
                    <th className="px-5 py-4 text-sm font-semibold">
                      Estabilidad
                    </th>
                    <th className="px-5 py-4 text-sm font-semibold">
                      Desarrollo
                    </th>
                    <th className="px-5 py-4 text-sm font-semibold">
                      Personalización
                    </th>
                    <th className="px-5 py-4 text-sm font-semibold">
                      Ideal para
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["Ubuntu", "★★★★★", "★★★★☆", "★★★★★", "★★★★☆", "General"],
                    ["Debian", "★★★☆☆", "★★★★★", "★★★★☆", "★★★★☆", "Estabilidad"],
                    ["Linux Mint", "★★★★★", "★★★★☆", "★★★★☆", "★★★☆☆", "Principiantes"],
                    ["Fedora", "★★★★☆", "★★★★☆", "★★★★★", "★★★★☆", "Desarrollo"],
                    ["Arch Linux", "★★☆☆☆", "★★★☆☆", "★★★★★", "★★★★★", "Avanzados"],
                  ].map((row) => (
                    <tr
                      key={row[0]}
                      className="border-t border-white/10"
                    >
                      {row.map((cell, i) => (
                        <td
                          key={`${row[0]}-${i}`}
                          className={`px-5 py-4 text-sm ${
                            i === 0
                              ? "font-semibold text-white"
                              : "text-slate-400"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* CONCLUSION */}
          <section
            id="conclusion"
            className="mt-20 scroll-mt-24"
          >
            <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.10] to-cyan-400/[0.04] p-8 sm:p-10">
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-300">
                Veredicto DevPass
              </span>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                ¿Cuál distribución Linux deberías elegir?
              </h2>

              <div className="mt-7 space-y-4 text-base leading-8 text-slate-300">
                <p>
                  <strong className="text-white">
                    Si estás empezando:
                  </strong>{" "}
                  Ubuntu o Linux Mint son excelentes puntos de entrada.
                </p>

                <p>
                  <strong className="text-white">
                    Si buscas estabilidad:
                  </strong>{" "}
                  Debian es una opción especialmente sólida.
                </p>

                <p>
                  <strong className="text-white">
                    Si eres desarrollador:
                  </strong>{" "}
                  Ubuntu y Fedora ofrecen ecosistemas muy interesantes.
                </p>

                <p>
                  <strong className="text-white">
                    Si quieres aprender profundamente cómo funciona Linux:
                  </strong>{" "}
                  Arch Linux puede ofrecer una experiencia mucho más
                  participativa y personalizable.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section
            id="faq"
            className="mt-20 scroll-mt-24"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">
              Preguntas frecuentes sobre Linux
            </h2>

            <div className="mt-8 space-y-4">
              {faq.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6"
                >
                  <summary className="cursor-pointer list-none pr-8 font-semibold text-white marker:hidden">
                    {item.question}
                  </summary>

                  <p className="mt-4 leading-7 text-slate-400">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* AUTHOR / CTA */}
          <section className="mt-20 border-t border-white/10 pt-10">
            <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-semibold text-blue-400">
                  DEVPASS
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  Tecnología, desarrollo y aprendizaje.
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                  Explora más artículos sobre Linux, programación,
                  desarrollo de software y tecnología.
                </p>
              </div>

              <Link
                href="/blog"
                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Ver más artículos
              </Link>
            </div>
          </section>
        </article>
        <Footer />
      </main>
    </>
  );
}