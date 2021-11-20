import "./itemCount.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {ReactComponent as Plus} from "../../assets/svg/plus-circle-dotted.svg";
import {ReactComponent as Minus} from "../../assets/svg/dash-circle-dotted.svg";

const ItemCount = ({sumItem, removeItem, itemCantidad, addItem, price}) => {

    const [comprado, setComprado] = useState(false);

    const buy = () => {
        addItem();
        setComprado(true);
    }

    return (
        <div className="itemCount">
            <button className="minus w3-hover-theme w3-text-theme" onClick={removeItem}>
                <Minus/>
            </button>

            <p className="itemCantidad w3-text-amber">{itemCantidad} ({price * itemCantidad}$)</p>
    
            <button className="plus w3-hover-theme w3-text-theme" onClick={sumItem}>
                <Plus/>
            </button>

            <div className="itemAdd">
                <button className="w3-theme w3-button w3-card w3-margin-bottom" onClick={() => buy()}>Agregar</button>
                {comprado && <button className="w3-theme w3-button w3-card w3-margin-bottom w3-margin-left"><Link to="/cart" className="w3-text-black">Ir al carrito!</Link></button>}
            </div>
            
        </div>  
    )
}

export default ItemCount;
