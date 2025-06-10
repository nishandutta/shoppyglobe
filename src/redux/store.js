import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Load persisted cart state
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    return serializedState ? { items: JSON.parse(serializedState) } : undefined;
  } catch (e) {
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: loadState(),
  },
});

// Save to localStorage whenever cart state changes
store.subscribe(() => {
  try {
    const serializedState = JSON.stringify(store.getState().cart.items);
    localStorage.setItem('cart', serializedState);
  } catch (e) {
    // Ignore write errors
  }
});

export default store;
