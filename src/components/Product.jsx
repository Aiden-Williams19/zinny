import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import './Product.css'

export default function Product({ product }) {
  const [selectedSize, setSelectedSize] = useState(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }
    addToCart(product, selectedSize)
    setSelectedSize(null) // Reset size after adding
  }

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image-container">
        <div className={`product-image-placeholder ${imageLoaded ? 'loaded' : ''}`}>
          {/* Fallback: colored placeholder matching brand aesthetic */}
          <div className="image-placeholder-content">
            <span className="placeholder-text">{product.name.split(' ')[1]}</span>
          </div>
        </div>
        <div className="product-badge">New</div>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        {/* Price */}
        <div className="product-price-section">
          <span className="product-price">${product.price}</span>
          <span className="product-color">{product.color}</span>
        </div>

        {/* Size Selector */}
        <div className="product-sizes">
          <label className="sizes-label">Size</label>
          <div className="sizes-grid">
            {product.sizes.map(size => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                onClick={() => setSelectedSize(size)}
                aria-pressed={selectedSize === size}
                aria-label={`Select size ${size}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          className="btn btn-primary btn-full"
          onClick={handleAddToCart}
          disabled={!selectedSize}
          aria-disabled={!selectedSize}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
