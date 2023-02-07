import React, { useState, useEffect } from "react";
import Token from "../token/token";
import Header from "../header/header";
import { useNavigate } from 'react-router-dom';
import { getUserByEmail, createUsedToken } from "../../services/token";
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
      const [error, setError] = useState('');
      const [errorToken, setErrorToken] = useState('');
      const [user, setUser] = useState(' ');
      const [pass, setPass] = useState(' ');
      const [isDisabled, setIsDisabled] = useState(false);
      const [tokenCheck, setTokenCheck] = useState(' ');

      const navigate = useNavigate();
    
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
        getUser();
      };

      useEffect(() => {
        if (user == formData.email && pass == formData.password) {
            setIsDisabled(true);
            setError('');
        } else {
            if (user != ' ') {
                setPass('');
                setError('Usuario o contraseña incorrectos')
            }
        }
        setErrorToken('');
    }, [user, pass]);

      const handleSubmitToken = event => {
        event.preventDefault();
        getToken();
      };

      useEffect(() => {
        const joinedToken = [token.first, token.second, token.third, token.fourth, token.fifth, token.sixth].join('');
        if (tokenCheck == joinedToken){
            setErrorToken('');
            create();
        } else {
            if (tokenCheck != ' ') {
                handleSetToken('');
                setTokenCheck(' ');
                setErrorToken('Token incorrecto');
            }
        }
      }, [tokenCheck])

      const showTokenWindow = () => {
        setTrigger(true);
      }

      const handleSetToken = (value) => {
        setToken({
          first: value,
          second: value,
          third: value,
          fourth: value,
          fifth: value,
          sixth: value
        });
      };

      const handleRedirect = () => {
        navigate('/user', {state: { user }, replace: true});
      }

      async function getUser() {
        const response = await getUserByEmail(formData.email);
        if (response.user == null) {
            setUser(null);
            setPass(null);
        } else {
            setUser(response.user.email);
            setPass(response.user.password);
        } 
    }

    async function getToken() {
        const response = await getUserByEmail(formData.email);
        setTokenCheck(response.user.token);
    }

    async function create() {
        const response = await createUsedToken({email: user, token: tokenCheck});
        if (response.status === 200) {
          handleRedirect();
        }
    }

    return (
        <>
            <Header links={[['Registrarse', '/register']]}/>
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
                                disabled={isDisabled}
                                required
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
                                disabled={isDisabled}
                                required
                                />
                            </label>
                        </div>
                        <button type="submit" disabled={isDisabled}>Enviar</button>
                        {error && <div style={{ color: "red" }}>{error}</div>}
                    </form>
                    <h2>Comprueba el token de tu cuenta</h2>
                    <div>
                        <button onClick={showTokenWindow} className='token-button' disabled={!isDisabled}>mostrar</button>
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
                                    disabled={!isDisabled}
                                    required
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
                                    disabled={!isDisabled}
                                    required
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
                                    disabled={!isDisabled}
                                    required
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
                                    disabled={!isDisabled}
                                    required
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
                                    disabled={!isDisabled}
                                    required
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
                                    disabled={!isDisabled}
                                    required
                                    />
                                </label>
                            </div>
                        </div>
                        <button type='submit' disabled={!isDisabled}>Crompobar</button>
                        {errorToken && <div style={{ color: "red" }}>{errorToken}</div>}
                    </form>
                </div>
            </div>
            <Token trigger={trigger} email={user} setTrigger={setTrigger}/>
        </>
    );
};

export default Access;