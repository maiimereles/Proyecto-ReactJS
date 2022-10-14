import "./App.css";
import ItemCounts from "./ItemCounts";

const Item = ({image, title, trademark, coast}) => {
  return (
    <>

        <div className="card cardMai borderViolet">
            <img src={image} className="imgCard" alt={title}/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{trademark}</p>
            <p className="card-text">{coast}</p>
            <ItemCounts stock={10} initial={0}/>
        </div>
        </div>
    </>
  );
};

export default Item;
