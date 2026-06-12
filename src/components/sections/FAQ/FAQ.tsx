"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    q: 'Groww You ERP kis business ke liye hai?',
    a: 'Groww You ERP sabhi types ke businesses ke liye design kiya gaya hai — retail shops, wholesale traders, manufacturing units, distributors, medical stores, restaurants, aur bhi bahut kuch. Agar aap koi bhi business run karte hain, yeh software aapke liye hai.',
  },
  {
    q: 'Kya GST Billing support hai?',
    a: 'Haan, Groww You ERP mein full GST support hai. GSTR-1, GSTR-3B auto-calculate hota hai. GST invoices ek click mein generate hoti hain — different tax slabs (0%, 5%, 12%, 18%, 28%) sab support karte hain.',
  },
  {
    q: 'Kya Inventory Management available hai?',
    a: 'Bilkul! Real-time inventory tracking, low stock alerts, barcode support, category-wise stock management, batch tracking — sab kuch built-in hai. Kabhi bhi stock mismatch nahi hoga.',
  },
  {
    q: 'Kya Demo Available hai?',
    a: 'Haan, hum free 30-minute personalized demo dete hain. Aapke business ke according software dikhate hain. Iske baad 7-day free trial bhi milta hai. Koi payment pehle nahi lagti. Abhi book karein!',
  },
  {
    q: 'Software kitna affordable hai?',
    a: 'Groww You ERP ke plans ₹999/month se shuru hote hain. Yeh India ke sabse competitive pricing mein se ek hai. Annual plan mein aur bhi zyada savings milti hai. Koi hidden charges nahi hain.',
  },
  {
    q: 'Data secure hai?',
    a: 'Aapka data 100% secure hai. Cloud backup, SSL encryption, aur daily automated backups — aapka data kabhi lose nahi hoga. India ke data centers mein store hota hai.',
  },
];

function FAQItem({ faq, index }: { faq: { q: string, a: string }, index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`faq__item ${open ? 'faq__item--open' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <button className="faq__question" onClick={() => setOpen(!open)}>
        <span>{faq.q}</span>
        <motion.span
          className="faq__chevron"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="faq__answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="faq" ref={ref}>
      <div className="container">
        <motion.div
          className="faq__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">❓ FAQ</span>
          <h2 className="section-title">Aapke <span>Sawal, Hamare Jawab</span></h2>
          <p className="section-subtitle">
            Sabse common questions ke jawab yahan hain. Aur kuch poochna hai toh WhatsApp karein!
          </p>
        </motion.div>

        <div className="faq__list">
          {faqs.map((f, i) => (
            <FAQItem key={f.q} faq={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
