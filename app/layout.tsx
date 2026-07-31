import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono, Questrial } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import BackgroundPattern from "../components/BackgroundPattern";

const spaceGrotesk = Space_Grotesk({ variable: "--font-heading", subsets: ["latin"] });
const inter = Inter({ variable: "--font-body", subsets: ["latin"] });
const plexMono = IBM_Plex_Mono({ variable: "--font-mono", weight: ["400", "500"], subsets: ["latin"] });
const questrial = Questrial({ variable: "--font-questrial", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Regina Ruiz — Bioengineering Portfolio",
  description: "Bioengineering portfolio showcasing projects in bioelectronics, biomedical devices, and research.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} ${questrial.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#EDE6D6] font-[family-name:var(--font-body)] text-[17px] leading-[1.6] relative">
        <BackgroundPattern />
        <Navbar />
        {children}
      </body>
    </html>
  );
}