import { Activity, Code2, Cpu, Dna, FlaskConical, Wrench } from "lucide-react";
import { skillCategories } from "@/data/skills";

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
    <section className="relative bg-gradient-to-b from-[#EDE6D6] via-[#1F3D2E]/[0.05] to-[#EDE6D6]">
      <div className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl text-[#1F3D2E] text-center font-[family-name:var(--font-questrial)]">
          Skills
        </h2>
        <p className="mt-3 text-[#6B6255] text-center max-w-xl mx-auto">
          Tools and techniques I use across engineering, research, and software.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((group) => {
            const Icon = icons[group.category];
            return (
              <div
                key={group.category}
                className="rounded-3xl bg-[#F6F1E7] p-6 border border-[#1F3D2E]/10 shadow-sm hover:shadow-[0_16px_30px_-12px_rgba(31,61,46,0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  {Icon && (
                    <div className="shrink-0 w-9 h-10 rounded-t-full rounded-b-md bg-[#B4703A]/10 flex items-end justify-center pb-1.5">
                      <Icon className="w-4 h-4 text-[#B4703A]" />
                    </div>
                  )}
                  <h3 className="text-lg text-[#1F3D2E] font-[family-name:var(--font-questrial)]">
                    {group.category}
                  </h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-xs font-medium bg-[#1F3D2E]/[0.06] text-[#1F3D2E] px-2.5 py-1 rounded-full"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}