import React from "react";
import "./Information.css";
const Information = () => {
  return (
    <div>
      <div className="total">
        <div className="tot1">
          <div className="general">
            <img src="https://cdn-icons-png.flaticon.com/512/2830/2830155.png" />
            <a className="common" href="">
              Ümumi Məlumat
            </a>
          </div>

          <div className="branch">
            <img
              className="location"
              src="https://img.icons8.com/chameleon-regular/24/map-pin.png"
              alt="map-pin"
            />
            <a className="BRANCH" href="">
              Filial və bankomtlar
            </a>
          </div>
        </div>
        <div className="rabita-button">
          <a className="year" href="">
            Rabitəbank 30 il
          </a>
        </div>
      </div>
    </div>
  );
};

export default Information;
