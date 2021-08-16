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
    const tax = total / 10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h1 className="text-2xl">Order Summary</h1>
            <h1>Items Order : {cart.length}</h1>
            <h1>Shipping Charge : $ {shipping} </h1>
            <h1>TAX + vat : $ {tax} </h1>
            <h1>Total : $ {grandTotal} </h1>
        </div>
    );
};

export default Cart;