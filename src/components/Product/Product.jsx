import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({item}) => {

    return(
        <Link to={`/product/${item.productId}`} target={`/product/${item.productId}`}>
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
                        <br />
                        <span className="product-discount-percentage">{item.discountDisplayLabel}</span>
                    </div>
                </div>
            </div>
        </Link>    
    )
}
export default Product;