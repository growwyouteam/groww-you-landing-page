"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Building2,
  FileCheck,
  BadgeCheck,
  Headphones,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "./Testimonials.css";

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

interface Testimonial {
  name: string;
  title: string;
  company: string;
  initials: string;
  rating: number;
  review: string;
  accent: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Sharma",
    title: "Founder",
    company: "Sharma Traders",
    initials: "RS",
    rating: 5,
    review:
      "Groww You ERP reduced our billing time by more than 70%. GST filing and inventory management are now effortless.",
    accent: "var(--accent-orange)",
  },
  {
    name: "Priya Verma",
    title: "Operations Head",
    company: "Verma Enterprises",
    initials: "PV",
    rating: 5,
    review:
      "The GST and invoice management features save us hours every week. Filing returns is now stress-free and error-proof. Highly recommended for any Indian business.",
    accent: "var(--secondary-light)",
  },
  {
    name: "Amit Gupta",
    title: "CEO",
    company: "Tech Vista Solutions",
    initials: "AG",
    rating: 5,
    review:
      "Easy to use, powerful features, and excellent support. This is the perfect ERP solution for growing businesses that need enterprise tools without the complexity.",
    accent: "var(--accent)",
  },
  {
    name: "Neha Patel",
    title: "Director",
    company: "Patel Fashions",
    initials: "NP",
    rating: 5,
    review:
      "Switched from manual bookkeeping to Groww You ERP and the difference is night and day. Real-time dashboards give us insights we never had before.",
    accent: "var(--primary-light)",
  },
  {
    name: "Vikram Singh",
    title: "Managing Partner",
    company: "Singh Auto Parts",
    initials: "VS",
    rating: 5,
    review:
      "Real-time inventory tracking and automated GST filing have saved us countless hours. The support team resolves issues within minutes — truly world-class service.",
    accent: "#F59E0B",
  },
  {
    name: "Kavita Joshi",
    title: "Co-Founder",
    company: "Joshi Interiors",
    initials: "KJ",
    rating: 5,
    review:
      "Beautiful interface, reliable performance, and the customer support team is always there when we need them. It feels like having an extra team member.",
    accent: "var(--accent-orange-light)",
  },
];

/* ═══════════════════════════════════════════════════════
   TRUST DATA
   ═══════════════════════════════════════════════════════ */

interface TrustStat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const trustStats: TrustStat[] = [
  { icon: <Building2 size={20} />, value: "500+", label: "Happy Businesses" },
  { icon: <FileCheck size={20} />, value: "10,000+", label: "Invoices Processed" },
  { icon: <BadgeCheck size={20} />, value: "99%", label: "Accuracy" },
  { icon: <Headphones size={20} />, value: "24/7", label: "Support" },
];

/* ═══════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════ */

const trustItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.8 + i * 0.1 },
  }),
};

/* ═══════════════════════════════════════════════════════
   STAR RATING
   ═══════════════════════════════════════════════════════ */

function StarRating({ count }: { count: number }) {
  return (
    <div className="testimonials__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          className="testimonials__star"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 + i * 0.08, type: "spring", stiffness: 300 }}
        >
          <Star size={20} fill="#FBBF24" strokeWidth={0} />
        </motion.span>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════ */

export default function Testimonials() {
  const [sectionRef, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const goToSlide = useCallback((index: number) => {
    swiperRef.current?.slideToLoop(index);
  }, []);

  /* Pause autoplay on tab hidden */
  useEffect(() => {
    const handleVisibility = () => {
      if (!swiperRef.current?.autoplay) return;
      if (document.hidden) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <section
      className="testimonials"
      id="testimonials"
      ref={sectionRef}
      aria-label="Customer testimonials"
    >
      {/* Ambient glows */}
      <div className="testimonials__glow testimonials__glow--1" aria-hidden="true" />
      <div className="testimonials__glow testimonials__glow--2" aria-hidden="true" />
      <div className="testimonials__glow testimonials__glow--3" aria-hidden="true" />

      <div className="container-fluid relative z-10">
        {/* ── Header ── */}
        <motion.div
          className="testimonials__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="testimonials__badge glass-panel">💬 Testimonials</span>
          <h2 className="section-title">
            Trusted by Businesses{" "}
            <span className="text-gradient">Across India</span>
          </h2>
          <p className="section-subtitle testimonials__subtitle">
            See how Groww You ERP is helping businesses simplify billing, GST, inventory management, and operations.
          </p>
        </motion.div>

        {/* ── Carousel ── */}
        <motion.div
          className="testimonials__carousel-wrap"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay]}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={800}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            grabCursor
            keyboard={{ enabled: true }}
            a11y={{
              prevSlideMessage: "Previous testimonial",
              nextSlideMessage: "Next testimonial",
            }}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={t.name}>
                <div className="testimonials__card glass-card">
                  {/* Decorative quotes */}
                  <span className="testimonials__quote-mark testimonials__quote-mark--open" aria-hidden="true">
                    &ldquo;
                  </span>
                  <span className="testimonials__quote-mark testimonials__quote-mark--close" aria-hidden="true">
                    &rdquo;
                  </span>

                  {/* Avatar */}
                  <div
                    className="testimonials__avatar"
                    style={{ boxShadow: `0 0 20px ${t.accent}25` }}
                    aria-hidden="true"
                  >
                    <span className="testimonials__avatar-ring" />
                    {t.initials}
                  </div>

                  {/* Stars */}
                  <StarRating count={t.rating} />

                  {/* Review */}
                  <p className="testimonials__review">
                    &ldquo;{t.review}&rdquo;
                  </p>

                  {/* Customer info */}
                  <div className="testimonials__info">
                    <span className="testimonials__name">{t.name}</span>
                    <span className="testimonials__company">
                      {t.title}, {t.company}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button
            className="testimonials__nav testimonials__nav--prev"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            className="testimonials__nav testimonials__nav--next"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>

          {/* Pagination Dots */}
          <div className="testimonials__dots" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                className={`testimonials__dot ${i === activeIndex ? "testimonials__dot--active" : ""}`}
                onClick={() => goToSlide(i)}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* ── Trust Strip ── */}
        <div className="testimonials__trust container">
          {trustStats.map((s, i) => (
            <motion.div
              key={s.label}
              className="testimonials__trust-item"
              variants={trustItemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
            >
              <span className="testimonials__trust-icon" aria-hidden="true">
                {s.icon}
              </span>
              <span className="testimonials__trust-number">{s.value}</span>
              <span className="testimonials__trust-label">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
