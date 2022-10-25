import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {fetchData} from '../utils/fetchData'; 
import data from './data';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [lista, setLista] = useState ([])
  const {id} = useParams();

  useEffect(() => {
    if(id){
      fetchData(data.filter(item => item.categoryId === id))
      .then(productos=>setLista(productos))
    }else{
      fetchData(data)
    .then(productos=>setLista(productos))
    }
  },[id])

    return (
      <>
      <ItemList productos={lista}/>
      </>
    );
}
  
export default ItemListContainer;