import type { Metadata } from "next";
import Research from "@/components/Research";

export const metadata: Metadata = {
  title: "Research — Regina Ruiz",
  description: "Research experience spanning bioinformatics, microfluidics, embedded systems for low-resource healthcare, and soft matter physics.",
};

export default function ResearchPage() {
  return (
    <div className="flex flex-col flex-1">
      <Research />
    </div>
  );
}
