import React, { useEffect } from 'react';

export default function Lightbox({ photo, onClose, onPrev, onNext, currentIndex, totalCount }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      {/* Top Controls Bar */}
      <div className="absolute top-3 sm:top-5 left-3 sm:left-6 right-3 sm:right-6 flex items-center justify-between text-white z-40 pointer-events-none">
        {/* Photo Badge & Index Pill */}
        <div className="flex items-center gap-2 pointer-events-auto bg-[#1E0730]/90 backdrop-blur-md px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#D4A72C]/40 text-xs shadow-xl">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D4A72C] animate-pulse"></span>
          <span className="font-bold text-[#F3D98B] tracking-wide text-[11px] sm:text-xs">
            {photo.badge || 'Photograph'}
          </span>
          {typeof currentIndex === 'number' && typeof totalCount === 'number' && (
            <>
              <span className="text-white/30">|</span>
              <span className="text-white font-extrabold text-[11px] sm:text-xs">
                {currentIndex + 1} of {totalCount}
              </span>
            </>
          )}
        </div>

        {/* Ultra-Visible High-Contrast Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="pointer-events-auto bg-[#1E0730] hover:bg-[#4B1F6F] active:bg-[#32134C] text-white border-2 border-[#D4A72C] hover:border-[#F3D98B] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-2 shadow-[0_10px_25px_rgba(0,0,0,0.9)] hover:shadow-[0_10px_30px_rgba(75,31,111,0.8)] transition-all duration-200 hover:scale-105 active:scale-95 group cursor-pointer z-50 ring-2 ring-black/40"
          aria-label="Close Lightbox"
          title="Close (Esc)"
        >
          <span className="font-black uppercase tracking-wider text-[11px] sm:text-xs text-[#F3D98B] group-hover:text-white transition-colors">
            CLOSE
          </span>
          <span className="w-6 h-6 rounded-full bg-white/15 group-hover:bg-[#D4A72C] text-white group-hover:text-[#1E0730] flex items-center justify-center transition-all duration-200 shadow-sm">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </span>
        </button>
      </div>

      {/* Navigation Arrow: Previous */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 bg-[#1E0730]/90 hover:bg-[#4B1F6F] text-white hover:text-[#F3D98B] w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-lg sm:text-xl transition-all duration-200 border-2 border-[#D4A72C]/60 hover:border-[#F3D98B] shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Previous Photo"
          title="Previous (Left Arrow)"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      )}

      {/* Navigation Arrow: Next */}
      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 bg-[#1E0730]/90 hover:bg-[#4B1F6F] text-white hover:text-[#F3D98B] w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-lg sm:text-xl transition-all duration-200 border-2 border-[#D4A72C]/60 hover:border-[#F3D98B] shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Next Photo"
          title="Next (Right Arrow)"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      )}

      {/* Main Image Container */}
      <div
        className="max-w-4xl max-h-[88vh] flex flex-col items-center z-20 p-2 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative group max-w-full">
          <img
            src={photo.src}
            alt={photo.title || 'Ryans Academy Gallery Preview'}
            className="max-w-full max-h-[68vh] sm:max-h-[74vh] object-contain rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] border-2 border-white/20 transition-all duration-300 bg-black/40"
          />
        </div>

        {photo.title && (
          <div className="text-center mt-3 text-white max-w-xl px-4">
            <h4 className="font-extrabold text-sm sm:text-base text-white drop-shadow">
              {photo.title}
            </h4>
            {photo.sub && (
              <p className="text-[11px] sm:text-xs text-purple-200 mt-0.5">
                {photo.sub}
              </p>
            )}
            
            {/* Bottom Quick Close Action for Mobile Convenience */}
            <button
              onClick={onClose}
              className="mt-3 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-[#4B1F6F] text-white/90 hover:text-white border border-white/20 hover:border-[#D4A72C] text-xs font-bold transition-all shadow-md active:scale-95"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <span>Tap to Close</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
