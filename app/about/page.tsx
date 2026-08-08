import type { Metadata } from "next";
import About from "@/components/About";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "About — Regina Ruiz",
  description: "Bioengineering student at Lehigh University focused on bioelectronics, embedded systems, and biomedical-device development.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1">
      <About />
      <Timeline />
    </div>
  );
}
