"use client";

import { motion, type Variants } from "framer-motion";
import { FormEvent, useState } from "react";

const services = [
  "Desarrollo de software",
  "Desarrollo de páginas web",
  "Automatización",
  "Inteligencia Artificial",
  "Auditoría",
  "Consultoría",
  "Otro",
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
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function Contacto() {
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    const form = event.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
            "No se pudo enviar el mensaje."
        );
      }

      setSuccess(true);

      setService("");

      form.reset();

    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Ocurrió un error al enviar el mensaje."
      );

    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contacto"
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
          left-1/2
          top-[-220px]
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#1E6BFF]/[0.035]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-220px]
          right-[-180px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#3DA5FF]/[0.018]
          blur-[150px]
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
          className="
            border-b
            border-white/[0.08]
            pb-10
            sm:pb-12
          "
        >
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
              06
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
              Contacto
            </span>

          </div>

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
              lg:text-[64px]
            "
          >
            ¿Tienes un proyecto
            <br />

            <span className="devpass-gradient-text">
              en mente?
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-[15px]
              leading-7
              text-[#7F8EA3]
              sm:text-base
              sm:leading-8
            "
          >
            Cuéntame qué quieres construir. Podemos convertir una
            idea en una solución digital real.
          </p>
        </motion.header>


        {/* =====================================================
            CONTENIDO
        ====================================================== */}

        <div
          className="
            grid
            gap-8
            py-12
            lg:grid-cols-[0.75fr_1.25fr]
            lg:gap-16
            lg:py-16
          "
        >

          {/* =================================================
              INFORMACIÓN
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
            className="
              flex
              flex-col
              justify-between
            "
          >

            <div>

              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-[#3DA5FF]
                "
              >
                Hablemos
              </span>

              <h3
                className="
                  mt-5
                  max-w-md
                  font-poppins
                  text-2xl
                  font-semibold
                  leading-[1.2]
                  tracking-[-0.03em]
                  text-white
                  sm:text-3xl
                "
              >
                Una buena idea merece
                una buena solución.
              </h3>

              <p
                className="
                  mt-5
                  max-w-md
                  text-sm
                  leading-7
                  text-[#718096]
                "
              >
                Si tienes una idea, un proyecto en desarrollo o
                simplemente quieres explorar una solución
                tecnológica, escríbeme.
              </p>

            </div>


            {/* DATOS */}

            <div className="mt-12 space-y-6">

              {/* EMAIL */}

              <div
                className="
                  border-t
                  border-white/[0.08]
                  pt-5
                "
              >

                <span
                  className="
                    block
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    text-[#475569]
                  "
                >
                  Email
                </span>

                <a
                  href="mailto:TU_CORREO@GMAIL.COM"
                  className="
                    mt-2
                    inline-block
                    text-sm
                    text-[#A7D3FF]
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  JAIMESPASSUNIJEFERSON@GMAIL.COM
                </a>

              </div>


              {/* UBICACIÓN */}

              <div
                className="
                  border-t
                  border-white/[0.08]
                  pt-5
                "
              >

                <span
                  className="
                    block
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    text-[#475569]
                  "
                >
                  Ubicación
                </span>

                <span
                  className="
                    mt-2
                    block
                    text-sm
                    text-[#718096]
                  "
                >
                  Lima, Perú
                </span>

              </div>


              {/* DISPONIBILIDAD */}

              <div
                className="
                  border-t
                  border-white/[0.08]
                  pt-5
                "
              >

                <div className="flex items-center gap-2">

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#3DA5FF]
                      shadow-[0_0_8px_rgba(61,165,255,0.7)]
                    "
                  />

                  <span
                    className="
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.16em]
                      text-[#64748B]
                    "
                  >
                    Disponible para proyectos
                  </span>

                </div>

              </div>

            </div>

          </motion.div>


          {/* =================================================
              FORMULARIO
          ================================================== */}

          <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            onSubmit={handleSubmit}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-[#050D1A]
              p-6
              sm:p-8
              lg:p-10
            "
          >

            {/* GRID */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.025]
              "
              style={{
                backgroundImage:
                  "linear-gradient(to right, #3DA5FF 1px, transparent 1px), linear-gradient(to bottom, #3DA5FF 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            <div className="relative z-10">

              {/* CABECERA */}

              <motion.div
                variants={itemVariants}
                className="
                  mb-8
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/[0.06]
                  pb-5
                "
              >

                <div>

                  <span
                    className="
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.16em]
                      text-[#475569]
                    "
                  >
                    Nuevo proyecto
                  </span>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-medium
                      text-white
                    "
                  >
                    Cuéntame sobre tu idea
                  </p>

                </div>

                <span
                  className="
                    font-mono
                    text-[9px]
                    text-[#3DA5FF]
                  "
                >
                  06 / 06
                </span>

              </motion.div>


              {/* =================================================
                  NOMBRE + EMAIL
              ================================================== */}

              <div
                className="
                  grid
                  gap-5
                  sm:grid-cols-2
                "
              >

                {/* NOMBRE */}

                <motion.div variants={itemVariants}>

                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.14em]
                      text-[#64748B]
                    "
                  >
                    Nombre
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Tu nombre"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-[#020617]/70
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-[#475569]
                      transition-all
                      duration-300
                      focus:border-[#3DA5FF]/40
                      focus:bg-[#020617]
                      focus:ring-1
                      focus:ring-[#3DA5FF]/10
                    "
                  />

                </motion.div>


                {/* EMAIL */}

                <motion.div variants={itemVariants}>

                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.14em]
                      text-[#64748B]
                    "
                  >
                    Correo
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="tu@email.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-[#020617]/70
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-[#475569]
                      transition-all
                      duration-300
                      focus:border-[#3DA5FF]/40
                      focus:bg-[#020617]
                      focus:ring-1
                      focus:ring-[#3DA5FF]/10
                    "
                  />

                </motion.div>

              </div>


              {/* =================================================
                  EMPRESA
              ================================================== */}

              <motion.div
                variants={itemVariants}
                className="mt-5"
              >

                <label
                  htmlFor="company"
                  className="
                    mb-2
                    block
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.14em]
                    text-[#64748B]
                  "
                >
                  Empresa / Proyecto
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Nombre de tu empresa o proyecto"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-[#020617]/70
                    px-4
                    py-3.5
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-[#475569]
                    transition-all
                    duration-300
                    focus:border-[#3DA5FF]/40
                    focus:bg-[#020617]
                    focus:ring-1
                    focus:ring-[#3DA5FF]/10
                  "
                />

              </motion.div>


              {/* =================================================
                  SERVICIO
              ================================================== */}

              <motion.div
                variants={itemVariants}
                className="mt-5"
              >

                <label
                  htmlFor="service"
                  className="
                    mb-2
                    block
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.14em]
                    text-[#64748B]
                  "
                >
                  ¿Qué necesitas?
                </label>

                <select
                  id="service"
                  name="service"
                  value={service}
                  onChange={(event) =>
                    setService(event.target.value)
                  }
                  required
                  className="
                    w-full
                    appearance-none
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-[#020617]/70
                    px-4
                    py-3.5
                    text-sm
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#3DA5FF]/40
                    focus:bg-[#020617]
                    focus:ring-1
                    focus:ring-[#3DA5FF]/10
                  "
                >

                  <option
                    value=""
                    disabled
                    className="bg-[#020617]"
                  >
                    Selecciona un servicio
                  </option>

                  {services.map((item) => (
                    <option
                      key={item}
                      value={item}
                      className="bg-[#020617]"
                    >
                      {item}
                    </option>
                  ))}

                </select>

              </motion.div>


              {/* =================================================
                  MENSAJE
              ================================================== */}

              <motion.div
                variants={itemVariants}
                className="mt-5"
              >

                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.14em]
                    text-[#64748B]
                  "
                >
                  Cuéntame sobre tu proyecto
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Cuéntame qué quieres construir, qué problema quieres resolver o qué necesitas mejorar..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-[#020617]/70
                    px-4
                    py-3.5
                    text-sm
                    leading-6
                    text-white
                    outline-none
                    placeholder:text-[#475569]
                    transition-all
                    duration-300
                    focus:border-[#3DA5FF]/40
                    focus:bg-[#020617]
                    focus:ring-1
                    focus:ring-[#3DA5FF]/10
                  "
                />

              </motion.div>


              {/* =================================================
                  BOTÓN + ESTADO
              ================================================== */}

              <motion.div
                variants={itemVariants}
                className="
                  mt-6
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >

                <p
                  className="
                    max-w-xs
                    text-[10px]
                    leading-5
                    text-[#475569]
                  "
                >
                  Tus datos serán utilizados únicamente para
                  responder a tu solicitud.
                </p>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={
                    !loading
                      ? {
                          y: -2,
                          scale: 1.015,
                        }
                      : undefined
                  }
                  whileTap={
                    !loading
                      ? {
                          scale: 0.97,
                        }
                      : undefined
                  }
                  className="
                    group
                    inline-flex
                    w-fit
                    min-w-[155px]
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    border
                    border-[#3DA5FF]/30
                    bg-[#1E6BFF]
                    px-5
                    py-3.5
                    text-sm
                    font-medium
                    text-white
                    shadow-[0_10px_30px_rgba(30,107,255,0.15)]
                    transition-all
                    duration-300
                    hover:border-[#3DA5FF]/50
                    hover:bg-[#2875ff]
                    hover:shadow-[0_12px_35px_rgba(30,107,255,0.22)]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >

                  {loading ? (
                    <>
                      <span
                        className="
                          h-4
                          w-4
                          animate-spin
                          rounded-full
                          border-2
                          border-white/30
                          border-t-white
                        "
                      />

                      <span>
                        Enviando...
                      </span>
                    </>
                  ) : (
                    <>
                      <span>
                        Enviar mensaje
                      </span>

                      <span
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>
                    </>
                  )}

                </motion.button>

              </motion.div>


              {/* =================================================
                  ÉXITO
              ================================================== */}

              {success && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    mt-5
                    rounded-xl
                    border
                    border-[#3DA5FF]/15
                    bg-[#3DA5FF]/[0.04]
                    px-4
                    py-4
                  "
                >

                  <div className="flex items-start gap-3">

                    <span
                      className="
                        mt-0.5
                        flex
                        h-5
                        w-5
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#1E6BFF]
                        text-[10px]
                        text-white
                      "
                    >
                      ✓
                    </span>

                    <div>

                      <p
                        className="
                          text-sm
                          font-medium
                          text-[#A7D3FF]
                        "
                      >
                        Mensaje enviado correctamente.
                      </p>

                      <p
                        className="
                          mt-1
                          text-xs
                          leading-5
                          text-[#64748B]
                        "
                      >
                        Gracias por contactar con DevPass.
                        Te responderemos lo antes posible.
                      </p>

                    </div>

                  </div>

                </motion.div>
              )}


              {/* =================================================
                  ERROR
              ================================================== */}

              {error && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    mt-5
                    rounded-xl
                    border
                    border-red-400/10
                    bg-red-400/[0.03]
                    px-4
                    py-4
                  "
                >

                  <p
                    className="
                      text-xs
                      leading-5
                      text-red-300/80
                    "
                  >
                    {error}
                  </p>

                </motion.div>
              )}

            </div>
          </motion.form>
        </div>


        {/* =====================================================
            FRASE FINAL
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
            flex
            flex-col
            gap-4
            border-t
            border-white/[0.08]
            pt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
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
            DevPass / Contact
          </span>

          <p
            className="
              text-sm
              text-[#718096]
            "
          >
            Construyamos algo que valga la pena.
          </p>

        </motion.div>

      </div>
    </section>
  );
}