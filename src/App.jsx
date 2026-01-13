import React, { useState, useEffect } from 'react'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Vision from './components/Vision'
import Values from './components/Values'
import CTA from './components/CTA'
import Shop from './components/Shop'
import Cart from './components/Cart'
import './styles/global.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentView, setCurrentView] = useState(() => {
    // Initialize based on current hash
    return window.location.hash === '#/shop' ? 'shop' : 'home'
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle hash-based routing - separate effect for better reactivity
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#/shop') {
        setCurrentView('shop')
        window.scrollTo(0, 0)
      } else {
        setCurrentView('home')
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <CartProvider>
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      {currentView === 'home' ? (
        <main className="app">
          <Hero />
          <About />
          <Vision />
          <Values />
          <CTA />
        </main>
      ) : (
        <main className="app">
          <Shop />
        </main>
      )}
      <Cart />
    </CartProvider>
  )
}

export default App
