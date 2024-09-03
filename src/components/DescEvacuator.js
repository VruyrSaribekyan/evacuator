import React from 'react';
import illistration from "../assets/images/Illustration.png";
import group from "../assets/images/Group 39.png";

function DescEvacuator() {
    return (
        <>
            <div className={"ev-title"}>
                <div>
                    <img src={`${illistration}`} alt={"illistration"}/>
                    <p>Здесь может быть ваш эвакуатор</p>
                    <button>Добавить объявление</button>
                </div>
            </div>

            <div className={"desc"}>
                <div>
                    <h4>Как вызвать эвакуатор в Москве<br/>
                        дешево?</h4>
                    <p>Поломка авто или ДТП – случайностей на дороге<br/> много. Решение одно – вызвать
                        эвакуатор<br/>
                        и доставить неисправный автомобиль <br/>на СТО/парковку или в гараж в Москве.<br/>
                        С помощью онлайн-сервиса Эварус вы сможете<br/> заказать услугу эвакуатора в Москве
                        (Московской<br/> области) максимально быстро<br/>
                        и при этом сэкономить.<br/><br/>

                        Мы предоставляем доступ к базе коммерческих<br/>
                        и частных эвакуаторов Москвы. Это надежные<br/> компании, которые оперативно пришлют<br/>
                        спецтехнику вам на помощь и обеспечат<br/> безопасную транспортировку авто.</p>
                </div>
                <img src={`${group}`} alt={""}/>
            </div>
        </>
    );
}

export default DescEvacuator;