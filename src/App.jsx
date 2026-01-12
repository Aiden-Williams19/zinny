import React, { useState, useEffect } from 'react'
import { CartProvider } from './context/CartContext'
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
  const [currentView, setCurrentView] = useState('home') // 'home' or 'shop'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Handle hash-based routing for Shop
    const handleHashChange = () => {
      if (window.location.hash === '#/shop') {
        setCurrentView('shop')
        window.scrollTo(0, 0)
      } else {
        setCurrentView('home')
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('hashchange', handleHashChange)
    
    // Check initial hash on mount
    handleHashChange()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <CartProvider>
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
