import React, { useContext, useState } from 'react';
import './Product.css';
import { CartContext } from '../../context/CartContext';
import AddToCartPopup from '../Popup/AddToCartPopup';

const Product = ({item}) => {

    const { addToCart } = useContext(CartContext);
    const [showPopup, setShowPopup] = useState(false);

    const handleAddToCart = (item) => {
        addToCart(item);
        setShowPopup(true);
            // Set a timer to hide the popup after 2000 milliseconds (2 seconds)
        setTimeout(() => {
            setShowPopup(false);
        }, 2000)
    }

    return(
        <div className='each-item'>
            <div className='product-image'>
                <img src={item.searchImage} alt='Product-img'/>
            </div>
            <div className='product-info-container'>
                <h3 className='product-brand'>
                    {item.brand}
                </h3>
                <h4 className='product-additionalInfo'>
                    {item.additionalInfo}
                </h4>
                <div className="product-details">
                    <span className="product-price">Rs.&nbsp;{item.price}&nbsp;</span>
                    <span className="product-mrp">Rs.&nbsp;{item.mrp}</span>
                    <span className="product-discount-percentage">&nbsp;{item.discountDisplayLabel}</span>
                </div>
            </div>
            <button className="btn" onClick={() => handleAddToCart(item)}>ADD TO BAG</button>
            <AddToCartPopup show={showPopup}/>
        </div>
    )
}
export default Product;