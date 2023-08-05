import React, { useContext, useState } from "react";
import './SignupPage.css';
import NavBar from "../Header/NavBar";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {

    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [flag, setFlag] = useState(false);
    const { mobileNumber } = useContext(CartContext);

    const navigate = useNavigate();

    const handleCreateAccount = (e) => {
        e.preventDefault();
        if(password==="" || fullName==="" || email==="" || gender==="") {
            setFlag(true);
        }else {
            setFlag(false);
            // Get existing users from local storage or initialize an empty array           
            const existingUsers = JSON.parse(localStorage.getItem('myntra_users')) || [];
            // Create a new user object
            const newUser = { mobileNumber, fullName, password, email };
            // Add the new user to the existing array of users
            const updatedUsers = [...existingUsers, newUser];
            // Save the updated array back to local storage
            localStorage.setItem('myntra_users', JSON.stringify(updatedUsers));
            // Redirect to the main page 
            navigate('/');
        }
    }

    return (
        <div>
            <NavBar />
            <div className="signup-container">
                <form className="signup-main-wrapper">
                    <div className="singnp-text">Complete your sign up</div>
                    <div className="singnp-mobile-text">Mobile Number</div>
                    <div className="signup-mobilenumber">{mobileNumber}</div>
                    <div className="signup-input-field">
                        <input 
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="signup-input-field">
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </div>
                    <div className="signup-input-field">
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Create Password"
                        />
                    </div>
                    <div className="signup-gender-div">
                        <div>Select Gender:</div>
                        <div>
                            <input 
                                type="radio" 
                                id="male" 
                                name="gender"
                                value="male"
                                checked={gender === "male"} // Check if gender state is "male"
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label htmlFor="male">Male</label>
                            <input 
                                type="radio" 
                                id="female" 
                                name="gender"
                                value="female"
                                checked={gender === "female"} // Check if gender state is "female"
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    {flag && <div style={{color:'red'}}>All fields are mandatory.</div>}
                    <div className="signup-create-account">
                        <button 
                            type="submit"
                            onClick={handleCreateAccount}                        
                        >CREATE ACCOUNT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignupPage;