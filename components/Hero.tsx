"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-center bg-[#EDE6D6]">
      {/* Cover image — fills the entire hero */}
      <Image
        src="/landingpagemain.png"
        alt="Electronic components — PCB, resistors, capacitors, and copper wire"
        fill
        priority
        className="object-cover object-[62%_center]"
      />

      {/* Readability veil so text sits comfortably over the image */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #EDE6D6 0%, #EDE6D6 40%, rgba(237,230,214,0.82) 54%, rgba(237,230,214,0.25) 72%, transparent 88%)",
        }}
      />

      {/* Soft decorative arches */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-[#1F3D2E]/[0.08] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-6rem] left-[6%] w-64 h-32 rounded-t-full border border-[#1F3D2E]/10"
      />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#1F3D2E]/[0.08] px-4 py-1.5 font-[family-name:var(--font-questrial)] text-sm tracking-widest uppercase text-[#1F3D2E]">
            Bioengineering · Bioelectronics
          </span>

          <h1 className="mt-7 text-6xl sm:text-7xl lg:text-8xl text-[#1F3D2E] tracking-tight font-[family-name:var(--font-questrial)]">
            Regina Ruiz
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#6B6255] max-w-xl leading-relaxed font-[family-name:var(--font-questrial)]">
            Bioengineering student building embedded hardware for biomedical devices.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[#1F3D2E] text-[#F3EDE1] px-8 py-4 text-base font-[family-name:var(--font-questrial)] hover:bg-[#B4703A] transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[#1F3D2E]/25 text-[#1F3D2E] px-8 py-4 text-base font-[family-name:var(--font-questrial)] hover:bg-[#1F3D2E]/5 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating detail badge over the board */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="absolute z-10 bottom-6 right-6 sm:right-12 rounded-t-full rounded-b-2xl bg-[#F3EDE1]/90 backdrop-blur-sm px-6 pt-4 pb-3 shadow-[0_16px_40px_-16px_rgba(31,61,46,0.35)]"
      >
        <span className="font-[family-name:var(--font-questrial)] text-sm tracking-wide text-[#1F3D2E]">
          PCB Design · Embedded Systems
        </span>
      </motion.div>
    </section>
  );
}
