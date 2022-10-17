import {useContext} from 'react';
import { CartContext } from './CartContext'

function Cart() {
    const ctx = useContext(CartContext)

  return (
    <>
    <h1>YOUR CART</h1>
    <button onClick={ctx.clear}>Delete all</button>
    {
        ctx.cartList.map(item => <li>{item.title} {item.coast} <button onClick ={() => ctx.removeItem(item.id)}>Delete this product</button> </li>)
    }
    </>
  )
}

export default Cart