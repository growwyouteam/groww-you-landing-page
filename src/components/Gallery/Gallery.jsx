import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Gallery.css';

const slides = [
  {
    title: 'Dashboard Overview',
    desc: 'Poore business ka summary ek screen par',
    accent: '#3B82F6',
    rows: [
      ['Total Sales', '₹84,200', '+12%'],
      ['Total Purchases', '₹41,000', '-3%'],
      ['Net Profit', '₹43,200', '+8%'],
      ['Outstanding', '₹12,400', '4 parties'],
    ],
  },
  {
    title: 'Sales Invoice',
    desc: 'GST-compliant invoices seconds mein',
    accent: '#8B5CF6',
    rows: [
      ['Party Name', 'Raj Traders', 'Delhi'],
      ['Invoice No', 'INV-2024-042', 'GST'],
      ['Taxable Amt', '₹28,850', ''],
      ['GST Amount', '₹5,193', '18%'],
    ],
  },
  {
    title: 'Customer Master',
    desc: 'Sare customers ek jagah manage karein',
    accent: '#22C55E',
    rows: [
      ['Raj Traders', 'Delhi', '₹12,400 Due'],
      ['Sharma Stores', 'Agra', 'Paid'],
      ['Delhi Mart', 'Noida', '₹8,200 Due'],
      ['Gupta Bros', 'Gurgaon', 'Paid'],
    ],
  },
  {
    title: 'Inventory Master',
    desc: 'Real-time stock tracking aur alerts',
    accent: '#F59E0B',
    rows: [
      ['Rice 25kg', '240 bags', '🟢 Good'],
      ['Sugar 5kg', '45 bags', '🟡 Low'],
      ['Oil 5L', '120 pcs', '🟢 Good'],
      ['Wheat 50kg', '8 bags', '🔴 Critical'],
    ],
  },
  {
    title: 'Reports & Analytics',
    desc: 'Business insights jo decisions lene mein help karein',
    accent: '#EC4899',
    rows: [
      ['Monthly Sales', '₹8,42,000', '+18%'],
      ['Top Product', 'Rice 25kg', '₹2.1L'],
      ['Top Customer', 'Raj Traders', '₹84,200'],
      ['GST Liability', '₹71,940', 'GSTR-3B'],
    ],
  },
];

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="gallery" id="gallery" ref={ref}>
      <div className="container">
        <motion.div
          className="gallery__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="gallery__badge glass-panel">📸 Interface Preview</span>
          <h2 className="section-title">Experience the <span className="text-gradient">Premium Dashboard</span></h2>
          <p className="section-subtitle">
            A sneak peek into the beautiful, modern, and lightning-fast interface of Groww You ERP.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              900: { slidesPerView: 2 },
              1200: { slidesPerView: 2.5 },
            }}
            className="gallery__swiper"
          >
            {slides.map((s) => (
              <SwiperSlide key={s.title}>
                <div className="gallery__slide glass-card">
                  <div className="gallery__slide-bar" style={{ background: 'rgba(15, 23, 42, 0.9)' }}>
                    <span style={{background: '#EF4444'}} /><span style={{background: '#F59E0B'}} /><span style={{background: '#22C55E'}} />
                    <p style={{color: s.accent}}>{s.title}</p>
                  </div>
                  <div className="gallery__slide-body">
                    <div className="gallery__slide-table">
                      {s.rows.map((r, i) => (
                        <div key={i} className="gallery__slide-row">
                          <span className="gallery__slide-key">{r[0]}</span>
                          <span className="gallery__slide-val">{r[1]}</span>
                          {r[2] && (
                            <span
                              className="gallery__slide-tag"
                              style={{ color: r[2].includes('+') ? '#22C55E' : r[2].includes('-') ? '#EF4444' : 'var(--text-muted)' }}
                            >
                              {r[2]}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="gallery__slide-footer">
                    <span className="gallery__slide-badge" style={{ background: `${s.accent}20`, color: s.accent, border: `1px solid ${s.accent}40` }}>
                      {s.desc}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
