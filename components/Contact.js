'use client';

import { useEffect, useRef, useState } from 'react';
import { useLang } from '../lib/i18n';

export default function Contact() {
  const sectionRef = useRef(null);
  const bigTextRef = useRef(null);
  const splitRef = useRef(null);
  const dialogRef = useRef(null);
  const { t } = useLang();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('idle');
  const [formMessage, setFormMessage] = useState('');

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Big heading lines reveal
      const lines = bigTextRef.current?.querySelectorAll('.line-inner');
      if (lines) {
        gsap.to(lines, {
          translateY: '0%',
          duration: 1.1,
          ease: 'expo.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: bigTextRef.current,
            start: 'top 85%',
          },
        });
      }

      // Contact info and CTA
      gsap.fromTo(
        splitRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: splitRef.current,
            start: 'top 85%',
          },
        }
      );
    };

    init();
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setFormStatus('idle');
    setFormMessage('');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('submitting');
    setFormMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || t.contact.modal.errorDefault);
      }

      setFormStatus('success');
      setFormMessage(t.contact.modal.success);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus('error');
      setFormMessage(error.message || t.contact.modal.errorDefault);
    }
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact__inner">
        <div className="contact__big" ref={bigTextRef}>
          <span className="line-wrap">
            <span className="line-inner" style={{ transform: 'translateY(110%)' }}>
              {t.contact.big[0]}
            </span>
          </span>
          <span className="line-wrap">
            <span className="line-inner accent" style={{ transform: 'translateY(110%)' }}>
              {t.contact.big[1]}
            </span>
          </span>
          <span className="line-wrap">
            <span className="line-inner" style={{ transform: 'translateY(110%)' }}>
              {t.contact.big[2]}
            </span>
          </span>
        </div>

        <div className="contact__split" ref={splitRef} style={{ opacity: 0 }}>
          <div className="contact__info">
            <div className="contact__info-item">
              <label>{t.contact.info.email}</label>
              <a href="mailto:onlyhouse@gmail.com">onlyhouse@gmail.com</a>
            </div>
            <div className="contact__info-item">
              <label>{t.contact.info.github}</label>
              <a href="https://github.com/onlyhouse1980" target="_blank" rel="noreferrer">
                github.com/onlyhouse1980
              </a>
            </div>
            <div className="contact__info-item">
              <label>{t.contact.info.linkedin}</label>
              <a href="https://linkedin.com/in/ryan-nyberg" target="_blank" rel="noreferrer">
                linkedin.com/in/ryan-nyberg
              </a>
            </div>
            <div className="contact__info-item">
              <label>{t.contact.info.location}</label>
              <span>{t.contact.info.locationValue}</span>
            </div>
          </div>

          <div className="contact__cta">
            <p className="contact__desc">{t.contact.desc}</p>
            <button type="button" className="contact__btn" onClick={handleOpenModal}>
              <span>{t.contact.cta}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="contact-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          <div
            className="contact-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            tabIndex={-1}
            ref={dialogRef}
          >
            <button
              type="button"
              className="contact-modal__close"
              aria-label={t.contact.modal.close}
              onClick={() => setIsModalOpen(false)}
            >
              <span aria-hidden="true">×</span>
            </button>

            <div className="contact-modal__header">
              <span className="contact-modal__eyebrow">{t.contact.modal.eyebrow}</span>
              <h3 id="contact-modal-title">{t.contact.modal.title}</h3>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <label htmlFor="contact-name">{t.contact.modal.name}</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-form__row">
                <label htmlFor="contact-email">{t.contact.modal.email}</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="contact-form__row">
                <label htmlFor="contact-subject">{t.contact.modal.subject}</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="contact-form__row">
                <label htmlFor="contact-message">{t.contact.modal.message}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  required
                />
              </div>

              {formMessage && (
                <p className={`contact-form__status contact-form__status--${formStatus}`}>
                  {formMessage}
                </p>
              )}

              <button
                type="submit"
                className="contact-form__submit"
                disabled={formStatus === 'submitting'}
              >
                <span>{formStatus === 'submitting' ? t.contact.modal.sending : t.contact.modal.send}</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
