import React, { useContext } from "react";
import './WishListItems.css';
import { CartContext } from "../../context/CartContext";

const WishListItems = ( {product} ) => {
    const { addToCart, removeFromWishList } = useContext(CartContext);
    
    const handleMoveToBag = (item) => {
        addToCart(item);
        removeFromWishList(item);
    }
    return (
        <div className="wishlist-product-wrapper">
            <div className="wishlist-product-image">
                <img src={product.searchImage} alt={product.searchImage}/>
            </div>
            <div className="wishlist-product-info">{product.additionalInfo}</div>
            <div className="wishlist-product-inner-container">
                <div className="wishlist-product-price">&#8377;{product.price}</div>
                <div className="wishlist-product-mrp-text">&nbsp;&nbsp;MRP</div>
                <div className="wishlist-product-mrp">&#8377;{product.mrp}</div>
                <div className="wishlist-product-discount">{product.discountDisplayLabel}</div>
            </div>
            <div className="move-to-bag-button">
                <button 
                    onClick={() => handleMoveToBag(product)}
                >MOVE TO BAG</button>
            </div>
        </div>
    )
}
export default WishListItems;