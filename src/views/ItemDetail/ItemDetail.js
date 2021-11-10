import React, {useState, useEffect, useContext} from 'react';
import ItemCount from '../../components/itemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import { Dimmer, Loader} from 'semantic-ui-react';

const ItemDetail = ({ match }) => {
    const [item, setItem] = useState({});

    const seleccionado = match.params.id;

    const { addItems, isInCart, onLoad, setOnLoad, importData, productos } = useContext(CartContext);

    useEffect(() => {
        importData();
        productos.forEach(producto => {
            if (producto.id === seleccionado) {
                setItem(producto);
                setOnLoad(false);
            }
        });
    }, [importData, seleccionado, productos, setOnLoad])



        //Contador y sus metodos
        const[itemCantidad, setItemCantidad] = useState(0);
        let stock = 10;
        
    


        const sumItem = () => {
            if(itemCantidad < stock) {
                setItemCantidad(itemCantidad + 1);
            }
        }
    
        const removeItem = () => {
            if(itemCantidad > 0) {
                setItemCantidad(itemCantidad - 1);
            }
        }


    return (
        <div className="w3-black">
        <div className="w3-content w3-card" style={{fontFamily: "Quicksand"}}>
        <div className="w3-mobile">
            <h1 className="w3-text-theme w3-padding">{item.title}</h1>            
            <img className="w3-card w3-image w3-mobile" src={item.pictureUrl} alt={item.title} style={{maxWidth: "500px", maxHeight: "500px"}} />
            <p className="w3-padding">{item.description_long}</p>
            <button className="w3-button w3-card w3-margin-bottom" onClick={() => isInCart(item)}>Hay en el carrito?</button>
            <ItemCount itemCantidad={itemCantidad} addItem={() => addItems(item, itemCantidad)} sumItem={sumItem} removeItem={removeItem}/>
            <Dimmer inverted active={onLoad}><Loader/></Dimmer>
        </div>
        </div>
        </div>
    )
}
export default ItemDetail
