import { FiShoppingCart } from 'react-icons/fi';
import {Link} from 'react-router-dom'

function CartWidget (){
    return(
        <>
        <Link to='/Cart'><FiShoppingCart /></Link>
        </>
    )
}

export default CartWidget;