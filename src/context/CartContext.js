import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [cartValue, setCartValue] = useState([]);

    const addToCart = (selectedProduct) => {
        setCartValue([...cartValue, selectedProduct]);
    }


    return (
        <CartContext.Provider value={{
            cartValue,
            addToCart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}