import { useState } from "react";
import ItemCounts from "./ItemCounts";
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import { CartContext } from './CartContext'

const ItemDetail = ({item}) => {
  const [itemCount, setItemCount] = useState(0);
  const ctx = useContext(CartContext)

  const onAdd = (cantidad) => {
    alert('You have selected ' + cantidad + ' items');
    setItemCount(cantidad);
    ctx.addItem(item, cantidad)
  }

  return (
    <>
    <div>
    <img src={item.image} alt={item.title} />
    </div>
    <div>
      <h1>{item.title}</h1>
      <p>{item.trademark}</p>
      <p>{item.description}</p>
      <p>{item.coast}</p>

    {
      itemCount === 0
      ? <ItemCounts stock={10} initial={0} onAdd={onAdd}/>
      : <Link to= '/Cart'><buttom type="button" className="btn btn-outline-primary">Carrito</buttom></Link>
    }
    </div>
    </>
  )
}

export default ItemDetail