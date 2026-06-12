import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Building2, FileCheck, Star, Clock } from 'lucide-react';
import './Stats.css';

const stats = [
  { icon: <Building2 size={30} />, end: 500, suffix: '+', label: 'Businesses', sub: 'Across India', color: 'var(--primary-light)' },
  { icon: <FileCheck size={30} />, end: 10000, suffix: '+', label: 'Invoices', sub: 'Generated Every Month', color: 'var(--secondary-light)' },
  { icon: <Star size={30} />, end: 99, suffix: '%', label: 'Accuracy', sub: 'In Tax Calculations', color: 'var(--accent)' },
  { icon: <Clock size={30} />, end: 24, suffix: '/7', label: 'Support', sub: 'Dedicated Assistance', color: '#F59E0B' },
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
