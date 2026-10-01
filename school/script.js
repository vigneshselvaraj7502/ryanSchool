/**
 * Ryans Academy - Official Website Scripts
 * Features:
 * - Mobile Navigation Drawer
 * - Enquiry & Campus Visit Modal with Validation & Thank You State
 * - Interactive Lightbox for Gallery Photos
 * - Category Filter for Gallery
 * - "Unique Spark" Child Development Interactive Showcase
 * - WhatsApp & Click-to-Call Integration
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. Mobile Navigation Drawer
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const mobileLinks = document.querySelectorAll('#mobile-drawer a');

    const toggleMobileMenu = () => {
        if (!mobileDrawer) return;
        const isOpen = !mobileDrawer.classList.contains('translate-x-full');
        if (isOpen) {
            mobileDrawer.classList.add('translate-x-full');
            if (mobileOverlay) mobileOverlay.classList.add('hidden');
            document.body.style.overflow = '';
        } else {
            mobileDrawer.classList.remove('translate-x-full');
            if (mobileOverlay) mobileOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    };

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', toggleMobileMenu);
    if (mobileOverlay) mobileOverlay.addEventListener('click', toggleMobileMenu);
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileDrawer && !mobileDrawer.classList.contains('translate-x-full')) {
                toggleMobileMenu();
            }
        });
    });

    // ==========================================
    // 2. Admissions Enquiry & School Visit Modal
    // ==========================================
    const enquiryModal = document.getElementById('enquiry-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const enquiryForm = document.getElementById('enquiry-form');
    const formContainer = document.getElementById('modal-form-container');
    const thankYouContainer = document.getElementById('modal-thank-you');
    const modalTitle = document.getElementById('modal-title');
    const programSelect = document.getElementById('form-program');
    const enquiryButtons = document.querySelectorAll('.open-enquiry-modal');

    const openEnquiryModal = (preferredProgram = '', title = "Enquire for Admission") => {
        if (!enquiryModal) return;
        if (modalTitle) modalTitle.textContent = title;
        if (programSelect && preferredProgram) {
            programSelect.value = preferredProgram;
        }
        // Reset form & view
        if (formContainer) formContainer.classList.remove('hidden');
        if (thankYouContainer) thankYouContainer.classList.add('hidden');
        if (enquiryForm) enquiryForm.reset();

        enquiryModal.classList.remove('hidden');
        enquiryModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    };

    const closeEnquiryModal = () => {
        if (!enquiryModal) return;
        enquiryModal.classList.add('hidden');
        enquiryModal.classList.remove('flex');
        document.body.style.overflow = '';
    };

    enquiryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const program = btn.getAttribute('data-program') || '';
            const type = btn.getAttribute('data-type') || 'Enquiry';
            const title = type === 'visit' ? "Book a Campus Visit" : "Enquire for Admission";
            openEnquiryModal(program, title);
        });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeEnquiryModal);
    if (enquiryModal) {
        enquiryModal.addEventListener('click', (e) => {
            if (e.target === enquiryModal) closeEnquiryModal();
        });
    }

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const parentName = document.getElementById('parent-name')?.value || 'Parent';
            const parentPhone = document.getElementById('parent-phone')?.value || '';
            const childAge = document.getElementById('child-age')?.value || '';
            const program = programSelect?.value || 'Ryans Academy';

            // Generate random reference code
            const refCode = 'RYN-' + Math.floor(100000 + Math.random() * 900000);
            const refElem = document.getElementById('enquiry-ref-code');
            if (refElem) refElem.textContent = refCode;

            // Setup WhatsApp button in thank you card
            const waBtn = document.getElementById('thank-you-wa-btn');
            if (waBtn) {
                const message = encodeURIComponent(`Hello Ryans Academy! I have submitted an enquiry (Ref: ${refCode}) for my child in ${program}. Name: ${parentName}, Phone: ${parentPhone}. Please assist me with the next steps.`);
                waBtn.href = `https://wa.me/919444000000?text=${message}`;
            }

            // Show thank you screen
            if (formContainer) formContainer.classList.add('hidden');
            if (thankYouContainer) thankYouContainer.classList.remove('hidden');
        });
    }

    // ==========================================
    // 3. Unique Feature: "Every Child Has a Unique Spark"
    // ==========================================
    const sparkTabs = document.querySelectorAll('.spark-tab-btn');
    const sparkDetails = document.querySelectorAll('.spark-detail-content');

    sparkTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');
            
            // Tab active classes
            sparkTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Switch details
            sparkDetails.forEach(detail => {
                if (detail.id === targetId) {
                    detail.classList.remove('hidden');
                    detail.classList.add('animate-fadeIn');
                } else {
                    detail.classList.add('hidden');
                    detail.classList.remove('animate-fadeIn');
                }
            });
        });
    });

    // ==========================================
    // 4. Interactive Gallery & Filter & Lightbox
    // ==========================================
    const filterBtns = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');

    // Filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            filterBtns.forEach(b => {
                b.classList.remove('bg-[#4B1F6F]', 'text-white');
                b.classList.add('bg-white', 'text-gray-700');
            });
            btn.classList.add('bg-[#4B1F6F]', 'text-white');
            btn.classList.remove('bg-white', 'text-gray-700');

            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category') || '';
                if (filter === 'all' || category.includes(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Lightbox open
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const title = item.getAttribute('data-title') || img?.alt || 'Ryans Academy';
            if (lightbox && lightboxImg && img) {
                lightboxImg.src = img.src;
                if (lightboxCaption) lightboxCaption.textContent = title;
                lightbox.classList.remove('hidden');
                lightbox.classList.add('flex');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Lightbox close
    const closeLightbox = () => {
        if (!lightbox) return;
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        document.body.style.overflow = '';
    };

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    // Close modals on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
            closeEnquiryModal();
        }
    });

    // ==========================================
    // 5. Dynamic Year in Footer
    // ==========================================
    const yearElem = document.getElementById('current-year');
    if (yearElem) {
        yearElem.textContent = new Date().getFullYear();
    }

    // ==========================================
    // 6. Scroll Reveal Observer
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -30px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('is-visible'));
    }

    // ==========================================
    // 7. Animated Statistics Counters
    // ==========================================
    const counterElements = document.querySelectorAll('[data-counter-target]');
    if ('IntersectionObserver' in window && counterElements.length > 0) {
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-counter-target'), 10);
                    const prefix = el.getAttribute('data-counter-prefix') || '';
                    const suffix = el.getAttribute('data-counter-suffix') || '';
                    const duration = 1600;
                    const startTime = performance.now();

                    const updateCount = (now) => {
                        const elapsed = now - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        const current = Math.floor(easeOut * target);
                        el.textContent = `${prefix}${current}${suffix}`;

                        if (progress < 1) {
                            requestAnimationFrame(updateCount);
                        } else {
                            el.textContent = `${prefix}${target}${suffix}`;
                        }
                    };

                    requestAnimationFrame(updateCount);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.3 });

        counterElements.forEach(el => counterObserver.observe(el));
    }

    // ==========================================
    // 8. Triad Interactive Card Photo Showcase
    // ==========================================
    const triadCards = document.querySelectorAll('.triad-luxury-card');
    const triadImg = document.getElementById('triad-display-img');
    const triadTag = document.getElementById('triad-display-tag');

    if (triadCards.length > 0 && triadImg) {
        triadCards.forEach(card => {
            card.addEventListener('click', () => {
                triadCards.forEach(c => {
                    c.classList.remove('active', 'ring-2', 'ring-[#D4A72C]');
                    const oldBadge = c.querySelector('.triad-active-badge');
                    if (oldBadge) oldBadge.remove();
                    const chevron = c.querySelector('.fa-chevron-right');
                    if (chevron) {
                        chevron.classList.remove('text-[#D4A72C]');
                    }
                });

                card.classList.add('active', 'ring-2', 'ring-[#D4A72C]');
                const chevron = card.querySelector('.fa-chevron-right');
                if (chevron) {
                    chevron.classList.add('text-[#D4A72C]');
                }

                // Add active viewing badge if missing
                const badgeContainer = card.querySelector('.flex.items-center.gap-2.mb-1');
                if (badgeContainer && !badgeContainer.querySelector('.triad-active-badge')) {
                    const badge = document.createElement('span');
                    badge.className = 'triad-active-badge text-[9px] font-black uppercase tracking-wider text-amber-800 bg-[#FDF8E7] px-2 py-0.5 rounded-full border border-amber-300';
                    badge.textContent = 'Active Viewing';
                    badgeContainer.appendChild(badge);
                }

                const newImg = card.getAttribute('data-triad-img');
                const newTag = card.getAttribute('data-triad-tag');
                const newIcon = card.getAttribute('data-triad-icon') || 'fa-sparkles';

                if (newImg) {
                    triadImg.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
                    triadImg.style.opacity = '0.2';
                    triadImg.style.transform = 'scale(0.97)';
                    setTimeout(() => {
                        triadImg.src = newImg;
                        triadImg.style.opacity = '1';
                        triadImg.style.transform = 'scale(1)';
                    }, 180);
                }

                if (triadTag && newTag) {
                    triadTag.innerHTML = `<i class="fa-solid ${newIcon} text-[#F3D98B]"></i><span>${newTag}</span>`;
                }
            });
        });
    }
});

