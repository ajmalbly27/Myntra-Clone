import "./AddToCartPopup.css";

const AddToCartPopup = ({ show }) => {

    if(!show) return null;
    return <div className="popup">Item is added to the bag!</div>;
};

export default AddToCartPopup;

