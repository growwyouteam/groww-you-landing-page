"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { BriefcaseBusiness, Receipt, ShieldCheck } from 'lucide-react';
import './TrustNumbers.css';

const stats = [
  { icon: <BriefcaseBusiness size={40} />, end: 500, suffix: '+', label: 'Businesses Trust Groww You ERP', color: 'var(--primary-light)' },
  { icon: <Receipt size={40} />, end: 10000, suffix: '+', label: 'Invoices Generated', color: 'var(--secondary-light)' },
  { icon: <ShieldCheck size={40} />, end: 99, suffix: '%', label: 'Customer Satisfaction', color: 'var(--accent)' },
];

export default function TrustNumbers() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="trust-numbers" ref={ref}>
      <div className="container trust-numbers__inner">
        <motion.div
          className="trust-numbers__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">
            Trusted by <span className="text-gradient">Growing Businesses</span> Across India
          </h2>
        </motion.div>

        <div className="trust-numbers__cards">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="trust-numbers__card glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{ '--hover-color': s.color } as React.CSSProperties}
            >
              <div className="trust-numbers__card-icon" style={{ color: s.color }}>
                {s.icon}
              </div>
              <div className="trust-numbers__number" style={{ color: s.color }}>
                {inView ? (
                  <CountUp end={s.end} duration={2.5} separator="," />
                ) : (
                  <span>0</span>
                )}
                {s.suffix}
              </div>
              <p className="trust-numbers__label">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
