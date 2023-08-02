import React, { useState } from "react";
import './PaymentForm.css';
import Popup from "../Popup/Popup";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
    const [showArray, setShowArray] = useState([1,0,0,0,0]);
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [recommendedArray, setRecommendedArray] = useState([0,0,0]);
    const [upiArray, setUpiArray] = useState([0,0,0]);
    const [netBankingArray, setNetBankingArray] = useState([0,0,0,0]);

    const [upiId, setUpiId] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [flag, setFlag] = useState(false);

    const navigate = useNavigate();

    const handleCardNumberChange = (event) => {
        let input = event.target.value;
        if (input.length < 4) {
            setCardNumber(input);
        } else if (input.length === 4) {
            setCardNumber(`${input} `);
        } else if (input.length < 9){
            setCardNumber(input);
        } else if (input.length === 9) {
            setCardNumber(`${input} `);
        } else if (input.length < 14) {
            setCardNumber(input);
        } else if (input.length === 14) {
            setCardNumber(`${input} `);
        } else if (input.length <= 19) {
            setCardNumber(input);
        }
    };

    const handleExpiryDateChange = (event) => {
        let input = event.target.value;
        if (input.length === 1) {
            setExpiryDate(input);
        }else if (input.length === 2) {
            setExpiryDate(`${input}/`);
        } else if (input.length > 2){
            setExpiryDate(input);
        }
    };

    const handlePlaceOrder = () => {
        setShowPopup(true);
        // Set a timer to hide the popup after 2000 milliseconds (2 seconds)
        setTimeout(() => {
            setShowPopup(false);
            navigate('/');
        }, 1000);
    }
    const handleGooglePayPayNow = () => {
        if(upiId==="") {
            setFlag(true);
        }else {            
            setShowPopup(true);
            // Set a timer to hide the popup after 2000 milliseconds (2 seconds)
            setTimeout(() => {
                setShowPopup(false);
                navigate('/');
            }, 2000);
        }
    }

    return (
        <div className="payment-form-container">
            <div className="choose-payment-text">Choose Payment Mode</div>
            <div className="payment-options">
                <div className="payment-options-wrapper">
                    <div className={`payment-option-divs ${showArray[0]===1 ? "show" : ""}`}
                        onClick={() => setShowArray([1,0,0,0,0])}  
                    >Recommended</div>
                    <div className={`payment-option-divs ${showArray[1]===1 ? "show" : ""}`}
                        onClick={() => setShowArray([0,1,0,0,0])}
                    >Cash On Delivery(Cash/UPI)</div>
                    <div className={`payment-option-divs ${showArray[2]===1 ? "show" : ""}`}
                        onClick={() => setShowArray([0,0,1,0,0])}
                    >Credit/Debit Card</div>
                    <div className={`payment-option-divs ${showArray[3]===1 ? "show" : ""}`}
                        onClick={() => setShowArray([0,0,0,1,0])}
                    >PhonePe/Google Pay/BHIM UPI</div>
                    <div className={`payment-option-divs ${showArray[4]===1 ? "show" : ""}`}
                        onClick={() => setShowArray([0,0,0,0,1])}
                    >Net Banking</div>
                </div>
                <div className="selected-payment-option">
                    {showArray[0] === 1 && <div className="recommended-payment-options-wrapper">
                        <div className="recommended-payment-options-text">Recommended Payment Options</div>
                        <div className="recommended-cashondelivery">
                            <input type="radio" id="cashOnDelivery" name="cashOnDelivery"/>
                            <label htmlFor="cashOnDelivery"
                                onClick={() => setRecommendedArray([1,0,0])}
                            >Cash on Delivery (Cash/UPI)</label>
                        </div>
                        {recommendedArray[0] === 1 && <div>
                            <div className="extra-charge-text">&#8377;10 will be charged extra for Cash On Delivery option.</div>
                            <div className="cashOnDelivery-place-order">
                                <button
                                    onClick={handlePlaceOrder}
                                >PLACE ORDER</button>
                            </div>
                        </div>}
                        
                        <div className="recommended-googlepay">
                            <input type="radio" id="googlepay" name="cashOnDelivery"/>
                            <label htmlFor="googlepay"
                                onClick={() => setRecommendedArray([0,1,0])}
                            >Google Pay</label>
                        </div>
                        {recommendedArray[1] === 1 && <div>
                            <div className="recommended-googlepay-enter-details-wrapper">
                                <div className="recommended-googlepay-enter-upi">
                                    <input 
                                        type="text" 
                                        placeholder="Enter UPI ID here"
                                        value={upiId}
                                        onChange={(e) => setUpiId(e.target.value)}
                                    />
                                </div>
                                <div className="recommended-googlepay-upi-type">
                                    <input type="text" value="@oksbi"/>
                                </div>
                            </div>
                            {flag && <div style={{color:'red',textAlign:'center'}}>Please Enter UPI ID</div>}
                            <div className="cashOnDelivery-place-order">
                                <button 
                                    onClick={handleGooglePayPayNow}
                                >PAY NOW</button>
                            </div>
                        </div>}

                        <div className="recommended-phonepe">
                            <input type="radio" id="phonepe" name="cashOnDelivery"/>
                            <label htmlFor="phonepe"
                                onClick={() => setRecommendedArray([0,0,1])}
                            >PhonePe</label>
                        </div>
                        {recommendedArray[2] === 1 && <div>
                            <div className="cashOnDelivery-place-order">
                                <button
                                    onClick={handlePlaceOrder}
                                >PAY NOW</button>
                            </div>
                        </div>}
                    </div>}                    
                    {showArray[1] === 1 && <div className="cashOnDelivery-wrapper">
                        <div className="cashOnDelivery-text">Cash On Delivery(Cash/UPI)</div>
                        <div className="extra-charge-text">&#8377;10 will be charged extra for Cash On Delivery option.</div>
                        <div className="cashOnDelivery-place-order">
                            <button
                                 onClick={handlePlaceOrder}
                            >PLACE ORDER</button>
                        </div>
                    </div>}
                    {showArray[2] === 1 && <div className="credit-debit-wrapper">
                        <div className="credit-debit-text">CREDIT/DEBIT CARD</div>
                        <div style={{color:'red'}}>Work in progress...</div>
                        <div className="credit-debit-text2">Please ensure your card can be used for online transactions.</div>
                        <div className="credit-debit-input-field">
                            <input 
                                type="tel" 
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                                placeholder="Card Number"
                                maxLength="19"
                            />
                        </div>
                        <div className="credit-debit-input-field">
                            <input type="text" placeholder="Name on card"/>
                        </div>
                        <div className="credit-debit-valid-cvv-wrapper">
                            <div className="credit-debit-valid-thru">
                                <input 
                                    type="tel" 
                                    value={expiryDate}
                                    onChange={handleExpiryDateChange}
                                    placeholder="Valid Thru (MM/YY)"
                                    maxLength="5"
                                />
                            </div>
                            <div className="credit-debit-cvv">
                                <input 
                                    type="tel"
                                    maxLength="3" 
                                    placeholder="CVV"
                                />
                            </div>
                        </div>
                        <div className="cashOnDelivery-place-order">
                                <button>PAY NOW</button>
                        </div>
                    </div>}
                    {showArray[3] === 1 && <div className="pay-using-upi-wrapper">
                        <div className="pay-using-upi-text">Pay using UPI</div>
                        <div style={{color:'red'}}>Work in progress...</div>
                        <div className="pay-using-upi-phonepe">
                            <input type="radio" id="phonepe" name="pay-using-upi"/>
                            <label htmlFor="phonepe"
                                onClick={() => setUpiArray([1,0,0])}
                            >PhonePe</label>
                        </div>
                        {upiArray[0] === 1 && <div>
                            <div className="cashOnDelivery-place-order">
                                <button>PAY NOW</button>
                            </div>
                        </div>}

                        <div className="pay-using-upi-googlepay">
                            <input type="radio" id="googlepay" name="pay-using-upi"/>
                            <label htmlFor="googlepay"
                                onClick={() => setUpiArray([0,1,0])}
                            >Google Pay</label>
                        </div>
                        {upiArray[1] === 1 && <div>
                            <div className="recommended-googlepay-enter-details-wrapper">
                                <div className="recommended-googlepay-enter-upi">
                                    <input type="text" placeholder="Enter UPI ID here"/>
                                </div>
                                <div className="recommended-googlepay-upi-type">
                                    <input type="text" value="@oksbi"/>
                                </div>
                            </div>
                            <div className="cashOnDelivery-place-order">
                                <button>PAY NOW</button>
                            </div>
                        </div>}
                        
                        <div className="pay-using-upi-enter-upi-id">
                            <input type="radio" id="enter-upi-id" name="pay-using-upi"/>
                            <label htmlFor="enter-upi-id"
                                onClick={() => setUpiArray([0,0,1])}
                            >Enter UPI ID</label>
                        </div>
                        {upiArray[2] === 1 && <div>
                            <div className="pay-using-upi-id-inner-wrapper">
                                <input type="text" placeholder="Enter UPI ID here"/>
                            </div>
                            <div className="cashOnDelivery-place-order">
                                <button>PAY NOW</button>
                            </div>
                        </div>}
                    </div>}
                    {showArray[4] === 1 && <div className="net-banking-wrapper">
                        <div className="net-banking-text">Net Banking</div>
                        <div style={{color:'red'}}>Work in progress...</div>
                        <div className="net-banking-axis-bank">
                            <input type="radio" id="axis" name="net-banking"/>
                            <label htmlFor="axis"
                                onClick={() => setNetBankingArray([1,0,0,0])}
                            >Axis Bank</label>
                        </div>
                        {netBankingArray[0] === 1 && <div>
                            <div className="cashOnDelivery-place-order">
                                <button>PAY NOW</button>
                            </div>
                        </div>}
                        <div className="net-banking-hdfc">
                            <input type="radio" id="hdfc" name="net-banking"/>
                            <label htmlFor="hdfc"
                                onClick={() => setNetBankingArray([0,1,0,0])}
                            >HDFC Bank</label>
                        </div>
                        {netBankingArray[1] === 1 && <div>
                            <div className="cashOnDelivery-place-order">
                                <button>PAY NOW</button>
                            </div>
                        </div>}
                        <div className="net-banking-icici">
                            <input type="radio" id="icici" name="net-banking"/>
                            <label htmlFor="icici"
                                onClick={() => setNetBankingArray([0,0,1,0])}
                            >ICICI Bank</label>
                        </div>
                        {netBankingArray[2] === 1 && <div>
                            <div className="cashOnDelivery-place-order">
                                <button>PAY NOW</button>
                            </div>
                        </div>}
                        <div className="net-banking-sbi">
                            <input type="radio" id="sbi" name="net-banking"/>
                            <label htmlFor="sbi"
                                onClick={() => setNetBankingArray([0,0,0,1])}
                            >SBI</label>
                        </div>
                        {netBankingArray[3] === 1 && <div>
                            <div className="cashOnDelivery-place-order">
                                <button>PAY NOW</button>
                            </div>
                        </div>}
                    </div>}
                </div>
            </div>
            <Popup show={showPopup}/>
        </div>
    )
}
export default PaymentForm;