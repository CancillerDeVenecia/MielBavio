import React, { useState, useEffect } from 'react'
import Item from "../item/Item.js";
import "./itemList.css";
import { Dimmer, Loader } from 'semantic-ui-react';

//FireBase 
import { collection, getDocs } from '@firebase/firestore';
import { db } from '../../Firebase';


const ItemList = () => {

    const [productos, setProductos] = useState([]);
    const [onLoad, setOnLoad] = useState(false);



    
    useEffect(() => {
        const requestData = new Promise((result) => {
            const items = getDocs(collection(db, "productos"))
            result(items)
        })
        setOnLoad(true);
        const pdts = [];
        requestData.then((items) => items.forEach(item => {
            pdts.push({ ...item.data(), id: item.id})
            })).then(() => setProductos(pdts)).finally(() => setOnLoad(false));
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
