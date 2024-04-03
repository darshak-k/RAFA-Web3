import React from "react";
import About from "./assets/componets/About";
import Contact from "./assets/componets/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./assets/componets/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />  
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
