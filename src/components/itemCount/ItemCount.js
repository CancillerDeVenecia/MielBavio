import "./itemCount.css";
import {ReactComponent as Plus} from "../../assets/svg/plus-circle-dotted.svg";
import {ReactComponent as Minus} from "../../assets/svg/dash-circle-dotted.svg";

const ItemCount = ({sumItem, removeItem, itemCantidad, addItem}) => {

    //Render

    return (
        <div className="itemCount">
            <button className="minus" onClick={removeItem}>
                <Minus className="w3-text-amber"/>
            </button>

            <p className="itemCantidad w3-text-amber">{itemCantidad}</p>
    
            <button className="plus" onClick={sumItem}>
                <Plus className="w3-text-amber"/>
            </button>

            <button className="itemAdd w3-button w3-card" onClick={addItem}>Agregar</button>
            
        </div>  
    )
}

export default ItemCount;
