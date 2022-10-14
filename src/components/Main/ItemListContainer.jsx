import { useEffect, useState } from 'react';
import {fetchData} from '../utils/fetchData'; 
import data from './data';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [lista, setLista] = useState ([])
  useEffect(() => {
    fetchData(data)
    .then(productos=>setLista(productos))
  },[])

  console.log(lista);

    return (
      <>
      <ItemList productos={lista}/>
      </>
    );
}
  
export default ItemListContainer;