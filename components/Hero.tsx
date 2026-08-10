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
    <section className="relative overflow-hidden min-h-[88vh] flex items-center bg-[#EDE6D6] px-4 sm:px-6 lg:px-10 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 w-[30rem] h-[30rem] rounded-full bg-[#1F3D2E]/[0.06] blur-2xl"
      />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20 items-center">
        {/* Left: introduction */}
        <motion.div {...fadeUp()}>
          <h1 className="text-[#1F3D2E] tracking-tight">
            <span className="block text-[clamp(2.75rem,6vw,4.75rem)] font-normal text-[#6B6255] font-[family-name:var(--font-questrial)]">
              Hi, I&apos;m
            </span>
            <span className="mt-2 block text-[clamp(3rem,7.5vw,6rem)] leading-[0.95] whitespace-nowrap font-[family-name:var(--font-roxborough)] font-medium">
              Regina Ruiz
            </span>
          </h1>

          <p className="mt-8 text-2xl sm:text-3xl text-[#1F3D2E] font-[family-name:var(--font-questrial)] max-w-xl leading-snug">
            Developing electronic interfaces for sensing, stimulating, and understanding biological systems.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Link
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-[#1F3D2E] text-[#F3EDE1] px-8 py-4 text-base font-[family-name:var(--font-radio)] hover:bg-[#B4703A] transition-colors"
            >
              View my work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="text-base text-[#1F3D2E] font-[family-name:var(--font-radio)] border-b border-[#1F3D2E]/30 pb-0.5 hover:border-[#1F3D2E] transition-colors"
            >
              About me
            </Link>
          </div>
        </motion.div>

        {/* Right: portrait */}
        <motion.div {...fadeUp(0.15)} className="relative">
          <div className="relative mx-auto w-full max-w-lg aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#1F3D2E]/15 shadow-[0_30px_60px_-25px_rgba(31,61,46,0.4)]">
            <Image
              src="/headshot.jpg"
              alt="Portrait of Regina Ruiz"
              fill
              priority
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="object-cover object-[center_20%]"
            />
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="font-[family-name:var(--font-radio)] text-sm tracking-[0.2em] uppercase text-[#1F3D2E]">
              Bioengineering
            </span>
            <span aria-hidden className="text-[#1F3D2E]">
              ·
            </span>
            <span className="font-[family-name:var(--font-radio)] text-sm tracking-[0.2em] uppercase text-[#1F3D2E]">
              Bioelectronics
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
