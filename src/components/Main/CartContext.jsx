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

/*     const totalPriceForProduct = (id) => {
        let pricePerAmount = cartList.find((item) => item.id === id);
        return (pricePerAmount.qty * pricePerAmount.coast)
    } */

    const totalPrice = () => {
        let pricePerAmount = cartList.map(item => (item.coast * item.qty));
        return pricePerAmount.reduce((acumulador, precioXProd) => acumulador += precioXProd, 0);
    }

 /*    const totalPrice = () =>{
        let totalPerItem = cartList.map(item=> )
    } */

    const totalProducts = () => cartList.reduce((acumulador, productoActual) => acumulador + productoActual.qty, 0);

   /*  const productTotalCoast = () => {
        let qtys = cartList.map(item=>item.qry);
        let priceForItem = cartList.map(item=>item.coast);
        return precioPorItem.reduce ((()))
    } */

   /*  const calculoQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    } */

    const clear = () =>{
        setCartList([]);
    }

    const removeItem = (id) =>{
        setCartList(cartList.filter(item => item.id !==id))
    }

    //const isInCart = (id) => cartList.find(item=>item.id !==id) ? true:false;

    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, totalPriceForProduct, totalProducts, totalPrice}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;