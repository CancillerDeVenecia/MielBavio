import React, { useState, useEffect } from 'react'
import Item from "../item/Item.js";


const ItemList = () => {

    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/CancillerDeVenecia/mielJson/productos').then((response) => response.json()).then((data) => setProductos(data));
    })

    return (
        <div>
            {productos.map((producto) => {
                console.log(producto);
                return(
                    <div>                        
                        <Item props={producto}></Item>
                    </div>    
                )
            })}
        </div>
    )
}

export default ItemList;
