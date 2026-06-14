"use client";

"use client";

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { Zap, BarChart3, Package, Users, CheckCircle2, PlayCircle } from 'lucide-react';
import './Hero.css';

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0 } };

const floaters = [
  { icon: <BarChart3 size={18} color="#3B82F6" />, label: '₹2 Lakhs Sales', top: '15%', left: '-15%', delay: 0 },
  { icon: <Package size={18} color="#8B5CF6" />, label: '1240 Inventory Items', top: '65%', left: '-20%', delay: 0.5 },
  { icon: <Users size={18} color="#22C55E" />, label: '500+ Customers', top: '25%', right: '-10%', delay: 1 },
  { icon: <CheckCircle2 size={18} color="#F59E0B" />, label: 'GST Ready', top: '75%', right: '-5%', delay: 1.5 },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="aurora-glow" style={{ top: '-10%', left: '-10%' }} />
      <div className="aurora-glow" style={{ bottom: '-10%', right: '-10%', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)' }} />
      <div className="grid-bg" />

      <div className="container hero__inner">
        {/* Left */}
        <motion.div
          className="hero__content"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div className="hero__badge" variants={fadeUp} transition={{ delay: 0.1 }}>
            <Zap size={14} fill="currentColor" />
            Modern ERP Solution
          </motion.div>

          <motion.h1
            className="hero__headline"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            Apne Business Ka Billing, Inventory Aur Accounts<br />
            <span className="text-gradient">Ek Hi Software Mein Manage Karein</span>
          </motion.h1>

          <motion.p
            className="hero__sub"
            variants={fadeUp}
            transition={{ delay: 0.35 }}
          >
            Free Demo Available | Account Management | Stock Management | Reports
          </motion.p>

          <motion.div
            className="hero__chips"
            variants={fadeUp}
            transition={{ delay: 0.45 }}
          >
            {['GST Ready', 'Cloud Based', 'Multi-User', 'Fast Support'].map((c) => (
              <span key={c} className="hero__chip glass-panel">
                <CheckCircle2 size={14} color="#22C55E" /> {c}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="hero__btns"
            variants={fadeUp}
            transition={{ delay: 0.55 }}
          >
            <a href="#contact" className="btn-primary hero__btn-demo hero__btn-demo--pulse">
              <PlayCircle className="hero__btn-icon" size={22} />
              Book Free Demo
            </a>
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Groww%20You%20ERP"
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp hero__btn-wa"
            >
              <FaWhatsapp className="hero__btn-icon" size={22} />
              WhatsApp Now
            </a>
          </motion.div>

          {/* <motion.div className="hero__stats-row" variants={fadeUp} transition={{ delay: 0.65 }}>
            <div className="hero__stat-item">
              <h3>500+</h3>
              <p>Businesses</p>
            </div>
            <div className="hero__stat-item">
              <h3>10000+</h3>
              <p>Invoices</p>
            </div>
            <div className="hero__stat-item">
              <h3>99%</h3>
              <p>Accuracy</p>
            </div>
          </motion.div> */}
        </motion.div>

        {/* Right – Dashboard mockup */}
        <motion.div
          className="hero__visual"
          variants={fadeRight}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="hero__dashboard-wrapper">
            <div className="hero__dashboard glass-card">
              <div className="hero__dashboard-header">
                <div className="hero__dashboard-dots">
                  <span style={{ background: '#EF4444' }} /><span style={{ background: '#F59E0B' }} /><span style={{ background: '#22C55E' }} />
                </div>
                <span className="hero__dashboard-title">Dashboard</span>
              </div>

              <div className="hero__dashboard-body">
                <div className="hero__db-stats">
                  {[
                    { label: 'Total Revenue', value: '₹2 Lakhs', color: '#3B82F6' },
                    { label: 'Active Users', value: '1,204', color: '#8B5CF6' },
                    { label: 'Orders', value: '890', color: '#22C55E' },
                  ].map((s) => (
                    <div key={s.label} className="hero__db-stat glass-panel">
                      <span className="hero__db-stat-val" style={{ color: s.color }}>{s.value}</span>
                      <span className="hero__db-stat-lbl">{s.label}</span>
                    </div>
                  ))}
                </div>

                <div className="hero__db-chart glass-panel">
                  <div className="hero__db-chart-label">Revenue Overview</div>
                  <div className="hero__db-bars">
                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                      <motion.div
                        key={i}
                        className="hero__db-bar"
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
                        style={{ background: i === 5 ? 'linear-gradient(180deg, #3B82F6, transparent)' : 'linear-gradient(180deg, rgba(59, 130, 246, 0.3), transparent)' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            {floaters.map((f, i) => (
              <motion.div
                key={i}
                className="hero__floater glass-card"
                style={{ top: f.top, left: f.left, right: f.right }}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: f.delay,
                  ease: "easeInOut"
                }}
              >
                <div className="hero__floater-icon">{f.icon}</div>
                <span>{f.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
