export type ProjectStatus = "in-progress" | "completed";

export type ProjectResults = {
  description: string;
  image: string;
  imageAlt: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  statusLine: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  imageFit?: "cover" | "contain";
  results?: ProjectResults;
};

// Ordered most recent first. This array order is the display order —
// insert new projects wherever they belong chronologically.
export const projects: Project[] = [
  {
    slug: "signal-acquisition-board-ecg",
    title: "Signal Acquisition Board (ECG)",
    status: "in-progress",
    statusLine: "In progress, Fall 2026",
    description:
      "This is the first piece of a four-project pipeline I built out for senior year, all pointing toward one goal: proving I can take a wearable biomedical device from architecture to working hardware. Rather than jump straight to a custom PCB, I wanted to de-risk the signal chain first — so I paired a TI ADS1292RECG-FE analog front-end eval board with a Nordic nRF52-DK to validate ECG acquisition and BLE independently before combining them. Right now I'm resolving the component list for the board that comes next, turning generic references like \"an LDO\" into specific parts I can actually source and hand-solder. PCB design is up next.",
    image: "/signalacquisition.png",
    imageAlt: "Signal acquisition board bench setup for ECG validation",
    imagePosition: "left",
  },
  {
    slug: "megaruptor-automation",
    title: "MegaRuptor Automation",
    status: "completed",
    statusLine: "Granatum Bioworks, 2026",
    description:
      "During my internship at Granatum, the workflow needed a MegaRuptor for DNA/sample shearing, but the commercial unit didn't make sense for the budget we were working with. So I designed and 3D-printed one myself, then validated it against what the workflow actually required. Cut the cost by more than 90% without cutting the function.",
    image: "/reginatronconbase.jpeg",
    imageAlt: "Custom 3D-printed MegaRuptor instrument",
    imagePosition: "right",
    imageFit: "contain",
    results: {
      description:
        "Following deployment at Granatum Bioworks, the custom MegaRuptor continued to be used as part of the DNA sequencing workflow. Subsequent Oxford Nanopore sequencing runs showed a substantially more balanced distribution of barcoded reads across samples, providing downstream validation that the instrument was performing effectively during sample preparation.",
      image: "/MegaRuptorResults.jpg",
      imageAlt:
        "Oxford Nanopore MinKNOW sequencing results showing balanced barcode yields after sample preparation using the custom MegaRuptor.",
      caption:
        "Oxford Nanopore sequencing output following sample preparation with the custom MegaRuptor. Barcode yields show a more balanced distribution across processed samples.",
    },
  },
  {
    slug: "hula-mixer",
    title: "Hula Mixer",
    status: "completed",
    statusLine: "Granatum Bioworks, 2026",
    description:
      "Same problem, different instrument. The lab needed a Hula Mixer for mixing/rocking step, and again, buying one outright wasn't practical. I built and validated a 3D-printed replacement — over 90% cheaper, holding up to actual use in the lab.",
    image: "/hulamixerfinal.jpg",
    imageAlt: "Custom 3D-printed Hula Mixer instrument",
    imagePosition: "left",
  },
];
