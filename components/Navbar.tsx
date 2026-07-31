import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 h-32 flex items-center bg-[#1F3D2E] px-4 sm:px-6">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border border-[#1F3D2E]/10 bg-[#F3EDE1]/85 px-6 py-4 shadow-[0_10px_30px_-15px_rgba(31,61,46,0.25)] backdrop-blur-md">
        <Link
          href="/"
          className="text-lg text-[#1F3D2E] font-[family-name:var(--font-questrial)]"
        >
          Regina Ruiz
        </Link>

        <div className="hidden md:flex items-center gap-1 text-lg font-[family-name:var(--font-questrial)] text-[#6B6255]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-3 hover:bg-[#1F3D2E]/[0.06] hover:text-[#1F3D2E] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
