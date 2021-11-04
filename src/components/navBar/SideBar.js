import React, {useContext, useState} from 'react'
import CartWidget from "../cartWidget/CartWidget";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const SideBar = () => {

    const { totalItems } = useContext(CartContext);

    const [dropdown, setDropdown] = useState(false);


    const setButton = () => setDropdown(!dropdown);

    return (
        <div className="w3-top">
            <div className="w3-bar w3-border w3-theme-d1 w3-card w3-border-black">
                <Link to="/" className="w3-bar-item w3-text-white w3-hover-theme">Productos</Link>
                <div className="w3-bar-item w3-dropdown-click">
                    <button onClick={() => setButton()} className="w3-text-white w3-hover-theme">Click Me!</button>
                    {dropdown && 
                    <div className="w3-bar-block w3-border w3-dropdown-content">
                        <div className="w3-bar-item"><label><input type="checkbox"  value="showTradicional"/> Multifloral Tradicional</label> </div>
                        <div className="w3-bar-item"><label><input type="checkbox" value="showEspecial"/> Multifloral Especial</label> </div>
                        <div className="w3-bar-item"><label><input type="checkbox" value="otros"/> Otros</label> </div>
                    </div>
                    }
                </div>
                <Link to="/contact" className="w3-bar-item w3-text-white w3-hover-theme">Contacto</Link>
                <Link to="/about" className="w3-bar-item w3-text-white w3-hover-theme">Acerca de Miel Bavio</Link>
                {totalItems > 0 &&
                    <Link to="/Cart" className="w3-bar-item w3-button">
                        <CartWidget/> <p style={{display: "inline"}}>{totalItems}</p>
                    </Link>
                }                                
            </div>
        </div>
    )
}

/* } */

export default SideBar
