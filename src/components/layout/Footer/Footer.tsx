"use client";

import { TrendingUp } from 'lucide-react';
import { FaWhatsapp, FaPhone, FaGlobe } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-icon">
              <TrendingUp size={20} color="#fff" />
            </div>
            <span>
              <span className="footer__logo-grow">Groww You</span>
              <span className="footer__logo-erp"> ERP</span>
            </span>
          </div>
          <p className="footer__tagline">
            India's trusted business ERP software. Billing, inventory aur accounts — sab ek jagah.
          </p>
        </div>

        <div className="footer__contact">
          <h4 className="footer__contact-title">Contact Us</h4>
          <a href="tel:+919999999999" className="footer__link">
            <FaPhone size={14} /> +91 99999 99999
          </a>
          <a
            href="https://wa.me/919999999999"
            className="footer__link footer__link--wa"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp size={16} /> WhatsApp Now
          </a>
          <a
            href="https://www.growwyouerp.com"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            <FaGlobe size={14} /> www.growwyouerp.com
          </a>
        </div>

        <div className="footer__links-col">
          <h4 className="footer__contact-title">Quick Links</h4>
          {['Home', 'Features', 'Screenshots', 'Contact'].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="footer__link">{l}</a>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2024 Groww You ERP. All rights reserved.</p>
          <p>Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}
