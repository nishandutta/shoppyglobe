import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/cartSlice';
import './ThankYou.css';

export default function ThankYou() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBackHome = () => {
    dispatch(clearCart());            // Clear the cart
    navigate('/');                   // Navigate to home
    window.location.reload();        // Full reload to re-render everything fresh
  };

  return (
    <div className="thank-you">
      <h1>Thank you for your purchase!</h1>
      <button onClick={handleBackHome}>Go to Home</button>
    </div>
  );
}