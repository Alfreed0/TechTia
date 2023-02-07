import React, { useEffect, useState } from "react";
import Header from "../header/header";
import { useLocation } from 'react-router-dom';
import { getUserByEmail } from "../../services/token";
import './user.css';

const User = () => {
    const location = useLocation();

    const [user, setUser] = useState({
        name: '',
        lastname: ''
    })

    useEffect(() => {
        getUser();
    }, []);

    async function getUser() {
        const response = await getUserByEmail(location.state.user);
        setUser({
            name: response.user.firstName,
            lastname: response.user.lastName
        })
    }

    return (
        <>
            <Header links={[[user.name, '/']]}/>
            <div className="user">
                <div>
                    <p>Bienvenido</p>
                    <p>{user.name} {user.lastname}, gracias por tu atención</p>
                </div>
            </div>
        </>
    );
};

export default User;