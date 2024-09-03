import React from 'react';
import tel1 from "../assets/images/tel1.png"
import tel2 from "../assets/images/tel2.png"
import location from "../assets/images/location.png"
import {Link} from "react-router-dom";

function Evacuator({evacuator}) {
    return (
        <div className={"evacuator-div"}>
            <div className={"evacuator"}>
                <div>
                    <h4>Эвакуатор</h4>
                    <img src={evacuator.photo} alt={"photo"}/>
                </div>
                <div className={"ev-info"}>
                    <p><span>Легковой автомобиль</span> <span>{evacuator.authomobile}</span></p>
                    <p><span>Мотоцикл (крадроцикл и т.д.)</span> <span>{evacuator.motocikl}</span></p>
                    <p><span>Внедорожник</span> <span>{evacuator.vnedorojik ? evacuator.vnedorojik : "нет"}</span></p>
                    <p><span>Микроавтобус</span> <span>{evacuator.mikroavtobus ? evacuator.mikroavtobus : "нет"}</span></p>
                    <p><span>Загородный тариф</span> <span>{evacuator.tarif}</span></p>
                </div>
                <div className={"ev-order"}>
                    <button>
                        <img src={`${tel1}`} alt={"tel"}/>
                        {evacuator.tel1}
                    </button>
                    <button>
                        <img src={`${tel2}`} alt={"tel"}/>
                        {evacuator.tel2}
                    </button>
                    <div className={"address"}>
                        <p>
                            <img src={`${location}`} alt-={"location"}/>
                            Место стоянки
                        </p>
                        <p>{evacuator.address}</p>
                    </div>
                    <div className={"order"}>
                        <p>ID объявления 63</p>
                        <Link to={"/"}>Заказать рекламу</Link>
                    </div>
                </div>
            </div>
            <p>{evacuator.desc}</p>
        </div>
    );
}

export default Evacuator;