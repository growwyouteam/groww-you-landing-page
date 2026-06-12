import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileX, AlertTriangle, Calculator, TrendingDown } from 'lucide-react';
import './Problem.css';

const problems = [
  { icon: <FileX size={32} />, title: 'Manual Billing', desc: 'Handwritten invoices take hours and lead to errors, causing dissatisfied customers.', color: '#EF4444' },
  { icon: <AlertTriangle size={32} />, title: 'Stock Mismatch', desc: 'Paper records differ from actual godown stock. Zero visibility on exact inventory levels.', color: '#F59E0B' },
  { icon: <Calculator size={32} />, title: 'GST Errors', desc: 'Incorrect GST calculations leading to return filing confusion and penalty risks.', color: '#8B5CF6' },
  { icon: <TrendingDown size={32} />, title: 'Outstanding Tracking', desc: 'Extremely difficult to track payables and receivables across multiple clients.', color: '#EC4899' },
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
              style={{ '--hover-color': p.color }}
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
