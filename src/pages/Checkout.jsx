import React from 'react'
import { useCart } from '../context/CartContext'

function Checkout() {
  const {getCartItemsWithProducts, updateCartQuantity,removeFromCart, getCartTotal, clearCart} = useCart();

  const cartItems = getCartItemsWithProducts();

  const total = getCartTotal();

  function placeOrder(){
    alert("order placed successfully 🔥😍");
    clearCart()
  }

  

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Checkout</h1>
        <div className="checkout-container">
          <div className="order-summary-container">
            <h2 className="checkout-section-title">Order Summary</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="checkout-items">
                <div className="checkout-item-img">
                  <img src={item.product.image} alt={item.product.name} />
                </div>
                <div className="checkout-item-details">
                  <h3 className="checkout-item-name">{item.product.name}</h3>
                  <p className="checkout-item-price">
                    ₹ {item.product.price} each
                  </p>
                </div>
                <div className="checkout-item-controls">
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn decrease"
                      onClick={() =>
                        updateCartQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>

                    <span className="quantity-value">{item.quantity}</span>

                    <button
                      className="quantity-btn add"
                      onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                    >+</button>
                  </div>

                  <p className="checkout-item-total">
                    ₹{`${item.product.price * item.quantity}`}
                  </p>

                  <button
                    className="btn btn-secondary"
                    onClick={() => removeFromCart(item.id)}
                  >Remove</button>
                </div>
              </div>
            ))}
          </div>




          {/* Carttotal Bill */}
          <div className="checkout-summary">
            <h2 className="checkout-section-title">Total</h2>
            <div className="checkout-total">
              <p className="checkout-total-label">Subtotal:</p>
              <p className="checkout-total-value">₹{total.toFixed(2)}</p>
            </div>
            <div className="checkout-total">
              <p className="checkout-total-label">Total:</p>
              <p className="checkout-total-value checkout-final">
                ₹{total.toFixed(2)}
              </p>
            </div>

            <hr />
            <button className="btn btn-primary"
            onClick={() => placeOrder()}
            >Place Order</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Checkout
