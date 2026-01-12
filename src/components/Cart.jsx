import React, { useEffect } from 'react'
import { useCart } from '../context/CartContext'
import './Cart.css'

export default function Cart() {
  const { cartItems, cartTotal, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart()

  // Close cart on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isCartOpen, setIsCartOpen])

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isCartOpen])

  return (
    <>
      {/* Cart Overlay */}
      {isCartOpen && (
        <div
          className="cart-overlay"
          onClick={() => setIsCartOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Cart Drawer */}
      <aside
        className={`cart-drawer ${isCartOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart"
      >
        {/* Cart Header */}
        <div className="cart-header">
          <h2 className="cart-title">Cart</h2>
          <button
            className="cart-close"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
            aria-controls="cart-drawer"
          >
            ✕
          </button>
        </div>

        {/* Cart Content */}
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty</p>
              <p className="text-muted">Add items from the shop to get started.</p>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  {/* Item Info */}
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-meta">
                      Size: <strong>{item.size}</strong> • {item.color}
                    </p>
                    <p className="item-price">${item.price}</p>
                  </div>

                  {/* Quantity & Remove */}
                  <div className="item-actions">
                    <div className="quantity-control">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="qty-btn"
                      >
                        −
                      </button>
                      <span className="qty-display">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="qty-btn"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn"
                      aria-label="Remove item"
                    >
                      Remove
                    </button>
                  </div>

                  {/* Line Total */}
                  <div className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer (Checkout Section) */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="summary-row summary-shipping">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row summary-total">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => {
                // TODO: Integrate with payment processor
                alert('Checkout integration coming soon. Integration: Stripe/Shopify')
              }}
            >
              Proceed to Checkout
            </button>

            {/* Continue Shopping */}
            <button
              className="btn btn-secondary"
              style={{ width: '100%', marginTop: 'var(--space-md)' }}
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
