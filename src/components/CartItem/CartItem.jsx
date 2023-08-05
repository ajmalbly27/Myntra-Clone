import React, { useContext } from "react";
import "./CartItem.css";
import retrun_logo from "../../images/return-button.png";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ product }) => {

    const { increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

    return (
        
        <div className="cart-product">
            <div className="cart-wrapper-item">
                <div className="cart-item-container">
                    <div>
                        <img className="item-image" src={product.searchImage} alt="product-img"/>
                    </div>
                    <div className="cart-item-details">
                        <div className="cart-item-brand">{product.brand}</div>
                        <div className="cart-item-info"><i>{product.product}</i></div>

                        <div className="product-details">
                            <span className="product-price">Rs.&nbsp;{product.price}&nbsp;</span>
                            <span className="product-mrp">Rs.&nbsp;{product.mrp}</span>
                            <br />
                            <span className="product-discount-percentage">{product.discountDisplayLabel}</span>
                        </div>

                        <div className="product-quantity">
                            <button className="minus" onClick={() => decreaseQuantity(product)}>-</button>
                            <span className="quantity-text">{`Qty : ${product.quantity}`}</span>
                            <button className="plus" onClick={() => increaseQuantity(product)}>+</button>
                        </div>

                        <div className="return-time">
                            <img src={retrun_logo} className="return-logo" alt="return-icon"/>
                            <span className="cartItem-14days"> 14 days </span>
                            return available
                        </div>
                    </div>
                </div>
                <div className="cancel-button" onClick={() => removeFromCart(product)}>X</div>
            </div>
        </div>
    )
    
}
export default CartItem;