import "./EmptyCartNavbar.css";
import logo from "../../images/Myntra-Logo.png";
import logoright from "../../images/right-logo.png";
import { useNavigate } from "react-router-dom";

const EmptyCartNavbar = () => {

    const navigate = useNavigate();

    return (
        <div className="empty-cart-navbar-wrapper">
            <img className="myntra-logo-empty-cart" src={logo} alt="Myntra-logo"
                onClick={() => navigate("/")}
            />
            <div>
                <span className="text-cart-navbar-empty">BAG</span>
                <span className="text-cart-navbar-empty">-------</span>
                <span className="text-cart-navbar-empty">ADDRESS</span>
                <span className="text-cart-navbar-empty">-------</span>
                <span className="text-cart-navbar-empty">PAYMENT</span>
            </div>
            <div className="secure-sign-cart">
                <img className="right-sign" src={logoright} alt="right-sign"/>
                <span className="text-cart-navbar-empty">&nbsp;100% SECURE</span>
            </div>
        </div>
    )
}
export default EmptyCartNavbar;