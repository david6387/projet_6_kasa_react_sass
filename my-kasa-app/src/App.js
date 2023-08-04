import Footer from "./components/footer.js";
import Menu from "./components/menu.js";
import Home from "./pages/home.js";
import "./styles/app.css";

function App() {
  return (
    <>
      <Menu />
      <Home />;
      <Footer />;
    </>
  );
}

export default App;
