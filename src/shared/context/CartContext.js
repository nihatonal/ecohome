import React, { createContext, useState } from "react";
export const CartContext = createContext({
    items: [],
    activeNav: false,
    slideId: null,
    getProductQuantity: () => { },
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { },
    addAdditionsToCart: () => { },
    removeAdditionsToCart: () => { },
    modalHandler: () => { },
    resetNavbar: () => { },
    slideIDHandler: () => { },
});

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);
    const [nav, setNav] = useState(false);
    const [slideID, setSlideID] = useState(null)

    function resetNavbar(x) {
        setNav(x)
    }
    function slideIDHandler(x) {
        setSlideID(x)
    }
    function getProductQuantity(id) {
        // const quantity = cartProducts.find(product => product.id === id) ? quantity : null;

        // if (quantity === undefined) {
        //     return 0;
        // }

        // return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) { // product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1,
                        additions: []
                    }
                ]
            )
        } else { // product is in cart
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id                                // if condition
                            ? { ...product, quantity: product.quantity + 1 } // if statement is true
                            : product                                        // if statement is false
                )
            )
        }
    }
    function addAdditionsToCart(id, item) {
        const x = cartProducts.filter(product => product.id === id)
        if (x.length === 0) {
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        additions: [item]
                    }
                ]
            )
        } else {
            // console.log(x[0].additions)

            x[0].additions.push(item)
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product }
                            : product
                )
            )
        }




    }
    function removeAdditionsToCart(id, item_id) {

        setCartProducts(
            cartProducts.map(
                product =>
                    product.id === id
                        ? { ...product, additions: product.additions.filter(item => item.id !== item_id) }
                        : product
            )
        )
    }


    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id                                // if condition
                            ? { ...product, quantity: product.quantity - 1 } // if statement is true
                            : product                                        // if statement is false
                )
            )
        }
    }

    function deleteFromCart(id) {
        setCartProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.id !== id;
                })
        )
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            return totalCost += (cartItem.additions.reduce((n, { price }) => n + price * 1, 0));
        });
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        activeNav: nav,
        slideId: slideID,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        addAdditionsToCart,
        removeAdditionsToCart,
        resetNavbar,
        slideIDHandler
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;


// CODE DOWN HERE

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context