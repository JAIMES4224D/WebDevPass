"use client";

import { motion, type Variants } from "framer-motion";

const articles = [
  {
    number: "01",
    category: "TESTING · IA",
    title:
      "Testing con IA: Cómo Están Cambiando el QA los Agentes Autónomos",
    description:
      "La inteligencia artificial está transformando la forma en que se diseñan, ejecutan y mantienen las pruebas de software. Los agentes autónomos abren nuevas posibilidades para automatizar procesos de QA.",
    date: "2026",
    readTime: "8 min",
    featured: true,
    href: "/blog/testing-con-ia",
  },
  {
    number: "02",
    category: "DESARROLLO · SOFTWARE",
    title: "Construir software pensando más allá del código",
    description:
      "Una mirada práctica a las decisiones que existen detrás de un sistema: arquitectura, mantenimiento, escalabilidad y experiencia de usuario.",
    date: "2026",
    readTime: "6 min",
    featured: false,
    href: "/blog",
  },
  {
    number: "03",
    category: "IA · TECNOLOGÍA",
    title: "Inteligencia artificial aplicada al desarrollo",
    description:
      "Cómo incorporar herramientas de inteligencia artificial al proceso de desarrollo para mejorar productividad sin perder criterio técnico.",
    date: "2026",
    readTime: "7 min",
    featured: false,
    href: "/blog",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Articles() {
  return (
    <section
      id="insights"
      className="
        relative
        overflow-hidden
        bg-[#020617]
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          AMBIENTE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[10%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#1E6BFF]/[0.02]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-160px]
          bottom-[5%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#3DA5FF]/[0.018]
          blur-[160px]
        "
      />

      <div className="devpass-container relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.header
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
        >
          {/* Etiqueta */}

          <div className="mb-6 flex items-center gap-3">
            <span
              className="
                font-mono
                text-[11px]
                font-medium
                tracking-[0.2em]
                text-[#3DA5FF]
              "
            >
              03
            </span>

            <span
              className="
                h-px
                w-8
                bg-[#3DA5FF]/40
              "
            />

            <span
              className="
                text-[11px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#64748B]
              "
            >
              Insights
            </span>
          </div>

          {/* Título */}

          <div
            className="
              border-b
              border-white/[0.08]
              pb-10
            "
          >
            <h2
              className="
                max-w-5xl
                font-poppins
                text-4xl
                font-semibold
                leading-[1.03]
                tracking-[-0.045em]
                text-white
                sm:text-5xl
                lg:text-[60px]
              "
            >
              Ideas, conocimiento
              <br />
              y{" "}
              <span className="devpass-gradient-text">
                experiencia aplicada.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-3xl
                text-[15px]
                leading-7
                text-[#7F8EA3]
                sm:text-base
                sm:leading-8
              "
            >
              Contenido sobre tecnología, desarrollo de software,
              inteligencia artificial y las ideas que surgen al
              construir soluciones reales.
            </p>
          </div>
        </motion.header>

        {/* =====================================================
            ARTÍCULOS
        ====================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="
            mt-10
            grid
            gap-4
            lg:grid-cols-2
          "
        >
          {articles.map((article) => (
            <motion.article
              key={article.number}
              variants={itemVariants}
              className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#050D1A]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#3DA5FF]/25
                hover:bg-[#071426]
                ${
                  article.featured
                    ? "lg:col-span-2"
                    : ""
                }
              `}
            >
              {/* Línea superior */}

              <span
                className="
                  absolute
                  left-0
                  top-0
                  h-[2px]
                  w-0
                  bg-gradient-to-r
                  from-[#1E6BFF]
                  to-[#3DA5FF]
                  transition-all
                  duration-500
                  group-hover:w-24
                "
              />

              {article.featured ? (
                /* =================================================
                   ARTÍCULO DESTACADO
                ================================================== */

                <div
                  className="
                    grid
                    lg:grid-cols-[1.05fr_0.95fr]
                  "
                >
                  {/* Información */}

                  <div
                    className="
                      flex
                      min-h-[390px]
                      flex-col
                      p-7
                      sm:p-9
                      lg:p-10
                    "
                  >
                    {/* Cabecera */}

                    <div className="flex items-center justify-between">
                      <span
                        className="
                          font-mono
                          text-[11px]
                          tracking-[0.16em]
                          text-[#3DA5FF]
                        "
                      >
                        {article.number}
                      </span>

                      <span
                        className="
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.14em]
                          text-[#475569]
                        "
                      >
                        Artículo destacado
                      </span>
                    </div>

                    <div className="mt-auto">

                      {/* Categoría */}

                      <p
                        className="
                          mb-4
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.18em]
                          text-[#64748B]
                        "
                      >
                        {article.category}
                      </p>

                      {/* Título */}

                      <h3
                        className="
                          max-w-2xl
                          font-poppins
                          text-3xl
                          font-semibold
                          leading-[1.15]
                          tracking-[-0.035em]
                          text-white
                          transition-colors
                          duration-300
                          group-hover:text-[#A7D3FF]
                          sm:text-4xl
                        "
                      >
                        {article.title}
                      </h3>

                      {/* Descripción */}

                      <p
                        className="
                          mt-5
                          max-w-2xl
                          text-sm
                          leading-7
                          text-[#718096]
                        "
                      >
                        {article.description}
                      </p>

                      {/* Metadata */}

                      <div
                        className="
                          mt-6
                          flex
                          flex-wrap
                          items-center
                          gap-4
                          text-[10px]
                          uppercase
                          tracking-[0.12em]
                          text-[#475569]
                        "
                      >
                        <span>
                          {article.date}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-[#3DA5FF]/40" />

                        <span>
                          {article.readTime}
                        </span>
                      </div>

                      {/* Botón */}

                      <motion.a
                        href={article.href}
                        whileHover={{
                          x: 4,
                        }}
                        className="
                          mt-8
                          inline-flex
                          items-center
                          gap-3
                          text-sm
                          font-semibold
                          text-white
                          transition-colors
                          hover:text-[#A7D3FF]
                        "
                      >
                        <span>
                          Leer artículo
                        </span>

                        <span
                          className="
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-md
                            bg-[#1E6BFF]
                            text-[12px]
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        >
                          →
                        </span>
                      </motion.a>
                    </div>
                  </div>

                  {/* =================================================
                      VISUAL ARTÍCULO
                  ================================================== */}

                  <div
                    className="
                      relative
                      min-h-[300px]
                      overflow-hidden
                      border-t
                      border-white/[0.06]
                      bg-[#030A15]
                      lg:min-h-full
                      lg:border-l
                      lg:border-t-0
                    "
                  >
                    {/* Cuadrícula */}

                    <div
                      className="
                        absolute
                        inset-0
                        opacity-[0.035]
                      "
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #3DA5FF 1px, transparent 1px), linear-gradient(to bottom, #3DA5FF 1px, transparent 1px)",
                        backgroundSize: "42px 42px",
                      }}
                    />

                    {/* Glow */}

                    <motion.div
                      animate={{
                        opacity: [0.12, 0.25, 0.12],
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-64
                        w-64
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-[#1E6BFF]/20
                        blur-[100px]
                      "
                    />

                    {/* Documento */}

                    <div
                      className="
                        absolute
                        left-[12%]
                        right-[12%]
                        top-1/2
                        h-[68%]
                        -translate-y-1/2
                        rounded-xl
                        border
                        border-[#3DA5FF]/15
                        bg-[#071426]/70
                        shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                        backdrop-blur-sm
                      "
                    >
                      {/* Barra */}

                      <div
                        className="
                          flex
                          h-9
                          items-center
                          gap-1.5
                          border-b
                          border-white/[0.06]
                          px-3
                        "
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/10" />

                        <span className="ml-2 font-mono text-[8px] text-[#475569]">
                          devpass / insights
                        </span>
                      </div>

                      {/* Contenido */}

                      <div className="p-6">

                        {/* Etiqueta */}

                        <div
                          className="
                            h-2
                            w-20
                            rounded
                            bg-[#3DA5FF]/20
                          "
                        />

                        {/* Título */}

                        <div className="mt-5 space-y-2">
                          <div
                            className="
                              h-2
                              w-[90%]
                              rounded
                              bg-white/[0.08]
                            "
                          />

                          <div
                            className="
                              h-2
                              w-[75%]
                              rounded
                              bg-white/[0.06]
                            "
                          />

                          <div
                            className="
                              h-2
                              w-[60%]
                              rounded
                              bg-white/[0.05]
                            "
                          />
                        </div>

                        {/* Separador */}

                        <div
                          className="
                            my-6
                            h-px
                            bg-white/[0.06]
                          "
                        />

                        {/* Texto */}

                        <div className="space-y-2.5">
                          <div
                            className="
                              h-1.5
                              w-full
                              rounded
                              bg-white/[0.04]
                            "
                          />

                          <div
                            className="
                              h-1.5
                              w-[92%]
                              rounded
                              bg-white/[0.04]
                            "
                          />

                          <div
                            className="
                              h-1.5
                              w-[82%]
                              rounded
                              bg-white/[0.035]
                            "
                          />

                          <div
                            className="
                              h-1.5
                              w-[88%]
                              rounded
                              bg-white/[0.035]
                            "
                          />
                        </div>

                        {/* Bloque destacado */}

                        <div
                          className="
                            mt-7
                            rounded-lg
                            border
                            border-[#3DA5FF]/10
                            bg-[#3DA5FF]/[0.025]
                            p-4
                          "
                        >
                          <div
                            className="
                              h-1.5
                              w-16
                              rounded
                              bg-[#3DA5FF]/20
                            "
                          />

                          <div className="mt-3 space-y-2">
                            <div
                              className="
                                h-1.5
                                w-[90%]
                                rounded
                                bg-white/[0.035]
                              "
                            />

                            <div
                              className="
                                h-1.5
                                w-[70%]
                                rounded
                                bg-white/[0.03]
                              "
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Etiqueta inferior */}

                    <div
                      className="
                        absolute
                        bottom-5
                        right-5
                        rounded-lg
                        border
                        border-white/[0.08]
                        bg-[#020617]/80
                        px-3
                        py-2
                        font-mono
                        text-[9px]
                        text-[#64748B]
                        backdrop-blur-md
                      "
                    >
                      AI · QA · Software
                    </div>
                  </div>
                </div>
              ) : (
                /* =================================================
                   ARTÍCULOS SECUNDARIOS
                ================================================== */

                <div
                  className="
                    flex
                    min-h-[350px]
                    flex-col
                    p-7
                    sm:p-8
                  "
                >
                  {/* Cabecera */}

                  <div className="flex items-center justify-between">
                    <span
                      className="
                        font-mono
                        text-[11px]
                        tracking-[0.16em]
                        text-[#3DA5FF]
                      "
                    >
                      {article.number}
                    </span>

                    <span
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.14em]
                        text-[#475569]
                      "
                    >
                      {article.category}
                    </span>
                  </div>

                  <div className="mt-auto">

                    {/* Título */}

                    <h3
                      className="
                        font-poppins
                        text-2xl
                        font-semibold
                        leading-[1.2]
                        tracking-[-0.03em]
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-[#A7D3FF]
                      "
                    >
                      {article.title}
                    </h3>

                    {/* Descripción */}

                    <p
                      className="
                        mt-4
                        max-w-lg
                        text-[13px]
                        leading-6
                        text-[#718096]
                      "
                    >
                      {article.description}
                    </p>

                    {/* Metadata */}

                    <div
                      className="
                        mt-6
                        flex
                        items-center
                        gap-4
                        text-[10px]
                        uppercase
                        tracking-[0.12em]
                        text-[#475569]
                      "
                    >
                      <span>
                        {article.date}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-[#3DA5FF]/40" />

                      <span>
                        {article.readTime}
                      </span>
                    </div>

                    {/* Botón */}

                    <motion.a
                      href={article.href}
                      whileHover={{
                        x: 4,
                      }}
                      className="
                        mt-7
                        inline-flex
                        items-center
                        gap-3
                        text-sm
                        font-semibold
                        text-white
                        transition-colors
                        hover:text-[#A7D3FF]
                      "
                    >
                      <span>
                        Leer artículo
                      </span>

                      <span
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-md
                          bg-[#1E6BFF]
                          text-[12px]
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>
                    </motion.a>
                  </div>
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>

        {/* =====================================================
            VER TODOS
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.55,
          }}
          className="
            mt-10
            flex
            items-center
            justify-between
            border-t
            border-white/[0.08]
            pt-7
          "
        >
          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.18em]
              text-[#475569]
            "
          >
            Insights / 01—03
          </span>

          <motion.a
            href="/blog"
            whileHover={{
              x: 4,
            }}
            className="
              inline-flex
              items-center
              gap-3
              text-sm
              font-semibold
              text-white
              transition-colors
              hover:text-[#A7D3FF]
            "
          >
            <span>
              Ver todos los artículos
            </span>

            <span className="text-[#3DA5FF]">
              →
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}