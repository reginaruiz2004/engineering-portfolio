import { Activity, Code2, Cpu, Dna, FlaskConical, Wrench } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { cardGradients } from "@/lib/palette";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Programming: Code2,
  "Embedded Systems": Cpu,
  "Test & Measurement": Activity,
  Bioinformatics: Dna,
  "Laboratory Techniques": FlaskConical,
  "Engineering Tools": Wrench,
};

export default function Skills() {
  return (
    <section className="relative bg-[#EDE6D6] py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-[10%] w-56 h-28 rounded-t-full border border-[#1F3D2E]/10"
      />

      <div className="px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl text-[#1F3D2E] text-center font-[family-name:var(--font-questrial)]">
          Skills
        </h2>
        <p className="mt-3 text-[#6B6255] text-center max-w-xl mx-auto">
          Tools and techniques I use across engineering, research, and software.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((group, index) => {
            const Icon = icons[group.category];
            return (
              <div
                key={group.category}
                style={{ background: cardGradients[index % cardGradients.length] }}
                className="relative overflow-hidden rounded-t-[3rem] rounded-b-3xl p-8 pt-10 shadow-[0_20px_45px_-20px_rgba(31,61,46,0.45)] hover:shadow-[0_28px_55px_-18px_rgba(31,61,46,0.5)] hover:-translate-y-1.5 transition-all duration-300"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/10 blur-2xl"
                />
                <div className="relative flex flex-col items-center text-center">
                  {Icon && (
                    <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#F3EDE1]" />
                    </div>
                  )}
                  <h3 className="mt-5 text-xl text-[#F3EDE1] font-[family-name:var(--font-questrial)]">
                    {group.category}
                  </h3>
                  <p className="mt-3 text-sm text-[#F3EDE1]/75 leading-relaxed">
                    {group.skills.join(" · ")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}