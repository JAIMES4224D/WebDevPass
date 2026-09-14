import Navbar from "@/components/Navbar";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Check,
  Code2,
  Globe2,
  BrainCircuit,
  Workflow,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Desarrollo de software",
    description:
      "Aplicaciones y sistemas diseñados para resolver necesidades reales de negocio.",
  },
  {
    icon: Globe2,
    number: "02",
    title: "Desarrollo web",
    description:
      "Sitios web modernos, rápidos, responsive y orientados a resultados.",
  },
  {
    icon: BrainCircuit,
    number: "03",
    title: "Inteligencia Artificial",
    description:
      "Soluciones inteligentes aplicadas a procesos, productos y operaciones.",
  },
  {
    icon: Workflow,
    number: "04",
    title: "Automatización",
    description:
      "Convertimos tareas repetitivas en procesos digitales más eficientes.",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Auditoría",
    description:
      "Análisis técnico de sistemas, infraestructura y procesos tecnológicos.",
  },
  {
    icon: Lightbulb,
    number: "06",
    title: "Consultoría",
    description:
      "Acompañamiento técnico para tomar mejores decisiones tecnológicas.",
  },
];

const process = [
  {
    number: "01",
    title: "Descubrimiento",
    description:
      "Entendemos tu necesidad, el problema y el resultado que quieres conseguir.",
  },
  {
    number: "02",
    title: "Estrategia",
    description:
      "Definimos la solución, alcance, arquitectura y prioridades del proyecto.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Construimos, probamos y refinamos la solución de forma progresiva.",
  },
  {
    number: "04",
    title: "Lanzamiento",
    description:
      "Entregamos una solución preparada para comenzar a generar valor.",
  },
];

const reasons = [
  "Enfoque orientado a problemas reales",
  "Comunicación directa durante el proyecto",
  "Tecnología seleccionada según la necesidad",
  "Soluciones escalables y mantenibles",
];

const webPageSchema = createWebPageSchema({
  name: "Contacto | Desarrollo de Software, IA y Soluciones Digitales | DevPass",
  description:
    "Contacta con DevPass para desarrollar software, sitios web, soluciones con inteligencia artificial, automatizaciones, auditorías y proyectos tecnológicos a medida.",
  path: "/contacto",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "Contacto", path: "/contacto" },
]);

