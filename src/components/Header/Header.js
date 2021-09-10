import React from 'react';
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div>
            <img className="m-auto w-48" src={logo} alt="Ema John Son" />
            <nav className="text-center py-3 bg-black text-white">
                <a className="mr-5" href="/shop">Shop</a>
                <a className="mr-5" href="/review">Order Review</a>
                <a className="mr-5" href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;