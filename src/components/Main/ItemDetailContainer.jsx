import { useEffect, useState } from 'react'
import { fetchData } from '../utils/fetchData'
import ItemDetail from './ItemDetail'
import data from './data'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({})
    const {id} = useParams();

    useEffect(() => {
        fetchData(data.find(item => item.id === id))
        .then (result => setDato(result))
        .catch (err => console.log (err))
    }, [id])
  return (
    <>
    <ItemDetail item={dato}/>
    </>
  )
}

export default ItemDetailContainer