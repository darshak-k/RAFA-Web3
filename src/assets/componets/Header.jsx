import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  const { t } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState("en");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  return (
    <div>
      {/*       
       <h1
        onMouseEnter={() => changeLanguage('hi')} 
        onMouseLeave={() => changeLanguage(currentLanguage)}
        onClick={() => changeLanguage('hi')}>
        hi
      </h1>
      <h1
        onMouseEnter={() => changeLanguage('en')} 
        onMouseLeave={() => changeLanguage(currentLanguage)}
        onClick={() => changeLanguage('en')}>
        en
      </h1> */}
      <Navbar collapseOnSelect expand="md" className="header-main p-0">
        <Container>
          <Navbar.Brand href="#home" className="font-monst-bold font-50">
            RAFA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex justify-content-center w-100">
              <div className="d-flex">
                <div className="d-flex flex-column justify-content-center">
                  <div className="d-flex flex-column flex-md-row">
                    <a className="mx-1 main-menu font-monst-bold nav-link">
                      About
                    </a>
                    <a className="mx-1 main-menu font-monst-bold nav-link">
                      Contact
                    </a>
                    <div className="d-flex flex-column justify-content-center">
                      <div className="d-flex">
                        <a
                          className=" main-menu ln mx-1"
                          onMouseEnter={() => changeLanguage("en")}
                          onMouseLeave={() => changeLanguage(currentLanguage)}
                          onClick={() => changeLanguage("en")}
                        >
                          EN
                        </a>
                        <span>|</span>
                        <a className=" main-menu  ln mx-2 "
                          onMouseEnter={() => changeLanguage("hi")}
                          onMouseLeave={() => changeLanguage(currentLanguage)}
                          onClick={() => changeLanguage("hi")}>ES </a>
                        <span>|</span>
                        <a className=" main-menu  ln mx-1">FR </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex">
                <button className="btn btn-buy font-monst-bold my-4 my-md-0 monst ms-md-5">
                  Where To Buy
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
