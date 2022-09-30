import React from 'react';
import './cart.css'
const Cart = (props) => {
    const { cart } = props

    let total = 0;
    let shipping = 0
    for (const info of cart) {
        total = total + info.price;
    }
    for (const info of cart) {
        shipping = shipping + info.shipping
    }
    const tax = parseFloat(total * 0.1.toFixed(2));
    const grand_total = total + shipping + tax
    return (
        <div className='cart-section'>
            <h2 className='order'>Order Summary</h2>
            <p>Selected Items : {cart.length}</p>
            <p className='price'>Total Price : ${total}</p>
            <p className='charge'>Total Shipping Charge: ${shipping}</p>
            <p className='tax'>tax : {tax}</p>
            <b className='total-price'>Grand Price : ${grand_total}</b>

        </div>
    );
};

export default Cart;