import React, { useState, useEffect } from 'react'
import Item from "../item/Item.js";
import "./itemList.css";


const ItemList = () => {

    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/CancillerDeVenecia/mielJson/productos').then((response) => response.json()).then((data) => setProductos(data));
    })

    return (
        <div id="itemList">
            {productos.map((producto) => {
                console.log(producto);
                return(
                    <div key={producto.id} className="item">                        
                        <Item props={producto}></Item>
                    </div>    
                )
            })}
        </div>
    )
}

export default ItemList;
