import { useEffect, useState } from "react";
import Product from "../Product/Product";
import './List.css';

const List = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://demo3154199.mockable.io/products")
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            console.log(data.products);
            setData(data);
        })
    }, []);

    return(
        <div className="each-item-wrapper">
            {
                data && data.products.map((eachItem, index) => {
                    return <Product item={eachItem} key={index}/>
                })
            }
        </div>
    )
}
export default List;