import { useContext } from "react";
import Product from "../Product/Product";
import './List.css';
import { CartContext } from "../../context/CartContext";

const List = () => {

    const { filteredProducts } = useContext(CartContext);

    return(
        <div className="each-item-wrapper">
            {filteredProducts.length>0 && filteredProducts.map((eachItem, index) => {
                    return <Product item={eachItem} key={index}/>
            })}
        </div>
    )
}
export default List;