import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {

    const { cartItems, clearList, removeItem } = useContext(CartContext);


    return (
        <div>
            <h1>Items Totales: {cartItems.length}</h1>
            
            {cartItems.map((producto) => {
                return  (
                    <div key={producto.id}>
                        <p>{`${producto.title} - Cantidad ${producto.quantity}`}</p>
                        <button onClick={() => removeItem(producto.id)}>Sacar Item</button>
                    </div>
                )
                
            })} 
            
            <button onClick={() => clearList()}>Borrar Todo</button>         
        </div>
    )
}

export default Cart
