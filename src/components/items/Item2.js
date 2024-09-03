import React from 'react';
import image from "../../assets/images/image 7.png";

function Item2() {
    return (
        <div className={"item"}>
            <h4>Эвакуатор с манипулятором и ломаной / сдвижной платформой</h4>
            <img src={`${image}`} alt={"image"} />
            <p>Универсальный и надежный эвакуатор для эвакуации любых видов транспортных
                средств, включая крупную сельскохозяйственную/строительную/коммунальную
                технику, а также авто с низким клиренсом. Этот тип эвакуатора может быть
                задействован при перевозке как сильно пострадавших в аварии автомобилей,
                так и ТС, которые в состоянии самостоятельно заехать на платформу эвакуатора.</p>
        </div>
    );
}

export default Item2;