import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutTeaser() {
  return (
    <section aria-labelledby="about-teaser-heading" className="relative px-6 sm:px-12 lg:px-20 py-24 bg-[#F6F1E7]">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-[220px_1fr] gap-10 sm:gap-14 items-center">
        <div className="relative mx-auto sm:mx-0 w-40 h-40 sm:w-full sm:aspect-square rounded-3xl overflow-hidden border border-[#1F3D2E]/10 shadow-sm">
          <Image
            src="/headshot.jpg"
            alt="Regina Ruiz"
            fill
            sizes="(min-width: 640px) 220px, 160px"
            className="object-cover object-[center_15%]"
          />
        </div>

        <div>
          <span className="font-[family-name:var(--font-mono)] text-sm tracking-[0.2em] uppercase text-[#B4703A]">
            About
          </span>
          <h2
            id="about-teaser-heading"
            className="mt-3 text-3xl sm:text-4xl text-[#1F3D2E] tracking-tight font-[family-name:var(--font-questrial)]"
          >
            About Me
          </h2>

          <p className="mt-5 text-lg text-[#6B6255] leading-relaxed max-w-2xl">
            I&apos;m Regina Ruiz, a bioengineer focused on building technologies that connect electronics with
            biological systems. My work ranges from custom laboratory instrumentation and embedded hardware to
            sequencing workflows and computational biology.
          </p>
          <p className="mt-4 text-lg text-[#6B6255] leading-relaxed max-w-2xl">
            I&apos;m especially interested in bioelectronics, physiological sensing, biomedical devices, and
            engineering tools that transform biological signals into useful information.
          </p>

          <Link
            href="/about"
            className="group mt-6 inline-flex items-center gap-2 text-base text-[#1F3D2E] font-[family-name:var(--font-questrial)] border-b border-[#1F3D2E]/30 pb-0.5 hover:border-[#1F3D2E] transition-colors"
          >
            More about me
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
