import React from "react";
import { useTranslation } from "react-i18next";

const WhitepaperContact = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-theam py-5" id="WhitepaperContact">
      <div className="container ">
        <h6 className="text-green font-16 font-monst-bold">
          {t("heroSubTitle")}
        </h6>

        <section className="w-80">
          <h1 className="text-green font-monst-bold my-md-5 my-3 font-40 ">
            $RAFA will be the first Meme Token with 3.0 Metaverse and Browser in
            the World!
          </h1>
          <span className="text-green font-22 my-md-5 py-2  font-monst-semiBold">
            $RAFA is an environmental platform,a Markeplace that provides carbon
            credits transactions to individuals and companies of any size that
            want to offset their emissions
          </span>
          <p className="font-34 font-monst-semiBold my-3 text-green">
            $RAFA OWNS $350 MILLION WORTH OF CARBON CREDITS
          </p>
          <h3 className="text-green font-monst-reg my-md-5 my-3 font-34">
            We are currently dedicated to simplifying the process and enhancing
            accessibility for clients to purchase carbon credits from Amazon
            projects. We believe that Amazon forestry projects have the most
            significant impact in social, environmental, and economic terms
            among all carbon credit initiatives.
          </h3>
          <div className="row py-4">
            <div
              className="col-md-8 col-12  py-3  border-b-greay "
              id="sub-ic-text"
            >
              <span className="font-monst-reg line-h-50 font-34 text-green">
                Human actions leading to rainforest devastation are primarily
                motivated by economic pressures rather than spite.
              </span>
            </div>

            <div className="py-md-4 py-3">
              <h3 className="font-20 text-green font-monst-bold ">
                We will use the latest technology for transparency and security:
              </h3>
              <h2 className="font-34 text-green font-monst-bold">Blockchain</h2>
            </div>

            <h2 className="text-green font-monst-reg line-h-40 font-20">
              We will tokenize our carbon credits, meaning we will code them
              into blockchain, leading them to be traceable, secure and avoiding
              double spending. The utmost credibility for the important
              conservation work.
            </h2>
            <div id="sub-ic-text" className="w-75 py-4 mt-md-5">
              <span className="font-monst-reg line-h-50 font-34 text-green">
                The Corporation will open an office in Zug Switzerland to launch
                the $RAFA token. We will be under supervision of the Swiss
                market supervisory authority (FINMA). We elected to undertake
                this extra step to provide additional security to our investors
                and provide our token further credibility
              </span>
            </div>
          </div>
        </section>
        
        <div className="row">
          <div className="col-md-6 col-12">
            <div className=" d-flex flex-column h-100 justify-content-center">
              <div>
                <h2 className="text-green font-monst-bold font-38 w-60 ">
                  Wanna Invest in our token?
                </h2>
              </div>
              <div>
                <a href="https://phantom.app/">
                  <button className="btn btn-buy-two font-14 font-monst-bold my-2">
                    Buy Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default WhitepaperContact;
