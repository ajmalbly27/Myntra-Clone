import React from "react";
import './EmptyWishList.css';
import emptyWishlistIimage from "../../images/empty-wishlist-2.png";
import { useNavigate } from "react-router-dom";

const EmptyWishList = () => {

    const navigate = useNavigate();
    return(
        <div className="empty-wishlist-container">
            <div className="empty-wishlist-wrapper">
                <div className="emptyWishlist-text">YOUR WISHLIST IS EMPTY</div>
                <div className="emptyWishlist-more-text">Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</div>
                <div className="emptyWishlistIimage-wrapper">
                    <img src={emptyWishlistIimage} alt="empty-wishlist-img"/>
                </div>
                <div className="emptyWishlistIimage-continue-shopping-button">
                    <button
                        onClick={() => navigate('/')}
                    >CONTINUE SHOPPING</button>
                </div>
            </div>
        </div>
    )
}
export default EmptyWishList;