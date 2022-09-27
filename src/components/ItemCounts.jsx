import {useState} from "react";

function ItemCounts({stock, initial}) {
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
    <button onClick={handleRate}>+</button> {rate}
    <button onClick={menos}>-</button>
    </>
  )
}

export default ItemCounts