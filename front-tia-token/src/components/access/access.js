import React, { useState } from "react";
import Token from "../token/token";
import Header from "../header/header";
import './access.css';

const Access = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
      });

      const [token, setToken] = useState({
        first: "",
        second: "",
        third: "",
        fourth: "",
        fifth: "",
        sixth: ""
      });

      const [trigger, setTrigger] = useState(false);
    
      const handleInputChange = event => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };

      const handleInputChangeToken = event => {
        setToken({
          ...token,
          [event.target.name]: event.target.value
        });
      };
    
      const handleSubmit = event => {
        event.preventDefault();
        console.log("Form data:", formData);
      };

      const handleSubmitToken = event => {
        event.preventDefault();
        console.log("Form data:", token);
      };

      const showTokenWindow = () => {
        setTrigger(true);
      }

    return (
        <>
            <Header />
            <div className="access-container">
                <div>
                    <h1>Iniciar Sesión</h1>
                    <form onSubmit={handleSubmit} className='access-form'>
                        <div>
                            <label htmlFor="email">
                                <span>Correo</span>
                                <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="password" >
                                <span>Contraseña</span>
                                <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                />
                            </label>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                    <h2>Comprueba el token de tu cuenta</h2>
                    <div>
                        <button onClick={showTokenWindow} className='token-button'>mostrar</button>
                    </div>
                    <form onSubmit={handleSubmitToken} className='token-form'>
                        <div>
                            <div>
                                <label htmlFor="first">
                                    <input
                                    type="first"
                                    id="first"
                                    name="first"
                                    value={token.first}
                                    onChange={handleInputChangeToken}
                                    />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="second">
                                    <input
                                    type="second"
                                    id="second"
                                    name="second"
                                    value={token.second}
                                    onChange={handleInputChangeToken}
                                    />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="third">
                                    <input
                                    type="third"
                                    id="third"
                                    name="third"
                                    value={token.third}
                                    onChange={handleInputChangeToken}
                                    />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="fourth">
                                    <input
                                    type="fourth"
                                    id="fourth"
                                    name="fourth"
                                    value={token.fourth}
                                    onChange={handleInputChangeToken}
                                    />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="fifth">
                                    <input
                                    type="fifth"
                                    id="fifth"
                                    name="fifth"
                                    value={token.fifth}
                                    onChange={handleInputChangeToken}
                                    />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="sixth">
                                    <input
                                    type="sixth"
                                    id="sixth"
                                    name="sixth"
                                    value={token.sixth}
                                    onChange={handleInputChangeToken}
                                    />
                                </label>
                            </div>
                        </div>
                        <button type='submit'>Crompobar</button>
                    </form>
                </div>
            </div>
            <Token trigger={trigger} email={'luis@hotmail.com'}/>
        </>
    );
};

export default Access;