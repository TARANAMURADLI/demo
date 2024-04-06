import React from "react";
import "./ValyutaKursu.css";
import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

  const ValyutaKursu = () => {
  let initialValue = "Konvertasiya et";
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  const [value, onChange] = useState(1);

  return (
    <div>
      <br />
      <br />
      <div className="total-range">
        <div className="currency-contain">
          <div className="currency-main">
            {show && <h2 className="currency-h">Valyuta kursu</h2>}

            <div className="convers-main">
              {!show === true ? <h2 className="convers">Konvertasiya</h2> : ""}
              <div className="sells">
                <div className="sells-first">
                  {!show === true ? <span className="sell">Satıram</span> : ""}
                  {!show === true ? (
                    <div className="number">
                      {!show === true ? (
                        <p className="first"> {count - 1}</p>
                      ) : (
                        ""
                      )}
                      {!show === true ? (
                        <select className="value">
                          <option value="">AZN</option>
                          <option value="">USD</option>
                          <option value="">EUR</option>
                        </select>
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  {!show === true ? (
                    <button
                      onClick={() => setCount(count + 1)}
                      className="icons"
                    >
                      <img className="arrow" src="exchange (1).png" />
                    </button>
                  ) : (
                    ""
                  )}
                </div>

                <div className="buys">
                  {!show === true ? <span className="buy">Alıram</span> : ""}
                </div>
                <div className="second-part">
                  {!show === true ? (
                    <div className="number1">
                      {!show === true ? (
                        <p className="seconds">{0 - count}</p>
                      ) : (
                        ""
                      )}
                      {!show === true ? (
                        <select className="value">
                          <option value="">AZN</option>
                          <option value="">USD</option>
                          <option value="">EUR</option>
                        </select>
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            <div className="cashless">
              <input id="switcher" type="checkbox" />
              {show && <span className="cash-1">Nağdsız</span>}
              {show && <label for="switcher"></label>}
              {show && <span className="cash-2">Nağd</span>}
            </div>
          </div>

          <div className="cedvel">
            {show && (
              <table>
                <thead>
                  <tr>
                    <th>Valyuta</th>
                    <th>Alış</th>
                    <th>Satış</th>
                    <th>Mərkəzi Bank</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>GBP</td>
                    <td>2.113</td>
                    <td>2.182</td>
                    <td>2.1564</td>
                  </tr>
                  <tr>
                    <td>EUR</td>
                    <td>1.833</td>
                    <td>1.864</td>
                    <td>1.8446</td>
                  </tr>

                  <tr>
                    <td>RUB</td>
                    <td>0.0183</td>
                    <td>0.0193</td>
                    <td>0.0186</td>
                  </tr>
                  <tr>
                    <td>USD</td>
                    <td>1.695</td>
                    <td>1.702</td>
                    <td>1.7</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          <div id="footer-currency">
            <span className="courses"></span>
          </div>
          <div className="conversions">
            <span className="course"></span>

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="conversion"
            >
              {show === true ? "Konvertasiya et" : "Məzənnəyə qayıt"}
            </button>
          </div>
        </div>
        <br />
        {/* part 2 */}
        <div className="Range">
          <div>
            <h2 className="credit-calc">Kredit kalkulyatoru</h2>
          </div>
          <div className="crdit-amount">
            <span>Kredit meblegi</span>
          </div>
          {/* <div className="rangg">
            <div className="Amount-azn">
              <span className="Amount">300</span>
              <span className="AZN">AZN</span>
            </div>
            <RangeSlider
              className="single-thumb"
              defaultValue={[0, 300]}
              thumbsDisabled={[true, false]}
              rangeSlideDisabled={true}
            />
          </div> */}
          <div className="skills">
            <div className="Amount-azn1">
              <span className="Amount1">300</span>
              <span className="AZN-1">AZN</span>
            </div>
          </div>
          <div className="progress-bar">
            <div className="html">
              <span> </span>
            </div>
          </div>
          <div className="Total-skills">
            <div className="skil">
              <div className="crdit-amount1">
                <span>Kredit müddəti</span>
              </div>

              <div className="skills-first">
                <div className="Amount-azn2">
                  <span className="Amount2">36</span>
                  <span className="AZN-2">Ay</span>
                </div>
              </div>
              <div className="progress-bar1">
                <div className="html">
                  <span> </span>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="crdit-amount2">
                <span>Faiz dərəcəsi</span>
              </div>

              <div className="skills-second">
                <div className="Amount-azn3">
                  <span className="Amount3">11.5</span>
                  <span className="AZN-3">%</span>
                </div>
              </div>
              <div className="progress-bar2">
                <div className="html">
                  <span> </span>
                </div>
              </div>
            </div>
          </div>
          <div className="Monthly-payment">
            <span className="Monthly">Aylıq ödəniş:</span>
            <a className="orders" href= "" >
              Sifariş et
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValyutaKursu;
