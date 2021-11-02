import React, { useState, createContext} from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    
    const [cartItems, setCartItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0)

    const sumTotal = () => {
        setTotalItems(cartItems.reduce((sumador, item) => {
            let total = sumador + item.quantity;
            return total;
        }, 0))
    }


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
            setCartItems(itemsItems.slice());
            sumTotal();
        } else {
        newItem.quantity = cantidad;
        itemsItems.push(newItem) 
        setCartItems(itemsItems.slice());
        sumTotal();
        }                       
    
}

    const sumQuantity = (item) => {
        let itemsItems = cartItems;
        const checkItems = (lista) => {
            return lista.id === item.id;
        }
        let cantidadExistente = itemsItems[itemsItems.findIndex(checkItems)].quantity;
            itemsItems[itemsItems.findIndex(checkItems)].quantity = cantidadExistente + 1;
            setCartItems(itemsItems.slice());
            setTotalItems(totalItems + 1);
    }

    const minusQuantity = (item) => {
        let itemsItems = cartItems;
        const checkItems = (lista) => {
            return lista.id === item.id;
        }
        let cantidadExistente = itemsItems[itemsItems.findIndex(checkItems)].quantity;
            itemsItems[itemsItems.findIndex(checkItems)].quantity = cantidadExistente - 1;
            setCartItems(itemsItems.slice());
            setTotalItems(totalItems - 1);
    }

    const clearList = () => {
        setCartItems([]);
        setTotalItems(0);
    }

    const removeItem = (producto) => {        
        setTotalItems(totalItems - producto.quantity)
        setCartItems(cartItems.filter((item) => item.id !== producto.id));        
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
        <CartContext.Provider value={{addItems, cartItems, clearList, removeItem, isInCart, totalItems, sumQuantity, minusQuantity}}> 
        {children}
        </CartContext.Provider>
    )



}

