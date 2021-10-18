import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ props }) => {
    return (
        <div>
            <div>
                <h2 className="w3-text-black w3-amber">{props.title}</h2>
            </div>
            <Link to={`/item/${props.id}`}><img src={props.pictureUrl} alt={props.title} width="300px" /> </Link>
            <p className="precio">{props.price}</p>
            <p>{props.description}</p>
            <ItemCount initial={0} stock={10}/>
        </div>
    )
}

export default Item;
