import React from "react";
import './inicial.css';

import tw from "./img/tw.png";
import logo from "./img/logo2opcao.png";
import linkedin from "./img/linkedin.png"
import faceboook from "./img/facebook.png"

const Inicial = () => {
return(
<div className="inicial">
    <div class="header-1">
    <div class="logo">
        <img src={logo} />
    </div>
    <div class="redes-sociais">
            <ul>
            <li>
                <a href=""><img src={faceboook} /></a>
            </li>
                <li>
                <a href=""><img src={tw} /></a>
            </li>
            <li>
                <a href=""><img src={linkedin} /></a>
            </li>
            </ul>

    <div class="col-100 menu-urls">
    <div class="header-2">
    <div class="menu">
        <ul>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Login</a>
            </li>
            </ul>
    <div class="busca">
        <input
            placeholder="Busque Aqui"
            type="text"
        />
    <div className="footer">
<footer>
    <p>Fale conosco:
    <a href="mailto:hege@example.com">escoladeesteticaavpaulista@gmail.com</a></p>
</footer>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
);
}

export default Inicial;