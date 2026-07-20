import Link from "next/link";
import { featuredProjects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 text-center">
        Featured Projects
      </h2>
      <p className="mt-3 text-gray-600 text-center max-w-xl mx-auto">
        A snapshot of my work across mechanical engineering, bioinformatics, and computational biology.
      </p>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            className="group flex flex-col rounded-2xl border border-gray-200 p-6 hover:border-gray-400 hover:shadow-md transition-all"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              {project.category}
            </span>
            <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-gray-700">
              {project.title}
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}