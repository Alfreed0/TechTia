import React, { useEffect } from "react";
import { useState } from "react";
import { getUserByEmail } from "../../services/token";
import './token.css';

function Token(props) {
    const [token, setToken] = useState('');
    const [time, setTime] = useState(0);

    useEffect(() => {
        getToken();
    }, [token, props.email]);

    useEffect(() => {
        let intervalId = null;
    
        if (time > 0) {
            intervalId = setInterval(() => {
                setTime(time - 1);
            }, 1000);
        } else {
            getToken();
        }
    
        return () => {
          clearInterval(intervalId);
        };
    }, [time]);

    async function getToken() {
        const response = await getUserByEmail(props.email);
        setToken(response.user.token);
        setTime(60 - getTimeDifference(new Date(response.user.updatedAt)));
    }

    const getTimeDifference = (time) => {
        const now = new Date();
        const difference = now.getTime() - time.getTime();
        const seconds = Math.floor(difference / 1000);

        return seconds;
    }

    return (props.trigger) ? (
        <div className="pop-up">
            <div className="pop-up-inner">
                <p>Token de Autenticación</p>
                <div className="token-grid">
                    <div className="token-grid-item">
                        {(token.length > 0) ? <p>{token[0]}</p> : ""}
                    </div>
                    <div className="token-grid-item">
                        {(token.length > 0) ? <p>{token[1]}</p> : ""}
                    </div>
                    <div className="token-grid-item">
                        {(token.length > 0) ? <p>{token[2]}</p> : ""}
                    </div>
                    <div className="token-grid-item">
                        {(token.length > 0) ? <p>{token[3]}</p> : ""}
                    </div>
                    <div className="token-grid-item">
                        {(token.length > 0) ? <p>{token[4]}</p> : ""}
                    </div>
                    <div className="token-grid-item">
                        {(token.length > 0) ? <p>{token[5]}</p> : ""}
                    </div>
                </div>
                <div>{time} segundos restantes</div>
            </div>
        </div>
    ) : "";
}

export default Token;