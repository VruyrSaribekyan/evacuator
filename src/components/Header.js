import React from 'react';
import logo from "../assets/images/logo.png";
import {Link, NavLink} from "react-router-dom";


function Header({title, href, text}) {
    return (
        <div className={"header"}>
            <div className={"logo"}>
                <img src={`${logo}`} alt={"logo"}/>
                <div>
                    <NavLink to={"/"}>о проекте</NavLink>
                    <NavLink to={"/"}>контакты</NavLink>
                    <button>Добавить объявление</button>
                </div>
            </div>
            <div className={"title"}>
                <p>{`${title}`} {href && text ? <Link to={href}> {text} </Link> : null}</p>

            </div>
        </div>
    );
}

export default Header;