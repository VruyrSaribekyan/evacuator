import React from 'react';
import image from "../../assets/images/image 6.png";

function Item1() {
    return (
        <div className={"item"}>
            <h4>Эвакуатор с краном-манипулятором и прямой платформой</h4>
            <img src={`${image}`} alt={"image"} />
            <p>Компактный и маневренный эвакуатор для транспортировки авто
                массой до 3,5 т. За счет вылета стрелы манипулятор осуществляет
                погрузку/разгрузку ТС с расстояния до 5 м. Он удобен для эвакуации
                автомобилей с узких улиц/дворов, небольших стоянок/парковок Москвы.</p>
        </div>
    );
}

export default Item1;