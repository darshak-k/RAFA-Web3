import React from "react";

const Formhiring = () => {
  return (
    <section id="hearingForm" className=" bg-theam-second">
      <div className="container py-5">
        <div className="row w-80">
          <div className="col-md-6 col-12">
            <div className="center-h h-100">
              <h1 className="font-38 w-60 font-monst-bold text-theam my-2">
                How can you help us?
              </h1>
              <h1 className="font-60 w-60 font-monst-bold text-green-muted my-2">
                WE ARE HIRING
              </h1>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="center-h h-100">
              <div className="">
                <form id="form-sub-hiring">
                  <div className="mb-3">
                    <label for="name" className="form-label font-16 text-theam font-monst-reg">
                     Name
                    </label>
                    <input
                      type="text"
                      className="form-control input-hiring"
                      id="name"
                    />
                    
                  </div>

                  <div className="mb-3">
                    <label for="email" className="form-label font-16 text-theam font-monst-reg">
                     Email
                    </label>
                    <input
                      type="email"
                      className="form-control input-hiring"
                      id="email"
                    />
                    
                  </div>

                  <div className="mb-3">
                    <label for="Message" className="form-label font-16 text-theam font-monst-reg">
                     Message
                    </label>
                    <textarea
                      type="text"
                      className="form-control input-hiring"
                      id="Message"
                      rows="4"
                    />
                    
                  </div>
                 
               
                  <button type="submit" className="btn font-16 text-green font-monst-bold btn-send">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formhiring;
