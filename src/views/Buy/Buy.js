import { collection, addDoc } from "firebase/firestore";
import { db } from '../../Firebase';
import React, {useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';



const Buy = () => {

    const { cartItems } = useContext(CartContext);

    const [final, setFinal] = useState(0)
    const [idTransaccion, setIdTransaccion] = useState("")
    const [compraRealizada, setCompraRealizada] = useState(false);

    useState(() => {
    let total = 0;
    cartItems.forEach(item => {
        const quantityPrice = (item.quantity * item.price);
        total = total + quantityPrice;
        setFinal(total);
        ;
    });
    console.log(total);
}, [])


const sendBuy = async () => {

    const docRef = await addDoc(collection(db, "pedidos"), {
        total: final,
        detail: cartItems,
    });
    setIdTransaccion(docRef.id);
    setCompraRealizada(true);
}

    return (
        <div className="w3-content">
            {compraRealizada ?
                <div>
                    <h2 className="w3-text-theme w3-margin">Felicitaciones! Ya realizaste tu compra</h2>
                    <p className="w3-text-white w3-margin w3-large">Tu codigo de compra es {idTransaccion}</p>
                    <p className="w3-text-theme w3-margin">No te olvides de anotarlo! Gracias por elegir Miel Bavio.</p>
                </div>

                :

                <div>
                    <h2 className="w3-text-theme w3-margin">El total de su compra es: {final}$</h2>
                    
                    <div>
                        <label>Nombre</label>
                        <input className="w3-input" type="text"></input>

                        <label>Apellido</label>
                        <input className="w3-input" type="text"></input>

                        <label>Dirección</label>
                        <input className="w3-input" type="text"></input>
                    </div>

                    <button className= "w3-button w3-theme w3-large w3-margin" onClick={() => sendBuy()}>Terminar compra</button>

                </div>
            }
        </div>
    )
}

export default Buy
