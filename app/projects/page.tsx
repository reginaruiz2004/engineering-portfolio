import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects — Regina Ruiz",
  description: "Hardware, lab instrumentation, and computational work spanning bioelectronics, embedded systems, and genomics engineering.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col flex-1">
      <Projects />
    </div>
  );
}
