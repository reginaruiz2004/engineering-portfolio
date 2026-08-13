import type { Metadata } from "next";
import Resume from "@/components/Resume";

export const metadata: Metadata = {
  title: "Resume — Regina Ruiz",
  description: "Résumé of Regina Ruiz, bioengineering student focused on bioelectronics, embedded systems, and biomedical-device development. View inline or download as PDF.",
};

export default function ResumePage() {
  return (
    <div className="flex flex-col flex-1">
      <Resume />
    </div>
  );
}
