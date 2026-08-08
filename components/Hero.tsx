"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const fadeUp = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  });

  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-center bg-[#EDE6D6] px-6 sm:px-12 lg:px-20 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 w-[30rem] h-[30rem] rounded-full bg-[#1F3D2E]/[0.06] blur-2xl"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-20 items-center">
        {/* Left: introduction */}
        <motion.div {...fadeUp()}>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#1F3D2E]/[0.08] px-4 py-1.5 font-[family-name:var(--font-questrial)] text-sm tracking-widest uppercase text-[#1F3D2E]">
            Bioengineering · Bioelectronics
          </span>

          <p className="mt-9 text-lg text-[#6B6255] font-[family-name:var(--font-questrial)]">
            Hi, I&apos;m
          </p>

          <h1 className="mt-1 text-[#1F3D2E] leading-[0.92] tracking-tight font-[family-name:var(--font-questrial)]">
            <span className="block text-[clamp(3.25rem,9vw,7.5rem)]">Regina</span>
            <span className="block text-[clamp(3.25rem,9vw,7.5rem)]">Ruiz</span>
          </h1>

          <p className="mt-8 text-2xl sm:text-3xl text-[#1F3D2E] font-[family-name:var(--font-questrial)] max-w-xl leading-snug">
            I build technology at the intersection of biology and electronics.
          </p>

          <p className="mt-5 text-lg text-[#6B6255] max-w-lg leading-relaxed">
            Bioengineer developing embedded hardware, biomedical devices, research instrumentation, and computational tools for biological systems.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Link
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-[#1F3D2E] text-[#F3EDE1] px-8 py-4 text-base font-[family-name:var(--font-questrial)] hover:bg-[#B4703A] transition-colors"
            >
              View my work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="text-base text-[#1F3D2E] font-[family-name:var(--font-questrial)] border-b border-[#1F3D2E]/30 pb-0.5 hover:border-[#1F3D2E] transition-colors"
            >
              About me
            </Link>
          </div>
        </motion.div>

        {/* Right: portrait */}
        <motion.div {...fadeUp(0.15)} className="relative">
          <div className="relative mx-auto w-full max-w-sm aspect-[3/4] rounded-t-full rounded-b-[2.5rem] overflow-hidden border border-[#1F3D2E]/15 shadow-[0_30px_60px_-25px_rgba(31,61,46,0.4)]">
            <Image
              src="/headshot.jpg"
              alt="Portrait of Regina Ruiz"
              fill
              priority
              sizes="(min-width: 1024px) 32vw, 80vw"
              className="object-cover object-[center_18%]"
            />
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-[#1F3D2E]/25" />
            <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[#6B6255]">
              Hardware × Biology
            </span>
            <span aria-hidden className="h-px w-8 bg-[#1F3D2E]/25" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
