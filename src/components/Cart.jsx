import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import './Cart.css';
import { Link } from 'react-router-dom';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="cart-total">
            <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
            <Link to="/checkout" className="checkout-btn">Checkout</Link>
          </div>

        </>
      )}
    </div>
  );
}
