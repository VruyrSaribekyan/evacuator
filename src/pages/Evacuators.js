import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Evacuator from "../components/Evacuator";
import ReactPaginate from "react-paginate";
import {useNavigate, useParams} from "react-router-dom";
import DescEvacuator from "../components/DescEvacuator";
import QuestionsEvacuator from "../components/QuestionsEvacuator";
import Transportation from "../components/Transportation";
import OnlineService from "../components/OnlineService";
import BortEvacuator from "../components/BortEvacuator";
import Ordering from "../components/Ordering";
import img1 from "../assets/images/photo.png";
import img2 from "../assets/images/photo2.png";
import Instruction from "../components/Instruction";

const evacuators = [
    {
        id: 1,
        authomobile: "5 000 руб",
        motocikl: "3 000 руб",
        vnedorojik: false,
        mikroavtobus: false,
        tarif: "50 руб/км",
        tel1: "+7 999 99 99",
        tel2: "+7 999 99 99",
        address: "Москва, ул Пушкина",
        desc: "Эвакуатор авто. Всегда на связи! Быстро и надежно",
        photo: img1
    },
    {
        id: 2,
        authomobile: "4 000 руб",
        motocikl: "3 000 руб",
        vnedorojik: "4 000 руб",
        mikroavtobus: "6 000 руб",
        tarif: "50 руб/км",
        tel1: "+7 999 99 99",
        tel2: "+7 999 99 99",
        address: "Москва, ул Пушкина",
        desc: "Круглосуточно. Стоянка в районе метро Технопарк, быстро доберусь в любую точку города.",
        photo: img2
    },
    {
        id: 3,
        authomobile: "5 000 руб",
        motocikl: "3 000 руб",
        vnedorojik: false,
        mikroavtobus: false,
        tarif: "50 руб/км",
        tel1: "+7 999 99 99",
        tel2: "+7 999 99 99",
        address: "Москва, ул Пушкина",
        desc: "Эвакуатор авто. Всегда на связи! Быстро и надежно",
        photo: img1
    },
    {
        id: 4,
        authomobile: "4 000 руб",
        motocikl: "3 000 руб",
        vnedorojik: "4 000 руб",
        mikroavtobus: "6 000 руб",
        tarif: "50 руб/км",
        tel1: "+7 999 99 99",
        tel2: "+7 999 99 99",
        address: "Москва, ул Пушкина",
        desc: "Круглосуточно. Стоянка в районе метро Технопарк, быстро доберусь в любую точку города.",
        photo: img2
    },
]

function Evacuators() {
    const navigate = useNavigate();

    const pages= 5;

    const { page = 1 } = useParams();

    return (
        <div className={"wrapper evacuators-wrapper"}>
            <div className={"container"}>
                <Header title={"Телефоны для вызова эвакуатора в"} href={"/"} text={"Москве"}/>
                <div className={"evacuators"}>
                    {evacuators && evacuators.map(evacuator => (
                        <Evacuator evacuator={evacuator} key={evacuator.id}/>
                    ))}
                </div>

                <div className={"pages-list"}>
                    {pages && pages > 1 ? <ReactPaginate
                        activeClassName={'item active '}
                        breakClassName={'item break-me '}
                        breakLabel={'...'}
                        containerClassName={'pagination'}
                        disabledClassName={'disabled-page'}
                        marginPagesDisplayed={2}
                        nextClassName={"item next "}
                        nextLabel={">"}
                        initialPage={page - 1}
                        onPageChange={(ev) => navigate(`/evacuators/${ev.selected + 1}`)}
                        pageCount={pages}
                        pageClassName={'item pagination-page '}
                        pageRangeDisplayed={2}
                        previousClassName={"item previous"}
                        previousLabel={"<"}/> : null}
                </div>
                <DescEvacuator />
                <QuestionsEvacuator />
                <Transportation />
                <OnlineService />
                <BortEvacuator />
                <Ordering />
                <Instruction />
                <Footer/>
            </div>
        </div>
    );
}

export default Evacuators;