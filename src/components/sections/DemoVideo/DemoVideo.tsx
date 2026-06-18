"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, X, FileText, Package, BarChart3, Users, Bell, ShieldCheck } from 'lucide-react';
import './DemoVideo.css';

const FEATURES = [
  {
    icon: FileText,
    title: 'GST Billing',
    desc: 'Auto-generate GST-compliant invoices in seconds.',
  },
  {
    icon: Package,
    title: 'Inventory Management',
    desc: 'Track stock levels with real-time alerts.',
  },
  {
    icon: BarChart3,
    title: 'Financial Reports',
    desc: 'P&L, Balance Sheet and GST reports on demand.',
  },
  {
    icon: Users,
    title: 'Customer CRM',
    desc: 'Manage leads, orders, and follow-ups seamlessly.',
  },
  {
    icon: Bell,
    title: 'WhatsApp Alerts',
    desc: 'Send invoices & reminders directly on WhatsApp.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Compliant',
    desc: 'Bank-grade encryption. Always GST-ready.',
  },
];

export default function DemoVideo() {
  const [sectionRef, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play().catch(() => { });
    }, 60);
  };

  const handleClose = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="dv-section" id="demo-video" ref={sectionRef}>
      {/* Ambient background glows */}
      <div className="dv-glow dv-glow--blue" aria-hidden="true" />
      <div className="dv-glow dv-glow--purple" aria-hidden="true" />

      <div className="container">

        {/* ── SECTION HEADER ── */}
        <motion.div
          className="dv-header"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <span className="dv-badge glass-panel">🎥 Live Demo</span>
          <h2 className="dv-title">
            Watch Groww You ERP <span className="text-gradient">In Action</span>
          </h2>
          <p className="dv-subtitle">
            Everything your business needs — billing, inventory, GST, and CRM —
            all inside one powerful mobile-first ERP.
          </p>
        </motion.div>

        {/* ── TWO-COLUMN BODY ── */}
        <div className="dv-body">

          {/* ── LEFT: Feature Highlights ── */}
          <motion.div
            className="dv-features"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
          >
            <p className="dv-features__eyebrow">What you'll see in the demo</p>
            <ul className="dv-features__list">
              {FEATURES.map(({ icon: Icon, title, desc }, i) => (
                <motion.li
                  key={title}
                  className="dv-feature-card glass-panel"
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.25 + i * 0.07, ease: 'easeOut' }}
                >
                  <span className="dv-feature-card__icon">
                    <Icon size={18} />
                  </span>
                  <div className="dv-feature-card__text">
                    <strong>{title}</strong>
                    <span>{desc}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── RIGHT: Phone Frame + Video ── */}
          <motion.div
            className="dv-phone-col"
            initial={{ opacity: 0, y: 48, scale: 0.96 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            {/* Glow ring behind phone */}
            <div className="dv-phone-glow" aria-hidden="true" />

            {/* Phone outer shell */}
            <div className="dv-phone">
              {/* Phone top notch bar */}
              <div className="dv-phone__topbar" aria-hidden="true">
                <div className="dv-phone__notch" />
              </div>

              {/* Screen — 9:16 aspect ratio via padding-bottom trick */}
              <div className="dv-phone__screen">

                {/* ── THUMBNAIL STATE ── */}
                {!isPlaying && (
                  <div
                    className="dv-thumb"
                    onClick={handlePlay}
                    role="button"
                    tabIndex={0}
                    aria-label="Play Demo Video"
                    onKeyDown={(e) => e.key === 'Enter' && handlePlay()}
                  >
                    {/* Grid texture */}
                    <div className="dv-thumb__grid" aria-hidden="true" />

                    {/* Mock mobile ERP UI */}
                    <div className="dv-thumb__mock" aria-hidden="true">
                      <div className="dv-thumb__mock-topbar">
                        <span className="dv-thumb__mock-logo">Groww You</span>
                        <span className="dv-thumb__mock-avatar" />
                      </div>
                      <div className="dv-thumb__mock-card" />
                      <div className="dv-thumb__mock-card dv-thumb__mock-card--sm" />
                      <div className="dv-thumb__mock-row">
                        <div className="dv-thumb__mock-stat" />
                        <div className="dv-thumb__mock-stat" />
                      </div>
                      <div className="dv-thumb__mock-list">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="dv-thumb__mock-item" style={{ opacity: 1 - i * 0.18 }} />
                        ))}
                      </div>
                    </div>

                    {/* Dark overlay */}
                    <div className="dv-thumb__overlay" aria-hidden="true" />

                    {/* Play button */}
                    <div className="dv-thumb__play-wrap">
                      <button className="dv-thumb__play-btn" aria-label="Play">
                        <span className="dv-thumb__pulse" aria-hidden="true" />
                        <span className="dv-thumb__pulse dv-thumb__pulse--delay" aria-hidden="true" />
                        <Play size={28} className="dv-thumb__play-icon" />
                      </button>
                      <span className="dv-thumb__label">Tap to Watch Demo</span>
                    </div>

                    {/* Duration chip */}
                    <span className="dv-thumb__duration">03:45</span>
                  </div>
                )}

                {/* ── PLAYING STATE ── */}
                {isPlaying && (
                  <div className="dv-player">
                    <video
                      ref={videoRef}
                      controls
                      preload="metadata"
                      playsInline
                      className="dv-player__video"
                    >
                      <source src="/video/groww-you-erp-demo-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {/* <button
                      className="dv-player__close btn-primary"
                      onClick={handleClose}
                      aria-label="Close video"
                    >
                      <X size={14} />
                      Close
                    </button> */}
                  </div>
                )}

              </div>

              {/* Phone bottom bar */}
              <div className="dv-phone__bottombar" aria-hidden="true">
                <div className="dv-phone__home-bar" />
              </div>
            </div>

            {/* Floating badge below phone */}
            <div className="dv-phone__badge glass-panel">
              <span className="dv-phone__badge-dot" />
              Live on Android &amp; iOS
            </div>
          </motion.div>

        </div>
        {/* end dv-body */}

      </div>
    </section>
  );
}
