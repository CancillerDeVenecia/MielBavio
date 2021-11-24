import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {

    const { cartItems, clearList, removeItem, totalItems, sumQuantity, minusQuantity } = useContext(CartContext);


    return (
        <div className="w3-content">
            <h1 className="w3-margin-top total">Total de items: {totalItems}</h1>
            <div className="productosContainer">
            {cartItems.map((producto) => {
                return  (  
                    <div key={producto.id} className="w3-card w3-margin">
                            <img alt="" src={producto.pictureUrl} className="thumbnail"/>
                            <p>{`${producto.title} - Cantidad ${producto.quantity} (${producto.quantity * producto.price}$)`}</p>
                            <button className="w3-theme-l1 w3-card w3-rounded w3-button botoncito" onClick={() => minusQuantity(producto)}>-</button>
                            <button className="w3-theme-l1 w3-rounded w3-button botoncito" onClick={() => sumQuantity(producto)}>+</button>
                            <button className="w3-theme-l1 w3-rounded w3-button botoncito" onClick={() => removeItem(producto)}>Sacar Item</button>
                    </div>
                )
                
            })} 
            </div>
            <button className="w3-button w3-theme w3-rounded w3-card w3-large w3-margin" onClick={() => clearList()}>Borrar Todo</button>     

            {totalItems === 0 ? <Link to="/" className="w3-button w3-theme w3-rounded w3-card w3-large w3-margin">Volver al Menu</Link> : <Link className="w3-margin w3-button w3-theme w3-rounded w3-card w3-large" to="/buy">Terminar compra</Link>}    
        </div>
    )
}

export default Cart
