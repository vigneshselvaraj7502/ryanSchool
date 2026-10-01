import React from 'react';
import { useModal } from '../context/ModalContext';

export default function MobileActionBar() {
  const { openModal } = useModal();

  return (
    <div className="mobile-action-bar">
      <a href="tel:+919840012345" className="mobile-action-btn call-btn">
        <i className="fa-solid fa-phone text-base"></i>
        <span>Call Us</span>
      </a>
      <a
        href="https://wa.me/919840012345"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-action-btn whatsapp-btn"
      >
        <i className="fa-brands fa-whatsapp text-lg"></i>
        <span>WhatsApp</span>
      </a>
      <button
        onClick={() => openModal('Play Group', 'enquiry')}
        className="mobile-action-btn enquire-btn"
      >
        <i className="fa-solid fa-paper-plane text-sm"></i>
        <span>Enquire Now</span>
      </button>
    </div>
  );
}
