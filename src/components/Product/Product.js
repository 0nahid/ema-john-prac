import React from 'react';
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
const Product = (props) => {
    const { name, img, price, seller, stock , key } = props.product;
    return (
        <div className="">
            <div className="text-blue-800 text-xl flex border-b-2 border-gray-700 p-1">
                <img src={img} alt="" />
                <div className="float-left m-2  ">
                    <h1 className=" font-medium" > <Link to={`/product/`+key}>{name}</Link> </h1>
                    <p>Price:$ {price}</p>
                    <p>By : {seller} </p>
                    <p>Only : {stock} items left - Order fast!!! </p>
                    <button
                        onClick={() => props.handleAddProduct(props.product)}
                        className=" bg-indigo-500 text-white mt-2 py-1 px-2 transition-colors duration-100  rounded ring ring-indigo-400 focus:shadow-outline hover:bg-indigo-800 " > <FaShoppingCart className=" w-6 h-6 float-left mr-2" /> Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;