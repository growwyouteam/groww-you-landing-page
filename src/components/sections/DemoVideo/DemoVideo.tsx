"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play } from 'lucide-react';
import './DemoVideo.css';

export default function DemoVideo() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [isPlaying, setIsPlaying] = useState(false);

  // Replace this with your actual YouTube video ID
  const videoId = ''; 

  return (
    <section className="demo-video" id="demo-video" ref={ref}>
      <div className="container">
        <motion.div
          className="demo-video__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="demo-video__badge glass-panel">🎥 Live Demo</span>
          <h2 className="demo-video__title">Watch Groww You ERP <span className="text-gradient">In Action</span></h2>
          <p className="demo-video__subtitle">
            See how Groww You ERP simplifies billing, inventory management, GST reporting, and customer tracking.
          </p>
        </motion.div>

        <motion.div
          className="demo-video__container glass-card"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {!isPlaying ? (
            <div className="demo-video__thumbnail" onClick={() => setIsPlaying(true)}>
              <div className="demo-video__overlay">
                <button className="demo-video__play-btn" aria-label="Play Demo Video">
                  <div className="demo-video__play-pulse"></div>
                  <Play size={36} color="var(--primary-light)" className="demo-video__play-icon" />
                </button>
                <span className="demo-video__duration">03:45</span>
              </div>
              <div className="demo-video__placeholder-bg">
                <div className="demo-video__placeholder-grid"></div>
                <div className="demo-video__placeholder-ui">
                  <div className="demo-video__placeholder-bar">
                    <span style={{background: '#EF4444'}}></span>
                    <span style={{background: '#F59E0B'}}></span>
                    <span style={{background: '#22C55E'}}></span>
                  </div>
                  <div className="demo-video__placeholder-content">
                    <div className="demo-video__placeholder-chart"></div>
                    <div className="demo-video__placeholder-lines">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="demo-video__player">
              {videoId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="Groww You ERP Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="demo-video__no-video">
                  <p>Demo video will be uploaded soon!</p>
                  <button className="btn-primary demo-video__close-btn" onClick={() => setIsPlaying(false)}>
                    Go Back
                  </button>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
