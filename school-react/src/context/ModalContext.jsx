import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Enquire for Admission');
  const [selectedProgram, setSelectedProgram] = useState('Play Group');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', program: 'Play Group' });

  const openModal = (program = 'Play Group', type = 'enquiry') => {
    setModalTitle(type === 'visit' ? 'Book a Campus Visit' : 'Enquire for Admission');
    setSelectedProgram(program || 'Play Group');
    setFormData(prev => ({ ...prev, program: program || 'Play Group' }));
    setIsSubmitted(false);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsSubmitted(false);
    document.body.style.overflow = '';
  };

  return (
    <ModalContext.Provider value={{
      isOpen,
      modalTitle,
      selectedProgram,
      isSubmitted,
      formData,
      setFormData,
      setIsSubmitted,
      openModal,
      closeModal
    }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
