import React, {useState, useEffect, useContext} from 'react';
import ItemCount from '../../components/itemCount/ItemCount';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ match }) => {
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/CancillerDeVenecia/mielJson/productos/${match.params.id}`).then((response) => response.json()).then((data) => setItem(data));
    }, [])

    const [ addItems ] = useContext(CartContext);



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

        //


    return (
        <div className="w3-card">
            <h1>{item.title}</h1>
            <img src={item.pictureUrl} alt={item.title} style={{width: "500px", height: "500px"}} />
            <p>{item.description_long}</p>
            <ItemCount itemCantidad={itemCantidad} addItem={() => addItems(item, itemCantidad)} sumItem={sumItem} removeItem={removeItem}/>
        </div>
    )
}

export default ItemDetail
