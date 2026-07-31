import { timelineEvents } from "@/data/timeline";

export default function Timeline() {
  return (
    <section className="relative px-6 py-20 bg-[#EDE6D6]">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[6%] w-48 h-24 rounded-t-full border border-[#1F3D2E]/10"
      />

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl text-[#1F3D2E] text-center font-[family-name:var(--font-questrial)]">
          Timeline
        </h2>
        <p className="mt-3 text-[#6B6255] text-center max-w-xl mx-auto">
          Key milestones across my engineering and research journey.
        </p>

        <div className="mt-16 relative border-l-2 border-[#1F3D2E]/15 pl-8 space-y-12">
          {timelineEvents.map((event) => (
            <div key={event.title} className="relative">
              <span className="absolute -left-[38px] top-1 w-4 h-4 rounded-full bg-[#B4703A] border-4 border-[#EDE6D6] shadow-sm" />
              <span className="font-[family-name:var(--font-mono)] text-sm font-semibold text-[#B4703A]">
                {event.date}
              </span>
              <h3 className="mt-1 text-xl text-[#1F3D2E] font-[family-name:var(--font-questrial)]">
                {event.title}
              </h3>
              <p className="mt-2 text-[#6B6255] leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}