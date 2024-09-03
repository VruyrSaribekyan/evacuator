import React from 'react';
import money from "../assets/images/money.png";
import vector from "../assets/images/Vector.png";
import ScrollToTop from "react-scroll-up";

function CreateEvacuator() {
    return (
        <div className={"create-evacuator"}>
            <div className={"desc"}>
                <img src={`${money}`} alt={"money"}/>
                <p>Заполните все поля формы на размещение своего объявления на сайте. <br/>
                    Размещение объявления платное. Стоимость за одно объявление составляет <span>990 руб</span>.<br/>
                    Объявление будет опубликовано на сайте после оплаты и проверки модератором.</p>
            </div>

            <form>
                <label>Выберете город</label>
                <select>
                    <option value={"Moscow"}>Moscow</option>
                    <option value={"Erevan"}>Erevan</option>
                </select>
                <label>Ваше имя</label>
                <input type={"text"}/>
                <label>Номер мобильного телефона</label>
                <input type={"text"} placeholder={"+7 (999) 999 99 99"}/>
                <label>Номер городского телефона</label>
                <input type={"text"} placeholder={"+7 (999) 999 99 99"}/>
                <label>Ваш email</label>
                <input type={"text"} placeholder={"example@gmail.com"}/>
                <label>Адрес стоянки эвакуатора</label>
                <input type={"text"}/>
                <fieldset>
                    <legend>ИНФОРМАЦИЯ</legend>
                    <label>Заголовок объявления</label>
                    <input type={"text"} placeholder={"Не более 50 символов"}/><br/><br/>
                    <label>Описание объявления</label>
                    <textarea placeholder={"Не более 50 символов"}></textarea>
                </fieldset>
                <fieldset className={"prices"}>
                    <legend>ЦЕНЫ</legend>
                    <div className={"price"}>
                        <div>
                            <label>Легковые автомобили</label><br/>
                            <input type={"number"}/>
                            <span>рублей</span>
                        </div>
                        <input type={"checkbox"}/>
                        <span>Услугу не оказываю</span>
                    </div>
                    <div className={"price"}>
                        <div>
                            <label>Мототехника</label><br/>
                            <input type={"number"}/>
                            <span>рублей</span>
                        </div>
                        <input type={"checkbox"}/>
                        <span>Услугу не оказываю</span>
                    </div>
                    <div className={"price"}>
                        <div>
                            <label>Внедорожник</label><br/>
                            <input type={"number"}/>
                            <span>рублей</span>
                        </div>
                        <input type={"checkbox"}/>
                        <span>Услугу не оказываю</span>
                    </div>
                    <div className={"price"}>
                        <div>
                            <label>Микроавтобус</label><br/>
                            <input type={"number"}/>
                            <span>рублей</span>
                        </div>
                        <input type={"checkbox"}/>
                        <span>Услугу не оказываю</span>
                    </div>
                    <div className={"price"}>
                        <div>
                            <label>Загородный тариф</label><br/>
                            <input type={"number"}/>
                            <span>рублей</span>
                        </div>
                        <input type={"checkbox"}/>
                        <span>Услугу не оказываю</span>
                    </div>

                </fieldset>
                <fieldset className={"photo"}>
                    <legend>ФОТО</legend>
                    <label>Прикрепите фотографию к объявлению</label>
                    <div className={'item_file'}>
                        <label
                            htmlFor="file-upload"
                            className="custom-file">
                            Загрузить
                        </label>
                        <input
                            name={'files'}
                            accept="image/*"
                            id="file-upload"
                            type="file"/>
                    </div>
                    <div className={"checkbox"}>
                        <input type={"checkbox"}/>
                        <span>Я соглашаюсь с правилами использования сервиса, а также с <br/>
                            передачей и обработкой моих данных в evarus.ru. Я подтверждаю<br/>
                            своё совершеннолетие и ответственность за размещение.</span>
                    </div>
                    <button>Продолжить</button>
                </fieldset>



            </form>
        </div>
    );
}

export default CreateEvacuator;