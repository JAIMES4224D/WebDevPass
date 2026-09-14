"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CircleAlert,
  Terminal,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#020617] text-[#f8faff]">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(61,165,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(61,165,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />

        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#1e6bff]/10 blur-[140px]" />

        <div className="absolute bottom-[-180px] left-[-120px] h-[420px] w-[420px] rounded-full bg-[#3da5ff]/5 blur-[120px]" />

        <div className="absolute right-[-100px] top-[30%] h-[360px] w-[360px] rounded-full bg-[#1e6bff]/5 blur-[120px]" />
      </div>

      {/* =========================================================
          DECORATIVE HUD
      ========================================================== */}

      <div className="absolute left-[6%] top-[18%] hidden h-24 w-24 rounded-full border border-[#3da5ff]/10 md:block" />

      <div className="absolute left-[7.5%] top-[20.5%] hidden h-16 w-16 rounded-full border border-[#3da5ff]/10 md:block" />

      <div className="absolute right-[7%] top-[22%] hidden h-28 w-28 rounded-full border border-[#3da5ff]/10 md:block" />

      <div className="absolute right-[8.5%] top-[24%] hidden h-20 w-20 rounded-full border border-[#3da5ff]/10 md:block" />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="devpass-container relative flex min-h-screen w-full items-center justify-center py-16">
        <div className="w-full max-w-5xl">
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex items-center justify-center"
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >
              <div className="relative flex h-11 w-11 items-center justify-center">
                <div className="absolute inset-0 rounded-xl bg-[#1e6bff]/15 blur-md transition-all duration-300 group-hover:bg-[#1e6bff]/25" />

                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-[#3da5ff]/20 bg-[#071a34]">
                  <span className="font-mono text-sm font-bold text-[#a7d3ff]">
                    D
                  </span>
                </div>
              </div>

              <span className="font-poppins text-xl font-semibold tracking-tight">
                <span className="text-white">Dev</span>
                <span className="text-[#3da5ff]">Pass</span>
              </span>
            </Link>
          </motion.div>

          {/* MAIN */}
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px]">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-[#3da5ff]">
                  SYSTEM
                </span>

                <span className="h-px w-10 bg-[#3da5ff]/30" />

                <span className="font-mono text-[10px] tracking-[0.16em] text-[#475569]">
                  ROUTE_ERROR
                </span>
              </div>

              <div className="relative">
                <motion.h1
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-poppins text-[100px] font-semibold leading-none tracking-[-0.06em] text-white sm:text-[140px] md:text-[170px]"
                >
                  404
                </motion.h1>

                <div className="absolute left-2 top-1/2 h-px w-32 bg-gradient-to-r from-[#3da5ff]/50 to-transparent md:left-4 md:w-52" />
              </div>

              <h2 className="mt-5 font-poppins text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Esta ruta no existe.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-8 text-[#64748b] md:text-base">
                La página que estás buscando no existe, fue movida o la
                dirección ingresada no es válida.
              </p>

              {/* TERMINAL */}
              <div className="mt-8 max-w-xl overflow-hidden rounded-2xl border border-white/[0.06] bg-[#010712]">
                <div className="flex items-center gap-2 border-b border-white/[0.05] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#334155]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#334155]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#334155]" />

                  <span className="ml-2 font-mono text-[10px] tracking-[0.12em] text-[#475569]">
                    devpass-terminal
                  </span>
                </div>

                <div className="p-5 font-mono text-xs leading-7">
                  <div className="flex gap-2">
                    <span className="text-[#3da5ff]">$</span>

                    <span className="text-[#64748b]">
                      navigate --route current
                    </span>
                  </div>

                  <div className="mt-1 flex gap-2">
                    <span className="text-[#3da5ff]">&gt;</span>

                    <span className="text-[#94a3b8]">
                      searching route...
                    </span>
                  </div>

                  <div className="mt-1 flex gap-2">
                    <span className="text-[#3da5ff]">&gt;</span>

                    <span className="text-[#ef4444]/80">
                      ERROR: route_not_found
                    </span>
                  </div>

                  <div className="mt-1 flex gap-2">
                    <span className="text-[#3da5ff]">&gt;</span>

                    <span className="text-[#475569]">
                      status: 404
                    </span>
                  </div>

                  <div className="mt-1 flex gap-2">
                    <span className="text-[#3da5ff]">&gt;</span>

                    <span className="text-[#475569]">
                      recovery: available
                    </span>
                  </div>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="devpass-gradient group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(30,107,255,0.18)]"
                >
                  <ArrowLeft size={16} />

                  Volver al inicio
                </Link>

                <Link
                  href="/proyectos"
                  className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#020b18] px-5 py-3 text-sm font-medium text-[#a7d3ff] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3da5ff]/20 hover:bg-[#071a34]"
                >
                  Explorar proyectos

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              {/* GLOW */}
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e6bff]/10 blur-[90px]" />

              {/* SYSTEM CARD */}
              <div className="relative overflow-hidden rounded-3xl border border-[#3da5ff]/10 bg-[#061326]/80 p-7 backdrop-blur-xl">
                {/* TOP LINE */}
                <div className="flex items-center justify-between border-b border-white/[0.05] pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#3da5ff]/15 bg-[#071a34] text-[#3da5ff]">
                      <Terminal size={18} />
                    </div>

                    <div>
                      <p className="font-mono text-[10px] tracking-[0.18em] text-[#3da5ff]">
                        DEVPASS
                      </p>

                      <p className="mt-1 text-xs text-[#475569]">
                        Navigation system
                      </p>
                    </div>
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#ef4444]/10 bg-[#ef4444]/5 text-[#ef4444]/70">
                    <CircleAlert size={15} />
                  </div>
                </div>

                {/* STATUS */}
                <div className="py-7">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#64748b]">
                      Route status
                    </span>

                    <span className="font-mono text-[10px] text-[#ef4444]/70">
                      NOT_FOUND
                    </span>
                  </div>

                  <div className="mt-4 h-1 overflow-hidden rounded-full bg-[#0b1c31]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "28%" }}
                      transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-[#3da5ff]"
                    />
                  </div>
                </div>

                {/* INFO */}
                <div className="space-y-3 border-t border-white/[0.05] pt-6">
                  <StatusRow
                    label="System"
                    value="ONLINE"
                    positive
                  />

                  <StatusRow
                    label="DevPass"
                    value="ONLINE"
                    positive
                  />

                  <StatusRow
                    label="Route"
                    value="404"
                  />

                  <StatusRow
                    label="Recovery"
                    value="READY"
                    positive
                  />
                </div>

                {/* BOTTOM */}
                <div className="mt-7 border-t border-white/[0.05] pt-5">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#3da5ff] shadow-[0_0_12px_rgba(61,165,255,0.7)]" />

                    <span className="font-mono text-[10px] tracking-[0.14em] text-[#475569]">
                      SYSTEM OPERATIONAL
                    </span>
                  </div>
                </div>
              </div>

              {/* DECORATIVE ELEMENT */}
              <div className="absolute -bottom-5 -right-5 hidden h-24 w-24 rounded-2xl border border-[#3da5ff]/10 bg-[#020b18]/80 backdrop-blur-md md:block">
                <div className="flex h-full items-center justify-center">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-[#3da5ff]/60">
                    404
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FOOTER LINE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 flex flex-col gap-3 border-t border-white/[0.05] pt-6 text-[10px] text-[#334155] sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="font-mono tracking-[0.12em]">
              DEVPASS · TECNOLOGÍA · DESARROLLO · IA
            </span>

            <span className="font-mono tracking-[0.12em]">
              BUILD · LEARN · DOCUMENT
            </span>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

/* ================================================================
   STATUS ROW
================================================================ */

function StatusRow({
  label,
  value,
  positive = false,
}: {
  label: string;
  value: string;
  positive?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            positive ? "bg-[#3da5ff]" : "bg-[#ef4444]/70"
          }`}
        />

        <span className="text-xs text-[#64748b]">
          {label}
        </span>
      </div>

      <span
        className={`font-mono text-[10px] ${
          positive ? "text-[#3da5ff]" : "text-[#ef4444]/70"
        }`}
      >
        {value}
      </span>
    </div>
  );
}