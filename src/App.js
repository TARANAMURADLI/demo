import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
// import Counter from "./Components/Counter";
import Information from "./Components/Information";
import Rabitabank from "./Components/Rabitabank";
import Kreditler from "./Components/Kreditler";
import Kartlar from "./Components/Kartlar";
import Emanetler from "./Components/Emanetler";
import Circle from "./Components/Circle";
import Lupa from "./Components/Lupa";
import OnlaynNovbe from "./Components/OnlaynNovbe";
import SlidesSekiller from "./Components/SlidesSekiller";
import SuretliKecidler from "./Components/SuretliKecidler";
import RabitaMobile from "./Components/RabitaMobile";
import ValyutaKursu from "./Components/ValyutaKursu";
import RabitaBot from "./Components/RabitaBot";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <div>
        <br />
        {/* <Counter /> */}
        <Information />

        <div className="main"> </div>

        <div className="hr">
          <br />
        </div>

        <div className="hr1">
          <Rabitabank />
        </div>

        <div>
          <br />{" "}
        </div>
        {/* ////// */}
        <div className="total-nav">
          <div></div>

          <div className="nav-totalss">
            <div>
              <div></div>
              <div className="creee">
                <Link className="credit1" to="/">
                  Kreditler
                </Link>
              </div>
            </div>
            <div className="card-total">
              <img
                className="card-photo"
                src="https://www.rabitabank.com/resized/fit24x15/center/pages/229/menu-card-1.png"
              />
              <Link className="cards1" to="/Kartlar">
                Kartlar
              </Link>{" "}
            </div>

            <div className="circles">
              <Link className="deposit1" to="/Emanetler">
                Əmanətlər
              </Link>
              <Link className="circle1" to="/Circle">
                ...
              </Link>
            </div>
          </div>
          <div></div>

          <div className="lupa-onlayn">
            <Link className="lupa" to="/Lupa">
              <img
                src={"https://cdn-icons-png.flaticon.com/512/2319/2319177.png"}
              />
            </Link>
            <Link className="onlayn-novbe" to="/OnlaynNovbe">
              <img
                className="calendar"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/calendar--v1.png"
              />
              Onlayn növbə
            </Link>

            <Routes>
              <Route path="/" element={<Kreditler />} />
              <Route path="/Kartlar" element={<Kartlar />} />
              <Route path="/Emanetler" element={<Emanetler />} />
              <Route path="/Circle" element={<Circle />} />
              <Route path="/Lupa" element={<Lupa />} />
              <Route path="/OnlaynNovbe" element={<OnlaynNovbe />} />
            </Routes>
          </div>
        </div>
      </div>
      <SlidesSekiller />
      <div>
        <SuretliKecidler />
      </div>
      <div>
        <RabitaMobile />
      </div>
      <div>
        <ValyutaKursu />
      </div>
   
     <RabitaBot />
     
     <Footer/>

    </div>
  );
}

export default App;
