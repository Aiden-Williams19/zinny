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
        <div className="container">
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

          {/* CTA Buttons */}
          <div className="hero-ctas fade-in" style={{ animationDelay: '0.3s' }}>
            <button className="btn btn-primary" onClick={() => {
              window.location.hash = '#/shop';
              // Force a slight delay to ensure hash change is registered
              setTimeout(() => {
                window.dispatchEvent(new HashChangeEvent('hashchange'));
              }, 0);
            }}>
              Shop Now
            </button>
            <button className="btn" onClick={() => document.querySelector('.about').scrollIntoView({ behavior: 'smooth' })}>
              About Us
            </button>
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
