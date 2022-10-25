import { FiShoppingCart } from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import { CartContext } from '../../Main/CartContext';

function CartWidget (){
    const ctx = useContext(CartContext);

    return(
        <>
        <Link to='/Cart' className='link'><FiShoppingCart/></Link>
        <span>{ctx.totalProducts() || ''}</span>
        </>
    )
}

export default CartWidget;