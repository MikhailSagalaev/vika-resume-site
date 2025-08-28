'use client';

import React, { useEffect } from 'react';

type LightboxProps = {
  src: string;
  alt?: string;
  onClose: () => void;
};

export const Lightbox: React.FC<LightboxProps> = ({ src, alt = '', onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        role="button"
        tabIndex={0}
        aria-label="Закрыть изображение"
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClose();
          }
        }}
      />
      <div className="relative max-w-5xl max-h-[85vh] mx-4">
        <img src={src} alt={alt} className="rounded-xl shadow-2xl max-h-[85vh] object-contain" />
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-white/90 text-black rounded-full w-8 h-8 text-sm font-bold shadow hover:bg-white"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
