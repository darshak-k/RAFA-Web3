import React from "react";
import { useTranslation } from "react-i18next";
import iconOne from "../img/iconOne.png";
import iconTwo from "../img/iconTwo.png";
import iconThree from "../img/iconThree.png";
import iconFour from "../img/iconFour.png";
import treeOnGirl from "../img/hero-two-girl.png";

const Whitepaper = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-theam py-5" id="whitepaper">
      <div className="container ">
        <h6 className="text-green font-16 font-monst-bold">
          {t("heroSubTitle")}
        </h6>

        <section className="w-80">
          <h1 className="text-green font-monst-bold  font-40 ">
            {t("heroTwoOne")}
          </h1>
          <span className="text-green font-22 py-2  font-monst-semiBold">
            {t("heroTwoTwo")}
          </span>
          <p className="font-13 font-monst-semiBold text-green">
            {t("heroTwoThree")}
          </p>
          <h3 className="text-green font-monst-bold font-30">
            {t("heroTwoFour")}
          </h3>
          <div className="d-flex justify-content-between flex-wrap">
            <h6 className="font-monst-semiBold font-14 text-green">
              {t("heroTwoListOne")}
            </h6>
            <h6 className="font-monst-semiBold font-14 text-green">
              {t("heroTwoListTwo")}
            </h6>
            <h6 className="font-monst-semiBold font-14 text-green">
              {t("heroTwoListThree")}
            </h6>
            <h6 className="font-monst-semiBold font-14 text-green">
              {t("heroTwoListFour")}
            </h6>
            <h6 className="font-monst-semiBold font-14 text-green">
              {t("heroTwoListFive")}
            </h6>
          </div>
          <h3 className="font-18 text-green font-monst-bold">
            "In the dance of time, preservation's song outshines the fleeting
            flames of slash and burn."
          </h3>
          <h2 className="text-green font-monst-reg line-h-40 font-20">
            {t("heroTwoFive")}
          </h2>

          <div className="row ">
            <div
              className="col-md-6 col-12 border-b-greay py-4"
              id="sub-ic-text"
            >
              <span className="font-monst-reg line-h-50 font-38 text-green">
                $RAFA wants to unite & make the world a better place by saving
                the planet
              </span>
            </div>
            <div className="col-md-6 col-8 px-md-5 py-4">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column my-2">
                  <div className=" d-flex justify-content-center ">
                    <div>
                      <img className=" img-icon-x" src={iconOne}></img>
                    </div>
                  </div>
                  <span className="text-center font-monst-reg  text-green font-12">
                    Ai Technology
                  </span>
                </div>
                <div className="d-flex flex-column my-2">
                  <div className=" d-flex justify-content-center ">
                    <div>
                      {" "}
                      <img className=" img-icon-x" src={iconTwo}></img>
                    </div>
                  </div>
                  <span className="text-center font-monst-reg  text-green font-12">
                    Education
                  </span>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column my-2">
                  <div className=" d-flex justify-content-center ">
                    <div>
                      {" "}
                      <img className=" img-icon-x" src={iconThree}></img>
                    </div>
                  </div>
                  <span className="text-center font-monst-reg  text-green font-12">
                    Fertilizers
                  </span>
                </div>
                <div className="d-flex flex-column my-2">
                  <div className=" d-flex justify-content-center ">
                    <div>
                      {" "}
                      <img className=" img-icon-x" src={iconFour}></img>
                    </div>
                  </div>
                  <span className="text-center font-monst-reg  text-green font-12">
                    Reforestation
                  </span>
                </div>
              </div>
            </div>

            <h3 className="font-20 text-green font-monst-bold ">
              We will use the latest technology for transparency and security:
            </h3>
            <h2 className="font-34 text-green font-monst-bold">Blockchain</h2>
            <h2 className="text-green font-monst-reg line-h-40 font-20">
              We will tokenize our carbon credits, meaning we will code them
              into blockchain, leading them to be traceable, secure and avoiding
              double spending. The utmost credibility for the important
              conservation work.
            </h2>
            <div id="sub-ic-text" className="w-75">
              <span className="font-monst-reg line-h-50 font-38 text-green">
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
                <h2 className="text-green font-monst-bold font-38 w-60 ">Wanna Invest in our token?</h2>
              </div>
              <div>
                 <button className="btn btn-buy-two font-14 font-monst-bold my-2">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="">
              <img src={treeOnGirl} className="img-box-girl "></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whitepaper;
