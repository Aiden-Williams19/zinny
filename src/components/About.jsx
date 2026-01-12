import React, { useEffect, useRef } from 'react'
import './About.css'

export default function About() {
  const titleRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      },
      { threshold: 0.1 }
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="about">
      <div className="container">
        <div className="grid">
          {/* Left: Content */}
          <div className="grid-col-6">
            <div ref={titleRef} className="about-content">
              <h2 className="section-title">About RAUCOUS</h2>
              
              <p>
                We exist in the intersection of streetwear culture, creative expression, and uncompromising design. RAUCOUS isn't for everyone—it's for the creatives who refuse to be ordinary.
              </p>

              <p>
                Every decision we make is intentional. Every design choice, deliberate. We believe in high-contrast minimalism: less decoration, more impact. Fewer elements, executed flawlessly.
              </p>

              <div className="about-stats">
                <div className="stat">
                  <h3>Bold</h3>
                  <p className="text-muted">No apologies, no compromise</p>
                </div>
                <div className="stat">
                  <h3>Disruptive</h3>
                  <p className="text-muted">Challenge the mundane</p>
                </div>
                <div className="stat">
                  <h3>Modern</h3>
                  <p className="text-muted">Built for today's creative</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="grid-col-6">
            <div className="about-visual">
              <div className="visual-card">
                <div className="visual-accent">Creative Culture</div>
                <div className="visual-text">
                  <h3>Premium Edge</h3>
                  <p>Streetwear authenticity meets design excellence. No gimmicks. Pure confidence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
