import Footer from "./components/Footer.js";
import Menu from "./components/Menu.js";
import Home from "./pages/home.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
