import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import niftyLogo from "../img/niftLogo.png"

const NeftyActon = () => {
  return (
    <section className=" bg-theam py-5  " id="niftyaction">
      <div className="container my-md-5">
        <div className="row  flex-column-reverse flex-md-row flex  justify-content-md-end">
          <div className="col-xl-4 col-md-6 col-12">
            <h2 className=" font-38 font-monst-bold text-green">
              $RAFA will issue NFT’S for each hectar that is prospected.
            </h2>
            <p className="text-mute-sky font-monst-semiBold my-3 w-80">
            We're nearing completion of our Metaverse, where you can freely explore and engage with people worldwide. This revolutionary social media platform will not only transform lives but also offer earning opportunities.
            </p>
            <div className="d-flex mt-3">
                  <a href="#" className="icon-a text-green"><FaArrowDown  className="font-38 me-5" /></a>
                  <a href="#" className="icon-a text-green"><FiEdit   className="font-38 me-5" /></a>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="center-h  h-100">
                <div className="d-flex justify-content-md-end">

                 <img className="img-fluid my-3  w-80" src={niftyLogo}/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeftyActon;
