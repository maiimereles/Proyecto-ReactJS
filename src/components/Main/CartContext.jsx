import { createContext, useState} from "react";
//import data from "./data";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (producto, cantidad) => {
        setCartList([...cartList, producto])
    }

    const clear = () =>{
        setCartList([]);
    }

    const removeItem = (id) =>{
        setCartList(cartList.filter(item => item.id !==id))
    }

    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;