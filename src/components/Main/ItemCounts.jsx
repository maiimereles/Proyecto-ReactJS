import {useState} from "react";

function ItemCounts({stock, initial, onAdd}) {
    const [rate, setRate] = useState(0);
    const handleRate = () =>{
        if (rate<stock){
            setRate (rate+1);
        }
    }
    const menos = () => {
        if (rate>initial){
            setRate (rate-1)
        }
    }

  return (
    <>
    <div className="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" className="btn btn-outline-primary" onClick={handleRate}>+</button>
        <button type="button" className="btn btn-outline-primary">{rate}</button>
        <button type="button" className="btn btn-outline-primary" onClick={menos}>-</button>
        <button type="button" className="btn btn-outline-primary" onClick={()=>{onAdd(rate)}}>ADD TO CART</button> 
    </div>
    </>
  )
}

export default ItemCounts