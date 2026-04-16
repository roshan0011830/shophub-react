import React, { useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../data/products';

import { useCart } from '../context/CartContext.jsx';



function ProductDetails() {

  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();


  useEffect(()=>{
    const foundProduct = getProductById(id);

    //agar jyada fokat id dal de 
    if(!foundProduct){
      navigate("/");
      return;
    }

    //ye agar product nhi hai laptop slow ke karan
    
    setProduct(foundProduct);
  }, [id]);
  
  if(!product){
    return <h1>Loading...</h1>
  }

  //view detail add to cart label
  const {addToCart, cartItems } = useCart();
  
    const productInCart = cartItems.find((item)=>(item.id === Number(product.id)))
  
    const productQunatityLabel = productInCart ? `(${productInCart.quantity})` : ("");






  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-img">
            <img src={product.image} alt="" />
          </div>
          <div className="product-detail-content">
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-price">₹{product.price}</p>
            <p className="product-detail-description">
              {product.description}
            </p>

            <button className="btn btn-primary" onClick={() => addToCart(product.id) }>Add to Cart {productQunatityLabel}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails
