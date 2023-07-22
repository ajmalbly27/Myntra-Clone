import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [mobileNumber, setMobileNumber] = useState('');

    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
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

    const removeFromCart = (item) => {
        console.log("AJmal Cart");
        let newCartValue = [...cartValue];
        const index = newCartValue.indexOf(item);
        if (index > -1) {
            newCartValue.splice(index, 1);
        }
        setCartValue(newCartValue);
    }

    const allProductFilter = () => {
        setFilteredProducts(allProducts);
    }    

    const mensJeansFilter = () => {
        const filteredItems= allProducts.filter((item) => {
            return item.category === "Jeans" && item.gender === "Men";
        })
        setFilteredProducts(filteredItems)
    }

    const menCasualShoes = () => {
        const filteredItems= allProducts.filter((item) => {
            return item.category === "Casual Shoes" && item.gender === "Men";
        })
        setFilteredProducts(filteredItems)
    }

    const menWatches = () => {
        const filteredItems= allProducts.filter((item) => {
            return item.category === "Watches" && item.gender === "Men";
        })
        setFilteredProducts(filteredItems)
    }

    const womenDresses = () => {
        const filteredItems= allProducts.filter((item) => {
            return (item.category === "Dresses" || item.category === "Kurtas") && item.gender === "Women";
        })
        setFilteredProducts(filteredItems)
    }
    const womenSaree = () => {
        const filteredItems= allProducts.filter((item) => {
            return item.category === "Sarees" && item.gender === "Women";
        })
        setFilteredProducts(filteredItems)
    }

    const womenJeans= () => {
        const filteredItems= allProducts.filter((item) => {
            return item.category === "Jeans" && item.gender === "Women";
        })
        setFilteredProducts(filteredItems)
    }

    const womenCasualShoes = () => {
        const filteredItems= allProducts.filter((item) => {
            return item.category === "Casual Shoes" && item.gender === "Women";
        })
        setFilteredProducts(filteredItems)
    }

    const womenWatches = () => {
        const filteredItems= allProducts.filter((item) => {
            return item.category === "Watches" && item.gender === "Women";
        })
        setFilteredProducts(filteredItems)
    }

    const headphones = () => {
        const filteredItems= allProducts.filter((item) => {
            return item.category === "Headphones";
        })
        setFilteredProducts(filteredItems)
    }

    const fitnessBands = () => {
        const filteredItems= allProducts.filter((item) => {
            return item.category === "Fitness Bands";
        })
        setFilteredProducts(filteredItems)
    }

    const slidersFilter = () => {
        const filteredItems= allProducts.filter((item) => {
            return item.category === "Flip Flops";
        })
        setFilteredProducts(filteredItems)
    }

    const menFilter = () => {
        const filteredItems= allProducts.filter((item) => {
            return item.gender === "Men";
        })
        setFilteredProducts(filteredItems)
    }

    const womenFilter = () => {
        const filteredItems= allProducts.filter((item) => {
            return item.gender === "Women";
        })
        setFilteredProducts(filteredItems)
    }

    const beautyFilter = () => {
        const filteredItems= allProducts.filter((item) => {
            return item.category === "Kajal and Eyeliner" || item.category === "Mascara";
        })
        setFilteredProducts(filteredItems)
    }

    const watchFilter = () => {
        const filteredItems= allProducts.filter((item) => {
            return item.category === "Watches";
        })
        setFilteredProducts(filteredItems)
    }

    const onSearch = (e) => {
        let value  = e.target.value;
        // console.log(value);
        const filteredItems= allProducts.filter((item) => {
            return item.brand.toLowerCase().includes(value.toLowerCase()) || item.category.toLowerCase().includes(value.toLowerCase());
        })
        setFilteredProducts(filteredItems)
    }

    return (
        <CartContext.Provider value={{
            mobileNumber,
            setMobileNumber,
            allProducts,
            setAllProducts,
            filteredProducts,
            setFilteredProducts,
            cartValue,
            addToCart,
            increaseQuantity,
            decreaseQuantity,
            removeFromCart,
            allProductFilter,
            mensJeansFilter,
            menCasualShoes,
            menWatches,
            womenDresses,
            womenSaree,
            womenJeans,
            womenCasualShoes,
            womenWatches,
            headphones,
            fitnessBands,
            slidersFilter,
            menFilter,
            womenFilter,
            beautyFilter,
            watchFilter,
            onSearch
        }}>
            {props.children}
        </CartContext.Provider>
    )
}