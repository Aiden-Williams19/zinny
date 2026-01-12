import React from 'react'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Be Raucous?</h2>
          <p>Join a community of uncompromising creatives building something bold.</p>

          <div className="cta-buttons">
            <button className="btn btn-primary">Start Now</button>
            <button className="btn">Learn More</button>
          </div>

          <div className="cta-footer">
            <p className="text-accent">Questions? We'd love to hear from you.</p>
            <a href="mailto:hello@raucous.com" className="cta-link">hello@raucous.com</a>
          </div>
        </div>
      </div>
    </section>
  )
}
