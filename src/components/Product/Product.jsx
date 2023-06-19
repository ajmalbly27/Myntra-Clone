import './Product.css';

const Product = ({item}) => {

    return(
        <div className='each-item'>
            <div className='product-image'>
                <img src={item.searchImage} alt='Product-img'/>
            </div>
            <div>
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
        </div>
    )
}
export default Product;