import React, { useEffect, useRef } from 'react'
import './Vision.css'

export default function Vision() {
  const contentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      },
      { threshold: 0.15 }
    )

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="vision">
      <div className="container">
        <div ref={contentRef} className="vision-content">
          <h2 className="section-title">Our Vision</h2>
          
          <p className="vision-statement">
            To build a creative community that values authenticity over aesthetics, substance over style, and confidence over compromise.
          </p>

          <div className="vision-grid">
            <div className="vision-item">
              <h3>Minimalism with Purpose</h3>
              <p>Every element serves a function. Decoration is distraction. We design with intentionality.</p>
            </div>
            <div className="vision-item">
              <h3>High-Contrast Identity</h3>
              <p>Bold typography. Stark colors. Unambiguous messaging. No room for misinterpretation.</p>
            </div>
            <div className="vision-item">
              <h3>Creative Authenticity</h3>
              <p>Rooted in streetwear culture but refined through premium design. Real, not manufactured.</p>
            </div>
            <div className="vision-item">
              <h3>Performance First</h3>
              <p>Fast, accessible, and responsive. Form follows function, always. User experience is non-negotiable.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
