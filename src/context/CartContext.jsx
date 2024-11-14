import { createContext } from "react";

// provee contexto y consume la info
const CartContext = createContext()

// envuelve la app y provee de las funciones del context

const CartProvider =  ({children})=>{

    return(
        <CartContext.Provider>

            {children}

        </CartContext.Provider>
    )
}

export {CartProvider, CartContext}