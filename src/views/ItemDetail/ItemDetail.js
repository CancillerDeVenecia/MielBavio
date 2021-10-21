import React, {useState, useEffect} from 'react';
import ItemCount from '../../components/itemCount/ItemCount';

const ItemDetail = ({ match }) => {
    const [item, setItem] = useState({});
    const [cantidadSumada, setCantidadSumada] = useState ("0");

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/CancillerDeVenecia/mielJson/productos/${match.params.id}`).then((response) => response.json()).then((data) => setItem(data));
    }, []);

    useEffect(() => {
        console.log(cantidadSumada);
    }, [cantidadSumada]);


    return (
        <div className="w3-card">
            <h1>{item.title}</h1>
            <img src={item.pictureUrl} alt={item.title} style={{width: "500px", height: "500px"}} />
            <p>{item.description_long}</p>
            <ItemCount stock="10" initial="0" onAdd={setCantidadSumada} />
        </div>
    )
}

export default ItemDetail
