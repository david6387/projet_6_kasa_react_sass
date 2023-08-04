import Home from "./pages/home.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/app.scss";

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
