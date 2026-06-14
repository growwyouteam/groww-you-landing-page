"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, MousePointerClick, Headphones, MessageCircle, IndianRupee, Tag, LayoutDashboard, Sparkles } from 'lucide-react';
import './WhyChoose.css';

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

const EasyToUseIcon = () => (
  <div style={{ position: 'relative', width: 32, height: 32, filter: 'drop-shadow(0 0 2px currentColor)' }}>
    <Zap size={32} strokeWidth={2.2} />
    <BadgeOverlay><MousePointerClick size={16} strokeWidth={2.5} /></BadgeOverlay>
  </div>
);

const SupportIcon = () => (
  <div style={{ position: 'relative', width: 32, height: 32, filter: 'drop-shadow(0 0 2px currentColor)' }}>
    <Headphones size={32} strokeWidth={2.2} />
    <BadgeOverlay><MessageCircle size={16} strokeWidth={2.5} /></BadgeOverlay>
  </div>
);

const PricingIcon = () => (
  <div style={{ position: 'relative', width: 32, height: 32, filter: 'drop-shadow(0 0 2px currentColor)' }}>
    <IndianRupee size={32} strokeWidth={2.2} />
    <BadgeOverlay><Tag size={16} strokeWidth={2.5} /></BadgeOverlay>
  </div>
);

const InterfaceIcon = () => (
  <div style={{ position: 'relative', width: 32, height: 32, filter: 'drop-shadow(0 0 2px currentColor)' }}>
    <LayoutDashboard size={32} strokeWidth={2.2} />
    <BadgeOverlay><Sparkles size={16} strokeWidth={2.5} /></BadgeOverlay>
  </div>
);

const cards = [
  {
    icon: <EasyToUseIcon />,
    title: 'Easy To Use',
    desc: 'Simple interface designed for anyone to learn in a day. Free training and onboarding included.',
    color: 'var(--primary-light)',
    delay: 0,
  },
  {
    icon: <SupportIcon />,
    title: 'Fast Support',
    desc: 'Dedicated 24/7 WhatsApp and phone support. Get your issues resolved within 2 hours.',
    color: 'var(--secondary-light)',
    delay: 0.15,
  },
  {
    icon: <PricingIcon />,
    title: 'Affordable Pricing',
    desc: 'Premium features at pocket-friendly plans. Unbeatable value starting at just ₹999/month.',
    color: 'var(--accent)',
    delay: 0.3,
  },
  {
    icon: <InterfaceIcon />,
    title: 'Modern Interface',
    desc: 'A beautiful, clean, and fast UI that boosts your teams productivity and engagement.',
    color: '#F59E0B',
    delay: 0.45,
  },
];

export default function WhyChoose() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="why" ref={ref}>
      <div className="container">
        <motion.div
          className="why__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="why__badge glass-panel">🏆 Why Choose Us</span>
          <h2 className="section-title">Groww You ERP <span className="text-gradient">Advantage</span></h2>
          <p className="section-subtitle">
            Experience the difference of a truly modern ERP. We don't just provide software, we partner in your growth.
          </p>
        </motion.div>

        <div className="why__cards">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              className="why__card glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: c.delay }}
            >
              <div className="why__card-icon-wrap" style={{ color: c.color, background: `rgba(255,255,255,0.05)`, boxShadow: `0 0 20px ${c.color}30` }}>
                {c.icon}
              </div>
              <h3 className="why__card-title">{c.title}</h3>
              <p className="why__card-desc">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
