import React, { useContext, useEffect, useState } from "react";
import "./ProductDetails.css";
import NavBar from "../Header/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Footer from "../../Footer/Footer";
import { FaStar } from 'react-icons/fa';
import AddToCartPopup from "../Popup/AddToCartPopup";
import AddToWishList from "../Popup/AddToWishList";

const ProductDetails = () => {    
    const [showPopup, setShowPopup] = useState(false);
    const [showWishListPopup, setShowWishListPopup] = useState(false);
    const [flag, setFlag] = useState(false);
    const [wishlistFlag, setWishlistFlag] = useState(false);
    const [selectedSize, setSelectedSize] = useState("");
    const [sizeFlag, setSizeFlag] = useState(false);

    const { allProducts, addToCart, addToWishList } = useContext(CartContext);
    // Get the product ID from the url
    const { productId } = useParams();
    //Find the selected product based on the product ID
    const selectedProduct = allProducts.find((product) => product.productId === parseInt(productId));
    const navigate = useNavigate();

    useEffect(() => {
        if(selectedProduct.sizes==="Onesize") {
            const size = "Onesize";
            setSelectedSize(size);
        }
        // eslint-disable-next-line
    }, []);

    const handleAddToCart = (item) => {
        
        if(selectedSize === "") {
            setSizeFlag(true);
        }else {
            addToCart(item, selectedSize);
            setShowPopup(true);
            setFlag(true);
            // Set a timer to hide the popup after 2000 milliseconds (2 seconds)
            setTimeout(() => {
                setShowPopup(false);
            }, 2000)
        }
    }

    const handleGoToBag = () => {
        setFlag(false);
        navigate('/cart');
    }

    const handleWishList = (item) => {
        if(selectedSize === "") {
            setSizeFlag(true);
        }else {
            setWishlistFlag(true);
            addToWishList(item, selectedSize);
            setShowWishListPopup(true);
            // Set a timer to hide the popup after 2000 milliseconds (2 seconds)
            setTimeout(() => {
                setShowWishListPopup(false);
            }, 2000)
        }
    }

    const handleGoToWishList = () => {
        setWishlistFlag(false);
        navigate('/wishlist')
    }

    const handleSizeClick = (item) => {
        setSelectedSize(item);
        setSizeFlag(false);
    }

    return (
        <div>
            <NavBar />
            {selectedProduct && (
                <div className="productDetails-main-div">
                    <div className="productDetails-img-div">
                        <img src={selectedProduct.searchImage} alt={selectedProduct.additionalInfo} />                    
                    </div>
                    <div className="productDetails-details-container">
                        <div>
                            <div className="productDetails-brand">{selectedProduct.brand}</div>
                            <div className="productDetails-additionalInfo">{selectedProduct.additionalInfo}</div>
                            <div className="productDetails-productName">{selectedProduct.productName}</div>
                            <div className="rating-box">
                                <div className="rating">{selectedProduct.rating}</div>
                                <FaStar className="rating-star"/>
                                <span className="line-span">|</span>
                                <div className="ratingCount">{selectedProduct.ratingCount}</div>&nbsp;
                                <span className="ratingCount">Ratings</span>
                            </div>
                            <div className="line"></div>
                            <div className="productDetails-inner-container">
                                <div className="productDetails-price">&#8377;{selectedProduct.price}</div>
                                <div className="productDetails-mrp-text">&nbsp;&nbsp;MRP</div>
                                <div className="productDetails-mrp">&#8377;{selectedProduct.mrp}</div>
                                <div className="productDetails-discount">{selectedProduct.discountDisplayLabel}</div>
                            </div>
                            <div className="productDetails">inclusive of all taxes</div>
                        </div>
                        <div>
                            {selectedProduct.sizes && <div>
                                    <div className="select-size-text">SELECT SIZE</div>
                                    {sizeFlag && <div style={{color:'red'}}>
                                        Please select size.
                                    </div>}
                                    <div className="sizes-container">
                                        {selectedProduct.sizes.split(",").map((item, i) => {
                                            return (
                                                <div
                                                    className={`size-of-product ${selectedSize === item ? "show" : ""}`}
                                                    key={i}
                                                    onClick={() => handleSizeClick(item)}
                                                >{item}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="add-to-bag-wishlist-wrapper">
                            {!flag ? <button className="add-to-bag-btn" onClick={() => handleAddToCart(selectedProduct)}>ADD TO BAG</button> 
                                :<button className="add-to-bag-btn" onClick={handleGoToBag}>GO TO BAG</button>
                            }
                            {!wishlistFlag ?
                                <button className="add-to-wishlist-button"
                                    onClick={() => handleWishList(selectedProduct)}
                                >WISHLIST</button>
                                :<button className="add-to-wishlist-button"
                                    onClick={handleGoToWishList}
                                >GO TO WISHLIST</button>
                            }
                        </div>
                        <AddToCartPopup show={showPopup}/>
                        <AddToWishList show={showWishListPopup}/>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default ProductDetails;
