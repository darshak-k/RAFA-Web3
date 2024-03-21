import React from "react";
import cryptoLogo from "../img/logo-crypto.png";
import cryptoTwo from "../img/crypto-two.png";


const ExchangeCoin = () => {
  return (
    <section id="exchangeCoin" className="bg-theam-second py-2">
     
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-6 py-5 col-12">
            <div className="d-flex h-100 flex-column justify-content-between">
              <h2 className=" p-0  w-80 font-monst-reg font-30 m-0">
                Easy to buy, easy to use:  Buy and trade the $RAFA token on the
              </h2>
              <h2 className="font-monst-bold p-0  font-34 m-0 text-them-black">
                world’s top exchanges very soon
              </h2>

              <div className="d-flex my-5  w-80">
                <img
                  src={cryptoLogo}
                  className="img-fluid"
                />
              </div>
              <h1 className="text-center font-monst-bold font-34">Total Supply: 1billion</h1>
            </div>
          </div>
          <div className="col-md-6 py-5 col-12">
      
            <div className="d-flex h-100 flex-column justify-content-between">
              <h2 className=" p-0  w-80 font-monst-reg font-30 m-0">
              To buy $RAFA, get phantom wallet, Purchase $SOL and send it to your Phantom wallet.
              </h2>
              

              <div className="d-flex my-5  w-80">
                <img
                  src={cryptoTwo}
                  className="img-fluid"
                />
              </div>
              <h1 className="text-center font-monst-bold font-34">tokens locked for 2 yers: 300 million </h1>
            </div>
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExchangeCoin;
