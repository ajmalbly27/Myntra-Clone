import "./Footer.css";
import original from "../images/original.png";
import returnButton from "../images/return-button.png";

const Footer = () => {
    return(
        <div className="footer-wrapper">
            <div className="content-wrapper">
                <div>
                    <h5>ONLINE SHOPPING</h5>
                    <div>Men</div>
                    <div>Women</div>
                    <div>Kids</div>
                    <div>Home & Living</div>
                    <div>Gift Cards</div>
                    <div>Myntra Insider</div>
                </div>
                <div>
                    <div className="guarantee-wrapper">
                        <img src={original} alt="original-img"/>
                        <div>
                            <div><span className="original">100% ORIGINAL</span> guarantee for</div>
                            <div>all products at myntra.com</div>
                        </div>
                    </div>
                    <div className="return-wrapper">
                        <img src={returnButton} alt="return-img"/>
                        <div>
                            <div><span className="return">Return within 14days</span> of</div>
                            <div>receiving your order</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right-wrapper">
                <div>
                    <div>In case of any concern, <span>Contact Us</span></div>                    
                </div>
                <div>
                    <div>&copy; 2023 www.myntra.com. All rights reserved.</div>
                </div>
            </div>
        </div>
    )
}
export default Footer;