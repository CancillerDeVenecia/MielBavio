import React, { useContext, useState} from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {

    const [ cartItems, clearList] = useContext(CartContext);


    return (
        <div>
            <h1>Items Totales: {cartItems.length}</h1>
            <button onClick={() => clearList()}>Borrar Todo</button>         
        </div>
    )
}

export default Cart
