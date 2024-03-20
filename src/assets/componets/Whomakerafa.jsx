import React from "react";
import { FaLinkedin } from "react-icons/fa";
import quote from "../img/quote.png";
import oddGirl from "../img/oddGirl.png"

const Whomakerafa = () => {
  return (
    <section id="makerafa" className="py-5 bg-theam-second">
      <div className="container">
        <h1 className="text-theam font-monst-bold font-55 my-5">
          Who makes $RAFA
        </h1>
        <div className="row flex-column-reverse flex-lg-row  flex">
          <div className="col-lg-6 col-12">
            <div className="contain-text center-h h-100 py-md-5 py-4">
              <h3 className="font-24 font-monst-reg line-h-40">
                <i>
                  At $RAFA, we refuse to accept that, despite all available
                  technology, we can't save the planet. We are constantly
                  innovating, confident that the new economy will be the key to
                  safeguarding our world
                </i>
              </h3>
              <div className="d-flex my-4 justify-content-between">
                <div>
                  <h1 className="text-theam font-24 m-0 font-monst-bold">
                    RAFA REN
                  </h1>
                  <span className=" text-uppercase font-monst-reg font-14">
                    CEO AND CO-FOUNDER
                  </span>
                </div>
                <div className="center-h">
                  <div className="d-flex">
                    <div className="center-h">
                      <div className="custtom-bullet"></div>
                    </div>
                    <div className="center-h">
                      <div className="border-x-light "></div>
                    </div>
                    <div className="center-h">
                      <div className="icon-box-bullet center-h ">
                        <div className="d-flex justify-content-center">
                          <FaLinkedin className="text-green" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* qouteset */}
              <div className="quote-top">
                  <img src={quote} className="quote-img"/>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="d-flex justify-content-center justify-content-lg-end">
            <img className="img-fluid" src={oddGirl}></img>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whomakerafa;
