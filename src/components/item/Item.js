import React from 'react';
import { Link } from 'react-router-dom';
import { Dimmer } from 'semantic-ui-react';


const Item = ({ props }) => {

    const [hovereado, setHovereado] = React.useState(false);

    return (
        <div onMouseEnter={() => setHovereado(true)} onMouseLeave={() => setHovereado(false)} >
            
            <Dimmer.Dimmable dimmed={hovereado} >
            <Link to={`/item/${props.id}`}> <Dimmer active={hovereado}>Ir al producto! </Dimmer> </Link>
            <div>
                <h2 className="w3-text-black w3-theme w3-card">{props.title}</h2>
            </div>
            <Link to={`/item/${props.id}`}><img src={props.pictureUrl} alt={props.title} width="300px" /></Link>
            <p className="precio w3-margin-top w3-theme w3-card">{props.price}$</p>
            <p className="w3-margin-bottom w3-margin-left w3-margin-right w3-theme-d1">{props.description}</p>
            </Dimmer.Dimmable>
            
        </div>
    )
}

export default Item;
