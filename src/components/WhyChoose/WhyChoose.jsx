import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, HeadphonesIcon, IndianRupee, Sparkles } from 'lucide-react';
import './WhyChoose.css';

const cards = [
  {
    icon: <Zap size={30} />,
    title: 'Easy To Use',
    desc: 'Simple interface designed for anyone to learn in a day. Free training and onboarding included.',
    color: 'var(--primary-light)',
    delay: 0,
  },
  {
    icon: <HeadphonesIcon size={30} />,
    title: 'Fast Support',
    desc: 'Dedicated 24/7 WhatsApp and phone support. Get your issues resolved within 2 hours.',
    color: 'var(--secondary-light)',
    delay: 0.15,
  },
  {
    icon: <IndianRupee size={30} />,
    title: 'Affordable Pricing',
    desc: 'Premium features at pocket-friendly plans. Unbeatable value starting at just ₹999/month.',
    color: 'var(--accent)',
    delay: 0.3,
  },
  {
    icon: <Sparkles size={30} />,
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
