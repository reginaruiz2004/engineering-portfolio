"use client";

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Download, ExternalLink, FileText } from "lucide-react";
import ResumeSkeleton from "./ResumeSkeleton";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

const RESUME_PATH = "/Regina_Ruiz_Resume.pdf";
const RESUME_FILENAME = "Regina_Ruiz_Resume.pdf";

// This module only ever mounts client-side (loaded via next/dynamic with
// ssr:false in Resume.tsx), so `window` is always available here.
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches
  );

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isDesktop;
}

function DownloadButton() {
  return (
    <a
      href={RESUME_PATH}
      download={RESUME_FILENAME}
      className="inline-flex items-center gap-2 rounded-full bg-[#1F3D2E] text-[#F3EDE1] px-8 py-4 text-base font-[family-name:var(--font-questrial)] hover:bg-[#B4703A] transition-colors"
    >
      <Download className="w-4 h-4" aria-hidden="true" />
      Download PDF
    </a>
  );
}

function OpenInNewTabButton() {
  return (
    <a
      href={RESUME_PATH}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-[#1F3D2E]/25 text-[#1F3D2E] px-8 py-4 text-base font-[family-name:var(--font-questrial)] hover:bg-[#1F3D2E]/5 transition-colors"
    >
      Open in new tab
      <ExternalLink className="w-4 h-4" aria-hidden="true" />
    </a>
  );
}

function MobileCard() {
  return (
    <div className="rounded-[2rem] border border-[#1F3D2E]/15 bg-[#F6F1E7] shadow-[0_25px_55px_-25px_rgba(31,61,46,0.4)] px-8 py-12 flex flex-col items-center text-center">
      <div className="w-14 h-14 rounded-full bg-[#1F3D2E]/[0.08] flex items-center justify-center">
        <FileText className="w-6 h-6 text-[#1F3D2E]" aria-hidden="true" />
      </div>
      <p className="mt-4 text-lg text-[#1F3D2E] font-[family-name:var(--font-questrial)]">
        Regina Ruiz — Résumé
      </p>
      <p className="mt-1 text-sm text-[#6B6255]">
        Best viewed as a download or in your browser on this screen size.
      </p>
      <div className="mt-6 flex flex-col w-full gap-3">
        <DownloadButton />
        <OpenInNewTabButton />
      </div>
    </div>
  );
}

function DesktopPreview() {
  const [previewEl, setPreviewEl] = useState<HTMLDivElement | null>(null);
  const [pageWidth, setPageWidth] = useState(720);
  const [numPages, setNumPages] = useState<number | null>(null);

  useEffect(() => {
    if (!previewEl) return;
    const update = () => setPageWidth(previewEl.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(previewEl);
    return () => ro.disconnect();
  }, [previewEl]);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
        <DownloadButton />
        <OpenInNewTabButton />
      </div>

      <div className="rounded-[2rem] border border-[#1F3D2E]/15 bg-[#F6F1E7] shadow-[0_25px_55px_-25px_rgba(31,61,46,0.4)] p-3 sm:p-5">
        <div ref={setPreviewEl}>
          <Document
            file={RESUME_PATH}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={<ResumeSkeleton />}
            error={
              <div className="py-16 text-center text-[#6B6255]">
                Couldn&apos;t load the preview — try the download or open-in-new-tab options above.
              </div>
            }
            className="space-y-4"
          >
            {Array.from({ length: numPages ?? 1 }, (_, i) => (
              <Page
                key={i}
                pageNumber={i + 1}
                width={pageWidth}
                loading={<ResumeSkeleton />}
                className="overflow-hidden rounded-[1rem] [&>canvas]:!w-full [&>canvas]:!h-auto"
              />
            ))}
          </Document>
        </div>
      </div>
    </>
  );
}

export default function ResumeViewer() {
  const isDesktop = useIsDesktop();
  return isDesktop ? <DesktopPreview /> : <MobileCard />;
}
