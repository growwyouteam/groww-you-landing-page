"use client";

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Groww%20You%20ERP"
      target="_blank"
      rel="noreferrer"
      className="float-wa glass-card"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.4, type: 'spring' }}
      whileHover={{ scale: 1.05 }}
      aria-label="Chat on WhatsApp"
    >
      <span className="float-wa__pulse" />
      <div className="float-wa__icon-wrap">
        <FaWhatsapp size={24} color="#fff" />
      </div>
      <div className="float-wa__text">
        <span className="float-wa__title">Need Help?</span>
        <span className="float-wa__sub">Chat with us</span>
      </div>
    </motion.a>
  );
}
