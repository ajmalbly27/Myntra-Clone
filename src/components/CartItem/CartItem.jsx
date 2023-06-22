import React, { useContext } from "react";
import "./CartItem.css";
import retrun_logo from "../../images/return-button.png";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ product }) => {

    const { increaseQuantity } = useContext(CartContext);
    const { decreaseQuantity } = useContext(CartContext);

    return (
        
        <div className="cart-product">
            <div className="cart-wrapper-item">
                <div className="item-image-text">
                    <div>
                        <img className="item-image" src={product.searchImage} alt="product-img"/>
                    </div>
                    <div className="product-details">
                        <div className="product-name">{product.brand}</div>
                        <div className="product-description"><i>{product.product}</i></div>
                        <div className="product-details">
                            <span className="final-price">Rs. {product.price} </span>
                            <span className="strick-price">Rs.{product.mrp}</span>
                            <span className="discount"> {product.discountDisplayLabel}</span>
                        </div>
                        <div className="product-quantity">
                            <button className="minus" onClick={() => decreaseQuantity(product)}>-</button>
                            <span className="quantity-text">{`Qty : ${product.quantity}`}</span>
                            <button className="plus" onClick={() => increaseQuantity(product)}>+</button>
                        </div>
                        <div className="return-time">
                            <img src={retrun_logo} style={{width:15}} alt="return-icon"/>
                            <span> 14 days </span>
                            return available
                        </div>
                    </div>
                </div>
                <div className="cancel-button">X</div>
            </div>
        </div>

    )
    
}
export default CartItem;