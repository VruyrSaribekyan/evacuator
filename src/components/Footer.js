import React from 'react';
import logo from "../assets/images/logo.png";
import {NavLink} from "react-router-dom";
import vector from "../assets/images/Vector.png";
import ScrollToTop from "react-scroll-up";

function Footer() {
    return (
        <div className={"footer"}>
            <div className={"logo"}>
                <img src={`${logo}`} alt={"logo"}/>
                <NavLink to={"/"}>Вызвать эвакуатор</NavLink>
                <NavLink to={"/"}>Добавить эвакуатор на сайт</NavLink>
                <NavLink to={"/"}>Помощь</NavLink>
                <NavLink to={"/"}>Правила оплаты</NavLink>
                <NavLink to={"/"}>Защита персональных данных</NavLink>
            </div>
            <ScrollToTop showUnder={160}>
                <img src={`${vector}`} alt={"vector"} className={"vector"}/>
            </ScrollToTop>
        </div>
    );
}

export default Footer;