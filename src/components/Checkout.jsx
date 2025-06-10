import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const navigate = useNavigate();

  const handlePay = () => {
    navigate('/thankyou');
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <table className="checkout-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2" style={{ textAlign: 'right' }}>Total:</td>
            <td>${total}</td>
          </tr>
        </tfoot>
      </table>
      <div className="pay-button-container">
        <button onClick={handlePay}>Pay</button>
      </div>
    </div>
  );
}
