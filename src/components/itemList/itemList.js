import React, { useState, useEffect } from 'react'
import Item from "../item/Item.js";
import "./itemList.css";
import { Dimmer, Loader } from 'semantic-ui-react';


const ItemList = () => {

    const [productos, setProductos] = useState([]);
    const [onLoad, setOnLoad] = useState(false);
    
    useEffect(() => {
        setOnLoad(true);
        fetch('https://my-json-server.typicode.com/CancillerDeVenecia/mielJson/productos').then((response) => response.json()).then((data) => setProductos(data)).finally(() => setOnLoad(false));
    }, [])

    return (
        <div id="itemList">
            {productos.map((producto) => {
                return(
                    <div key={producto.id} className="w3-card-2 w3-margin item w3-text-black w3-theme-d1" >                        
                        <Item props={producto}></Item>
                    </div>    
                )
            })}
            <Dimmer inverted active={onLoad}><Loader/></Dimmer>
        </div>
    )
}

export default ItemList;
