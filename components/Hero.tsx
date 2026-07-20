export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-32 min-h-[80vh]">
      <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
        Regina Ruiz
      </h1>
      <p className="mt-4 text-xl text-gray-600 max-w-2xl">
        Biomedical Engineer building devices and research at the intersection of hardware, software, and biology.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="/projects"
          className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-700 transition-colors"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="rounded-full border border-gray-300 text-gray-900 px-6 py-3 text-sm font-medium hover:bg-gray-100 transition-colors"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}