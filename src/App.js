import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import CreatingEvacuator from "./pages/CreatingEvacuator";
import Evacuators from "./pages/Evacuators";

function App() {
    return (
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navigate to={"/evacuators/1"} />}/>
              <Route path="/evacuators/:page" element={<Evacuators />}/>
              <Route path="/create-evacuator" element={<CreatingEvacuator />}/>
          </Routes>
        </BrowserRouter>
    );
}

export default App;