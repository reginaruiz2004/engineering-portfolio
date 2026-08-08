import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section aria-labelledby="contact-heading" className="relative bg-[#1F3D2E] px-6 sm:px-12 lg:px-20 py-28">
      <div className="max-w-4xl mx-auto text-center">
        <span className="font-[family-name:var(--font-mono)] text-sm tracking-[0.2em] uppercase text-[#B4703A]">
          Contact
        </span>
        <h2
          id="contact-heading"
          className="mt-4 text-4xl sm:text-6xl text-[#F3EDE1] tracking-tight font-[family-name:var(--font-questrial)]"
        >
          Let&apos;s Build Something
        </h2>
        <p className="mt-6 text-lg text-[#F3EDE1]/75 max-w-xl mx-auto leading-relaxed">
          Open to conversations about biomedical devices, embedded systems, research instrumentation,
          bioelectronics, and biological sensing.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#F3EDE1] text-[#1F3D2E] px-8 py-4 text-base font-[family-name:var(--font-questrial)] hover:bg-[#B4703A] hover:text-[#F3EDE1] transition-colors"
          >
            Get in touch
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-[family-name:var(--font-mono)] text-sm uppercase tracking-wide text-[#F3EDE1]/70">
          <a href="mailto:regina.ruiz2004@gmail.com" className="hover:text-[#F3EDE1] transition-colors">
            Email
          </a>
          <a
            href="https://github.com/reginaruiz2004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F3EDE1] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
