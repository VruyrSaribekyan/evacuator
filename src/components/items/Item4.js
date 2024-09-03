import React from 'react';
import image from "../../assets/images/image 9.png";

function Item4() {
    return (
        <div className={"item"}>
            <h4>Эвакуатор с лебедкой и укороченной базой для частичной погрузки авто</h4>
            <img src={`${image}`} alt={"image"} />
            <p>Основное назначение – транспортировка крупнотоннажной спецтехники, грузовых авто, автобусов.</p>
        </div>
    );
}

export default Item4;