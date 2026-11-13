import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { Link } from 'react-router-dom';

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0).toFixed(2);
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#333', color: 'white' }}>
        <div>
          <Link to="/" style={{ color: 'white', marginRight: '15px' }}>Home</Link>
          <Link to="/plants" style={{ color: 'white', marginRight: '15px' }}>Plants</Link>
          <span style={{ color: 'white' }}>Cart (🛒 {totalQuantity})</span>
        </div>
      </nav>

      <div style={{ padding: '20px' }}>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map(item => (
              <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '15px' }}>
                <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px' }} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Unit Price: ${item.price}</p>
                  <p>Total: ${item.totalPrice}</p>
                </div>
                <div>
                  <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))} disabled={item.quantity === 1}>-</button>
                  <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                  <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                </div>
                <button onClick={() => dispatch(removeItem(item.id))} style={{ color: 'red' }}>Delete</button>
              </div>
            ))}
            <h3>Total Cart Amount: ${calculateTotalAmount()}</h3>
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
              <button onClick={() => alert("Coming Soon!")}>Checkout</button>
              <Link to="/plants">
                <button>Continue Shopping</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;