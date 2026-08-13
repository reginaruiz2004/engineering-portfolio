"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import ResumeSkeleton from "./ResumeSkeleton";

// react-pdf touches browser-only APIs (e.g. DOMMatrix) at module scope,
// which crashes Next's server-side render of this client component.
// Loading it client-only (via a dynamic import with ssr:false) avoids
// that entirely — ResumeSkeleton is a separate, react-pdf-free module so
// this file never statically pulls react-pdf into the server bundle.
const ResumeViewer = dynamic(() => import("./ResumeViewer"), {
  ssr: false,
  loading: () => <ResumeSkeleton />,
});

export default function Resume() {
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
          id="resume-heading"
          {...fadeUp()}
          className="text-center text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-[#1F3D2E] font-[family-name:var(--font-roxborough)] font-medium"
        >
          Resume
        </motion.h1>
      </div>

      <section aria-labelledby="resume-heading" className="relative px-4 sm:px-8 lg:px-12 py-20 bg-[#EDE6D6]">
        <motion.div {...fadeUp(0.1)} className="max-w-3xl mx-auto">
          <ResumeViewer />
        </motion.div>
      </section>
    </>
  );
}
