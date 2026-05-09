'use client';

import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const sectionRef = useRef(null);
  const bigTextRef = useRef(null);
  const splitRef = useRef(null);
  const dialogRef = useRef(null);
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
        throw new Error(result.error || 'The message could not be sent.');
      }

      setFormStatus('success');
      setFormMessage('Message sent. I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus('error');
      setFormMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact__inner">
        <div className="contact__big" ref={bigTextRef}>
          <span className="line-wrap">
            <span className="line-inner" style={{ transform: 'translateY(110%)' }}>
              Let&apos;s build
            </span>
          </span>
          <span className="line-wrap">
            <span className="line-inner accent" style={{ transform: 'translateY(110%)' }}>
              something
            </span>
          </span>
          <span className="line-wrap">
            <span className="line-inner" style={{ transform: 'translateY(110%)' }}>
              great.
            </span>
          </span>
        </div>

        <div className="contact__split" ref={splitRef} style={{ opacity: 0 }}>
          <div className="contact__info">
            <div className="contact__info-item">
              <label>Email</label>
              <a href="mailto:onlyhouse@gmail.com">onlyhouse@gmail.com</a>
            </div>
            <div className="contact__info-item">
              <label>GitHub</label>
              <a href="https://github.com/onlyhouse1980" target="_blank" rel="noreferrer">
                github.com/onlyhouse1980
              </a>
            </div>
            <div className="contact__info-item">
              <label>LinkedIn</label>
              <a href="https://linkedin.com/in/ryan-nyberg" target="_blank" rel="noreferrer">
                linkedin.com/in/ryan-nyberg
              </a>
            </div>
            <div className="contact__info-item">
              <label>Location</label>
              <span>Remote — Worldwide</span>
            </div>
          </div>

          <div className="contact__cta">
            <p className="contact__desc">
              I&apos;m currently available for freelance projects, full-time roles, and
              exciting collaborations. If you have a project in mind or just want
              to chat, my inbox is always open.
            </p>
            <button type="button" className="contact__btn" onClick={handleOpenModal}>
              <span>Start a conversation</span>
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
              aria-label="Close contact form"
              onClick={() => setIsModalOpen(false)}
            >
              <span aria-hidden="true">×</span>
            </button>

            <div className="contact-modal__header">
              <span className="contact-modal__eyebrow">Contact</span>
              <h3 id="contact-modal-title">Start a conversation</h3>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <label htmlFor="contact-name">Name</label>
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
                <label htmlFor="contact-email">Email</label>
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
                <label htmlFor="contact-subject">Subject</label>
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
                <label htmlFor="contact-message">Message</label>
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
                <span>{formStatus === 'submitting' ? 'Sending...' : 'Send message'}</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
