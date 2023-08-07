// import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import AccomodationInfo from "./pages/AccomodationInfo.js";
import ErrorPage from "./pages/ErrorPage.js";
import "./styles/app.scss";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodationinfo" element={<AccomodationInfo />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
