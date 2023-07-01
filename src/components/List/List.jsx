import { useContext } from "react";
import Product from "../Product/Product";
import './List.css';
import { CartContext } from "../../context/CartContext";

const List = () => {

    const { allProducts } = useContext(CartContext);

    return(
        <div className="each-item-wrapper">
            {
                allProducts && allProducts.products.map((eachItem, index) => {
                    return <Product item={eachItem} key={index}/>
                })
            }
        </div>
    )
}
export default List;