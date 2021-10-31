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
        }                       
    
}

    const clearList = () => {
        setCartItems([]);
    }

    const removeItem = (id) => {
        
        let itemsItems = cartItems;

        const checkItems = (lista) => {
            return lista.id === id;
        }

        let indexToDelete = itemsItems.findIndex(checkItems);


        itemsItems.splice(indexToDelete, 1);

        if (itemsItems.length === 0) {
            clearList();
        } else {
        setCartItems(itemsItems);
    }

}

    const isInCart = (item) => {  

        const checkItems = (lista) => {
            return lista.id === item.id;
        }

        let indexToShow = cartItems.findIndex(checkItems);

        if (cartItems.some(checkItems)) {
            alert(`Ya hay ${cartItems[indexToShow].quantity} productos de este tipo en el carrito`)    
        } else {
            alert("Aun no hay productos de este tipo en el carrito!")
        }
        
    }

    return (
        <CartContext.Provider value={{addItems, cartItems, clearList, removeItem, isInCart}}> 
        {children}
        </CartContext.Provider>
    )



}
