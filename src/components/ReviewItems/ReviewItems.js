import React from 'react';

const ReviewItems = (props) => {
    const { name, quantity } = props.product;
    return (
        <div className="shadow-md rounded-md p-5">
            <h4 className="">{name}</h4>
            <p>Quantity:{quantity}</p>
            <button className="bg-yellow-500 rounded p-1">Remove</button>
        </div>
    );
};
export default ReviewItems;