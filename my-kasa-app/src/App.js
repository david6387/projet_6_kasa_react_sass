// import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import "./sass/base/app.scss";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import AccomodationInfo from "./pages/AccomodationInfo.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

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
