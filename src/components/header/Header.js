import React from 'react';
import headerImg from '../../assets/img/header.JPG';
import './header.css';
import { Link } from 'react-router-dom';

let w3_open = () => {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("botonBarra").style.display= "none";
}  

const Header = () => {
    return (
        <div className="header">   
            <button className="w3-button w3-xlarge w3-black w3-text-amber w3-top" onClick={w3_open} id="botonBarra">Menu ☰</button>         
            <Link to="/"><img src={headerImg} alt="mieles" className="header-img" /></Link>
        </div>
    )
}

export default Header
