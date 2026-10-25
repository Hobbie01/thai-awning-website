"use client";

import { WorkPhoto } from "@/components/site/sections";
import type { Project } from "@/lib/projects";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ProjectGallery({
  images,
  title,
}: { images: Project["images"]; title: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const current = images[selected];
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  function show(index: number) {
    setSelected(index);
    setOpen(true);
    dialog.current?.showModal();
  }
  function move(direction: number) {
    setSelected((index) => (index + direction + images.length) % images.length);
  }
  return (
    <>
      <div className="portfolio-photo-grid">
        {images.map((image, index) => (
          <figure key={image.src}>
            <button
              type="button"
              className="portfolio-photo-button"
              onClick={() => show(index)}
              aria-label={`ขยายภาพ ${index + 1}: ${image.alt}`}
            >
              <WorkPhoto src={image.src} alt={image.alt} />
              <span className="portfolio-expand">
                <Expand size={18} aria-hidden="true" /> ดูภาพเต็ม
              </span>
            </button>
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="portfolio-lightbox"
        aria-label={`ภาพผลงาน ${title}`}
        onClose={() => setOpen(false)}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
        }}
      >
        <div className="portfolio-lightbox-top">
          <span aria-live="polite">
            ภาพ {selected + 1} / {images.length}
          </span>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            aria-label="ปิดภาพ"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>
        {open ? (
          <div className="portfolio-lightbox-image">
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="95vw"
              style={{ objectFit: "contain" }}
            />
          </div>
        ) : null}
        <div className="portfolio-lightbox-bottom">
          {images.length > 1 ? (
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="ภาพก่อนหน้า"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
          ) : null}
          <p aria-live="polite">{current.caption}</p>
          {images.length > 1 ? (
            <button type="button" onClick={() => move(1)} aria-label="ภาพถัดไป">
              <ChevronRight aria-hidden="true" />
            </button>
          ) : null}
        </div>
      </dialog>
    </>
  );
}
