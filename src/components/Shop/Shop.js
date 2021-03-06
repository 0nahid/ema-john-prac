import React, { useState } from 'react';
import { addToDatabaseCart } from '../../utilities/databaseManager';
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
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProducts = newCart.filter(pd => pd.key === product.key);
        const count = sameProducts.length;
        addToDatabaseCart(product.key, count)
    }

    return (
        <div className="container mx-auto flex">
            <div className="float-left w-3/4 mr-1 ml-1 border-r border-gray-800 ">
                {products.map(product => <Product
                    product={product}
                    handleAddProduct={handleAddProduct}
                    key={product.key}
                    showAddToCart={true}
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