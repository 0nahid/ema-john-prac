import React, { useState } from 'react';
import Product from '../Product/Product';
import fakeData from './../../fakeData/index';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    // eslint-disable-next-line
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log('added product', product);
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
            <div>
                <h1 className="">This is cart</h1>
                <h1>Order Summary {cart.length} </h1>
                
            </div>
        </div>
    );
};

export default Shop;