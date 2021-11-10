import React, {useState} from 'react';
import NavBar from '../navBar/NavBar';
import headerImg1 from '../../assets/img/header1.jpg';
import headerImg2 from '../../assets/img/header2.JPG';
import headerImg3 from '../../assets/img/header3.JPG';
import './header.css';
import { Link } from 'react-router-dom';


const Header = () => {

    const [headerImg, setHeaderImg] = useState(headerImg1)
    const [headerCounter, setHeaderCounter] = useState(0)

    const headerImgs = [headerImg1, headerImg2, headerImg3]

    setInterval(() => {
        if(headerCounter === headerImgs.length - 1) {
            setHeaderCounter(0);
        } else {
        setHeaderCounter(headerCounter + 1);
        }
        setHeaderImg(headerImgs[headerCounter]);
    }, 30000);

    return (
        <div className="header">   
            <NavBar/>
            <Link to="/"><img src={headerImg} alt="mieles" className="header-img" /></Link>
        </div>
    )
}

export default Header
