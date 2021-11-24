import { collection, addDoc } from "firebase/firestore";
import { db } from '../../Firebase';
import React, {useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { Dimmer, Loader } from 'semantic-ui-react';



const Buy = () => {

    const { cartItems } = useContext(CartContext);

    const [final, setFinal] = useState(0)
    const [idTransaccion, setIdTransaccion] = useState("")
    const [compraRealizada, setCompraRealizada] = useState(false);
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [direction, setDirection] = useState("")
    const [onLoad, setOnLoad] = useState(false)

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
    setOnLoad(true);
    const date = new Date();

    const docRef = await addDoc(collection(db, "pedidos"), {
        total: final,
        detail: cartItems,
        buyer: {
                name: name,
                surname: surname,
                direction: direction
            },
        date: date.toString()
    });
    setIdTransaccion(docRef.id);
    setCompraRealizada(true);
    setOnLoad(false);
}

const onNameChange = (e) => {
    setName(e.target.value);
}

const onSurnameChange = (e) => {
    setSurname(e.target.value);
}

const onDirectionChange = (e) => {
    setDirection(e.target.value);
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
                        <input className="w3-input" type="text" onChange={onNameChange} value={name}></input>

                        <label>Apellido</label>
                        <input className="w3-input" type="text" onChange={onSurnameChange} value={surname}></input>

                        <label>Dirección</label>
                        <input className="w3-input" type="text" onChange={onDirectionChange} value={direction}></input>
                    </div>

                    <button className= "w3-button w3-theme w3-large w3-margin" onClick={() => sendBuy()}>Terminar compra</button>

                </div>
            }
            <Dimmer active={onLoad}><Loader/></Dimmer>
        </div>
    )
}

export default Buy
