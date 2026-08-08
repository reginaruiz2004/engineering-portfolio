const focusAreas = [
  { title: "Bioelectronics", detail: "Sensors & biomedical systems" },
  { title: "Embedded Hardware", detail: "PCB design & instrumentation" },
  { title: "Computational Biology", detail: "Sequencing & epigenetics" },
  { title: "Prototyping", detail: "CAD · fabrication · testing" },
];

export default function FocusStrip() {
  return (
    <section aria-label="Technical focus areas" className="relative bg-[#F6F1E7] border-y border-[#1F3D2E]/10">
      <h2 className="sr-only">Technical Focus Areas</h2>
      <ul className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#1F3D2E]/10">
        {focusAreas.map((area) => (
          <li key={area.title} className="px-6 py-8 sm:px-8">
            <p className="text-sm sm:text-base font-[family-name:var(--font-questrial)] uppercase tracking-wide text-[#1F3D2E]">
              {area.title}
            </p>
            <p className="mt-1.5 text-sm text-[#6B6255]">{area.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
