import React, { useState } from "react";
import './AddressFormUI.css';
import { useNavigate } from "react-router-dom";

const AddressFormUI = () => {

    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [pincode, setPincode] = useState("");
    const [address, setAddress] = useState("");
    const [locality, setLocality] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [flag, setFlag] = useState("");

    const navigate = useNavigate();

    const handleMobileNumberChange = (e) => {
        const input = e.target.value.replace(/\D/g, ''); // Remove all non-digit characters
        setMobileNumber(input);
    }

    const handlePincodeChange = (e) => {
        const input = e.target.value.replace(/\D/g, ''); // Remove all non-digit characters
        setPincode(input);
    }

    const handleContinueClick = (e) => {
        e.preventDefault();
        if(name!=="" && mobileNumber.length===10 && pincode.length===6 && address!=="" && locality!=="" && city!=="" && state!=="") {            
            navigate('/paymentpage');
        }else {
            setFlag(true);
        }
    }

    return(
        <form onSubmit={handleContinueClick} className="address-form-ui-wrapper">
            <div className="address-form-ui-text">CONTACT DETAILS</div>
            <div className="address-form-ui-input-field">
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="address-form-ui-input-field">
                <input 
                    type="tel" 
                    maxLength="10" 
                    name="mobile" 
                    placeholder="Mobile No*"
                    value={mobileNumber}
                    onChange={handleMobileNumberChange}
                />
            </div>
            <div className="address-form-ui-text">ADDRESS</div>
            <div className="address-form-ui-input-field">
                <input 
                type="tel" 
                maxLength="6" 
                name="pincode" 
                placeholder="Pin Code*"
                value={pincode}
                onChange={handlePincodeChange}
                />
            </div>
            <div className="address-form-ui-input-field">
                <input 
                    type="text" 
                    name="address" 
                    placeholder="Address (House No, Building, Street, Area)*"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <div className="address-form-ui-input-field">
                <input 
                    type="text" 
                    name="lacality" 
                    placeholder="Locality / Town*"
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                />
            </div>
            <div className="address-form-ui-city-state">
                <input 
                    type="text" 
                    className="address-form-ui-city-input" 
                    name="city" 
                    placeholder="City / District*"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}    
                />
                <input 
                    type="text" 
                    className="address-form-ui-state-input" 
                    name="state" 
                    placeholder="State*"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
            </div>
            {flag && <div className="address-form-error">
                All fields are mandatory. Mobile number and pincode should be correct.
            </div>}
            <div className="address-form-ui-add-address">
                <button type="submit">CONTINUE</button>
            </div>
        </form>
    )
}
export default AddressFormUI;