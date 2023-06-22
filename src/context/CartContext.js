import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [cartValue, setCartValue] = useState([]);

    const addToCart = (item) => {
        // Set a default quantity of 1
        const itemWithQuantity = { ...item, quantity: 1 };

        for(let element of cartValue) {
            if(element.productId === item.productId) {
                // console.log("Present");
                return;
            }
        }

        setCartValue([...cartValue, itemWithQuantity]);
    }

    const increaseQuantity = (item) => {
        setCartValue((prevItems) =>
            prevItems.map((prevItem) =>
            prevItem.productId === item.productId
                ? { ...prevItem, quantity: prevItem.quantity + 1 }
                : prevItem
            )
        );
    }

    const decreaseQuantity = (item) => {
        if(item.quantity === 1) {
            return;
        }
        setCartValue((prevItems) =>
          prevItems.map((prevItem) =>
            prevItem.productId === item.productId
              ? { ...prevItem, quantity: prevItem.quantity - 1 }
              : prevItem
          )
        );
    }

    return (
        <CartContext.Provider value={{
            cartValue,
            addToCart,
            increaseQuantity,
            decreaseQuantity
        }}>
            {props.children}
        </CartContext.Provider>
    )
}