import React, {useContext} from 'react'
import CartWidget from "../cartWidget/CartWidget";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

let w3_close = () => {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("botonBarra").style.display= "block";
}


const SideBar = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <div>
            <div className="w3-sidebar w3-bar-block w3-border-right" style={{display: "none"}} id="mySidebar">
                <button onClick={w3_close} className="w3-bar-item w3-large">Close &times;</button>
                <Link to="/" className="w3-bar-item w3-button">Productos</Link>
                <Link to="/contact" className="w3-bar-item w3-button">Contacto</Link>
                <Link to="/about" className="w3-bar-item w3-button">Acerca de Miel Bavio</Link>
                {cartItems.length > 0 &&
                    <Link to="/Cart" className="w3-bar-item w3-button">
                        <CartWidget/> <p style={{display: "inline"}}>{cartItems.length}</p>
                    </Link>
                }
                
            </div>
        </div>
    )
}


export default SideBar
