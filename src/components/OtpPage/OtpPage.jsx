import React, { useEffect, useRef, useState } from "react";
import NavBar from "../Header/NavBar";
import otplogo from "../../images/mobile-verification.jpg";
import "./OtpPage.css";
import { useNavigate } from "react-router-dom";

const OtpPage = () => {

    const [otp, setOTP] = useState(['', '', '', '']);
    const [generatedOTP, setGeneratedOTP] = useState(Math.floor(1000 + Math.random() * 9000).toString());
    const otpInputRefs = useRef([]);
    // let generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();

    const navigate = useNavigate();

    const generateOTP = () => {
        // generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
        setGeneratedOTP(Math.floor(1000 + Math.random() * 9000).toString());
    }

    // Update generatedOTP whenever it changes
    useEffect(() => {
        alert(`OTP for login: ${generatedOTP}`);
    }, [generatedOTP]);

    const handleOTPChange = (index, event) => {
        const value = event.target.value;

        const upDatedOTP = [...otp];
        upDatedOTP[index] = value;
        setOTP(upDatedOTP);

        if(value !== '') {
            // Move focus to the next input field
            if(index < otpInputRefs.current.length - 1) {
                otpInputRefs.current[index + 1].focus();
            }
        }else {
            // Move focus to the previous input field
            if(index > 0) {
                otpInputRefs.current[index - 1].focus();
            } 
        }

        if( index === otpInputRefs.current.length-1 && upDatedOTP.every((digit) => digit !== '') ) {
            const filledOTP = upDatedOTP.join("");
            console.log(`Filled OTP is ${filledOTP}`);
            
            console.log(`Generated OTP is ${generatedOTP}`);

            if( filledOTP === generatedOTP ) {
                console.log("Yes redirected to SignupPage");
                navigate("/");
            } else {
                console.log("No redirected to SignupPage");
            }
        }

    }

    const handleResendOTP = () => {
        generateOTP();
    }

    return (
        <div>
            <NavBar />
            <div className="otp-container">
                <div className="otp-main">
                    <div className="otp-mobile-varification-logo-div">
                        <img src={otplogo} alt="otplogo-img"/>
                    </div>
                    <div className="otp-varify-text">Varify with OTP</div>

                    {otp.map((digit, index) => (
                        <input 
                            key={index}
                            className="otp-input-divs"
                            type="text"
                            value={digit}
                            onChange={(event) => handleOTPChange(index, event)}
                            ref={(ref) => (otpInputRefs.current[index] = ref)}
                            maxLength={1}
                        />
                    ))}


                    <div 
                        className="resend-otp"
                        onClick={handleResendOTP}
                    >RESEND OTP</div>
                    <div className="otp-text">Log in using <span>Password</span></div>
                    <div className="otp-text">Having trouble logging in?<span>Get help</span></div>
                </div>
            </div>
        </div>
    )
}
export default OtpPage;