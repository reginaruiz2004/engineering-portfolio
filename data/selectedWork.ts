export type SelectedWorkItem = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  visual: "image" | "pipeline" | "waveform";
  image?: string;
  imageAlt?: string;
  pipelineSteps?: string[];
  status?: string;
};

export const selectedWork: SelectedWorkItem[] = [
  {
    number: "01",
    title: "Laboratory Instrumentation",
    description:
      "Custom electronic and electromechanical research equipment designed for biological laboratory workflows — from circuit and PCB design through embedded control, motors, mechanical integration, and hardware debugging.",
    tags: ["EMBEDDED SYSTEMS", "PCB DESIGN", "MOTOR CONTROL", "CAD", "PROTOTYPING"],
    href: "/projects/hula-mixer",
    visual: "image",
    image: "/landingpagemain.png",
    imageAlt: "Circuit board, PCB, and electronic components on a lab bench",
  },
  {
    number: "02",
    title: "Epigenetic Age Analysis Pipeline",
    description:
      "A computational pipeline that estimates biological age from saliva-derived DNA methylation data using four independent epigenetic aging models.",
    tags: ["EPIGENETICS", "DNA METHYLATION", "BIOINFORMATICS", "NANOPORE", "PYTHON"],
    href: "/projects/epigenetic-clock",
    visual: "pipeline",
    pipelineSteps: ["SALIVA SAMPLE", "DNA", "METHYLATION", "4 AGING MODELS", "BIOLOGICAL AGE"],
  },
  {
    number: "03",
    title: "Wireless ECG Patch",
    description:
      "Development of a compact wireless ECG platform for acquiring, conditioning, digitizing, and transmitting cardiac biopotential signals.",
    tags: ["BIOPOTENTIAL ACQUISITION", "ANALOG FRONT END", "EMBEDDED SYSTEM", "WIRELESS DATA", "POWER MANAGEMENT", "PCB DESIGN"],
    href: "/projects/wireless-ecg-patch",
    visual: "waveform",
    status: "IN DEVELOPMENT · 2026",
  },
];
