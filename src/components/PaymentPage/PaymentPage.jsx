import React from "react";
import './PaymentPage.css';
import EmptyCartNavbar from "../EmptyCartNavbar/EmptyCartNavbar";
import PriceCalculation from "../PriceCalculation/PriceCalculation";
import PaymentForm from "../PaymentForm/PaymentForm";

const PaymentPage = () => {
    return (
        <>
            <EmptyCartNavbar />
            <div className="payment-page-container">
                <PaymentForm />
                <PriceCalculation />
            </div>
        </>
    )
}
export default PaymentPage;