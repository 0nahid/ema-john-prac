import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, [])
    return (
        <div>
            <h1 className="text-4xl text-gray-800">Order Review</h1>
            <h1>Cart Item: {cart.length}</h1>
            {
                cart.map(product => <ReviewItems key={product.key} product={product}></ReviewItems>)
            }
        </div>
    );
};

export default Review;