import React from 'react';
import Header from "../components/Header";
import CreateEvacuator from "../components/CreateEvacuator";
import Footer from "../components/Footer";

function CreatingEvacuator() {
    return (
        <div className={"wrapper"}>
            <div className={"container"}>
                <Header title={"Создание объявления"} />
                <CreateEvacuator />
                <Footer />
            </div>
        </div>
    );
}

export default CreatingEvacuator;