"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  "Desarrollo de software",
  "Desarrollo de páginas web",
  "Automatización",
  "Inteligencia Artificial",
  "Auditoría",
  "Consultoría",
  "Otro",
];

export default function ContactForm() {
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      nombre: String(formData.get("nombre") || ""),
      email: String(formData.get("email") || ""),
      empresa: String(formData.get("empresa") || ""),
      servicio: service,
      mensaje: String(formData.get("mensaje") || ""),
    };

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el mensaje.");
      }

      setSuccess(true);
      setService("");
      form.reset();
    } catch {
      setError(
        "No pudimos enviar tu mensaje. Inténtalo nuevamente en unos segundos."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="formulario-contacto"
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/[0.07]
        bg-[#050D1A]
      "
    >
      {/* ATMÓSFERA */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -right-40
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#1E6BFF]/[0.045]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            bottom-[-200px]
            left-[-150px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#3DA5FF]/[0.025]
            blur-[120px]
          "
        />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(61,165,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(61,165,255,0.7) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative grid lg:grid-cols-[0.7fr_1.3fr]">

        {/* =================================================
            INFO
        ================================================== */}

        <div
          className="
            border-b
            border-white/[0.07]
            p-7
            sm:p-10
            lg:border-b-0
            lg:border-r
            lg:p-12
          "
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#3DA5FF]" />

            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-[#3DA5FF]
              "
            >
              DEVPASS / CONTACT
            </span>
          </div>

          <h3
            className="
              mt-8
              max-w-md
              font-poppins
              text-3xl
              font-semibold
              leading-tight
              tracking-[-0.035em]
              sm:text-4xl
            "
          >
            Una idea.
            <br />

            <span className="devpass-gradient-text">
              Una solución.
            </span>
          </h3>

          <p className="mt-6 max-w-md text-sm leading-7 text-[#718096]">
            No necesitas tener definido todo el proyecto. Cuéntanos qué
            quieres conseguir y construiremos el camino desde ahí.
          </p>

          {/* DIRECT CONTACT */}

          <div className="mt-12 border-t border-white/[0.07] pt-7">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#475569]">
              CONTACTO DIRECTO
            </span>

            <a
              href="mailto:JAIMESPASSUNIJEFERSON@GMAIL.COM"
              className="
                mt-3
                block
                break-all
                text-sm
                font-medium
                text-[#A7D3FF]
                transition-colors
                hover:text-white
              "
            >
              JAIMESPASSUNIJEFERSON@GMAIL.COM
            </a>
          </div>

          {/* LOCATION */}

          <div className="mt-7 border-t border-white/[0.07] pt-7">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#475569]">
              UBICACIÓN
            </span>

            <p className="mt-3 text-sm text-[#A7B4C8]">
              Lima, Perú
            </p>

            <p className="mt-1 text-xs text-[#475569]">
              Trabajo remoto · Proyectos digitales
            </p>
          </div>

          {/* AVAILABILITY */}

          <div className="mt-7 flex items-center gap-3">
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#3DA5FF]
                shadow-[0_0_12px_rgba(61,165,255,0.75)]
              "
            />

            <span className="text-xs text-[#64748B]">
              Disponible para nuevos proyectos
            </span>
          </div>
        </div>

        {/* =================================================
            FORM
        ================================================== */}

        <div className="p-7 sm:p-10 lg:p-12">

          <div className="mb-9">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#475569]">
              NUEVO PROYECTO
            </span>

            <h3 className="mt-3 font-poppins text-xl font-semibold">
              Cuéntanos qué tienes en mente.
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">

            {/* NAME + EMAIL */}

            <div className="grid gap-7 sm:grid-cols-2">

              <div className="group">
                <label
                  htmlFor="contact-name"
                  className="
                    mb-3
                    block
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    text-[#64748B]
                  "
                >
                  Nombre
                </label>

                <input
                  id="contact-name"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="
                    w-full
                    border-b
                    border-white/[0.1]
                    bg-transparent
                    pb-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-[#334155]
                    transition
                    focus:border-[#3DA5FF]
                  "
                />
              </div>

              <div className="group">
                <label
                  htmlFor="contact-email"
                  className="
                    mb-3
                    block
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    text-[#64748B]
                  "
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="
                    w-full
                    border-b
                    border-white/[0.1]
                    bg-transparent
                    pb-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-[#334155]
                    transition
                    focus:border-[#3DA5FF]
                  "
                />
              </div>

            </div>

            {/* COMPANY + SERVICE */}

            <div className="grid gap-7 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="contact-company"
                  className="
                    mb-3
                    block
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    text-[#64748B]
                  "
                >
                  Empresa
                  <span className="ml-1 text-[#334155]">
                    · opcional
                  </span>
                </label>

                <input
                  id="contact-company"
                  name="empresa"
                  type="text"
                  placeholder="Nombre de empresa"
                  className="
                    w-full
                    border-b
                    border-white/[0.1]
                    bg-transparent
                    pb-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-[#334155]
                    transition
                    focus:border-[#3DA5FF]
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="contact-service"
                  className="
                    mb-3
                    block
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    text-[#64748B]
                  "
                >
                  Servicio
                </label>

                <select
                  id="contact-service"
                  value={service}
                  onChange={(event) =>
                    setService(event.target.value)
                  }
                  required
                  className="
                    w-full
                    border-b
                    border-white/[0.1]
                    bg-transparent
                    pb-3
                    text-sm
                    text-white
                    outline-none
                    transition
                    focus:border-[#3DA5FF]
                  "
                >
                  <option
                    value=""
                    disabled
                    className="bg-[#050D1A]"
                  >
                    Selecciona una opción
                  </option>

                  {services.map((item) => (
                    <option
                      key={item}
                      value={item}
                      className="bg-[#050D1A]"
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* MESSAGE */}

            <div>
              <label
                htmlFor="contact-message"
                className="
                  mb-3
                  block
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.16em]
                  text-[#64748B]
                "
              >
                Cuéntanos sobre el proyecto
              </label>

              <textarea
                id="contact-message"
                name="mensaje"
                required
                rows={5}
                placeholder="¿Qué quieres construir? ¿Qué problema necesitas resolver?"
                className="
                  w-full
                  resize-none
                  border-b
                  border-white/[0.1]
                  bg-transparent
                  pb-3
                  text-sm
                  leading-7
                  text-white
                  outline-none
                  placeholder:text-[#334155]
                  transition
                  focus:border-[#3DA5FF]
                "
              />
            </div>

            {/* STATUS */}

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
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-[#3DA5FF]/15
                  bg-[#3DA5FF]/[0.05]
                  p-4
                "
              >
                <span
                  className="
                    flex
                    h-5
                    w-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#3DA5FF]/10
                  "
                >
                  <Check
                    size={11}
                    className="text-[#3DA5FF]"
                  />
                </span>

                <div>
                  <p className="text-sm font-medium text-[#A7D3FF]">
                    Mensaje enviado correctamente.
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#64748B]">
                    Gracias por escribir a DevPass. Nos pondremos en
                    contacto contigo.
                  </p>
                </div>
              </motion.div>
            )}

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
                  rounded-xl
                  border
                  border-red-400/10
                  bg-red-400/[0.04]
                  p-4
                  text-xs
                  leading-6
                  text-red-300
                "
              >
                {error}
              </motion.div>
            )}

            {/* SUBMIT */}

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">

              <p className="max-w-xs text-[10px] leading-5 text-[#475569]">
                Al enviar este formulario recibirás una respuesta
                directamente al correo proporcionado.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#1E6BFF]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_12px_35px_rgba(30,107,255,0.18)]
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-[#2873ff]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  disabled:hover:translate-y-0
                "
              >
                {loading ? (
                  <>
                    <Loader2
                      size={15}
                      className="animate-spin"
                    />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <ArrowRight size={15} />
                  </>
                )}
              </button>

            </div>

          </form>
        </div>
      </div>
    </section>
  );
}