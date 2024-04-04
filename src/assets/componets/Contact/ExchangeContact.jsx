import React from "react";
import contaxOne from "../../img/about/contaxt_image.png"
import contaxTwo from "../../img/about/contaxt_hung.png"

const ExchangeContact = () => {
  return (
    <section id="exchangeContact" className="bg-theam-second py-2">
      <div className="container">
        <div className="row py-4 ">
          <div>
            <h3 className="font-monst-bold text-center">CONNECTING</h3>
            <p className="font-monst-reg">
              $RAFA integrates three traditionally inefficient sectors of
              environmental markets, consolidating origination, verification,
              and trading into a comprehensive, cross-spectrum online platform.
              This platform streamlines the accounting, monitoring,
              verification, reporting, tokenization, and trading of
              environmental assets in a financially liquid, reliable, and
              partially decentralized ecosystem for environmental asset finance,
              trading, and services. Our proprietary technologies will secure
              and trade tokens, NFTs, and carbon credits on the blockchain,
              eliminating fraud and double counting while ensuring proper
              retirement. This marks the first implementation of such a system
              on the web 3.0.
            </p>
            <div className="row ">
               <div className="col-8  border">
                <div className="d-flex justify-content-center">
                <img src={contaxOne}></img>
                </div>
                 
               </div>
               <div className="col-4">
                  <img src={contaxTwo} className="image-frm"></img>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExchangeContact;
