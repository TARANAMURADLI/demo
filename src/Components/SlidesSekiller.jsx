import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/splide.min.css";
import "./SlidesSekiller.css";
const SlidesSekiller = () => {
  console.log("Component is loaded");
  return (
    <div className="common-slayd">
      <div className="slayd">
         <Splide className="splide"> 
          <SplideSlide>
            <div className="image1">
              <div className="cashh">
                <br />
                <div className="com">
                  <h2 className="cash-money"> Nağd pul krediti </h2>
                  <p className="all">Bütün ehtiyaclar üçün nağd pul krediti</p>
                </div>
                <div className="sss">
                  <div className="cash">
                    <div className="amount">
                      <span>Məbləğ</span>
                      <h4>30 000 AZN</h4>
                    </div>
                    <div className="amount1">
                      <span>Faiz dərəcəsi</span>
                      <h4>11.5%-dən</h4>
                    </div>
                    <div className="amount2">
                      <span>Müddət</span>
                      <h4>48 aya qədər</h4>
                    </div>
                    <div className="photo1">
                      <img
                        className="img1"
                        src="https://www.rabitabank.com/resized/resize440/center/pages/4/287211137-390228146405222-2435774707310499160-n.png"
                      />
                    </div>
                  </div>
                  <div className="but">
                    <button className="button1">Sifariş et</button>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="slayd1">
              <div className="image2">
                <div className="cashh2">
                  <br />
                  <div className="com1">
                    <h2 className="credit-card"> Kartmane Kredit kartı </h2>
                  </div>
                  <div className="sss1">
                    <div className="cash1">
                      <div className="amount-second">
                        <span>Nağlaşdırma</span>
                        <h4>100%</h4>
                      </div>
                      <div className="amount-second1">
                        <span>Güzəşt müddəti</span>
                        <h4>100 gün</h4>
                      </div>
                      <div className="amount-second2">
                        <span>Kart limiti</span>
                        <h4>200 - 15 000 AZN</h4>
                      </div>
                      <div className="photo2">
                        <img
                          className="img2"
                          src="https://www.rabitabank.com/resized/resize440/center/pages/5/kredit-sayt-banner.png"
                        />
                      </div>
                    </div>
                    <div className="but1">
                      <button className="button2">Sifariş et</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
  
          <div className="slayd2">
              <div className="image3">
                <div className="cashh3">
                  <br />
                  <div className="com2">
                    <h2 className="green-card"> Yaşıl keşbek</h2>
                  </div>
                  <div className="sss2">
                    <div className="cash2">
                      <div className="amount-three">
                        <span>Kateqoriya</span>
                        <h4>Seçim yoxdur</h4>
                      </div>
                      <div className="amount-three1">
                        <span>Dövriyyə</span>
                        <h4>Tələb yoxdur</h4>
                      </div>
                      <div className="amount-three2">
                        <span>Maksimal məbləğ</span>
                        <h4>200 AZN</h4>
                      </div>
                      <div className="photo3">
                        <img
                          className="img3"
                          src="https://www.rabitabank.com/resized/resize440/center/pages/2827/icon-size.png"
                        />
                      </div>
                    </div>
                    <div className="but2">
                      <button className="button3">Ətraflı bax</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default SlidesSekiller;
