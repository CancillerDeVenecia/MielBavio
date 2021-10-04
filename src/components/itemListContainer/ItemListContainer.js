import React from 'react'
import ItemCount from '../itemCount/ItemCount';

const ItemListContainer = (props) => {
    return (
        <div>            
            <p>{props.greeting}</p>
            <ItemCount stock={20} initial={0} onAdd = {(numero) => console.log("se agregaron " + numero + " al carrito")}/>
        </div>
    )
}

export default ItemListContainer;
            //<ItemCount stock="50" initial="1"/>