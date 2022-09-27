import Item from './Item';

const ItemListContainer = () => {
    return (
      <>
        <Item
        imagen='https://www.centrallecheraasturiana.es/nutricionysalud/wp-content/uploads/2020/11/zanahorias.png'
        titulo='Cosa 1'
        precio='2000'
        btn='hola'
        />
        <Item
        imagen='https://www.elindependiente.com/wp-content/uploads/2017/06/brocoli-y-otras-verduras-que-crecen-al-impulso-de-lo-healthy-656x368.jpg'
        titulo='Cosa 2'
        precio='2000'
        btn='dos'
        />
        <Item
        imagen='https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2021/02/10/aguacate.jpeg'
        titulo='Cosa 3'
        precio='2000'
        />
      </>
    );
  }
  
  export default ItemListContainer;