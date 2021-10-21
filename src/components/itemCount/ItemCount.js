import { useState, useEffect } from 'react';
import "./itemCount.css";
import {ReactComponent as Plus} from "../../assets/svg/plus-circle-dotted.svg";
import {ReactComponent as Minus} from "../../assets/svg/dash-circle-dotted.svg";

const ItemCount = ({stock, initial, onAdd}) => {

    //Contador y sus metodos
    const[itemCantidad, setItemCantidad] = useState(initial);
    
    //useEffect(() => {onAdd(itemCantidad)}, [itemCantidad]);
    

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
                <Minus className="w3-text-amber"/>
            </button>

            <p className="itemCantidad w3-text-amber">{itemCantidad}</p>
    
            <button className="plus" onClick={addItem}>
                <Plus className="w3-text-amber"/>
            </button>

            <button className="itemAdd"  onClick={onAdd(itemCantidad)}>AGREGAR</button>
            
        </div>  
    )
}

export default ItemCount;
