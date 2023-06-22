import { useContext } from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import EmptyCart from "../EmptyCart/EmptyCart";
import PriceCalculation from "../PriceCalculation/PriceCalculation";
import percentageLogo from "../../images/percentage.png";
import { CartContext } from "../../context/CartContext";
import EmptyCartNavbar from "../EmptyCartNavbar/EmptyCartNavbar";


const Cart = () => {
    const { cartValue } = useContext(CartContext);

    return(
        <div className="cart-wrapper">            
            <EmptyCartNavbar />
            <div className="cart-container">
                <div>
                    { cartValue.length > 0 ?
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
                        {cartValue.length > 0 ? 
                            cartValue.map((product, i) => (
                                <CartItem product={product} key={i}/>
                            ))
                        :<div className="empty-cart">
                            <EmptyCart />
                        </div>
                        }
                    </div>                    
                </div>                
                <div>
                    {   cartValue.length>0 && <PriceCalculation />   }               
                </div>
            </div>
        </div>
    )
}
export default Cart;