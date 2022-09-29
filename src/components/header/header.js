import React from 'react';
import logo from '../../images/Logo.svg';
import './header.css'
const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div className="item">
                <a href="">shop</a>
                <a href="">Order</a>
                <a href="">Inventory</a>
                <a href="">About</a>
            </div>
        </nav>
    );
};

export default Header;