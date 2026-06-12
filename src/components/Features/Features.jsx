import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Package, Receipt, Users, Handshake, BarChart2 } from 'lucide-react';
import './Features.css';

const cards = [
  {
    icon: <FileText size={28} />,
    title: 'Smart Billing',
    desc: 'GST-compliant invoices seconds mein banayein. Thermal print, PDF share, WhatsApp — sab kuch ek click mein.',
    color: '#2563EB',
  },
  {
    icon: <Package size={28} />,
    title: 'Inventory Tracking',
    desc: 'Real-time stock updates. Low stock alerts, category-wise tracking, barcode support.',
    color: '#8B5CF6',
  },
  {
    icon: <Receipt size={28} />,
    title: 'GST Management',
    desc: 'GSTR-1, GSTR-3B auto calculate. Tax reports ready for CA in one click.',
    color: '#0EA5E9',
  },
  {
    icon: <Users size={28} />,
    title: 'Customer Management',
    desc: 'Customer ledger, outstanding balance, payment history — sab ek jagah.',
    color: '#22C55E',
  },
  {
    icon: <Handshake size={28} />,
    title: 'Vendor Management',
    desc: 'Purchase orders, vendor payments, credit notes — aur full purchase history.',
    color: '#F59E0B',
  },
  {
    icon: <BarChart2 size={28} />,
    title: 'Reports & Analytics',
    desc: 'Daily, monthly, yearly reports. Profit & Loss, Balance Sheet, cash flow — sab kuch.',
    color: '#EF4444',
  },
];

export default function Features() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="features" id="features" ref={ref}>
      <div className="container">
        <motion.div
          className="features__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">⚡ Features</span>
          <h2 className="section-title">Sab Kuch Jo Aapke <span>Business Ko Chahiye</span></h2>
          <p className="section-subtitle">
            Groww You ERP mein sab kuch built-in hai. Koi extra software, koi extra cost nahi.
          </p>
        </motion.div>

        <div className="features__grid">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              className="features__card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="features__card-icon" style={{ background: `${c.color}15`, color: c.color }}>
                {c.icon}
              </div>
              <h3 className="features__card-title">{c.title}</h3>
              <p className="features__card-desc">{c.desc}</p>
              <div className="features__card-shine" style={{ '--shine-color': c.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
