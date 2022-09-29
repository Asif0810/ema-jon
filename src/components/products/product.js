import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './product.css'
const Product = (props) => {

    const { name, price, seller, img, ratings } = props.allproduct;

    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className='details'>
                <p className='name'>{name}</p>
                <p className='price'>Price : ${price}</p>
                <p className='manufacture'>manufacturer: {seller}</p>
                <p className='rating'>Rating : {ratings} star</p>
            </div>
            <button onClick={() => props.handlecart(props.allproduct)} className='cart-btn'>add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;