import "./EmptyCart.css";
import emptyBag from "../../images/empty-bag.png";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="empty-cart-wrapper">
                <div className="empty-cart-container">
                    <div className="empty-cart-image-wrapper">
                        <img className="empty-cart-image" src={emptyBag} alt="EmptyCart-img"/>
                    </div>
                    <div className="text-div-cart">
                        <div className="text-empty-cart">Hey, it feels so light!</div>
                        <div className="text-empty-cart-inner">There is nothing in your bag. Let's add some items.</div>
                    </div>
                    <button className="empty-cart-button"
                        onClick={() => navigate('/')}
                    >
                        ADD ITEMS
                    </button>
                </div>
            </div>
        </div>
    )
}
export default EmptyCart;