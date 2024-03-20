import React from "react";
import { FaRedditAlien } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const FooterRafa = () => {
  return (
    <footer id="footerOfrafa" className="bg-theam">
      <div className="container py-5">
        <div className="row footer-h">
          <div className="col-md-5 col-12">
            <div className="d-flex flex-column justify-content-between h-100">
              <div>
                <h1 className=" text-uppercase text-green font-60 px-md-3 font-monst-bold ">
                  $rafa
                </h1>
                <span className="text-white font-14 font-monst-reg">
                  Copyright © 2024 All rights reserved.
                </span>
              </div>
              <div>
                <div className="d-flex my-2">
                  <a className="icon-a lan-footer b-r-1 font-monst-reg font-16 pe-4">
                    English
                  </a>
                  <a className="icon-a lan-footer b-r-1 font-monst-reg font-16 px-4">
                    Español
                  </a>
                  <a className="icon-a lan-footer font-monst-reg font-16 px-4">
                    Français
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-12">
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="d-flex flex-column mt-md-4">
                <div className="d-flex flex-md-row flex-column">
                  <div className="d-flex mx-md-3 flex-column">
                    <a
                      href="#"
                      className="text-green icon-a font-16 my-2 font-monst-bold"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="text-green icon-a font-16  my-2 font-monst-bold"
                    >
                      Whitepaper
                    </a>
                    <a
                      href="#"
                      className="text-green icon-a font-16  my-2 font-monst-bold"
                    >
                      CoinMarketCap
                    </a>
                  </div>
                  <div className="d-flex mx-md-5 flex-column">
                    <a
                      href="#"
                      className="text-green icon-a font-16 my-2 font-monst-bold"
                    >
                      Nft’s
                    </a>
                    <a
                      href="#"
                      className="text-green icon-a font-16  my-2 font-monst-bold"
                    >
                      Where to buy
                    </a>
                    <a
                      href="#"
                      className="text-green icon-a font-16  my-2 font-monst-bold"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
              {/* foot ico */}
              <div className="d-flex flex-wrap">

                <div>
                  <a
                    href="#"
                    className="text-green icon-a  mx-3 font-34 m-0 p-0  my-2 font-monst-bold"
                  >
                    <FaRedditAlien />
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-green icon-a  mx-3 font-34 m-0 p-0  my-2 font-monst-bold"
                  >
                   <FaTwitter />
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-green icon-a  mx-3 font-34 m-0 p-0  my-2 font-monst-bold"
                  >
                    <FaTelegram />
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-green icon-a  mx-3 font-34 m-0 p-0  my-2 font-monst-bold"
                  >
                   <FaLinkedin />
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-green icon-a  mx-3 font-34 m-0 p-0  my-2 font-monst-bold"
                  >
                    <FaInstagram />
                  </a>
                </div>  
                <div>
                  <a
                    href="#"
                    className="text-green icon-a  mx-3 font-34 m-0 p-0  my-2 font-monst-bold"
                  >
                    <FaFacebookF />
                  </a>
                </div>  
                <div>
                  <a
                    href="#"
                    className="text-green icon-a  mx-3 font-34 m-0 p-0  my-2 font-monst-bold"
                  >
                    <FaYoutube />
                  </a>
                </div>  
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterRafa;
