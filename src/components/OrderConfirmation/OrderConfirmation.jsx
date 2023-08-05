import React from "react";
import './OrderConfirmation.css';
import EmptyCartNavbar from "../EmptyCartNavbar/EmptyCartNavbar";
import confirmationLlogo from "../../images/right-confirmation-logo.png";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {

    const navigate = useNavigate();
    return (
        <div className="confirmation-container">
            <EmptyCartNavbar />
            <div className="confirmation-main-container">
                <div className="confirmation-inner-container">
                    <div className="confirmation-most-inner-container">
                        <div className="confirmation-logo-img-wrapper">
                            <img src={confirmationLlogo} alt="confirmation-logo-img"/>
                        </div>
                        <div className="order-confirmed-text">Order confirmed</div>
                        <div className="confirmation-receive-email-text">Your order is confirmed. You will receive an order confirmation email/SMS shortly with the expected delivery date for your items.</div>
                    </div>
                    <div className="confirmation-continue-shopping">
                        
                        <div className="confirmation-continue-shopping-button">
                            <button
                                onClick={() => navigate('/')}
                            >CONTINUE SHOPPING</button>
                        </div>
                        <div className="confirmation-view-order-button">
                        <button
                            onClick={() => navigate('/orders')}
                        >VIEW ORDER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderConfirmation;