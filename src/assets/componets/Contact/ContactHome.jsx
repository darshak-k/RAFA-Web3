import React from "react";
import { FaChevronDown } from "react-icons/fa";
import abOne from '../../img/about/a-hero-1.jpeg'

const  ContactHome = () => {
  return (
    <div>
      <section className="bg-theam home-h py-3" id="contect-home">
        <div className="d-flex flex-column justify-content-between  h-100">
          <div className="d-flex justify-content-center justify-content-xl-start">
          <div className="w-70">
            <div className="container ">
              <div>
                <div className="d-flex flex-column flex-md-row  justify-content-between">
                  <div>
                    <h1 className="text-green font-169 font-monst-bold ">
                      Case
                    </h1>
                    <h1 className="text-green font-169 font-monst-bold">
                      Study
                    </h1>
                  </div>
                  <div className="d-flex d-none d-md-flex justify-content-center flex-column">
                    <span className="text-green font-169 font-monst-bold">
                      ||  
                    </span>
                  </div>
                  <div className="d-flex justify-content-center flex-column">
                    <h1 className="text-green font-169 font-monst-bold">NFT</h1>
                  </div>
                </div>
                <div className="">
                  <h1 className="text-green font-monst-bold font-40">
                    $RAFA leverages blockchain technology to bring transparency
                    to climate preservation initiatives.
                  </h1>
                </div>
              </div>
            </div>
          </div> 
          </div>
          
          <div className="d-flex justify-content-center">
            <i className="text-center font-38 py-4">
              <FaChevronDown className="text-green" />
            </i>
          </div>
        </div>
        {/* image box */}
        <div className="img-about-box">
           <img src={abOne} className="img-left-box"/>
        </div>
      </section>
    </div>
  );
};

export default ContactHome;
