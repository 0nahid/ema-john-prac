import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = cart.reduce((total, product) => total + product.price, 0);
    let shipping = 0;
    if (total > 200) {
        shipping = 0;
    }
    else if (total > 50) {
        shipping = 8.99;
    } else if (total > 0) {
        shipping = 12.99;
    }
    // number format
    const numberFormat = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    // price part
    const tax = numberFormat(total / 10);
    const grandTotal = numberFormat(total + shipping + tax);
    return (
        <div className=" shadow p-8 border-gray-400 ">
            <div className="">
                <h1 className="text-3xl">Order Summary</h1>
                <h1 className="text-xl">Items Order : {cart.length}</h1>
            </div>
            <h1 className="text-xl">Shipping Charge : $ {numberFormat(shipping)} </h1>
            <h1 className="text-xl">TAX + vat : $ {tax} </h1>
            <h1 className="text-xl text-red-700 font-bold">Total : $ {grandTotal} </h1>
        </div>
    );
};

export default Cart;