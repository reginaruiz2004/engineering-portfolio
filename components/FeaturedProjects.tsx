"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Cog, Dna, Sprout } from "lucide-react";
import { featuredProjects } from "@/data/projects";

const categoryColors: Record<string, { bar: string; text: string; icon: React.ComponentType<{ className?: string }> }> = {
  "Mechanical & Automation Engineering": { bar: "#C1793D", text: "#8A5527", icon: Cog },
  "Bioinformatics": { bar: "#2F5D45", text: "#1F3D2E", icon: Dna },
  "Computational Genetics": { bar: "#7C9A79", text: "#4B6350", icon: Sprout },
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
            const accent = categoryColors[project.category] ?? { bar: "#2F5D45", text: "#1F3D2E", icon: Cog };
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
                  className="group flex flex-col h-full min-h-[380px] rounded-3xl border border-[#1F3D2E]/10 bg-[#F6F1E7] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(31,61,46,0.25)] hover:-translate-y-1.5 hover:border-[#1F3D2E]/20 transition-all duration-300"
                >
                  <div className="h-2 w-full shrink-0" style={{ backgroundColor: accent.bar }} />
                  <div className="p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <span
                        className="flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-sm font-medium uppercase tracking-wide"
                        style={{ color: accent.text }}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        {project.category}
                      </span>
                      <h3 className="mt-3 text-2xl text-[#1F3D2E] font-[family-name:var(--font-questrial)]">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-base text-[#6B6255] leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-[family-name:var(--font-mono)] text-sm font-medium bg-[#1F3D2E]/[0.06] text-[#1F3D2E] px-3 py-1.5 rounded-full"
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