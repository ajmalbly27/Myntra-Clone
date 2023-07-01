import React, { useContext } from "react";
import "./PriceCalculation.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const PriceCalculation = () => {

    const navigate = useNavigate();

    const { cartValue } = useContext(CartContext);

    let mrpPrice = 0;
    let finalPrice = 0;
    let discountPrice = 0;
    let convenienceFee = 10;
    let totalAmount = 0;

    for(let item of cartValue) {
        mrpPrice = Number(mrpPrice) + item.quantity * (Number(item.mrp));
        finalPrice = Number(finalPrice) + item.quantity * (Number(item.price));
        discountPrice = Number(mrpPrice - finalPrice);
        totalAmount = mrpPrice - discountPrice + convenienceFee;
    }

    return(
        <div className="price-wrapper">
            <div className="price-details-text">PRICE DETAILS</div>
            <div className="price-details">
                <div>Total MRP</div>
                <div> &#8377;{mrpPrice}</div>
            </div>
            <div className="price-details">
                <div>Discount on MRP</div>
                <div className="discount-on-mrp">-&#8377;{discountPrice}</div>
            </div>
            <div className="price-details">
                <div>Coupon Discount</div>
                <div className="apply-coupon">Apply Coupon</div>
            </div>
            <div className="price-details">
                <div>Convenience Fee</div>
                <div> &#8377;{convenienceFee}</div>
            </div>
            <div className="price-details total-amount-text">
                <div>Total Amount</div>
                <div> &#8377;{totalAmount}</div>
            </div>
            <button className="place-order-button" onClick={() => navigate('/Login')}>PLACE ORDER</button>
        </div>
    )
}
export default PriceCalculation;