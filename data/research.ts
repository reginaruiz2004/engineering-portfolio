export type ResearchStatus = "ongoing" | "completed";

export type ResearchEntry = {
  slug: string;
  title: string;
  status: ResearchStatus;
  statusLine: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  tags: string[];
  publications?: string[];
};

// Display order as specified — not strictly chronological. The CareAlert
// entry is placed after Bordeaux (rather than by start date) because it's
// still active, ongoing work.
export const research: ResearchEntry[] = [
  {
    slug: "granatum-bioworks",
    title: "Genomics & Bioinformatics Engineering Intern — Granatum Bioworks",
    status: "ongoing",
    statusLine: "Ongoing, Jun 2026 – Present · Monterrey, México",
    description:
      "At Granatum, I've been working on a pipeline that estimates biological age from a saliva sample — no blood draw needed. I process Oxford Nanopore sequencing data through MinKNOW, Dorado, SAMtools, and Bismark to pull DNA methylation values, then run them through epigenetic clocks like Horvath, DunedinPACE, PhenoAge, and PhysAge to estimate biological age. I built the pipeline end to end, from raw sequencing data to structured, client-ready reports, and ran the full molecular biology side too — DNA extraction, library prep, sequencing, and QC.",
    image: "/labphoto.png",
    imageAlt: "Granatum Bioworks lab bench during sequencing sample prep",
    imagePosition: "left",
    tags: ["Oxford Nanopore sequencing", "DNA methylation", "epigenetic clocks", "bioinformatics pipelines", "Python", "Linux"],
  },
  {
    slug: "laboratory-of-the-future-bordeaux",
    title: "Research Intern — Laboratory of the Future (LOF), Bordeaux, France",
    status: "completed",
    statusLine: "Completed, Jun – Aug 2025",
    description:
      "In Bordeaux, I worked on lab-on-chip systems — specifically skin-on-chip microfluidic devices built from hydrogels. My focus was understanding how pressure changes flow behavior inside these chips: I ran switching experiments under a microscope, then wrote MATLAB scripts to calculate residence times and quantify fluid transport, feeding directly into validating the devices. I also worked with an international research team on getting cell encapsulation and viability right within the hydrogels.",
    image: "/bordeauxresearch.jpeg",
    imageAlt: "Skin-on-chip microfluidic device work at Laboratory of the Future, Bordeaux",
    imagePosition: "right",
    tags: ["microfluidics", "lab-on-chip", "hydrogels", "MATLAB", "microscopy"],
  },
  {
    slug: "carealert-global-social-impact-fellowship",
    title: "Researcher, CareAlert Team — Global Social Impact Fellowship (Creative Inquiry), Lehigh University",
    status: "ongoing",
    statusLine: "Ongoing, Jan 2025 – Present",
    description:
      "CareAlert is a project I'm still actively part of. My team is building a low-cost wearable paging system for maternal health clinics in Sierra Leone — I designed and prototyped the hardware from breadboard up, and helped engineer an off-network wireless communication system built for clinical environments with no reliable cell service or Wi-Fi. The work has led to two publications: our paper on the paging system is in press at IEEE GHTC 2025, and I'm a co-author on a related paper presented at DMD 2026.",
    image: "/carealertresearch.jpeg",
    imageAlt: "CareAlert wearable paging system hardware prototype",
    imagePosition: "left",
    tags: ["embedded systems", "low-resource healthcare", "wireless communication", "hardware prototyping"],
    publications: [
      "O. Meyer, R. Ruiz, et al., \"Designing an Off-Network Paging System to Improve Continuity of Patient Care in Low-Resource Settings,\" IEEE GHTC 2025, Colorado School of Mines, Oct. 2025 (In Press)",
      "P. Natarajan, L. Hamamoto, O. Meyer, R. Ruiz, M. Young, A. John, E. Obeysekare, K. Mehta, \"The Power of a Ping: Leveraging Alerts for Improved Health Outcomes in Low-Resource Settings,\" Proceedings of DMD2026, Minneapolis, MN, 2026",
    ],
  },
  {
    slug: "ou-yang-lab",
    title: "Research Assistant — Prof. Daniel Ou-Yang, Lehigh University",
    status: "completed",
    statusLine: "Completed, Jan – Aug 2025",
    description:
      "Before any of the bioelectronics work, I spent time in Dr. Daniel Ou-Yang's lab studying the physics of soft materials — specifically how Carbopol 980 hydrogels behave under different ionic and mechanical conditions. I ran experiments combining microscopy, particle tracking, and gel rheology, then analyzed the datasets in MATLAB and Python to quantify Brownian motion trends. It's where I first learned how to turn messy experimental data into something that actually informs the next experiment.",
    image: "/physicsresearch.png",
    imageAlt: "Soft matter physics research setup in Prof. Ou-Yang's lab",
    imagePosition: "right",
    tags: ["soft matter physics", "particle tracking", "gel rheology", "MATLAB", "Python"],
  },
];
