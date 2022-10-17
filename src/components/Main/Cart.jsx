import {useContext} from 'react';
import { CartContext } from './CartContext'

function Cart() {
    const ctx = useContext(CartContext)

  return (
    <>
    <h1>YOUR CART</h1>
    {
        ctx.cartList.map(item => <li>{item.name}</li>)
    }
    </>
  )
}

export default Cart