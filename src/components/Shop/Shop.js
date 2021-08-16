import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import fakeData from './../../fakeData/index';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    // eslint-disable-next-line
    const [products, setProducts] = useState(first10);
    // eslint-disable-next-line
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        // console.log('added product', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="container mx-auto flex">
            <div className="float-left w-3/4 mr-1 ml-1 border-r border-gray-800 ">
                {products.map(product => <Product
                    product={product}
                    handleAddProduct={handleAddProduct}
                >
                </Product>)}
            </div>
            <div className="ml-2">
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;