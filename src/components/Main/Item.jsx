import "./App.css";
import {Link} from 'react-router-dom'

const Item = ({id, image, title, trademark, coast}) => {
  return (
    <>
        <div className="card cardMai borderViolet">
            <img src={image} className="imgCard" alt={title}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{trademark}</p>
            <p className="card-text">{coast}</p>
            <Link to={'/id/' + id}><button type="button" className="btn btn-outline-primary">MÁS INFO</button></Link>
          </div>
        </div>
    </>
  );
};

export default Item;
