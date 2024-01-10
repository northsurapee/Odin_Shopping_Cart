/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/BagItem.css"

export default function BagItem({
    imgURL,
    name,
    price,
    onDelete
}) {
    const [quantity, setQuantity] = useState(1);
    console.log("render a bag item!")
    console.log(imgURL)
    console.log(name)
    console.log(price)
    function handleDecreaseQuantity() {
        if((quantity - 1) === 0) {
            onDelete(name)
        } else {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="bag-item-container">
            <div className="img-container">
                <img src={imgURL} alt="image" />
            </div>
            <div className="item-detail">
                <div className="top">
                    <p className="name">{name}</p>
                    <svg 
                        fill="#FFFFFF"
                        stroke="#94a3b8"
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        className="delete"
                        onClick={() => onDelete(name)}
                    >
                        <path 
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0">
                        </path>
                    </svg>
                </div>
                <div className="bottom">
                    <p className="price">$ {price}</p>
                    <div className="quantity-container">
                        <button className="decrease" onClick={handleDecreaseQuantity}>-</button>
                        <p className="quantity">{quantity}</p>
                        <button className="increase" onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}