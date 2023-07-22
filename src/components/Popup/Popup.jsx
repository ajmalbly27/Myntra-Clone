import "./Popup.css";
const Popup = ({ show }) => {

    if(!show) return null;
    return <div className="popup">Your Order is Placed Successfully!</div>;
};

export default Popup;

