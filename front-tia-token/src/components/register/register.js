import React, { useState } from "react";
import Header from "../header/header";
import './register.css'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <>
        <Header />
        <div className="register-container">
            <div>
                <h1>Registro</h1>
                <form onSubmit={handleSubmit} className="register-form">
                    <div>
                        <label htmlFor="firstName" className="input">
                            <span className="input__label">Nombre</span>
                            <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="input__field"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="lastName" className="input">
                            <span className="input__label">Apellido</span>
                            <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="input__field"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="email" className="input">
                            <span className="input__label">Correo</span>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="input__field"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password" className="input">
                            <span className="input__label">Contraseña</span>
                            <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="input__field"
                            />
                        </label>
                    </div>
                    <button type="submit">Crear Cuenta</button>
                </form>
            </div>
        </div>
    </>
  );
};

export default RegistrationForm;
