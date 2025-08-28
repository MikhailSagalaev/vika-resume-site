'use client';

import React, { useEffect, useMemo, useState } from 'react';

import Lightbox from '@/components/lightbox';

type CaseGalleryProps = {
  images: { src: string; alt?: string }[];
};

export const CaseGallery: React.FC<CaseGalleryProps> = ({ images }) => {
  const [open, setOpen] = useState<string | null>(null);
  const order = useMemo(() => images.map((i) => i.src), [images]);
  const idx = open ? order.indexOf(open) : -1;

  const go = (delta: number) => {
    if (idx < 0) return;
    const next = (idx + delta + order.length) % order.length;

    setOpen(order[next]);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };

    document.addEventListener('keydown', onKey);

    return () => document.removeEventListener('keydown', onKey);
  }, [open, idx, order]);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((img) => (
          <button
            key={img.src}
            className="group relative rounded-xl overflow-hidden border border-default-200/50 hover-card"
            onClick={() => setOpen(img.src)}
          >
            <img
              src={img.src}
              alt={img.alt || 'Case image'}
              className="aspect-video w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </button>
        ))}
      </div>
      {open ? (
        <>
          <Lightbox src={open} onClose={() => setOpen(null)} />
          {/* Nav buttons */}
          <button
            className="fixed left-4 top-1/2 -translate-y-1/2 z-[60] no-print bg-white/80 text-black w-10 h-10 rounded-full shadow hover:bg-white"
            aria-label="Prev"
            onClick={() => go(-1)}
          >
            ‹
          </button>
          <button
            className="fixed right-4 top-1/2 -translate-y-1/2 z-[60] no-print bg-white/80 text-black w-10 h-10 rounded-full shadow hover:bg-white"
            aria-label="Next"
            onClick={() => go(1)}
          >
            ›
          </button>
        </>
      ) : null}
    </div>
  );
};

export default CaseGallery;
