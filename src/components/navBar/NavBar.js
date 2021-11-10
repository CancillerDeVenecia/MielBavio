import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'
import Logo from '../../assets/icons/logoPuroYellow.png'


const NavBar = () => {

    const [colorSelected, setColorSelected] = useState(false)

    const selectItem = () => {setColorSelected(!colorSelected)}


    return (
    <Menu fixed="top" className="w3-black" >
        <Link to="/">
            <Menu.Item><img src={Logo} alt="Miel Bavio"></img></Menu.Item>            
        </Link>    

        <Dropdown item text='Productos' className={colorSelected ? "w3-theme" : "w3-text-theme w3-hover-theme"} onClick={() => selectItem()}>
            <Dropdown.Menu className="w3-text-theme">
                <Dropdown.Item as={Link} to="/">Todo</Dropdown.Item>
                <Dropdown.Item as={Link} to="/category/tradicional">Mieles Tradicionales</Dropdown.Item>
                <Dropdown.Item as={Link} to="/category/especial" >Mieles Especiales</Dropdown.Item>
                <Dropdown.Item as={Link} to="/category/others">Cera y otros</Dropdown.Item>
            </Dropdown.Menu> 
        </Dropdown>

        <Menu.Item as={Link} to="/about" className="w3-hover-theme w3-text-theme"> Nuestras Mieles</Menu.Item>


        <Menu.Menu position="right" >
            <Menu.Item><i className="yellow shopping cart icon"></i></Menu.Item>
        
        {/*totalItems > 0 &&        
                    <Link to="/Cart" className="w3-bar-item w3-button">
                        <Menu.Item position='right'><CartWidget/> <p style={{display: "inline"}}>{totalItems}</p></Menu.Item>
                    </Link>
        */}          
        </Menu.Menu>                             
    </Menu>
    )

}

export default NavBar 