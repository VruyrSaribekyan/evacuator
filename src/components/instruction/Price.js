import React from 'react';
import done from "../../assets/images/Done.png";

function Price() {
    return (
        <div className={"price"}>
            <h3>Стоимость вызова эвакуатора для перевозки авто</h3>
            <p>На сайте Эварус представлены цены, выставленные перевозчиками за
                стандартную услугу эвакуации авто по Москве и области. Начальная
                стоимость транспортировки зависит от габаритов и веса ТС: перевозка
                мотоцикла/малолитражки будет стоить дешевле, чем внедорожника/минивена.
                Дороже всего обойдется эвакуация неисправной спецтехники и грузового транспорта.</p>
            <h4>На стоимость услуги эвакуатора в Москве влияет ряд факторов:</h4>
            <p><img src={`${done}`} alt={"done"}/> класс, масса, степень повреждения транспортируемого авто</p>
            <p><img src={`${done}`} alt={"done"}/> первоначальное месторасположение ТС в Москве и дальность следования
            </p>
            <p><img src={`${done}`} alt={"done"}/> сложность погрузочно-разгрузочных операций</p>
            <p><img src={`${done}`} alt={"done"}/> дорожные и погодные условия Москвы</p>

            <p>Окончательная цена зависит от того, куда подавать эвакуатор и где впоследствии выгружать
                автомобиль: Москва это будет или Московская область. Транспортировка по МО оплачивается
                согласно прайсу, плюс тариф за каждый км пробега от МКАД. Суммарная оплата увеличится,
                если машина находится в кювете/яме/гараже/водоеме и подъезд к ней усложнен. Стоимость
                возрастет и при наличии заблокированных колес/рулевого управления или серьезного повреждения
                ТС. <br/>Все нюансы эвакуации авто вы сможете обсудить с перевозчиком. Ознакомившись с конкретной
                ситуацией, он озвучит цену и сроки подачи эвакуатора. </p>
            <h4>В каких случаях возможно изменение
                стоимости услуги после прибытия эвакуатора к месту погрузки авто:</h4>

            <p><img src={`${done}`} alt={"done"}/> простой эвакуатора по вине клиента</p>
            <p><img src={`${done}`} alt={"done"}/> смена маршрута после размещения заказа</p>
            <p><img src={`${done}`} alt={"done"}/> непредвиденное усложнение эвакуации из-за неправильных/неполных данных о ТС</p>

            <p>Во избежание незапланированных трат, сообщите диспетчерской службе подробные сведения о
                своем автомобиле и обстоятельствах его поломки.</p>
        </div>
    );
}

export default Price;