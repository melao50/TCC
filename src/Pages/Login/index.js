import React from "react";
import './login.css'

import { MdEmail, MdLock } from "react-icons/md";

const Login = () => {
    return(
        <div className="login">
            <div className="login-logo">
                <img src="https://www.gellog.com.br/assets/imagens/avatar.png" alt="Login-app" />
            </div>
            <div className="login-right">
                <h1>Acessar o App</h1>

                <div className="loginInputemail">
                    <MdEmail />
                    <input 
                    type="text"
                    placeholder="Digite seu Email" 
                    />
                </div>
                <div className= "loginInputPassword">
                    <MdLock />
                    <input
                        type="text"
                        placeholder="Digite sua Senha"
                    />
                </div>
                <button type="submit">
                    Entrar
                </button>
            </div>
        </div>
    );
}

export default Login;