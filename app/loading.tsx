"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] text-[#f8faff]">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(61,165,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(61,165,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.08, 0.14, 0.08],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e6bff] blur-[140px]"
        />

        <div className="absolute left-[8%] top-[18%] hidden h-28 w-28 rounded-full border border-[#3da5ff]/10 md:block" />

        <div className="absolute bottom-[18%] right-[8%] hidden h-36 w-36 rounded-full border border-[#3da5ff]/10 md:block" />
      </div>

      {/* =========================================================
          DECORATIVE RINGS
      ========================================================== */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3da5ff]/10"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#3da5ff]/10"
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6 text-center">

        {/* =======================================================
            LOGO DEVPASS
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
          }}
          className="relative"
        >
          {/* Glow */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.18, 0.3, 0.18],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-[#3da5ff] blur-2xl"
          />

          {/* Rotating ring */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-3 rounded-[28px] border border-[#3da5ff]/10"
          />

          {/* Logo container */}

          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 rgba(61,165,255,0)",
                "0 0 40px rgba(61,165,255,0.25)",
                "0 0 0 rgba(61,165,255,0)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-[#3da5ff]/20 bg-[#071a34]"
          >
            <motion.div
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/devpass-robot.png"
                alt="DevPass"
                width={62}
                height={62}
                priority
                className="h-[62px] w-[62px] object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* =======================================================
            BRAND
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="mt-6"
        >
          <p className="font-poppins text-2xl font-semibold tracking-tight">
            <span className="text-white">Dev</span>
            <span className="text-[#3da5ff]">Pass</span>
          </p>

          <p className="mt-2 font-mono text-[10px] tracking-[0.22em] text-[#475569]">
            TECHNOLOGY · DEVELOPMENT · AI
          </p>
        </motion.div>

        {/* =======================================================
            STATUS
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          className="mt-10 w-full"
        >
          <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.14em]">
            <span className="text-[#64748b]">
              SYSTEM
            </span>

            <motion.span
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="text-[#3da5ff]"
            >
              LOADING
            </motion.span>
          </div>

          {/* PROGRESS */}

          <div className="mt-3 h-px w-full overflow-hidden bg-[#0b1c31]">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#3da5ff] to-transparent"
            />
          </div>
        </motion.div>

        {/* =======================================================
            TERMINAL
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className="mt-8 w-full overflow-hidden rounded-xl border border-white/[0.06] bg-[#010712] text-left"
        >
          <div className="flex items-center gap-2 border-b border-white/[0.05] px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-[#334155]" />
            <span className="h-2 w-2 rounded-full bg-[#334155]" />
            <span className="h-2 w-2 rounded-full bg-[#334155]" />

            <span className="ml-2 font-mono text-[9px] tracking-[0.12em] text-[#475569]">
              devpass-system
            </span>
          </div>

          <div className="space-y-1 px-4 py-4 font-mono text-[10px] leading-6">
            <LoadingLine text="initializing interface..." />

            <LoadingLine
              text="loading components..."
              delay={0.15}
            />

            <LoadingLine
              text="checking environment..."
              delay={0.3}
            />

            <LoadingLine
              text="preparing experience..."
              delay={0.45}
            />
          </div>
        </motion.div>

        {/* =======================================================
            FOOTER
        ======================================================== */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
          }}
          className="mt-7 font-mono text-[9px] tracking-[0.16em] text-[#334155]"
        >
          BUILD · LEARN · DOCUMENT
        </motion.p>
      </div>
    </main>
  );
}

/* ================================================================
   LOADING LINE
================================================================ */

function LoadingLine({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -8,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.4,
        delay,
      }}
      className="flex items-center gap-2"
    >
      <span className="text-[#3da5ff]">
        &gt;
      </span>

      <span className="text-[#64748b]">
        {text}
      </span>

      <motion.span
        animate={{
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          delay,
        }}
        className="text-[#3da5ff]"
      >
        ...
      </motion.span>
    </motion.div>
  );
}