import React, { useState, useEffect } from 'react'
import './Hero.css'

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section className="hero">
      {/* Background Image */}
      <picture className="hero-image-container">
        <img
          src="/hero.jpg"
          alt="RAUCOUS Brand Identity - Bold Creative Culture"
          className={`hero-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
          loading="eager"
          width="1200"
          height="800"
        />
      </picture>

      {/* Overlay for readability */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <div className="container hero-container">
          {/* Tagline */}
          <div className="text-accent fade-in">
            Creative Culture
          </div>

          {/* Main Headline */}
          <h1 className="hero-title fade-in" style={{ animationDelay: '0.1s' }}>
            RAUCOUS
          </h1>

          {/* Subheading */}
          <p className="hero-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
            Bold. Disruptive. Modern. Confident.
          </p>

          {/* CTA Buttons - Primary Navigation */}
          <div className="hero-ctas fade-in" style={{ animationDelay: '0.3s' }}>
            <a href="#/shop" className="btn btn-primary" onClick={(e) => {
              e.preventDefault();
              window.location.hash = '#/shop';
              setTimeout(() => {
                window.dispatchEvent(new HashChangeEvent('hashchange'));
              }, 0);
            }}>
              → Shop Now
            </a>
            <a href="#/about" className="btn btn-secondary" onClick={(e) => {
              e.preventDefault();
              const aboutElement = document.querySelector('.about');
              if (aboutElement) {
                aboutElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}>
              ↓ About the Brand
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator fade-in" style={{ animationDelay: '0.6s' }} aria-hidden="true">
        <div className="scroll-dot"></div>
      </div>
    </section>
  )
}
