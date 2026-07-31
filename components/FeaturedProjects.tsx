"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Cog, Dna, Sprout } from "lucide-react";
import { featuredProjects } from "@/data/projects";

const categoryColors: Record<string, { bg: string; icon: React.ComponentType<{ className?: string }> }> = {
  "Mechanical & Automation Engineering": { bg: "linear-gradient(150deg, #C1793D 0%, #8A5527 100%)", icon: Cog },
  "Bioinformatics": { bg: "linear-gradient(150deg, #2F5D45 0%, #16302A 100%)", icon: Dna },
  "Computational Genetics": { bg: "linear-gradient(150deg, #5C6F52 0%, #3E4A38 100%)", icon: Sprout },
};

export default function FeaturedProjects() {
  return (
    <section className="relative px-6 sm:px-12 lg:px-20 py-28 bg-[#EDE6D6]">
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 right-[8%] w-56 h-28 rounded-t-full border border-[#1F3D2E]/10"
      />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl text-[#1F3D2E] text-center font-[family-name:var(--font-questrial)]">
          Featured Projects
        </h2>
        <p className="mt-4 text-xl text-[#6B6255] text-center max-w-2xl mx-auto">
          A snapshot of my work across mechanical engineering, bioinformatics, and computational biology.
        </p>

        <div className="mt-16 grid gap-8 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
          {featuredProjects.map((project, index) => {
            const accent = categoryColors[project.category] ?? { bg: categoryColors["Bioinformatics"].bg, icon: Cog };
            const Icon = accent.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={project.href}
                  style={{ background: accent.bg }}
                  className="group relative flex flex-col h-full min-h-[380px] rounded-3xl border border-white/10 overflow-hidden shadow-[0_20px_45px_-20px_rgba(31,61,46,0.45)] hover:shadow-[0_28px_55px_-18px_rgba(31,61,46,0.5)] hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-2xl"
                  />
                  <div className="relative p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-wide text-[#F3EDE1]">
                        <Icon className="w-3.5 h-3.5 shrink-0" />
                        {project.category}
                      </span>
                      <h3 className="mt-4 text-2xl text-[#F3EDE1] font-[family-name:var(--font-questrial)]">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-base text-[#F3EDE1]/75 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-[family-name:var(--font-mono)] text-sm font-medium bg-white/15 text-[#F3EDE1] px-3 py-1.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}