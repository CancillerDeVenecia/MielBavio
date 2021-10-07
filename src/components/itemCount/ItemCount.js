import { useState } from 'react';
import "./itemCount.css";
import {ReactComponent as Plus} from "../../assets/svg/plus-circle-dotted.svg";
import {ReactComponent as Minus} from "../../assets/svg/dash-circle-dotted.svg";

const ItemCount = ({stock, initial}) => {

    //Contador y sus metodos
    const[itemCantidad, setItemCantidad] = useState(initial);
    
/*    if(stock === 0) {
        onAdd = () => alert("Perdón, no tenemos stock!");
    } */

    const addItem = () => {
        if(itemCantidad < stock) {
            setItemCantidad(itemCantidad + 1);
        }
    }

    const removeItem = () => {
        if(itemCantidad > 0) {
            setItemCantidad(itemCantidad - 1);
        }
    }

    //Render

    return (
        <div className="itemCount">
            <button className="minus" onClick={removeItem}>
                <Minus width="30" height="30" color="#fbbd08"/>
            </button>

            <p className="itemCantidad">{itemCantidad}</p>
    
            <button className="plus" onClick={addItem}>
                <Plus width="30" height="30" color="#fbbd08"/>
            </button>

            <button className="itemAdd"><p>AGREGAR</p></button>
            
        </div>  
    )
}

export default ItemCount;
