import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Regina Ruiz",
  description: "Get in touch with Regina Ruiz about bioelectronics, biomedical devices, embedded systems, or research collaboration.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1">
      <Contact />
    </div>
  );
}