export default function ContactoPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema,
          breadcrumbSchema,
        ]}
      />
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#020617] text-white">

        {/* =====================================================
            ATMÓSFERA
        ====================================================== */}

        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div
            className="
              absolute
              left-[-200px]
              top-[-250px]
              h-[650px]
              w-[650px]
              rounded-full
              bg-[#1E6BFF]/[0.045]
              blur-[180px]
            "
          />

          <div
            className="
              absolute
              right-[-250px]
              top-[35%]
              h-[700px]
              w-[700px]
              rounded-full
              bg-[#3DA5FF]/[0.025]
              blur-[180px]
            "
          />

          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(61,165,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(61,165,255,0.8) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative z-10">

          {/* =================================================
              HERO
          ================================================== */}

          <section
            className="
              devpass-container
              pb-20
              pt-36
              sm:pt-40
              lg:pb-28
              lg:pt-48
            "
          >
            <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">

              <div>
                <div className="mb-7 flex items-center gap-3">
                  <span className="font-mono text-[10px] font-medium tracking-[0.2em] text-[#3DA5FF]">
                    06
                  </span>

                  <span className="h-px w-8 bg-[#3DA5FF]/40" />

                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#64748B]">
                    Contacto
                  </span>
                </div>

                <h1
                  className="
                    max-w-5xl
                    font-poppins
                    text-5xl
                    font-semibold
                    leading-[0.98]
                    tracking-[-0.055em]
                    sm:text-6xl
                    lg:text-[78px]
                  "
                >
                  Construyamos
                  <br />

                  <span className="devpass-gradient-text">
                    algo que importe.
                  </span>
                </h1>

                <p
                  className="
                    mt-8
                    max-w-2xl
                    text-[15px]
                    leading-8
                    text-[#7F8EA3]
                    sm:text-base
                  "
                >
                  Cuéntanos qué quieres construir, qué problema quieres
                  resolver o qué proceso quieres mejorar. Desde DevPass
                  transformamos necesidades reales en soluciones digitales.
                </p>
              </div>

              {/* STATUS */}

              <div
                className="
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-[#050D1A]/70
                  p-7
                  backdrop-blur-xl
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#3DA5FF]
                      shadow-[0_0_12px_rgba(61,165,255,0.8)]
                    "
                  />

                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#A7D3FF]">
                    Disponible para proyectos
                  </span>
                </div>

                <p className="mt-6 text-sm leading-7 text-[#718096]">
                  Desarrollo de software, soluciones web, automatización,
                  inteligencia artificial, auditoría y consultoría tecnológica.
                </p>

                <div className="mt-7 border-t border-white/[0.06] pt-5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#475569]">
                    Base
                  </span>

                  <p className="mt-2 text-sm text-[#A7B4C8]">
                    Lima, Perú · Trabajo digital
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* =================================================
              SERVICES
          ================================================== */}

          <section className="border-y border-white/[0.06] py-24">
            <div className="devpass-container">

              <div className="mb-14 max-w-3xl">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#3DA5FF]">
                  ¿QUÉ PODEMOS CONSTRUIR?
                </span>

                <h2 className="mt-5 font-poppins text-3xl font-semibold sm:text-4xl">
                  Tecnología aplicada a objetivos concretos.
                </h2>

                <p className="mt-5 leading-8 text-[#94A3B8]">
                  No partimos de una tecnología para buscarle un problema.
                  Partimos de tu necesidad y construimos la solución adecuada.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.number}
                      className="
                        group
                        rounded-2xl
                        border
                        border-white/[0.07]
                        bg-[#050D1A]
                        p-7
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#3DA5FF]/20
                        hover:bg-[#071426]
                      "
                    >

                      <div className="flex items-center justify-between">

                        <span className="font-mono text-[10px] text-[#3DA5FF]">
                          {service.number}
                        </span>

                        <Icon
                          size={18}
                          strokeWidth={1.5}
                          className="
                            text-[#475569]
                            transition-colors
                            duration-300
                            group-hover:text-[#3DA5FF]
                          "
                        />

                      </div>

                      <h3 className="mt-9 font-poppins text-lg font-semibold">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#64748B]">
                        {service.description}
                      </p>

                    </div>
                  );
                })}

              </div>
            </div>
          </section>

          {/* =================================================
              WHY DEVPASS
          ================================================== */}

          <section className="border-b border-white/[0.06] py-24">
            <div className="devpass-container">

              <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#3DA5FF]">
                    POR QUÉ DEVPASS
                  </span>

                  <h2
                    className="
                      mt-5
                      max-w-xl
                      font-poppins
                      text-3xl
                      font-semibold
                      leading-tight
                      sm:text-4xl
                    "
                  >
                    No se trata solo de escribir código.
                  </h2>
                </div>

                <div>

                  <p className="max-w-2xl text-lg leading-9 text-[#CBD5E1]">
                    Una buena solución tecnológica debe entender el problema
                    antes de intentar resolverlo.
                  </p>

                  <div className="mt-9 space-y-4">

                    {reasons.map((reason) => (
                      <div
                        key={reason}
                        className="
                          flex
                          items-center
                          gap-4
                          border-t
                          border-white/[0.07]
                          pt-4
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
                            bg-[#1E6BFF]/10
                          "
                        >
                          <Check
                            size={11}
                            className="text-[#3DA5FF]"
                          />
                        </span>

                        <span className="text-sm text-[#94A3B8]">
                          {reason}
                        </span>

                      </div>
                    ))}

                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* =================================================
              PROCESS
          ================================================== */}

          <section className="border-b border-white/[0.06] py-24">
            <div className="devpass-container">

              <div className="mb-14">

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#3DA5FF]">
                  CÓMO TRABAJAMOS
                </span>

                <h2 className="mt-5 font-poppins text-3xl font-semibold sm:text-4xl">
                  Del problema al producto.
                </h2>

              </div>

              <div className="grid gap-4 lg:grid-cols-4">

                {process.map((item, index) => (
                  <div
                    key={item.number}
                    className="
                      relative
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-[#050D1A]
                      p-7
                    "
                  >

                    <span className="font-mono text-[10px] text-[#3DA5FF]">
                      {item.number}
                    </span>

                    <h3 className="mt-8 font-poppins text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#64748B]">
                      {item.description}
                    </p>

                    {index < process.length - 1 && (
                      <ArrowRight
                        size={17}
                        strokeWidth={1.2}
                        className="
                          absolute
                          -right-3
                          top-1/2
                          hidden
                          -translate-y-1/2
                          text-[#3DA5FF]/30
                          lg:block
                        "
                      />
                    )}

                  </div>
                ))}

              </div>
            </div>
          </section>

          {/* =================================================
              FORMULARIO
          ================================================== */}

          <section>

             <Contacto />
            
          </section>

          {/* =================================================
              DIRECT CONTACT
          ================================================== */}

          <section className="border-t border-white/[0.06] py-20">
            <div className="devpass-container">

              <div
                className="
                  grid
                  gap-8
                  rounded-3xl
                  border
                  border-[#3DA5FF]/10
                  bg-[#0A1F3D]/25
                  p-8
                  sm:p-10
                  lg:grid-cols-[1fr_auto]
                  lg:items-center
                "
              >

                <div>

                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#3DA5FF]">
                    CONTACTO DIRECTO
                  </span>

                  <h2 className="mt-4 font-poppins text-2xl font-semibold">
                    ¿Prefieres escribir directamente?
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#64748B]">
                    También puedes contactar directamente con DevPass por
                    correo electrónico.
                  </p>

                </div>

                <a
                  href="mailto:JAIMESPASSUNIJEFERSON@GMAIL.COM"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    text-sm
                    font-medium
                    text-[#A7D3FF]
                    transition
                    hover:text-white
                  "
                >
                  JAIMESPASSUNIJEFERSON@GMAIL.COM
                  <ArrowRight size={15} />
                </a>

              </div>
            </div>
          </section>

          {/* =================================================
              FINAL CTA
          ================================================== */}

          <section className="border-t border-white/[0.06] py-24">
            <div className="devpass-container text-center">

              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#3DA5FF]">
                DEVPASS
              </span>

              <h2
                className="
                  mx-auto
                  mt-5
                  max-w-4xl
                  font-poppins
                  text-4xl
                  font-semibold
                  leading-tight
                  tracking-[-0.04em]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Tu próximo proyecto
                <br />

                <span className="devpass-gradient-text">
                  puede empezar aquí.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#64748B]">
                Una conversación puede ser el primer paso para convertir una
                idea en algo real.
              </p>

              <a
                href="#contacto"
                className="
                  mt-9
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-[#1E6BFF]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_35px_rgba(30,107,255,0.18)]
                  transition
                  hover:-translate-y-0.5
                  hover:bg-[#2873ff]
                "
              >
                Hablemos
                <ArrowRight size={16} />
              </a>

            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}