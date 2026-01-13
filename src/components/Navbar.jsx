import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import './Navbar.css'

export default function Navbar({ currentView, onNavigate }) {
  const { cartItems, setIsCartOpen } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleShopClick = () => {
    window.location.hash = '#/shop'
    setMobileMenuOpen(false)
  }

  const handleHomeClick = () => {
    window.location.hash = '#/'
    setMobileMenuOpen(false)
  }

  const handleCartClick = () => {
    setIsCartOpen(true)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="#/" onClick={handleHomeClick}>
            <span className="brand-text">RAUCOUS</span>
          </a>
        </div>

        <button 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <a 
              href="#/" 
              onClick={handleHomeClick}
              className={currentView === 'home' ? 'active' : ''}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#/shop" 
              onClick={handleShopClick}
              className={currentView === 'shop' ? 'active' : ''}
            >
              Shop
            </a>
          </li>
          <li>
            <button 
              className="navbar-cart-btn"
              onClick={handleCartClick}
              title="Open cart"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {cartItems.length > 0 && (
                <span className="cart-badge">{cartItems.length}</span>
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
