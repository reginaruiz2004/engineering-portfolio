export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#1F3D2E]/10 bg-[#EDE6D6] px-6 sm:px-12 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#6B6255] font-[family-name:var(--font-questrial)]">
          © {year} Regina Ruiz
        </p>
        <div className="flex items-center gap-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wide text-[#6B6255]">
          <a href="mailto:regina.ruiz2004@gmail.com" className="hover:text-[#1F3D2E] transition-colors">
            Email
          </a>
          <a
            href="https://github.com/reginaruiz2004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1F3D2E] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
