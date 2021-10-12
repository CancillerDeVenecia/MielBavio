import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import "../../boostrap/dist/css/bootstrap.css";

const Item = ({ props }) => {
    return (
        <div>
            <div>
                <h2>{props.title}</h2>
            </div>
            <img src={props.pictureUrl} alt={props.title} width="300px" /> 
            <h5>{props.price}</h5>
            <p>{props.description}</p>
            <ItemCount initial={0} stock={10}/>
        </div>
    )
}

export default Item;
