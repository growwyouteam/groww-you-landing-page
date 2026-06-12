"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Rocket, User, Phone, Briefcase, CheckCircle } from 'lucide-react';
import './LeadForm.css';

const businessTypes = [
  'Retail Shop', 'Wholesale Business', 'Manufacturing Unit',
  'Distribution Company', 'Restaurant / Hotel', 'Medical / Pharmacy',
  'Other',
];

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log('Lead Data:', data);
    setSubmitted(true);
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
          <span className="lead__badge glass-panel">🚀 Free Demo</span>
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
            <a href="tel:+919999999999" className="lead__phone">📞 +91 99999 99999</a>
            <a
              href="https://wa.me/919999999999"
              className="lead__wa"
              target="_blank"
              rel="noreferrer"
            >
              💬 WhatsApp Us
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
              <a href="https://wa.me/919999999999" className="btn-whatsapp lead__wa-btn" target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </motion.div>
          ) : (
            <>
              <div className="lead__card-header">
                <h3 className="lead__card-title">Get Free Demo</h3>
                <p className="lead__card-sub">100% Free • No Credit Card Required</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="lead__form" noValidate>
                <div className="lead__field">
                  <label className="lead__label">
                    <User size={16} /> Your Name
                  </label>
                  <input
                    className={`lead__input glass-panel ${errors.name ? 'lead__input--error' : ''}`}
                    placeholder="Full Name"
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
                    {...register('mobile', {
                      required: 'Mobile number is required',
                      pattern: { value: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit number' },
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
                  >
                    <option value="" disabled style={{color: '#000'}}>Select business type</option>
                    {businessTypes.map((b) => (
                      <option key={b} value={b} style={{color: '#000'}}>{b}</option>
                    ))}
                  </select>
                  {errors.business && <span className="lead__error">{errors.business.message as string}</span>}
                </div>

                <button type="submit" className="btn-primary lead__submit">
                  <Rocket size={18} /> Get Free Demo
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
