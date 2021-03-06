import React, { useState } from "react";
import './login.css'

import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useHistory } from "react-router-dom";

function Login() {
const[email, setEmail] = useState("")
const[password, setPassword] = useState("")
const[show, setShow] = useState(false)

let history = useHistory("");


const handleSubmitClick = (e) => {
e.preventDefault()
history.push("/initial"); 
}

const handleVisibilityClick = (e) => {
    e.preventDefault()
    setShow(!show);
    }

return(
<div className="login">
<div className="login-logo">
<img src="https://www.gellog.com.br/assets/imagens/avatar.png" alt="Login-app" />
</div>
<div className="login-right">
<h1>Escola de Estética</h1>

<div className="login-loginInputemail">
    <MdEmail />
    <input 
    type="email"
    placeholder="Digite seu Email"
    value={email}
    onChange={e => setEmail(e.target.value)} 
    />
</div>
<div className= "login-loginInputPassword">
    <MdLock />
    <input
        placeholder="Digite sua Senha"
        type={show ? "text" : "password"}
        value={password}
        onChange={e => setPassword(e.target.value)}
    />
    <div className="login-eye">
        {show ? (
            <HiEye 
                size={20}
                onClick={handleVisibilityClick}
                />
        ) : (
            <HiEyeOff 
                size={20}
                onClick={handleVisibilityClick}
            />
        )}
    </div>
</div>
<button type="submit" onClick={handleSubmitClick}>
Entrar
</button>

<h4>Não tenho uma conta</h4>

<button type="submit">
    Cadastrar
</button>
</div>
</div>
);
}

export default Login;
