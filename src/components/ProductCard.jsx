import React from 'react'
import { Link } from 'react-router-dom';

function ProductCard({product}) {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={product.image} />
      </div>
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price"> ₹{product.price}</p>
        <div className="product-card-buttons">
          <Link className="btn btn-secondary">View Details</Link>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard
