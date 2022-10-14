import Item from './Item'

const ItemList = ({productos}) => {
    return (
      <>
      {
        productos.map(item =>(
        <Item
        key={item.id}
        id= {item.id}
        image={item.image}
        title={item.title}
        trademark={item.trademark}
        coast={item.coast}
        />
        ))
      }
      </>
    );
  }
  
  export default ItemList;