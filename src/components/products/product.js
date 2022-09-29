import React from 'react';
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
            <button onClick={() => props.handlecart(props.allproduct)} className='cart-btn'>add to cart</button>
        </div>
    );
};

export default Product;