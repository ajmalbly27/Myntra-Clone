import React, { useContext, useState } from "react";
import './LoginWithPassword.css';
import NavBar from "../Header/NavBar";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const LoginWithPassword = () => {
    
    const { mobileNumber, setUsername } = useContext(CartContext);
    const [password, setPassword] = useState();
    const [flag, setFlag] = useState();

    const navigate  = useNavigate();

    const checkForPassword = (existingUsers) => {
        const user = existingUsers.find((user) => user.mobileNumber === mobileNumber);
        if (user.password === password) {
            localStorage.setItem('username', JSON.stringify(user.fullName));
            setUsername(user.fullName);
            return true;
        }
        return false;
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const existingUsers = JSON.parse(localStorage.getItem('myntra_users')) || [];
        if(checkForPassword(existingUsers, mobileNumber)) {
            setFlag(false);
            navigate('/');
        }else {
            setFlag(true);
        }
    }

    return(
        <div>
            <NavBar />
            <div className="login-using-password-container">
                <form className="login-using-password-main">
                    <div className="logintoaccount-text">Login to your account</div>
                    <div className="logintoaccount-input-field">
                        <input type="text" value={mobileNumber} placeholder="Mobile Number"/>
                    </div>
                    <div className="logintoaccount-input-field">
                        <input 
                            type="password" 
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {flag && <div style={{color:'red', textAlign:'center'}}>Wrong password</div>}
                    <div className="logintoaccount-login">
                        <button
                            onClick={handleLogin}
                        >LOGIN</button>
                    </div>
                    <div className="login-using-text">Login using <span onClick={() => navigate('/otppage')}>OTP</span></div>
                </form>
            </div>
        </div>
    )
}
export default LoginWithPassword;