"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const EMAIL = "regina.ruiz2004@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/reginaruizb";
const GITHUB_URL = "https://github.com/reginaruiz2004";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const fadeUp = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  });

  return (
    <>
      <div className="relative w-full bg-[#EDE6D6] px-4 py-16 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-full h-10 z-10 bg-gradient-to-b from-[#1F3D2E]/20 via-[#1F3D2E]/[0.05] to-transparent"
        />
        <motion.h1
          id="contact-heading"
          {...fadeUp()}
          className="text-center text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[0.95] tracking-tight text-[#1F3D2E] font-[family-name:var(--font-roxborough)] font-medium"
        >
          Want to collaborate?
        </motion.h1>
      </div>

      <section aria-labelledby="contact-heading" className="relative px-4 sm:px-8 lg:px-12 py-24 bg-[#EDE6D6]">
        <div
          aria-hidden
          className="hidden sm:block pointer-events-none absolute top-20 right-[8%] w-48 h-24 rounded-t-full border border-[#1F3D2E]/10"
        />

        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp(0.05)}>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-block text-2xl sm:text-3xl text-[#1F3D2E] font-[family-name:var(--font-questrial)] hover:text-[#B4703A] transition-colors"
            >
              {EMAIL}
            </a>

            <div className="mt-8 flex justify-center">
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-2 rounded-full bg-[#1F3D2E] text-[#F3EDE1] px-8 py-4 text-base font-[family-name:var(--font-questrial)] hover:bg-[#B4703A] transition-colors"
              >
                Send me an email
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="mt-20 pt-10 border-t border-[#1F3D2E]/10">
            <span className="font-[family-name:var(--font-mono)] text-sm tracking-[0.2em] uppercase text-[#B4703A]">
              Elsewhere
            </span>
            <div className="mt-4 flex items-center justify-center gap-8 font-[family-name:var(--font-mono)] text-sm uppercase tracking-wide text-[#6B6255]">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#1F3D2E] transition-colors"
              >
                LinkedIn
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#1F3D2E] transition-colors"
              >
                GitHub
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.p {...fadeUp(0.2)} className="mt-16 text-sm text-[#6B6255]/80">
            Based at Lehigh University · Open to research and engineering opportunities
          </motion.p>
        </div>
      </section>
    </>
  );
}
