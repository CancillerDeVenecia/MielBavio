import React from "react";

//Css
import "../../boostrap/dist/css/bootstrap.css";

//Internal compononents
import CartWidget from "../cartWidget/CartWidget";


const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="index.html">Miel bavio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mt-3">
                <li className="nav-item">
                    <p className="nav-link active" aria-current="page" href="#">Home</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link">Link</p>
                </li>
                <li className="nav-item dropdown">
                    <p className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Dropdown </p>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><p className="dropdown-item" href="#">Action</p></li>
                        <li><p className="dropdown-item" href="#">Another action</p></li>
                        <li><p className="dropdown-item" href="#">Something else here</p></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className="ms-2">
            <CartWidget/>
        </div>
        </div>
    </nav>
    )
};

export default NavBar;


