import React from "react";
import Header from "../header/header";
import './landing.css'

const Landing = () => {
    return(
        <>
            <Header links={[['Iniciar Sesión', '/access'], ['Registrarse', 'register']]}/>
            <div className="landing">
                <div>
                    <p>Bienvenidos a mi prueba técnica</p>
                    <p>Esta es una prueba guiada por lo que se requiere que siga los siguientes pasos:</p>
                    <ul>
                        <li>Ir a la opción 'Registrarse' y crear un usuario.</li>
                        <li>Después, ir a la opción 'Iniciar Sesión' y loguearse con su usuario.</li>
                        <li>Una vez ingresada las credenciales se activará la opción de ingresar el token, ingréselo.</li>
                        <li>Llegará a la parte del usuario.</li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Landing;