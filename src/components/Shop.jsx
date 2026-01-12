import React from 'react'
import './Shop.css'
import Product from './Product'

// Product data
const PRODUCTS = [
  {
    id: 1,
    name: 'RAUCOUS Essentials Tee',
    price: 45,
    image: '/product-1.jpg',
    description: 'Bold statement tee. Premium quality, comfortable fit. The foundation of disruptive style.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    color: 'Black'
  },
  {
    id: 2,
    name: 'RAUCOUS Graphic Tee',
    price: 55,
    image: '/product-2.jpg',
    description: 'Signature graphic design. Premium cotton blend. Limited availability.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    color: 'White'
  }
]

export default function Shop() {
  return (
    <section className="shop">
      <div className="container">
        {/* Shop Header */}
        <div className="shop-header">
          <h2 className="section-title">Shop</h2>
          <p className="shop-description">
            Premium essentials for the uncompromising creative. Crafted with intention, 
            worn with confidence.
          </p>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {PRODUCTS.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>

        {/* Shop Footer / CTA */}
        <div className="shop-footer">
          <p className="text-muted">
            All products ship worldwide. Fast delivery. No compromise on quality.
          </p>
        </div>
      </div>
    </section>
  )
}
