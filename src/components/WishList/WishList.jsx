import React, { useContext } from "react";
import "./WishList.css";
import NavBar from "../Header/NavBar";
import Footer from "../../Footer/Footer";
import { CartContext } from "../../context/CartContext";
import WishListItems from "../WishListItems/WishListItems";
import EmptyWishList from "../EmptyWishList/EmptyWishList";

const WishList = () => {
    // const { wishListValue } = useContext(CartContext);
    const { getWishlist } = useContext(CartContext);

    const wishlistFromLocalstorage = getWishlist();
    return (
        <>
            <NavBar />
            {wishlistFromLocalstorage.length > 0 ? <div className="wishlist-products-container">
                    <div style={{fontSize:'large',fontWeight:600,marginLeft:19}}>My Wishlist <span style={{fontSize:'medium',fontWeight:400}}>{wishlistFromLocalstorage.length} items</span></div>
                    <div className="wishlist-products-wrapper">
                        {wishlistFromLocalstorage.length>0 && wishlistFromLocalstorage.map((product, i) => {
                            return(
                                <WishListItems product={product} key={i}/>
                            )
                        })}
                    </div>
                </div>
                : <EmptyWishList />
            }
            <Footer />
        </>
    )
}
export default WishList;