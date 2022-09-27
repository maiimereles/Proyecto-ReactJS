import '../App.css';
import ItemCounts from './ItemCounts';

const Item = ({imagen, titulo, precio}) => {

    return(
        <>
        <div className="card cardMai">
            <img src={imagen} className="imgCard" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{precio}</p>
            <ItemCounts stock={10} initial={0}/>
        </div>
        </div>
        </>
    )
}

export default Item;