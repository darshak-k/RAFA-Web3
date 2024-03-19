import React from "react";
import { useTranslation } from "react-i18next";
import { RiEqualFill } from "react-icons/ri";
import leafIcon from "../img/leafeOne.png";
import hearoOne from "../img/hero-1.png";
import { FaChevronDown } from "react-icons/fa";

const Home = () => {
  const { t } = useTranslation();
  // <h1>{t('welcome')}</h1>
  // <p>{t('listItem1')}</p>
  return (
    <section className="bg-theam home-h border-b-greay" id="home">
      <div className="hero-1 ">
        <div className="container pt-5">
          <h1 className="text-green font-monst-bold font-169">$RAFA</h1>
          <h3 className="w-80 font-55 text-green font-monst-bold">
            The world’s most <br></br> liquid carbon credit token.
          </h3>
          <div className="d-flex w-90 justify-content-between">
            <div className="center-h">
              <h4 className="w-70 font-30 text-left-sum text-white font-monst-bold">
                1 $RAFA token
              </h4>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <RiEqualFill className="text-green font-55" />
            </div>
            <div className="d-flex ">
              <div className="img-icon center-h">
                <img src={leafIcon} className="img-fluid" />
              </div>
              <div className="center-h">
                <h4 className="w-80 text-right-sum   font-30 text-white font-monst-bold">
                  1 forestry (Amazonia) carbon credit
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <i className="text-center font-38 py-2">
          <FaChevronDown className="text-green" />
        </i>
      </div>
      <div className="sub-title">
        <div className="d-flex justify-content-center">
          <div className="container">
            <div className="d-flex  pt-4  justify-content-end">
              <h1 className="font-55 text-green font-monst-bold">
                NOT A MEME COIN
              </h1>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="d-flex justify-content-center">
          <div className="container-fluid">
            <div className="d-flex justify-content-end">
              <div className="img-box-1">
                <img src={hearoOne} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
