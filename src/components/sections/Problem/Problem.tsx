"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileWarning, Boxes, AlertTriangle, Calculator, Percent, TrendingDown, Clock } from 'lucide-react';
import './Problem.css';

const ManualBillingIcon = () => (
  <FileWarning size={36} strokeWidth={2.2} style={{ filter: 'drop-shadow(0 0 2px currentColor)' }} />
);

const StockMismatchIcon = () => (
  <div style={{ position: 'relative', width: 36, height: 36, filter: 'drop-shadow(0 0 2px currentColor)' }}>
    <Boxes size={36} strokeWidth={2.2} />
    <div style={{ position: 'absolute', bottom: -2, right: -6, background: '#0F172A', borderRadius: '50%', padding: '2px' }}>
      <AlertTriangle size={16} strokeWidth={2.5} />
    </div>
  </div>
);

const GSTErrorsIcon = () => (
  <div style={{ position: 'relative', width: 36, height: 36, filter: 'drop-shadow(0 0 2px currentColor)' }}>
    <Calculator size={36} strokeWidth={2.2} />
    <div style={{ position: 'absolute', bottom: -2, right: -6, background: '#0F172A', borderRadius: '50%', padding: '2px' }}>
      <Percent size={16} strokeWidth={2.5} />
    </div>
  </div>
);

const OutstandingTrackingIcon = () => (
  <div style={{ position: 'relative', width: 36, height: 36, filter: 'drop-shadow(0 0 2px currentColor)' }}>
    <TrendingDown size={36} strokeWidth={2.2} />
    <div style={{ position: 'absolute', bottom: -2, right: -6, background: '#0F172A', borderRadius: '50%', padding: '2px' }}>
      <Clock size={16} strokeWidth={2.5} />
    </div>
  </div>
);

const problems = [
  { icon: <ManualBillingIcon />, title: 'Manual Billing', desc: 'Handwritten invoices take hours and lead to errors, causing dissatisfied customers.', color: '#FF5A5A' },
  { icon: <StockMismatchIcon />, title: 'Stock Mismatch', desc: 'Paper records differ from actual godown stock. Zero visibility on exact inventory levels.', color: '#FFB020' },
  { icon: <GSTErrorsIcon />, title: 'GST Errors', desc: 'Incorrect GST calculations leading to return filing confusion and penalty risks.', color: '#8B5CF6' },
  { icon: <OutstandingTrackingIcon />, title: 'Outstanding Tracking', desc: 'Extremely difficult to track payables and receivables across multiple clients.', color: '#EC4899' },
];

export default function Problem() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="problem" ref={ref}>
      <div className="container">
        <motion.div
          className="problem__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="problem__badge glass-panel">⚠️ Core Problems</span>
          <h2 className="section-title">Are You Facing These <span className="text-gradient">Business Challenges?</span></h2>
          <p className="section-subtitle">
            If these issues resonate with your daily operations, it's time to upgrade your system. Groww You ERP is built to solve these exact pain points.
          </p>
        </motion.div>

        <div className="problem__cards">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              className="problem__card glass-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{ '--hover-color': p.color } as React.CSSProperties}
            >
              <div className="problem__card-icon" style={{ color: p.color, boxShadow: `0 0 15px ${p.color}30` }}>
                {p.icon}
              </div>
              <h3 className="problem__card-title">{p.title}</h3>
              <p className="problem__card-desc">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
