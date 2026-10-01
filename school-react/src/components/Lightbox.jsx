import React, { useEffect } from 'react';

export default function Lightbox({ photo, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl p-2 transition"
        aria-label="Close Lightbox"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      <div
        className="max-w-4xl max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.title || "Gallery preview"}
          className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border-2 border-white/20"
        />
        {photo.title && (
          <div className="text-center mt-4 text-white">
            <h4 className="font-bold text-lg">{photo.title}</h4>
            {photo.category && (
              <span className="text-xs text-[#F3D98B] uppercase tracking-wider font-semibold">
                {photo.category}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
