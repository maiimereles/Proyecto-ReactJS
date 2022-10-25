import {useContext} from 'react';
import { CartContext } from './CartContext';
import "./App.css";
import {Link} from 'react-router-dom';

const Cart = () => {
    const ctx = useContext(CartContext);

    if (ctx.cartList.length === 0) {
      return (
        <>
          <p>No hay elementos en el carrito</p>
          <Link to='/'><button type="button" className="btn btn-outline-success">Ir a comprar</button></Link>
        </>
      )
    }else{

  return (
    <>
    <h1 className='text-center'>YOUR CART</h1>
    <button type="button" className="btn btn-outline-danger" onClick={ctx.clear}>Delete all</button>
    {
        ctx.cartList.map(item => <div key={item.id} className="row g-0 with500px borderViolet">
        <div className="col-md-4">
          <img src={item.image} className="img-fluid rounded-start" alt={item.title}/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">Cantidad: {item.qty}</p>
          <p className="card-text"><small className="text-muted">Costo por unidad: {item.coast}</small></p>
          <p className="card-text">Costo total: {ctx.totalPriceForProduct()}</p>
          <p className="card-text">Costo total: {ctx.totalPrice()}</p>
          <button type="button" className="btn btn-outline-danger" onClick ={() => ctx.removeItem(item.id)}>Delete this product</button>
        </div>
        </div>
        </div>)
    } 
    </>
  )}
}

export default Cart