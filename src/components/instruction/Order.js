import React from 'react';
import num1 from "../../assets/images/Done1.png";
import num2 from "../../assets/images/Done (1).png";
import num3 from "../../assets/images/Done (2).png";
import num4 from "../../assets/images/Done (3).png";
import num5 from "../../assets/images/Done (4).png";
import num6 from "../../assets/images/Done (5).png";
import num7 from "../../assets/images/Done (6).png";

function Order() {
    return (
        <div className={"order"}>
            <h3>Стоимость вызова эвакуатора для перевозки авто</h3>
            <p>Воспользовавшись онлайн-ресурсом Эварус, вы сократите время на поиск эвакуатора в Москве,
                МО и закажете услугу по оптимальной цене. Вам не придется обзванивать знакомых или долго
                искать телефон эвакуатора в интернете. Проанализируйте предложения на нашем сайте, выберите
                лучшие условия и стоимость перевозки.</p>
            <h4>Как вызвать эвакуатор с помощью онлайн-сервиса ТутЭвакуатор.Ру:</h4>
            <p><img src={`${num1}`} alt={"num"}/>Ознакомьтесь с картой Москвы и Московской области, на которой желтыми маркерами обозначены стоянки эвакуаторов.</p>
            <p><img src={`${num2}`} alt={"num"}/>Увеличьте масштаб и определите, какой из адресов находится рядом с местом вашей дислокации</p>
            <p><img src={`${num3}`} alt={"num"}/>Выберите ближайший эвакуатор и нажмите на соответствующий маркер</p>
            <p><img src={`${num4}`} alt={"num"}/>Просмотрите детальную информацию о перевозчике: возможные способы погрузки ТС,
                комплектацию автопарка, типы транспортируемых авто прайс с ценами</p>
            <p><img src={`${num5}`} alt={"num"}/>Кликните по голубому полю внизу карточки перевозчика и возьмите телефонный номер компании</p>
            <p><img src={`${num6}`} alt={"num"}/>Созвонитесь с диспетчером фирмы, обсудите детали эвакуации в Москве/МО и стоимость заказа</p>
            <p><img src={`${num7}`} alt={"num"}/>Сравните цены и условия перевозки у нескольких компаний, выберите наиболее подходящий для себя вариант</p>
        </div>
    );
}

export default Order;