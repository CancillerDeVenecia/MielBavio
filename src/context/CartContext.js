import React, { useState, createContext} from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    
    const [cartItems, setCartItems] = useState([]);

    


    const addItems = (item, cantidad) => {
        const newItem = item;
        const itemsItems = cartItems;


        const checkItems = (lista) => {
            return lista.id === item.id;
        }


        if ( cartItems.some(checkItems) ) {
            let cantidadExistente = itemsItems[itemsItems.findIndex(checkItems)].quantity;
            let nuevaCantidad = cantidad + cantidadExistente;
            itemsItems[itemsItems.findIndex(checkItems)].quantity = nuevaCantidad;
            setCartItems(itemsItems);
            console.log(cartItems);
        } else {
        newItem.quantity = cantidad;
        itemsItems.push(newItem) 
        setCartItems(itemsItems);
        console.log(cartItems);
        }                       
    
}

    const clearList = () => {
        setCartItems([]);
    }

    const removeItem = (item) => {
        let itemsItems = cartItems;

        const checkItems = (lista) => {
            return lista.id === item.id;
        }

        let indexToDelete = itemsItems.findIndex(checkItems);

        itemsItems.slice(indexToDelete, indexToDelete);

        setCartItems(itemsItems);
    }

    const isInCart = (item) => {
        const checkItems = (lista) => {
            return lista.id === item.id;
        }
        
        return cartItems.some(checkItems);
        
    }

    return (
        <CartContext.Provider value={[addItems, cartItems, clearList, removeItem, isInCart]}> 
        {children}
        </CartContext.Provider>
    )



}

