"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
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
          id="projects-heading"
          {...fadeUp()}
          className="text-center text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-[#1F3D2E] font-[family-name:var(--font-roxborough)] font-medium"
        >
          Projects
        </motion.h1>
      </div>

      <section aria-labelledby="projects-heading" className="relative px-4 sm:px-8 lg:px-12 py-20 bg-[#EDE6D6]">
        <div className="max-w-[1800px] mx-auto divide-y divide-[#1F3D2E]/10">
        {projects.map((project, index) => (
          <motion.article
            key={project.slug}
            {...fadeUp(0.1 + index * 0.05)}
            className="py-16 first:pt-0 last:pb-0"
          >
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div
              className={`relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-[#1F3D2E]/15 bg-[#F6F1E7] shadow-[0_25px_55px_-25px_rgba(31,61,46,0.4)] ${
                project.imagePosition === "right" ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className={project.imageFit === "contain" ? "object-contain" : "object-cover"}
              />
            </div>

            <div className={project.imagePosition === "right" ? "lg:order-1" : ""}>
              <div className="flex items-center gap-2">
                <span
                  aria-hidden
                  className={`w-1.5 h-1.5 rounded-full ${
                    project.status === "in-progress" ? "bg-[#B4703A]" : "bg-[#1F3D2E]/40"
                  }`}
                />
                <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wide text-[#1F3D2E]">
                  {project.statusLine}
                </span>
              </div>

              <h2 className="mt-3 text-4xl sm:text-5xl text-[#1F3D2E] font-[family-name:var(--font-questrial)]">
                {project.title}
              </h2>

              <p className="mt-5 text-lg sm:text-xl text-[#6B6255] leading-relaxed max-w-xl">
                {project.description}
              </p>

              {project.results && (
                <>
                  <span aria-hidden="true" className="lg:hidden block mt-6 w-0.5 h-10 bg-[#1F3D2E]/70" />
                  <span aria-hidden="true" className="hidden lg:block mt-6 w-0.5 h-32 bg-[#1F3D2E]/70" />
                </>
              )}
            </div>
            </div>

            {project.results && (
              <div className="mt-6">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                  <div>
                    <span className="block font-[family-name:var(--font-mono)] text-sm tracking-[0.2em] uppercase text-[#B4703A]">
                      Results / Validation
                    </span>
                    <p className="mt-4 text-base sm:text-lg text-[#6B6255] leading-relaxed">
                      {project.results.description}
                    </p>
                  </div>
                  <div>
                    <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-[#1F3D2E]/15 bg-[#F6F1E7] shadow-[0_25px_55px_-25px_rgba(31,61,46,0.4)]">
                      <Image
                        src={project.results.image}
                        alt={project.results.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 45vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-3 text-sm text-[#6B6255]/80 leading-relaxed">
                      {project.results.caption}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.article>
        ))}
      </div>
      </section>
    </>
  );
}
