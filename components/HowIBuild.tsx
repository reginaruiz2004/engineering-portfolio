"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Target, DraftingCompass, CircuitBoard, Activity, RefreshCw } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Define",
    description: "Understand the biological, technical, or clinical problem.",
    icon: Target,
  },
  {
    number: "02",
    title: "Design",
    description: "Develop system architecture, electronics, and mechanical components.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Build",
    description: "Prototype circuits, firmware, PCBs, and physical systems.",
    icon: CircuitBoard,
  },
  {
    number: "04",
    title: "Test",
    description: "Characterize signals, hardware behavior, and system performance.",
    icon: Activity,
  },
  {
    number: "05",
    title: "Iterate",
    description: "Refine the system using experimental results.",
    icon: RefreshCw,
  },
];

export default function HowIBuild() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="how-i-build-heading" className="relative px-6 sm:px-12 lg:px-20 py-28 bg-[#EDE6D6]">
      <div className="max-w-7xl mx-auto">
        <span className="font-[family-name:var(--font-mono)] text-sm tracking-[0.2em] uppercase text-[#B4703A]">
          Process
        </span>
        <h2
          id="how-i-build-heading"
          className="mt-3 text-4xl sm:text-5xl text-[#1F3D2E] tracking-tight font-[family-name:var(--font-questrial)]"
        >
          How I Build
        </h2>
        <p className="mt-4 text-lg text-[#6B6255] max-w-2xl leading-relaxed">
          A consistent process for moving from an open problem to working, tested hardware.
        </p>

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="pt-6 border-t-2 border-[#1F3D2E]/15"
              >
                <span className="font-[family-name:var(--font-mono)] text-xs text-[#B4703A]">
                  {step.number}
                </span>
                <div className="mt-3 w-10 h-10 rounded-full bg-[#1F3D2E]/[0.08] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#1F3D2E]" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg text-[#1F3D2E] font-[family-name:var(--font-questrial)] uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[#6B6255] leading-relaxed">{step.description}</p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
