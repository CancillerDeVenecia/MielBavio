import React, {useState, useEffect} from 'react';

const ItemDetail = ({ match }) => {
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/CancillerDeVenecia/mielJson/productos/${match.params.id}`).then((response) => response.json()).then((data) => setItem(data));
    })


    return (
        <div className="w3-card">
            <h1>{item.title}</h1>
            <img src={item.pictureUrl} alt={item.title} style={{width: "500px", height: "500px"}} />
            <p>{item.description_long}</p>
        </div>
    )
}

export default ItemDetail
