import React, { createContext, useContext, useState } from 'react'

// Cart context for lightweight state management
const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Add item to cart (with size selection)
  const addToCart = (product, size) => {
    const itemId = `${product.id}-${size}`
    
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === itemId)
      
      if (existingItem) {
        // Increment quantity if item already in cart
        return prevItems.map(item =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      
      // Add new item
      return [...prevItems, {
        id: itemId,
        ...product,
        size,
        quantity: 1
      }]
    })
    
    // Open cart drawer briefly to confirm
    setIsCartOpen(true)
  }

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.id !== itemId)
    )
  }

  // Update quantity
  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === itemId
            ? { ...item, quantity }
            : item
        )
      )
    }
  }

  // Calculate totals
  const cartTotal = cartItems.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  )

  const cartCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  )

  const value = {
    cartItems,
    cartTotal,
    cartCount,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

// Custom hook to use cart context
export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
