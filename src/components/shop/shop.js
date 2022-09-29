import React, { useEffect, useState } from 'react';
import Product from '../products/product';
import './shop.css'
const Shop = () => {
    const [products, setproduct] = useState([]);
    const [cart, setcart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproduct(data))

    }, [])
    const Addcard = (product) => {

        const additem = [...cart, product];
        setcart(additem)
    }

    return (
        <div className='shop-section'>
            <div className="product-sector">
                {
                    products.map(product => <Product allproduct={product} key={product.id} handlecart={Addcard}></Product>)
                }
            </div>
            <div className='order-summary'>
                <h3>Selected Items :{cart.length}</h3>
            </div>
        </div>
    );
};

export default Shop;