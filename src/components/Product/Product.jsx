import React, { useContext } from 'react';
import './Product.css';
import { CartContext } from '../../context/CartContext';

const Product = ({item}) => {

    const { addToCart } = useContext(CartContext)

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
            <button className="btn" onClick={() => addToCart(item)}>ADD TO BAG</button>
        </div>
    )
}
export default Product;