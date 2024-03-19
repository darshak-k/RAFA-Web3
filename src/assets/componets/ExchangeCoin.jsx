import React from "react";
import cryptoLogo from "../img/cryptoLogo.png";
import logoOne from "../img/logoOne.png";
import logoTwo from "../img/logoTwo.png";
import logoThree from "../img/logoThree.png";


const ExchangeCoin = () => {
  return (
    <section id="exchangeCoin" className="bg-theam-second py-2">
      <div className="container">
        <div className="w-80 pt-5">
          <h2 className=" p-0  w-60 font-monst-reg font-30 m-0">
            Easy to buy, easy to use:  Buy and trade the $RAFA token on the
          </h2>
          <h2 className="font-monst-bold p-0  font-34 m-0 text-them-black" >world’s top exchanges very soon</h2>
       
          <div className="d-flex ">
            <img src={cryptoLogo} className="img-fluid img-crypto-exchange"/>
        </div>
        <div className="d-flex justify-content-between">
             <div className="center-h">
                <img className="img-fluid" src={logoOne}></img>
             </div>
             <div className="center-h">
                <img className="img-fluid" src={logoTwo}></img>
             </div>
             
             <div className="center-h">
                <img className="img-fluid" src={logoThree}></img>
             </div>
        </div>
        </div>
      
      </div>
    </section>
  );
};

export default ExchangeCoin;
