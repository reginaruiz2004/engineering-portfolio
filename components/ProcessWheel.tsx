"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export type WheelStep = {
  number: string;
  title: string;
  prompt?: string;
  description: string;
  icon: LucideIcon;
};

type ProcessWheelProps = {
  idPrefix: string;
  eyebrow: string;
  heading: string;
  description: string;
  centerLines: [string, string];
  steps: WheelStep[];
  wheelSize?: number;
};

function round(value: number) {
  return Math.round(value * 1000) / 1000;
}

function polarToPercent(radius: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: round(50 + radius * Math.cos(rad)), y: round(50 + radius * Math.sin(rad)) };
}

function describeArc(radius: number, startAngle: number, endAngle: number) {
  const start = polarToPercent(radius, startAngle);
  const end = polarToPercent(radius, endAngle);
  const largeArc = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

export default function ProcessWheel({
  idPrefix,
  eyebrow,
  heading,
  description,
  centerLines,
  steps,
  wheelSize = 620,
}: ProcessWheelProps) {
  const shouldReduceMotion = useReducedMotion();
  const n = steps.length;
  const segment = 360 / n;
  const pad = segment * 0.3;
  const iconRadius = 42;
  const arrowId = `${idPrefix}-arrow`;

  return (
    <div>
      <span className="font-[family-name:var(--font-mono)] text-sm tracking-[0.2em] uppercase text-[#B4703A]">
        {eyebrow}
      </span>
      <h2
        id={`${idPrefix}-heading`}
        className="mt-3 text-4xl sm:text-5xl text-[#1F3D2E] tracking-tight font-[family-name:var(--font-questrial)]"
      >
        {heading}
      </h2>
      <p className="mt-4 text-lg text-[#6B6255] max-w-2xl leading-relaxed">
        {description}
      </p>

      {/* Desktop / tablet: process wheel */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden lg:block relative mx-auto mt-20 w-full aspect-square"
        style={{ maxWidth: `${wheelSize}px` }}
      >
        <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
          <defs>
            <marker
              id={arrowId}
              markerWidth="7"
              markerHeight="7"
              refX="5.5"
              refY="3.5"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L7,3.5 L0,7 Z" fill="#1F3D2E" fillOpacity="0.4" />
            </marker>
          </defs>
          {steps.map((_, index) => {
            const start = -90 + index * segment + pad;
            const end = -90 + (index + 1) * segment - pad;
            return (
              <path
                key={index}
                d={describeArc(iconRadius, start, end)}
                fill="none"
                stroke="#1F3D2E"
                strokeOpacity="0.28"
                strokeWidth="0.6"
                markerEnd={`url(#${arrowId})`}
              />
            );
          })}
        </svg>

        {/* Center medallion */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ width: "46%", aspectRatio: "1 / 1" }}
        >
          <div className="absolute inset-0 rounded-full bg-[#1F3D2E]/[0.05]" />
          <div className="absolute inset-[6%] rounded-full border border-dashed border-[#1F3D2E]/25" />
          <div className="absolute inset-[11%] rounded-full bg-[#1F3D2E] flex flex-col items-center justify-center text-center px-6">
            <span className="text-2xl xl:text-3xl uppercase tracking-wide text-[#F3EDE1] font-[family-name:var(--font-questrial)] leading-tight">
              {centerLines[0]}
              <br />
              {centerLines[1]}
            </span>
          </div>
        </div>

        {steps.map((step, index) => {
          const angle = -90 + index * segment;
          const { x, y } = polarToPercent(iconRadius, angle);
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="group absolute flex w-32 flex-col items-center text-center"
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
            >
              <span className="font-[family-name:var(--font-heading)] text-base text-[#B4703A]">
                {step.number}
              </span>
              <div className="mt-1.5 flex h-12 w-12 items-center justify-center rounded-full border border-[#1F3D2E]/15 bg-[#F6F1E7] shadow-[0_8px_20px_-14px_rgba(31,61,46,0.5)] transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:border-[#1F3D2E]/40">
                <Icon className="h-[18px] w-[18px] text-[#1F3D2E]" aria-hidden="true" />
              </div>
              <h3 className="mt-2 text-xs uppercase tracking-wide text-[#1F3D2E] font-[family-name:var(--font-questrial)]">
                {step.title}
              </h3>
              {step.prompt && (
                <p className="mt-1 text-[11px] text-[#6B6255]">{step.prompt}</p>
              )}
              <p className="mt-0 max-h-0 w-36 overflow-hidden text-[11px] text-[#6B6255] leading-relaxed opacity-0 transition-all duration-200 ease-out group-hover:mt-2 group-hover:max-h-28 group-hover:opacity-100">
                {step.description}
              </p>
            </div>
          );
        })}
      </motion.div>

      {/* Mobile / small tablet: vertical timeline */}
      <ol className="lg:hidden mt-16 relative border-l border-[#1F3D2E]/20 pl-8 space-y-10">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.li
              key={step.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
              className="relative"
            >
              <span
                aria-hidden
                className="absolute -left-[calc(2rem+3.5px)] top-1.5 w-[7px] h-[7px] rounded-full bg-[#1F3D2E]/40"
              />
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#1F3D2E]/15 bg-[#F6F1E7]">
                  <Icon className="h-4 w-4 text-[#1F3D2E]" aria-hidden="true" />
                </div>
                <span className="font-[family-name:var(--font-heading)] text-lg text-[#B4703A]">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-2 text-xl text-[#1F3D2E] font-[family-name:var(--font-questrial)] uppercase tracking-wide">
                {step.title}
              </h3>
              {step.prompt && <p className="mt-1 text-sm text-[#6B6255]">{step.prompt}</p>}
              <p className="mt-2 max-w-sm text-sm text-[#6B6255]/90 leading-relaxed">{step.description}</p>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
