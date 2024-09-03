import React from 'react';
import group1 from "../assets/images/Group 41.png";
import group2 from "../assets/images/Group 42.png";

function QuestionsEvacuator() {
    return (
        <div className={"questions"}>
            <div>
                <h4>Что нужно знать, чтобы заказать эвакуатор в Москве</h4>
                <div>
                    <div>
                        <img src={`${group1}`} alt={""}/>
                        <p>Заказы на вызов эвакуатора в Москве перевозчики-партнеры “Тут Эвакуатор” принимают
                            круглосуточно. Когда
                            бы вы не позвонили, эвакуатор найдется всегда. Размещая заказ
                            на эвакуатор, ознакомьтесь с информацией
                            о транспортной компании, проконсультируйтесь
                            с ее специалистами и выберите оптимальный вариант перевозки своего ТС.</p>
                    </div>
                    <div>
                        <img src={`${group2}`} alt={""}/>
                        <p>Примите во внимание, что одни и те же виды эвакуаторов рассчитаны на транспортировку авто
                            разных
                            классов.
                            Вопрос заключается лишь в том, какой тип эвакуатор будет выгоднее задействовать в вашем
                            случае.
                            Следуя рекомендациям перевозчика, вы сможете недорого эвакуировать авто как в Москве, так и
                            в
                            области.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuestionsEvacuator;