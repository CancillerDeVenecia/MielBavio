import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {

    const { cartItems, clearList, removeItem, totalItems, sumQuantity, minusQuantity } = useContext(CartContext);


    return (
        <div className="w3-content">
            <h1>Total de items: {totalItems} </h1>
            
            {cartItems.map((producto) => {
                return  (  
                    <div key={producto.id} className="w3-card">
                            <img alt="" src={producto.pictureUrl} className="thumbnail"/>
                            <p>{`${producto.title} - Cantidad ${producto.quantity}`}</p>
                            <button onClick={() => minusQuantity(producto)}>-</button>
                            <button onClick={() => sumQuantity(producto)}>+</button>
                            <button onClick={() => removeItem(producto)}>Sacar Item</button>
                    </div>
                )
                
            })} 
            <button onClick={() => clearList()}>Borrar Todo</button>     

            {totalItems === 0 ? <Link to="/" className="w3-button w3-theme w3-rounded w3-card w3-large w3-margin">Volver al Menu</Link> : <button className="w3-margin w3-button w3-theme w3-rounded w3-card w3-large">Terminar compra</button>}    
        </div>
    )
}

export default Cart
