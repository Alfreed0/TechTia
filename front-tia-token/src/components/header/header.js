import React from "react";
import logo from "../../assets/images/tia_logo.png";
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="tia-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="links">
                <a href="/access">Iniciar Sesión</a>
                <a href="/register">Registrarse</a>
            </div>
        </div>
    );
};

export default Header;