import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Vision from './components/Vision'
import Values from './components/Values'
import CTA from './components/CTA'
import './styles/global.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="app">
      <Hero />
      <About />
      <Vision />
      <Values />
      <CTA />
    </main>
  )
}

export default App
