import React from "react";
import "./Cart.css";
import { FaTimes } from "react-icons/fa";

const Cart = ({ cartOpen, setCartOpen, cartItems, setCartItems }) => {
  if (!cartOpen) return null;

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <div className="cart-overlay">
      <div className="cart-box">
        <div className="cart-header">
          <h3>Your Cart</h3>
          <FaTimes className="close-btn" onClick={() => setCartOpen(false)} />
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-msg">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt="" className="cart-img" />
              <div className="cart-info">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>

                <div className="qty-control">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
