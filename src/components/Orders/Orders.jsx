import React, { useContext } from "react";
import './Orders.css';
import NavBar from "../Header/NavBar";
import { CartContext } from "../../context/CartContext";
import emptyOrder from '../../images/empty-order.png';

const Orders = () => {
    const { username, orders } = useContext(CartContext);

    return(
        <div className="orders-container-wrapper">
            <NavBar />
            <div className="orders-container">
                <div className="orders-main-container">
                    <div className="orders-account-wrapper">
                        <div className="orders-account">Account</div>
                        <div>{username}</div>
                    </div>
                    <div className="all-oreders-text">All Orders :</div>
                    {orders.length>0 ? <div>
                            {orders.map((product, i) => {
                                return(
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        :<div className="empty-order-container">
                            <div className="empty-order-image-wrapper">
                                <img src={emptyOrder} className="empty-order-image" alt="empty-Order"/>
                            </div>
                            <div className="empty-order-text">You have not ordered anything yet.</div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default Orders;