import React from "react";
import logo from "../../assets/images/tia_logo.png";
import { useNavigate } from "react-router-dom";
import './header.css';

const Header = (props) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/', {replace: true});
    }

    return (
        <div className="header">
            <div className="tia-logo">
                <img src={logo} alt="logo" onClick={handleRedirect}/>
            </div>
            <div className="links">
                {props.links.map((array, index) => {
                    return(
                        <a key={index} href={array[1]}>{array[0]}</a>
                    )
                })}
            </div>
        </div>
    );
};

export default Header;