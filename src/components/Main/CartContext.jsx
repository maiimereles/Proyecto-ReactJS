import { createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, newQty) => {
        const {qty = 0} = cartList.find(producto => producto.id === item.id) || {};
        const newCart = cartList.filter(producto => producto.id !== item.id);
        setCartList([...newCart, {...item, qty:qty + newQty}])
    } 

    const totalPriceForProduct = () => {
        return cartList.reduce((previous, current) => previous + current.qty * current.coast, 0);
    }

    const totalProducts = () => cartList.reduce((acumulador, productoActual) => acumulador + productoActual.qty, 0);

    const clear = () =>{
        setCartList([]);
    }

    const removeItem = (id) =>{
        setCartList(cartList.filter(item => item.id !==id))
    }

    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, totalPriceForProduct, totalProducts}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;