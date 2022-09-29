import React from 'react';
import './cart.css'
const Cart = (props) => {
    return (
        <div className='cart-section'>
            <h2>Order Summary</h2>
            <h3>Selected Items :{props.cart.length}</h3>
        </div>
    );
};

export default Cart;