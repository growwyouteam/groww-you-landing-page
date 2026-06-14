"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, CalendarDays } from 'lucide-react';
import './Solution.css';

const features = [
  'Sales Billing – Fast & GST Ready',
  'Purchase Management – Vendor Tracking',
  'Inventory Control – Real-time Stock',
  'Customer Management – CRM Built-in',
  'Vendor Management – Payment Tracking',
  'Reports & Analytics – Business Insights',
];

export default function Solution() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="solution" ref={ref}>
      <div className="container solution__inner">
        {/* Left – mockup */}
        <motion.div
          className="solution__visual"
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="solution__mockup glass-card">
            <div className="solution__mockup-bar">
              <span style={{background: '#EF4444'}} /><span style={{background: '#F59E0B'}} /><span style={{background: '#22C55E'}} />
              <p>Groww You ERP – Sales Module</p>
            </div>
            <div className="solution__mockup-body">
              <div className="solution__mockup-invoice glass-panel">
                <div className="solution__invoice-header">
                  <div>
                    <p className="solution__invoice-co">Groww You ERP</p>
                    <p className="solution__invoice-sub">GST Invoice #INV-2024-001</p>
                  </div>
                  <div className="solution__invoice-badge">✅ GST Ready</div>
                </div>
                <div className="solution__invoice-table">
                  <div className="solution__invoice-row solution__invoice-row--head">
                    <span>Item</span><span>Qty</span><span>Rate</span><span>Total</span>
                  </div>
                  {[
                    ['Rice 25kg', '10', '₹1,200', '₹12,000'],
                    ['Sugar 5kg', '20', '₹280', '₹5,600'],
                    ['Oil 5L', '15', '₹750', '₹11,250'],
                  ].map((r, i) => (
                    <div key={i} className="solution__invoice-row">
                      <span>{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span><span>{r[3]}</span>
                    </div>
                  ))}
                </div>
                <div className="solution__invoice-footer">
                  <div className="solution__invoice-tax">
                    <span>Subtotal</span><span>₹28,850</span>
                  </div>
                  <div className="solution__invoice-tax">
                    <span>GST 18%</span><span>₹5,193</span>
                  </div>
                  <div className="solution__invoice-total">
                    <span>Total</span><span>₹34,043</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right – features */}
        <motion.div
          className="solution__content"
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span className="solution__badge glass-panel">✅ The Solution</span>
          <h2 className="section-title">
            Groww You ERP – <span className="text-gradient">Complete Business Solution</span>
          </h2>
          <p className="section-subtitle">
            A powerful, all-in-one platform to manage your billing, inventory, and operations seamlessly with complete GST compliance.
          </p>

          <div className="solution__features">
            {features.map((f, i) => (
              <motion.div
                key={f}
                className="solution__feature glass-panel"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <CheckCircle2 size={22} color="var(--accent)" />
                <span>{f}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#contact"
            className="btn-primary solution__cta group"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
          >
            <CalendarDays size={20} className="group-hover:scale-110 transition-transform duration-300" />
            Book Free Demo
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
