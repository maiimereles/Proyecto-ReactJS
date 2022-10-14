import { useEffect, useState } from 'react'
import { fetchData } from '../utils/fetchData'
import ItemDetail from './ItemDetail'
import data from './data'

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({})
    useEffect(() => {
        fetchData(data[1])
        .then (result => setDato(result))
        .catch (err => console.log (err))
    }, [])
  return (
    <>
    <ItemDetail item={dato}/>
    </>
  )
}

export default ItemDetailContainer