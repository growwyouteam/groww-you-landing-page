"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingBag, Layers, Factory, Truck } from 'lucide-react';
import './Trust.css';

const cards = [
  { icon: <ShoppingBag size={32} />, label: 'Retail', desc: 'Kirana to superstore', color: 'var(--primary-light)' },
  { icon: <Layers size={32} />, label: 'Wholesale', desc: 'Bulk trading businesses', color: 'var(--secondary-light)' },
  { icon: <Factory size={32} />, label: 'Manufacturing', desc: 'Production management', color: 'var(--accent)' },
  { icon: <Truck size={32} />, label: 'Distribution', desc: 'Multi-branch logistics', color: '#F59E0B' },
];

export default function Trust() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="trust" ref={ref}>
      <div className="container trust__inner">
        <motion.div
          className="trust__heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="trust__number">500+</h2>
          <p className="trust__text">Businesses Trust Groww You ERP</p>
        </motion.div>

        <div className="trust__cards">
          {cards.map((c, i) => (
            <motion.div
              key={c.label}
              className="trust__card glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="trust__card-icon" style={{ color: c.color, boxShadow: `0 0 20px ${c.color}40` }}>
                {c.icon}
              </div>
              <p className="trust__card-label">{c.label}</p>
              <p className="trust__card-desc">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
