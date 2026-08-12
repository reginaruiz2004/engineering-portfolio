"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { research } from "@/data/research";

export default function Research() {
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
          id="research-heading"
          {...fadeUp()}
          className="text-center text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-[#1F3D2E] font-[family-name:var(--font-roxborough)] font-medium"
        >
          Research
        </motion.h1>
      </div>

      <section aria-labelledby="research-heading" className="relative px-4 sm:px-8 lg:px-12 py-20 bg-[#EDE6D6]">
        <div className="max-w-[1800px] mx-auto divide-y divide-[#1F3D2E]/10">
          {research.map((entry, index) => (
            <motion.article
              key={entry.slug}
              {...fadeUp(0.1 + index * 0.05)}
              className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center py-16 first:pt-0 last:pb-0"
            >
              <div
                className={`relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-[#1F3D2E]/15 bg-[#F6F1E7] shadow-[0_25px_55px_-25px_rgba(31,61,46,0.4)] ${
                  entry.imagePosition === "right" ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={entry.image}
                  alt={entry.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className={entry.imagePosition === "right" ? "lg:order-1" : ""}>
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className={`w-1.5 h-1.5 rounded-full ${
                      entry.status === "ongoing" ? "bg-[#B4703A]" : "bg-[#1F3D2E]/40"
                    }`}
                  />
                  <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wide text-[#1F3D2E]">
                    {entry.statusLine}
                  </span>
                </div>

                <h2 className="mt-3 text-4xl sm:text-5xl text-[#1F3D2E] font-[family-name:var(--font-questrial)]">
                  {entry.title}
                </h2>

                <p className="mt-5 text-lg sm:text-xl text-[#6B6255] leading-relaxed max-w-xl">
                  {entry.description}
                </p>

                <p className="mt-5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wide text-[#6B6255] max-w-xl">
                  {entry.tags.join(" · ")}
                </p>

                {entry.publications && (
                  <div className="mt-6 pt-5 border-t border-[#1F3D2E]/10 max-w-xl">
                    <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wide text-[#1F3D2E]">
                      Publications
                    </span>
                    <ul className="mt-3 space-y-3">
                      {entry.publications.map((pub) => (
                        <li key={pub} className="text-sm text-[#6B6255] leading-relaxed">
                          {pub}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
