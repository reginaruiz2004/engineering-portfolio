import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto bg-gray-50 rounded-3xl">
      <h2 className="text-3xl font-bold text-gray-900 text-center">
        Skills
      </h2>
      <p className="mt-3 text-gray-600 text-center max-w-xl mx-auto">
        Tools and techniques I use across engineering, research, and software.
      </p>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((group) => (
          <div key={group.category} className="rounded-2xl bg-white p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-xs font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}