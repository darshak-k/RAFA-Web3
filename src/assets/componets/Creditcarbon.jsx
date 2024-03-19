import React from "react";
import blogOne from "../img/blog-one.png";
import blogTwo from "../img/blog-two.png";
import blogThree from "../img/blog-three.png";

const Creditcarbon = () => {
  return (
    <section id="creditCarbon" className=" bg-theam-second py-5">
      <div className="container">
        <h1 className="font-55 text-them-black w-38 font-monst-bold">
          Credit Carbon in the press
        </h1>
        <div className="my-5">
          <div className="row my-md-5 my-4">
            <div className="col-4">
              <h2 className="font-34  font-monst-bold text-them-black">
                Blomberg
              </h2>
            </div>
            <div className="col-8">
              <h2 className="font-16 font-monst-bold text-them-black ">
                Carbon-Neutral Crypto Asset Fund
              </h2>
              <p className="line-h-30 font-16 text-second-muted  font-monst-reg">
                Crypto’s energy consumption is a hot topic. Quicktake’s Matthew
                Long talks with One River Asset Management and Moss.Earth about
                a carbon-neutral crypto asset fund. Presented by Anatha (Source:
                Quicktake)
              </p>
            </div>
          </div>

          <div className="row my-md-5 my-4">
            <div className="col-4">
              <div className="">
                <img className="img-fluid w-logo-box" src={blogOne}></img>
              </div>
            </div>
            <div className="col-8">
              <h2 className="font-16 font-monst-bold text-them-black ">
                SkyBridge buys 38,500 tons of carbon offsets
              </h2>
              <p className="line-h-30 font-16 text-second-muted  font-monst-reg">
                SkyBridge Capital has purchased 38,436 tons of tokenized carbon
                offsets. Global investment firm SkyBridge Capital has partnered
                with carbon credit provider Moss to purchase tokens representing
                38,436 tons of carbon offsets.
              </p>
            </div>
          </div>
          <div className="row my-md-5 my-4">
            <div className="col-4">
              <div className="">
                <img className="img-fluid " src={blogTwo}></img>
              </div>
            </div>
            <div className="col-8">
              <h2 className="font-16 font-monst-bold text-them-black ">
                Digital asset hedge fund One River files with SEC to create a
                carbon-neutral bitcoin ETF
              </h2>
              <p className="line-h-30 font-16 text-second-muted  font-monst-reg">
                One River, the digital asset hedge fund backed by billionaire
                investor Alan Howard, has officially filed to create bitcoin
                exchange-traded fund that incorporates the purchase of carbon
                credits in an effort to make the product carbon-neutral.
              </p>
            </div>
          </div>
          <div className="row my-md-5 my-4">
            <div className="col-4">
              <div className="">
                <img className="img-fluid w-logo-box" src={blogThree}></img>
              </div>
            </div>
            <div className="col-8">
              <h2 className="font-16 font-monst-bold text-them-black ">
                KlimaDAO increases carbon offset stash by 50% in two months
              </h2>
              <p className="line-h-30 font-16 text-second-muted  font-monst-reg">
                The carbon offset accumulating DAO on Polygon has rapidly
                increased the amount of offsets it has in its treasury by
                increasing spending and diversifying its source of offsets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creditcarbon;
