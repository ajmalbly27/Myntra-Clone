import React, { useContext } from "react";
import "./WishList.css";
import NavBar from "../Header/NavBar";
import Footer from "../../Footer/Footer";
import { CartContext } from "../../context/CartContext";
import WishListItems from "../WishListItems/WishListItems";
import EmptyWishList from "../EmptyWishList/EmptyWishList";

const WishList = () => {
    const { wishListValue } = useContext(CartContext);
    return (
        <>
            <NavBar />
            {wishListValue.length > 0 ? <div className="wishlist-products-container">
                    <div style={{fontSize:'large',fontWeight:600,marginLeft:19}}>My Wishlist <spna style={{fontSize:'medium',fontWeight:400}}>{wishListValue.length} items</spna></div>
                    <div className="wishlist-products-wrapper">
                        {wishListValue.length>0 && wishListValue.map((product, i) => {
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