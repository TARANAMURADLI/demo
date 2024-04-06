import React from "react";
import "./RabitaMobile.css";
const RabitaMobile = () => {
  return (
    <div className="rb">
      <br />
      <br />
      <br />
      <div className="rabtaMobile">
        <div className="rabita-mobile">
          <h1 className="rabita1">Rabita Mobile</h1>
        </div>
        <div className="finance">
          <p className="finance1">
            Hər yerdə maliyyə xidmətlərimizdən <br /> faydalanmaq üçün Rabita
            Mobile istifadə <br />
            edin!
          </p>
          <div className="mobile-mainpart">
            <img
              className="mobile"
              src="https://www.rabitabank.com/images/mobile_basic.png"
            />
          </div>
        </div>

        <div className="g-code">
          <img
            className="photo-g"
            src="https://www.rabitabank.com/images/gr.jfif"
          />
          <p className="qr">
            Telefonunuzun kamerası ilə <br /> QR codu scan edin
          </p>
        </div>
      </div>
    </div>
  );
};

export default RabitaMobile;
