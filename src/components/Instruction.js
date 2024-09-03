import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Price from "./instruction/Price";
import Order from "./instruction/Order";

function Instruction() {
    const [priceActive, setPriceActive] = useState(true)
    const [orderActive, setOrderActive] = useState(false)

    return (
        <div className={"instruction"}>
            <div>
                <div>
                    <button className={`btn${priceActive ? " active" : ""}`} onClick={() => {
                        setPriceActive(true)
                        setOrderActive(false)
                    }}>Стоимость
                    </button>
                    <button className={`btn${orderActive ? " active" : ""}`} onClick={() => {
                        setOrderActive(true)
                        setPriceActive(false)
                    }}>Как заказать
                    </button>
                </div>

                {priceActive && <Price/>}
                {orderActive && <Order/>}

            </div>
        </div>
    );
}

export default Instruction;