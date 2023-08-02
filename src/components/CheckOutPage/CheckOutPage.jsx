import React from "react";
import "./CheckOutPage.css";
import EmptyCartNavbar from "../EmptyCartNavbar/EmptyCartNavbar";
import AddressFormUI from "../AddressFormUI/AddressFormUI";
import PriceCalculation from "../PriceCalculation/PriceCalculation";

const CheckOutPage = () => {

    return (
        <>
            <EmptyCartNavbar />
            <div className="checkout-container">
                <AddressFormUI />
                <PriceCalculation />
            </div>
        </>
    )
}
export default CheckOutPage;