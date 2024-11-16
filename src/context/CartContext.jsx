import { createContext, useState } from "react";

// provee contexto y consume la info
const CartContext = createContext()

// envuelve la app y provee de las funciones del context

const CartProvider =  ({children})=>{
    const [cart, setCart]= useState([])

    const addProductInCart = (newProduct) => {

        const condicion = isInCart(newProduct.id)
        if(condicion){
            const tempCart = [...cart]
            const findIndex = tempCart.findIndex ((productCart) => productCart.id === newProduct.id)
            tempCart[findIndex].quantity = tempCart[findIndex].quantity + newProduct.quantity

            setCart(tempCart)

        }else{
            setCart ( [...cart, newProduct] )
        }

       
    }

    const isInCart = (idProduct) => {
        return cart.some((productCart) => productCart.id === idProduct )
    }

    // cantidad total de productos

    const totalQuantity = () => {
        const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0)
        return quantity
    }

    // precio total de la compra

    const totalPrice = () => {
        const price = cart.reduce((total, productCart) => total + (productCart.quantity * productCart.price), 0)
        return price
    }

    const deleteProductById = (idProduct) => {
        const filterProducts = cart.filter((productCart) => productCart.id !== idProduct)
        setCart (filterProducts)
    }

    const deleteCart = () => {
        setCart ([])
    }


    return(
        <CartContext.Provider value={{ cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, deleteCart }}>

            {children}

        </CartContext.Provider>
    )
}

export {CartProvider, CartContext}