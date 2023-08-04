import "./Popup.css";

const AddToWishList = ({ show }) => {

    if(!show) return null;
    return <div className="popup">WishListed!</div>;
};

export default AddToWishList;

