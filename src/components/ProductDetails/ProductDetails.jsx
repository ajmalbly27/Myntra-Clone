import React, { useContext, useEffect, useRef, useState } from "react";
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
    // let selectedProduct = {};
    const selectedProduct = useRef(null);

    const { allProducts, addToCart, addToWishList } = useContext(CartContext);

    // Get the product ID from the url
    const { productId } = useParams();
    //Find the selected product based on the product ID
    selectedProduct.current = allProducts.find((product) => product.productId === parseInt(productId));
    const navigate = useNavigate();

    // useEffect(() => {
    //     if(selectedProduct.sizes==="Onesize") {
    //         const size = "Onesize";
    //         setSelectedSize(size);
    //     }
    //     // eslint-disable-next-line
    // }, []);


    useEffect(() => {
        fetch("https://demo3154199.mockable.io/products")
        .then(response => response.json())
        .then(data => {
            // Find the selected product based on the product ID
            selectedProduct.current = data.products.find((product) => product.productId === parseInt(productId));            
            // Update the selected size based on the product data
            if (selectedProduct.current && selectedProduct.current.sizes === "Onesize") {
                const size = "Onesize";
                setSelectedSize(size);
            }
        })
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
            {selectedProduct.current ? 
                (<div className="productDetails-main-div">
                    <div className="productDetails-img-div">
                        <img src={selectedProduct.current.searchImage} alt={selectedProduct.current.additionalInfo} />                    
                    </div>
                    <div className="productDetails-details-container">
                        <div>
                            <div className="productDetails-brand">{selectedProduct.current.brand}</div>
                            <div className="productDetails-additionalInfo">{selectedProduct.current.additionalInfo}</div>
                            <div className="productDetails-productName">{selectedProduct.current.productName}</div>
                            <div className="rating-box">
                                <div className="rating">{selectedProduct.current.rating}</div>
                                <FaStar className="rating-star"/>
                                <span className="line-span">|</span>
                                <div className="ratingCount">{selectedProduct.current.ratingCount}</div>&nbsp;
                                <span className="ratingCount">Ratings</span>
                            </div>
                            <div className="line"></div>
                            <div className="productDetails-inner-container">
                                <div className="productDetails-price">&#8377;{selectedProduct.current.price}</div>
                                <div className="productDetails-mrp-text">&nbsp;&nbsp;MRP</div>
                                <div className="productDetails-mrp">&#8377;{selectedProduct.current.mrp}</div>
                                <div className="productDetails-discount">{selectedProduct.current.discountDisplayLabel}</div>
                            </div>
                            <div className="productDetails">inclusive of all taxes</div>
                        </div>
                        <div>
                            {selectedProduct.current.sizes && <div>
                                    <div className="select-size-text">SELECT SIZE</div>
                                    {sizeFlag && <div style={{color:'red'}}>
                                        Please select size.
                                    </div>}
                                    <div className="sizes-container">
                                        {selectedProduct.current.sizes.split(",").map((item, i) => {
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
                            {!flag ? <button className="add-to-bag-btn" onClick={() => handleAddToCart(selectedProduct.current)}>ADD TO BAG</button> 
                                :<button className="add-to-bag-btn" onClick={handleGoToBag}>GO TO BAG</button>
                            }
                            {!wishlistFlag ?
                                <button className="add-to-wishlist-button"
                                    onClick={() => handleWishList(selectedProduct.current)}
                                >WISHLIST</button>
                                :<button className="add-to-wishlist-button"
                                    onClick={handleGoToWishList}
                                >GO TO WISHLIST</button>
                            }
                        </div>
                        <AddToCartPopup show={showPopup}/>
                        <AddToWishList show={showWishListPopup}/>
                    </div>
                </div>)
                :<div style={{textAlign:'center', height:'50vh', marginTop:50}}>Loading...</div>
            }
            <Footer />
        </div>
    );
};

export default ProductDetails;
