import { useContext, useState } from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import EmptyCart from "../EmptyCart/EmptyCart";
import PriceCalculation from "../PriceCalculation/PriceCalculation";
import percentageLogo from "../../images/percentage.png";
import { CartContext } from "../../context/CartContext";
import EmptyCartNavbar from "../EmptyCartNavbar/EmptyCartNavbar";
import Footer from "../../Footer/Footer";

const Cart = () => {
    // eslint-disable-next-line
    const [show, setshow] = useState(true);
    // const { cartValue } = useContext(CartContext);
    const { getCart } = useContext(CartContext);
    const cartValueFromLocalStorage = getCart();

    return(
        <div className="cart-wrapper">            
            <EmptyCartNavbar />
            <div className="cart-container">
                <div>
                    { cartValueFromLocalStorage.length > 0 ?
                        <div className="offers">
                            <div className="offers-container">
                                <div className="available-offers">                                
                                    <img src={percentageLogo} alt="percentage-img"/>                                                         
                                    <div>Available Offers</div>                                
                                </div>
                                <div className="kotak-discount">10% Instant Discount on Kotak Credit and Debit Cards on a min spend of Rs 3,000. TCA</div>
                            </div>
                        </div> : null                    
                    }

                    <div>                    
                        {cartValueFromLocalStorage.length > 0 ? 
                            cartValueFromLocalStorage.map((product, i) => (
                                <CartItem product={product} key={i}/>
                            ))
                        :<div className="empty-cart">
                            <EmptyCart />
                        </div>
                        }
                    </div>                    
                </div>                
                <div>
                    {   cartValueFromLocalStorage.length>0 && <PriceCalculation show={show}/>   }               
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Cart;