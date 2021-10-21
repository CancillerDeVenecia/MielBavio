import React, {useState, useEffect} from 'react';
import ItemCount from '../../components/itemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ match }) => {
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/CancillerDeVenecia/mielJson/productos/${match.params.id}`).then((response) => response.json()).then((data) => setItem(data));
    });



        //Contador y sus metodos
        const[itemCantidad, setItemCantidad] = useState(0);
        const[faltaAgregar, setFaltaAgregar] = useState(true);
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

        const addItem = () => {
            console.log(itemCantidad);
            setFaltaAgregar(false);
        }

        //


    return (
        <div className="w3-card">
            <h1>{item.title}</h1>
            <img src={item.pictureUrl} alt={item.title} style={{width: "500px", height: "500px"}} />
            <p>{item.description_long}</p>
            {faltaAgregar ? <ItemCount itemCantidad={itemCantidad} addItem={addItem} sumItem={sumItem} removeItem={removeItem}/> : <Link to="/Cart" className="w3-black w3-text-amber w3-button w3-round">Terminar Compra</Link>}
        </div>
    )
}

export default ItemDetail
