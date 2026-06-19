"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Rocket, User, Phone, Briefcase, CheckCircle, PhoneCall, Sparkles, Wand2, Loader2, AlertCircle, X } from 'lucide-react';
import './LeadForm.css';

interface LeadFormData {
  name: string;
  mobile: string;
  business: string;
}

const businessTypes = [
  'Retail Shop', 'Wholesale Business', 'Manufacturing Unit',
  'Distribution Company', 'Restaurant / Hotel', 'Medical / Pharmacy',
  'Other',
];

const WhatsAppOutlineIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#22C55E', filter: 'drop-shadow(0 0 4px rgba(34, 197, 94, 0.4))', flexShrink: 0, marginRight: '8px' }}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    <path d="M16 14.5c-.3.8-1.5 1.5-2.2 1.5s-2.1-.5-3.6-2c-1.5-1.5-2-2.9-2-3.6s.7-1.9 1.5-2.2c.4-.2.9 0 1.1.4l.8 1.8c.1.3.1.6-.1.8l-.5.6c-.2.2-.2.5 0 .8.5.8 1.2 1.5 2 2 .3.2.6.2.8 0l.6-.5c.2-.2.5-.2.8-.1l1.8.8c.4.2.6.7.4 1.1z"/>
  </svg>
);

const DemoBadgeIcon = () => (
  <span style={{ display: 'inline-flex', alignItems: 'center', position: 'relative', marginRight: '6px' }}>
    <Rocket size={16} strokeWidth={2} style={{ color: '#A855F7', filter: 'drop-shadow(0 0 4px rgba(168, 85, 247, 0.5))' }} />
    <Sparkles size={8} strokeWidth={2.5} style={{ position: 'absolute', top: -3, right: -4, color: '#3B82F6' }} />
  </span>
);

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const { register, handleSubmit, formState: { errors } } = useForm<LeadFormData>({
    mode: 'onBlur'
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/demo-lead', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          mobile: data.mobile,
          business: data.business,
        }),
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const textResponse = await response.text();
        console.error("API response is not JSON. Status:", response.status, "Text:", textResponse.substring(0, 200) + "...");
        throw new Error("API endpoint is not reachable or not returning JSON. If you are using static export (output: 'export'), API routes won't work.");
      }

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="lead" id="contact" ref={ref}>
      <div className="lead__bg-orb" />
      <div className="container lead__inner">
        {/* Left info */}
        <motion.div
          className="lead__info"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="lead__badge glass-panel" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <DemoBadgeIcon /> Free Demo
          </span>
          <h2 className="section-title lead__title">
            Book Your <span className="text-gradient">Free ERP Demo</span> Today
          </h2>
          <p className="lead__desc">
            See how Groww You ERP can transform your business. Book a free, no-commitment demo with our experts.
          </p>

          <div className="lead__points">
            {[
              '30-minute personalized walkthrough',
              'Custom setup for your business type',
              'Transparent pricing discussion',
              '7-day free trial included',
            ].map((p) => (
              <div key={p} className="lead__point">
                <CheckCircle size={20} color="var(--accent)" />
                <span>{p}</span>
              </div>
            ))}
          </div>

          <div className="lead__contact">
            <p className="lead__contact-label">Or reach out directly:</p>
            <a href="tel:+919084734438" className="lead__phone" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <PhoneCall size={18} strokeWidth={2} style={{ color: '#EC4899', filter: 'drop-shadow(0 0 4px rgba(236, 72, 153, 0.4))', marginRight: '8px' }} />
              +91 9084734438
            </a>
            <a
              href="https://wa.me/919084734438"
              className="lead__wa"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center' }}
            >
              <WhatsAppOutlineIcon /> WhatsApp Us
            </a>
          </div>
        </motion.div>

        {/* Right form */}
        <motion.div
          className="lead__card glass-card"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {submitted ? (
            <motion.div
              className="lead__success"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="lead__success-icon">🎉</div>
              <h3>Thank You!</h3>
              <p>Your demo request has been received. Our team will contact you within 2 hours.</p>
              <a href="https://wa.me/919084734438" className="btn-whatsapp lead__wa-btn" target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </motion.div>
          ) : (
            <>
              <div className="lead__card-header">
                <h3 className="lead__card-title">Get Free Demo</h3>
                <p className="lead__card-sub">100% Free • No Credit Card Required</p>
              </div>

              {/* Error Toast */}
              <AnimatePresence>
                {errorMessage && (
                  <motion.div
                    className="lead__toast"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AlertCircle size={18} className="lead__toast-icon" />
                    <span className="lead__toast-text">{errorMessage}</span>
                    <button
                      className="lead__toast-close"
                      onClick={() => setErrorMessage(null)}
                      aria-label="Dismiss error"
                    >
                      <X size={14} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="lead__form" noValidate>
                <div className="lead__field">
                  <label className="lead__label">
                    <User size={16} /> Your Name
                  </label>
                  <input
                    className={`lead__input glass-panel ${errors.name ? 'lead__input--error' : ''}`}
                    placeholder="Full Name"
                    disabled={isSubmitting}
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <span className="lead__error">{errors.name.message as string}</span>}
                </div>

                <div className="lead__field">
                  <label className="lead__label">
                    <Phone size={16} /> Mobile Number
                  </label>
                  <input
                    className={`lead__input glass-panel ${errors.mobile ? 'lead__input--error' : ''}`}
                    placeholder="10-digit mobile number"
                    type="tel"
                    maxLength={10}
                    disabled={isSubmitting}
                    {...register('mobile', {
                      required: 'Please enter your mobile number',
                      validate: {
                        isNumeric: (v) => /^[0-9]+$/.test(v) || 'Only numbers are allowed',
                        exactLength: (v) => v.length === 10 || 'Mobile number must be exactly 10 digits',
                        validStart: (v) => /^[6-9]/.test(v) || 'Please enter a valid Indian mobile number',
                      }
                    })}
                  />
                  {errors.mobile && <span className="lead__error">{errors.mobile.message as string}</span>}
                </div>

                <div className="lead__field">
                  <label className="lead__label">
                    <Briefcase size={16} /> Business Type
                  </label>
                  <select
                    className={`lead__input lead__select glass-panel ${errors.business ? 'lead__input--error' : ''}`}
                    {...register('business', { required: 'Please select a business type' })}
                    defaultValue=""
                    disabled={isSubmitting}
                  >
                    <option value="" disabled style={{color: '#000'}}>Select business type</option>
                    {businessTypes.map((b) => (
                      <option key={b} value={b} style={{color: '#000'}}>{b}</option>
                    ))}
                  </select>
                  {errors.business && <span className="lead__error">{errors.business.message as string}</span>}
                </div>

                <button
                  type="submit"
                  className={`btn-primary lead__submit ${isSubmitting ? 'lead__submit--loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="lead__spinner" /> Submitting...
                    </>
                  ) : (
                    <>
                      <Wand2 size={20} color="#fff" /> Get Free Demo
                    </>
                  )}
                </button>

                <p className="lead__disclaimer">
                  🔒 Your information is 100% safe. We don't spam.
                </p>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
