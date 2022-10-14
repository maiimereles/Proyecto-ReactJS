const ItemDetail = ({item}) => {

  return (
    <>
    <div>
    <img src={item.image} alt={item.title} />
    </div>
    <div>
      <h1>{item.title}</h1>
      <p>{item.trademark}</p>
      <p>{item.description}</p>
      <p>{item.coast}</p>
    </div>
    </>
  )
}

export default ItemDetail