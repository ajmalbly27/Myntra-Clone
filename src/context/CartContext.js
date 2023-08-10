import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
    
    const [username, setUsername] = useState(JSON.parse(localStorage.getItem('username')) || '');
    const [mobileNumber, setMobileNumber] = useState(JSON.parse(localStorage.getItem('mobileNumber')) || '');
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [cartValue, setCartValue] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [wishListValue, setWishListValue] = useState([]);
    const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders')) || []);


    // const addToCart = (item, size) => {
    //     // Set a default quantity of 1
    //     const itemWithQuantity = { ...item, quantity: 1, size: size };
    //     for(let element of cartValue) {
    //         if(element.productId === item.productId) {
    //             // console.log("Present");
    //             return;
    //         }
    //     }
    //     setCartValue([...cartValue, itemWithQuantity]);
    // }
    // Add item to cart
    const addToCart = (item) => {
        const itemWithQuantity = { ...item, quantity: 1 };
        const cartItemsFromLocalStorage = getCart();
        for(let element of cartItemsFromLocalStorage) {
            if(element.productId === item.productId) {
                // console.log("Present");
                return;
            }
        }
        // const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsFromLocalStorage.push(itemWithQuantity);
        localStorage.setItem('cart', JSON.stringify(cartItemsFromLocalStorage));
        setCartValue([...cartValue, itemWithQuantity]);
    };
    const getCart = () => {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }
  
    // const removeFromCart = (item) => {
    //     let newCartValue = [...cartValue];
    //     const index = newCartValue.indexOf(item);
    //     if (index > -1) {
    //         newCartValue.splice(index, 1);
    //     }
    //     setCartValue(newCartValue);
    // }
    // Remove item from cart
    const removeFromCart = (itemToRemove) => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        const updatedCart = cart.filter(item => item.productId !== itemToRemove.productId);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartValue(updatedCart);
    };

    useEffect(() => {
        // setCartValue(localStorage.getItem('cart') || []);
        window.addEventListener("storage", onStorageUpdate);
        return () => {
          window.removeEventListener("storage", onStorageUpdate);
        };
    }, []);
    const onStorageUpdate = (e) => {
        const { key, newValue } = e;
        if (key === "cart") {
            setCartValue(newValue);
        }
        if (key === "username") {
            setUsername(newValue);
        }
        if (key === "mobileNumber") {
            setMobileNumber(newValue);
        }
        if (key === "wishlist") {
            setWishListValue(newValue);
        }
        if (key === "orders") {
            setOrders(newValue);
        }
    };

    // const addToWishList = (item, size) => {
    //     for(let element of wishListValue) {
    //         if(element.productId === item.productId) {
    //             // console.log("Present");
    //             return;
    //         }
    //     }
    //     setWishListValue([...wishListValue, item])
    // }
    const getWishlist = () => {
        return JSON.parse(localStorage.getItem('wishlist')) || [];
    }
    const addToWishList = (item) => {
        const wishlistFromLocalstorage = getWishlist();
        for(let element of wishlistFromLocalstorage) {
            if(element.productId === item.productId) {
                // console.log("Present");
                return;
            }
        }
        wishlistFromLocalstorage.push(item);
        localStorage.setItem('wishlist', JSON.stringify(wishlistFromLocalstorage));
        setWishListValue([...wishListValue, item])
    }




    // const removeFromWishList = (item) => {
    //     let newWishList = [...wishListValue];
    //     const index = newWishList.indexOf(item);
    //     if (index > -1) {
    //         newWishList.splice(index, 1);
    //     }
    //     setWishListValue(newWishList);
    // }
    // const removeFromCart = (itemToRemove) => {
    //     const cart = JSON.parse(localStorage.getItem('cart'));
    //     const updatedCart = cart.filter(item => item.productId !== itemToRemove.productId);
    //     localStorage.setItem('cart', JSON.stringify(updatedCart));
    //     setCartValue(updatedCart);
    // };
    const removeFromWishList = (itemToRemove) => {
        // let newWishList = [...wishListValue];
        let newWishlist = JSON.parse(localStorage.getItem('wishlist'));
        const updatedWishlist = newWishlist.filter(item => item.productId !==itemToRemove.productId);
        // const index = newWishList.indexOf(item);
        // const index = newWishlist.indexOf(itemToRemove);
        // if (index > -1) {
        //     newWishlist.splice(index, 1);
        // }
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        setWishListValue(updatedWishlist);
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
        setFilteredProducts(filteredItems);
    }

    return (
        <CartContext.Provider value={{
            username,
            setUsername,
            mobileNumber,
            setMobileNumber,
            orders,
            setOrders,
            allProducts,
            setAllProducts,
            filteredProducts,
            setFilteredProducts,
            cartValue,
            setCartValue,
            wishListValue,
            setWishListValue,
            addToCart,
            addToWishList,
            removeFromWishList,
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
            onSearch,

            getCart,
            getWishlist,
        }}>
            {props.children}
        </CartContext.Provider>
    )
}