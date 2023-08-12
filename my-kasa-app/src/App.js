// import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

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
        <Route path="/accomodation">
          <Route path=":pageId" element={<AccomodationInfo />} />
        </Route>
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
