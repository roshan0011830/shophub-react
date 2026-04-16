import React from 'react'
import { Link } from 'react-router-dom';

import { useCart } from '../context/CartContext.jsx';

function ProductCard({product}) {
  const {addToCart, cartItems } = useCart();

  const productInCart = cartItems.find((item)=>(item.id === product.id))

  const productQunatityLabel = productInCart ? `(${productInCart.quantity})` : ("");


  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={product.image} />
      </div>
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price"> ₹{product.price}</p>
        <div className="product-card-buttons">
          <Link to={`/products/${product.id}`} className="btn btn-secondary">View Details</Link>
          <button className="btn btn-primary" onClick={() => addToCart(product.id)}>Add to Cart {productQunatityLabel}</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard
