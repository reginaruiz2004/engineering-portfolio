"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { selectedWork } from "@/data/selectedWork";
import { cardGradients } from "@/lib/palette";

export default function SelectedWork() {
  const shouldReduceMotion = useReducedMotion();
  const fadeUp = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  });

  const [featured, pipeline, waveform] = selectedWork;

  return (
    <section id="work" aria-labelledby="work-heading" className="relative scroll-mt-36 px-6 sm:px-12 lg:px-20 py-28 bg-[#EDE6D6]">
      <div
        aria-hidden
        className="pointer-events-none absolute top-16 right-[6%] w-56 h-28 rounded-t-full border border-[#1F3D2E]/10"
      />

      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp()}>
          <span className="font-[family-name:var(--font-mono)] text-sm tracking-[0.2em] uppercase text-[#B4703A]">
            Selected Work
          </span>
          <h2
            id="work-heading"
            className="mt-3 text-4xl sm:text-5xl text-[#1F3D2E] tracking-tight font-[family-name:var(--font-questrial)]"
          >
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-[#6B6255] max-w-2xl leading-relaxed">
            Three projects spanning laboratory instrumentation, computational biology, and physiological sensing —
            from concept through working hardware.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-[1.6fr_1fr] gap-8 items-stretch">
          {/* 01 — large feature card with real project imagery */}
          <motion.div {...fadeUp(0.1)}>
            <Link
              href={featured.href}
              className="group relative flex flex-col h-full rounded-[2.5rem] border border-[#1F3D2E]/10 bg-[#F6F1E7] overflow-hidden shadow-[0_20px_45px_-20px_rgba(31,61,46,0.3)] hover:border-[#1F3D2E]/25 hover:shadow-[0_28px_55px_-18px_rgba(31,61,46,0.4)] transition-all duration-300"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                {featured.image && (
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt ?? ""}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover object-[62%_center] transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                )}
              </div>
              <div className="flex flex-col flex-1 justify-between p-8 sm:p-10">
                <div>
                  <span className="font-[family-name:var(--font-mono)] text-sm text-[#B4703A]">
                    {featured.number}
                  </span>
                  <h3 className="mt-2 text-3xl text-[#1F3D2E] font-[family-name:var(--font-questrial)]">
                    {featured.title}
                  </h3>
                  <p className="mt-4 text-base text-[#6B6255] leading-relaxed max-w-xl">
                    {featured.description}
                  </p>
                </div>
                <div className="mt-8 flex items-end justify-between gap-4">
                  <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wide text-[#6B6255]">
                    {featured.tags.join(" · ")}
                  </p>
                  <span className="shrink-0 inline-flex items-center gap-1.5 text-sm text-[#1F3D2E] font-[family-name:var(--font-questrial)]">
                    View project
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* 02 / 03 — smaller cards stacked alongside */}
          <div className="grid gap-8">
            <motion.div {...fadeUp(0.2)}>
              <Link
                href={pipeline.href}
                style={{ background: cardGradients[2] }}
                className="group relative flex flex-col h-full min-h-[280px] rounded-3xl border border-white/10 overflow-hidden p-8 shadow-[0_20px_45px_-20px_rgba(31,61,46,0.45)] hover:shadow-[0_28px_55px_-18px_rgba(31,61,46,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/10 blur-2xl"
                />
                <div className="relative flex flex-col h-full justify-between">
                  <div>
                    <span className="font-[family-name:var(--font-mono)] text-sm text-[#F3EDE1]/70">
                      {pipeline.number}
                    </span>
                    <h3 className="mt-2 text-xl text-[#F3EDE1] font-[family-name:var(--font-questrial)]">
                      {pipeline.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#F3EDE1]/80 leading-relaxed">
                      {pipeline.description}
                    </p>
                  </div>

                  {pipeline.pipelineSteps && (
                    <div className="mt-6 flex flex-wrap items-center gap-x-1.5 gap-y-2">
                      {pipeline.pipelineSteps.map((step, i) => (
                        <span key={step} className="flex items-center gap-1.5">
                          <span className="rounded-full border border-white/25 px-2.5 py-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wide text-[#F3EDE1]/90">
                            {step}
                          </span>
                          {i < pipeline.pipelineSteps!.length - 1 && (
                            <ArrowRight className="w-3 h-3 text-[#F3EDE1]/40 shrink-0" aria-hidden="true" />
                          )}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 flex items-end justify-between gap-4">
                    <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wide text-[#F3EDE1]/60">
                      {pipeline.tags.join(" · ")}
                    </p>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-[#F3EDE1] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div {...fadeUp(0.3)}>
              <Link
                href={waveform.href}
                style={{ background: cardGradients[1] }}
                className="group relative flex flex-col h-full min-h-[280px] rounded-3xl border border-white/10 overflow-hidden p-8 shadow-[0_20px_45px_-20px_rgba(31,61,46,0.45)] hover:shadow-[0_28px_55px_-18px_rgba(31,61,46,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/10 blur-2xl"
                />
                <div className="relative flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-[family-name:var(--font-mono)] text-sm text-[#F3EDE1]/70">
                        {waveform.number}
                      </span>
                      {waveform.status && (
                        <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wide text-[#F3EDE1]/70">
                          {waveform.status}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 text-xl text-[#F3EDE1] font-[family-name:var(--font-questrial)]">
                      {waveform.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#F3EDE1]/80 leading-relaxed">
                      {waveform.description}
                    </p>
                  </div>

                  <svg viewBox="0 0 300 60" className="mt-6 w-full h-14" fill="none" preserveAspectRatio="none" aria-hidden="true">
                    <motion.path
                      d="M0,30 L55,30 L68,8 L80,52 L92,16 L104,30 L150,30 L163,18 L175,42 L187,30 L300,30"
                      stroke="#F3EDE1"
                      strokeOpacity="0.85"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={shouldReduceMotion ? false : { pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
                    />
                  </svg>

                  <div className="mt-6 flex items-end justify-between gap-4">
                    <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wide text-[#F3EDE1]/60">
                      {waveform.tags.slice(0, 3).join(" · ")}
                    </p>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-[#F3EDE1] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
