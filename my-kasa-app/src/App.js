import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import AccomodationInfo from "./pages/AccomodationInfo.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import "./styles/app.scss";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  // les states et les variables (états, données)
  const [logements, setLogements] = useState([]);

  // les fonctions , les comportements
  useEffect(() => {
    fetch("http://localhost:3000/data/logements.json")
      .then((response) => {
        return response.json();
      })
      .then((datas) => {
        console.log(datas);
        datas.forEach((data) => {
          data.slug = data.title.toLowerCase().replaceAll(" ", "-");
        });
        setLogements(datas);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home logements={logements} />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodation">
          <Route
            path=":pageId"
            element={<AccomodationInfo logements={logements} />}
          />
        </Route>
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
