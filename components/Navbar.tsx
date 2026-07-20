import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <Link href="/" className="text-xl font-bold text-gray-900">
        Regina Ruiz
      </Link>

      <div className="flex gap-6 text-sm font-medium text-gray-700">
        <Link href="/about">About</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/research">Research</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}