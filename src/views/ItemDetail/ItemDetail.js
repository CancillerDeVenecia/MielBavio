import React, {useState, useEffect} from 'react';
import ItemCount from '../../components/itemCount/ItemCount';

const ItemDetail = ({ match }) => {
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/CancillerDeVenecia/mielJson/productos/${match.params.id}`).then((response) => response.json()).then((data) => setItem(data));
    }, []);

    const onAdd = (e) => {
        console.log(e);
    }


    return (
        <div className="w3-card">
            <h1>{item.title}</h1>
            <img src={item.pictureUrl} alt={item.title} style={{width: "500px", height: "500px"}} />
            <p>{item.description_long}</p>
            <ItemCount initial={0} stock={10} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail
