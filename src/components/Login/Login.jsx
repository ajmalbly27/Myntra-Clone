import { useNavigate } from "react-router-dom";
import Navbar from "../Header/NavBar";
import "./Login.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const Login = () => {
    const [flag, setFlag] = useState(false);
    const { mobileNumber, setMobileNumber } = useContext(CartContext);
    const navigate = useNavigate();

    const handleContinueClick = () => {
        if(mobileNumber === '' || mobileNumber.length < 10 || mobileNumber.length > 10) {
            setFlag(true);
            return;
        }
        // navigate("/otppage");
        navigate("/loginusingpassword");
    }

    return(
        <div className="login-wrapper">
            <Navbar />
            <div className="login-container">
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/7/1/d07fff8e-c616-44ae-a01d-f0163c2e743c1625160833447-Banner-Hamburger-500--1-.jpg" alt="login-img"/>
                </div>
                <div className="login-main">
                    <div className="login-signup-text">
                        Login&nbsp;<span className="login-or">or</span>&nbsp;Signup
                    </div>
                    <div className="input-number-container">
                        <span className="span-number">+91&nbsp;|</span>
                        <input className="login-input-field" 
                            type="text"
                            value={mobileNumber}
                            placeholder="Mobile Number"
                            onChange={(e) => setMobileNumber(e.target.value)}
                        />
                    </div>
                    {flag ? 
                        <div className="login-error-div">
                            Please enter a valid mobile number (10 digits)
                        </div> : null
                    }
                    <div className="login-terms-and-condition-text">
                        By continuing, I agree to the 
                        <span className="span-in-login">Terms of Use</span>
                        &nbsp;&&nbsp;
                        <span className="span-in-login">Privacy Policy</span>
                    </div>
                    <button className="login-continue-button"
                        onClick={handleContinueClick}
                    >
                        CONTINUE
                    </button>
                    <div className="login-help-text">
                        Have trouble logging in? 
                        <span className="login-help-span-text">&nbsp;Get help</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;