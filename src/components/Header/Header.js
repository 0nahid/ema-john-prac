import React from 'react';
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div>
            <img className="m-auto w-48" src={logo} alt="Ema John Son" />
            <nav className="text-center bg-gradient-to-r rounded py-2 from-yellow-400 via-red-500 to-pink-500 ">
                <a className="mr-5" href="/shop">Shop</a>
                <a className="mr-5" href="/reviews">Order Review</a>
                <a className="mr-5" href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;