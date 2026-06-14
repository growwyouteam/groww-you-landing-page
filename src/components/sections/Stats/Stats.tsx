"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Building2, MapPin, FileCheck, Calendar, BadgeCheck, Star, Headphones, Clock } from 'lucide-react';
import './Stats.css';

const BadgeOverlay = ({ children }: { children: React.ReactNode }) => (
  <div style={{ 
    position: 'absolute', 
    bottom: -4, 
    right: -6, 
    background: '#0F172A', 
    borderRadius: '50%', 
    padding: '2px',
  }}>
    {children}
  </div>
);

const BusinessesIcon = () => (
  <div style={{ position: 'relative', width: 32, height: 32, filter: 'drop-shadow(0 0 2px currentColor)' }}>
    <Building2 size={32} strokeWidth={2.2} />
    <BadgeOverlay><MapPin size={16} strokeWidth={2.5} /></BadgeOverlay>
  </div>
);

const InvoicesIcon = () => (
  <div style={{ position: 'relative', width: 32, height: 32, filter: 'drop-shadow(0 0 2px currentColor)' }}>
    <FileCheck size={32} strokeWidth={2.2} />
    <BadgeOverlay><Calendar size={16} strokeWidth={2.5} /></BadgeOverlay>
  </div>
);

const AccuracyIcon = () => (
  <div style={{ position: 'relative', width: 32, height: 32, filter: 'drop-shadow(0 0 2px currentColor)' }}>
    <BadgeCheck size={32} strokeWidth={2.2} />
    <BadgeOverlay><Star size={16} strokeWidth={2.5} /></BadgeOverlay>
  </div>
);

const SupportIcon = () => (
  <div style={{ position: 'relative', width: 32, height: 32, filter: 'drop-shadow(0 0 2px currentColor)' }}>
    <Headphones size={32} strokeWidth={2.2} />
    <BadgeOverlay><Clock size={16} strokeWidth={2.5} /></BadgeOverlay>
  </div>
);

const stats = [
  { icon: <BusinessesIcon />, end: 500, suffix: '+', label: 'Businesses', sub: 'Across India', color: 'var(--primary-light)' },
  { icon: <InvoicesIcon />, end: 10000, suffix: '+', label: 'Invoices', sub: 'Generated Every Month', color: 'var(--secondary-light)' },
  { icon: <AccuracyIcon />, end: 99, suffix: '%', label: 'Accuracy', sub: 'In Tax Calculations', color: 'var(--accent)' },
  { icon: <SupportIcon />, end: 24, suffix: '/7', label: 'Support', sub: 'Dedicated Assistance', color: '#F59E0B' },
];

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="stats" ref={ref}>
      <div className="container stats__inner">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="stats__card glass-card"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="stats__icon" style={{ color: s.color, boxShadow: `0 0 20px ${s.color}40`, background: `rgba(255, 255, 255, 0.05)` }}>
              {s.icon}
            </div>
            <div className="stats__number" style={{ color: s.color }}>
              {inView ? (
                <CountUp end={s.end} duration={2.5} separator="," />
              ) : (
                <span>0</span>
              )}
              {s.suffix}
            </div>
            <div className="stats__label">{s.label}</div>
            <div className="stats__sub">{s.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
