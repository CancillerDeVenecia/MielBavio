import React, {useEffect, useState, useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import Item from '../../components/item/Item'
import '../../components/itemList/itemList.css'
import { Dimmer, Loader } from 'semantic-ui-react';

const Category = ({match}) => {

    const [listado, setListado] = useState([])
    const [vacia, setVacia] = useState(false)

    const { onLoad, setOnLoad, importData, productos } = useContext(CartContext);

    
    const seleccionado = match.params.id;

    


    useEffect(() => {
        importData();
        const prelista = [];

        if (productos.some((producto) => {return producto.category === seleccionado})) {
            productos.forEach(producto => {
            if (producto.category === seleccionado) {
                prelista.push(producto);
                setOnLoad(false);
            }})
            setListado(prelista);
        } else { 
            setVacia(true);
            setOnLoad(false);
        }
        
    }, [setOnLoad, productos, importData, seleccionado])


    return (
        <div id="itemList" className="w3-black">
            {listado.map((producto) => {
                return(
                    <div key={producto.id} className="w3-card-2 w3-margin item w3-text-black w3-theme-d1" >                        
                        <Item props={producto}></Item>
                    </div>    
                )
            })}
            {vacia && <div><span className="w3-large">Proximamente!</span></div>}
            <Dimmer inverted active={onLoad}><Loader/></Dimmer>
        </div>
    )
}

export default Category
