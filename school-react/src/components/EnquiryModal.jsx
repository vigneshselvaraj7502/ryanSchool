import React from 'react';
import { useModal } from '../context/ModalContext';

export default function EnquiryModal() {
  const {
    isOpen,
    modalTitle,
    selectedProgram,
    isSubmitted,
    formData,
    setFormData,
    setIsSubmitted,
    closeModal
  } = useModal();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setIsSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Ryans Academy! I submitted an enquiry for ${formData.program}. Parent: ${formData.name}, Phone: ${formData.phone}`
  );
  const whatsappUrl = `https://wa.me/919840012345?text=${whatsappMessage}`;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
    >
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#4B1F6F] p-2 transition-colors"
          aria-label="Close Modal"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>

        {!isSubmitted ? (
          <div>
            <div className="text-center mb-6">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D4A72C] bg-[#FDF8E7] px-3 py-1 rounded-full border border-amber-200/50 inline-block mb-2">
                Admissions 2026-27
              </span>
              <h3 className="text-2xl font-extrabold text-[#4B1F6F]">{modalTitle}</h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">Please share your details for prompt guidance.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Parent's Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-purple-100 bg-[#FAF8F4] focus:bg-white focus:border-[#4B1F6F] outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Mobile / WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98400 12345"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-purple-100 bg-[#FAF8F4] focus:bg-white focus:border-[#4B1F6F] outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Program of Interest</label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-purple-100 bg-[#FAF8F4] focus:bg-white focus:border-[#4B1F6F] outline-none transition"
                >
                  <option value="Play Group">Play Group (1.5 - 2.5 Years)</option>
                  <option value="Pre-KG">Pre-KG (2.5 - 3.5 Years)</option>
                  <option value="LKG">LKG (3.5 - 4.5 Years)</option>
                  <option value="UKG">UKG (4.5 - 5.5 Years)</option>
                  <option value="Graders">Graders (Primary CBSE)</option>
                  <option value="Daycare">Daycare & Extended Care</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-gold w-full text-xs py-3.5 justify-center mt-2 shadow-lg shadow-amber-500/20"
              >
                <span>Submit Details</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto shadow-inner">
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <div>
              <h4 className="font-extrabold text-2xl text-[#4B1F6F]">Thank You, {formData.name}!</h4>
              <p className="text-xs text-gray-600 mt-2 font-medium leading-relaxed">
                Your enquiry for <strong className="text-[#4B1F6F]">{formData.program}</strong> has been received. Our admissions team will connect with you promptly.
              </p>
            </div>
            <div className="pt-3 space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs py-3 px-6 rounded-full w-full shadow-lg shadow-emerald-500/20 transition-transform hover:scale-[1.02]"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>Chat Instantly on WhatsApp</span>
              </a>
              <button
                onClick={closeModal}
                className="text-xs font-semibold text-gray-500 hover:text-[#4B1F6F] block w-full py-1.5"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
