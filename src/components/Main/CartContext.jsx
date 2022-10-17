import { createContext, useState} from "react";
//import data from "./data";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (producto, cantidad) => {
        setCartList([...cartList, producto])
    }

    return(
        <>
        <CartContext.Provider value={{cartList, addItem}}>
            { children }
        </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;