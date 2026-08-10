"use client";

import { Target, DraftingCompass, CircuitBoard, Activity, RefreshCw, CircleHelp, Search, Lightbulb, FlaskConical, ChartLine } from "lucide-react";
import ProcessWheel from "./ProcessWheel";

const buildSteps = [
  {
    number: "1",
    title: "Define",
    description: "Understand the biological, technical, or clinical problem.",
    icon: Target,
  },
  {
    number: "2",
    title: "Design",
    description: "Develop system architecture, electronics, and mechanical components.",
    icon: DraftingCompass,
  },
  {
    number: "3",
    title: "Build",
    description: "Prototype circuits, firmware, PCBs, and physical systems.",
    icon: CircuitBoard,
  },
  {
    number: "4",
    title: "Test",
    description: "Characterize signals, hardware behavior, and system performance.",
    icon: Activity,
  },
  {
    number: "5",
    title: "Iterate",
    description: "Refine the system using experimental results.",
    icon: RefreshCw,
  },
];

const researchSteps = [
  {
    number: "1",
    title: "Question",
    prompt: "What do we need to understand?",
    description: "Identify the biological phenomenon, engineering limitation, or unanswered question worth investigating.",
    icon: CircleHelp,
  },
  {
    number: "2",
    title: "Literature",
    prompt: "What is already known?",
    description: "Review existing methods, prior work, and open gaps to see where a better approach is possible.",
    icon: Search,
  },
  {
    number: "3",
    title: "Hypothesis",
    prompt: "What should happen?",
    description: "Define measurable variables, expected behavior, and criteria for evaluating the idea.",
    icon: Lightbulb,
  },
  {
    number: "4",
    title: "Experiment",
    prompt: "How can we measure it?",
    description: "Design the instrumentation, protocol, and data-acquisition approach needed to test the idea.",
    icon: FlaskConical,
  },
  {
    number: "5",
    title: "Analysis",
    prompt: "What does the evidence show?",
    description: "Process signals and results, quantify performance, and determine whether the data supports the hypothesis.",
    icon: ChartLine,
  },
  {
    number: "6",
    title: "Refine",
    prompt: "What should we test next?",
    description: "Use the results to improve the experiment and shape the next question.",
    icon: RefreshCw,
  },
];

export default function ProcessSection() {
  return (
    <section aria-label="How I work" className="relative px-4 sm:px-8 lg:px-12 py-28 bg-[#EDE6D6]">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 xl:grid-cols-2 divide-y xl:divide-y-0 xl:divide-x divide-[#1F3D2E]/15 gap-y-20 xl:gap-y-0">
        <div className="xl:pr-8">
          <ProcessWheel
            idPrefix="how-i-build"
            eyebrow="Process"
            heading="How I Build"
            description="A consistent process for moving from an open problem to working, tested hardware."
            centerLines={["How I", "Build"]}
            steps={buildSteps}
            wheelSize={820}
          />
        </div>
        <div className="pt-20 xl:pt-0 xl:pl-8">
          <ProcessWheel
            idPrefix="how-i-research"
            eyebrow="Research"
            heading="How I Research"
            description="A structured process for turning scientific questions into measurable experiments, interpretable data, and engineering insight."
            centerLines={["How I", "Research"]}
            steps={researchSteps}
            wheelSize={820}
          />
        </div>
      </div>
    </section>
  );
}
