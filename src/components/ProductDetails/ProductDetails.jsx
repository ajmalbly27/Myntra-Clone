import React, { useContext, useState } from "react";
import "./ProductDetails.css";
import NavBar from "../Header/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Footer from "../../Footer/Footer";
import { FaStar } from 'react-icons/fa';
import AddToCartPopup from "../Popup/AddToCartPopup";

const ProductDetails = () => {    
    const [showPopup, setShowPopup] = useState(false);
    const [flag, setFlag] = useState(false);

    const { allProducts, addToCart } = useContext(CartContext);
    // Get the product ID from the url
    const { productId } = useParams();
    //Find the selected product based on the product ID
    const selectedProduct = allProducts.find((product) => product.productId === parseInt(productId));

    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        addToCart(item);
        setShowPopup(true);
        setFlag(true);
        // Set a timer to hide the popup after 2000 milliseconds (2 seconds)
        setTimeout(() => {
            setShowPopup(false);
        }, 2000)
    }

    const handleGoToBag = () => {
        setFlag(false);
        navigate('/cart');
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
                        {!flag ? <button className="add-to-bag-btn" onClick={() => handleAddToCart(selectedProduct)}>ADD TO BAG</button> 
                            :<button className="add-to-bag-btn" onClick={handleGoToBag}>GO TO BAG</button>
                        }
                        <AddToCartPopup show={showPopup}/>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default ProductDetails;
