"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CircuitBoard, Microscope, ChartLine } from "lucide-react";
import { cardGradients } from "@/lib/palette";

const facts: { label: string; value: string }[] = [
  { label: "Focus", value: "Bioelectronics · Embedded Systems" },
  { label: "University", value: "Lehigh University" },
  { label: "Graduation", value: "May 2027" },
  { label: "Locations", value: "Monterrey, Mexico · Bethlehem, PA" },
  { label: "Current Focus", value: "Wearable biomedical devices and PCB design" },
];

const capabilities = [
  {
    title: "Build",
    description: "Embedded electronics, PCB design, sensor integration, and physical prototyping.",
    icon: CircuitBoard,
  },
  {
    title: "Research",
    description: "Microfluidics, biomedical experimentation, laboratory workflows, and validation.",
    icon: Microscope,
  },
  {
    title: "Analyze",
    description: "Python, MATLAB, bioinformatics pipelines, data processing, and visualization.",
    icon: ChartLine,
  },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();
  const fadeUp = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  });

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-36 px-6 sm:px-12 lg:px-20 py-28 bg-[#EDE6D6]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-16 left-[4%] w-60 h-28 rounded-t-full border border-[#1F3D2E]/10"
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-16 items-start">
          {/* Left: narrative */}
          <motion.div {...fadeUp()}>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#1F3D2E]/[0.08] px-4 py-1.5 font-[family-name:var(--font-questrial)] text-sm tracking-widest uppercase text-[#1F3D2E]">
              About Me
            </span>

            <h2
              id="about-heading"
              className="mt-6 text-4xl sm:text-5xl text-[#1F3D2E] tracking-tight leading-tight font-[family-name:var(--font-questrial)]"
            >
              Building at the intersection of biology, electronics, and human health.
            </h2>

            <div className="mt-6 space-y-5 max-w-2xl text-lg text-[#6B6255] leading-relaxed">
              <p>
                I&apos;m a Bioengineering student at Lehigh University focused on bioelectronics, embedded systems,
                and biomedical-device development — particularly technologies that turn biological measurements
                into useful information, feedback, or clinical tools.
              </p>
              <p>
                My work spans the full prototype process: circuit and PCB design, embedded programming, mechanical
                fabrication, laboratory testing, and data analysis. I&apos;m drawn to projects that move between
                hardware, software, and biology rather than treating them as separate disciplines.
              </p>
              <p>
                Across laboratory automation, wearable rehabilitation technology, microfluidics, and computational
                biology, I focus on building systems that are practical, testable, and grounded in real user or
                research needs.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                disabled
                aria-disabled="true"
                title="Résumé PDF coming soon"
                className="inline-flex items-center gap-2 rounded-full bg-[#1F3D2E]/40 text-[#F3EDE1] px-8 py-4 text-base font-[family-name:var(--font-questrial)] cursor-not-allowed"
              >
                View Résumé
                <span className="text-xs normal-case tracking-normal text-[#F3EDE1]/80">(coming soon)</span>
              </button>
              <Link
                href="/contact"
                className="rounded-full border border-[#1F3D2E]/25 text-[#1F3D2E] px-8 py-4 text-base font-[family-name:var(--font-questrial)] hover:bg-[#1F3D2E]/5 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* Right: profile card */}
          <motion.aside
            {...fadeUp(0.15)}
            aria-label="Regina Ruiz profile summary"
            className="rounded-[2.5rem] bg-[#F6F1E7] border border-[#1F3D2E]/10 shadow-[0_20px_45px_-20px_rgba(31,61,46,0.35)] overflow-hidden"
          >
            <div className="relative w-full aspect-[5/4]">
              <Image
                src="/headshot.jpg"
                alt="Portrait of Regina Ruiz"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[center_35%]"
              />
            </div>

            <div className="p-8">
              <div className="text-2xl text-[#1F3D2E] font-[family-name:var(--font-questrial)]">
                Regina Ruiz
              </div>
              <div className="mt-1 font-[family-name:var(--font-mono)] text-sm uppercase tracking-wide text-[#B4703A]">
                Bioengineering Student
              </div>

              <dl className="mt-6 divide-y divide-[#1F3D2E]/10">
                {facts.map((fact) => (
                  <div key={fact.label} className="py-3 first:pt-0 last:pb-0">
                    <dt className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wide text-[#6B6255]">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-base text-[#1F3D2E] font-[family-name:var(--font-questrial)]">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.aside>
        </div>

        {/* Capability cards */}
        <ul className="mt-16 grid gap-6 sm:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.title}
                {...fadeUp(0.05 * index)}
                style={{ background: cardGradients[index % cardGradients.length] }}
                className="relative overflow-hidden rounded-t-[2.5rem] rounded-b-2xl p-6 shadow-[0_16px_35px_-18px_rgba(31,61,46,0.4)] hover:shadow-[0_22px_45px_-16px_rgba(31,61,46,0.45)] hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/10 blur-2xl"
                />
                <div className="relative flex items-center gap-3">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#F3EDE1]" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg text-[#F3EDE1] font-[family-name:var(--font-questrial)]">
                    {item.title}
                  </h3>
                </div>
                <p className="relative mt-4 text-sm text-[#F3EDE1]/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
