import React, { useEffect, useRef } from 'react'
import './Values.css'

const VALUES = [
  {
    title: 'Boldness',
    description: 'We make decisions with conviction. No hedging, no committee design.',
    icon: '—'
  },
  {
    title: 'Disruption',
    description: 'Challenge norms. Question the status quo. Create tension through design.',
    icon: '∴'
  },
  {
    title: 'Modernity',
    description: 'Built for the creative of today. Tomorrow\'s tools, today\'s vision.',
    icon: '▲'
  },
  {
    title: 'Confidence',
    description: 'Let the work speak. Whispers are forgettable. We do bold.',
    icon: '●'
  }
]

export default function Values() {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.1 }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="values">
      <div className="container">
        <h2 className="section-title">Core Values</h2>

        <div className="values-grid">
          {VALUES.map((value, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="value-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
