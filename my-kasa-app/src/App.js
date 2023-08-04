import Footer from "./components/footer.js";
import Gallery from "./components/gallery.js";
import Menu from "./components/menu.js";
import Home from "./pages/home.js";
import "./styles/app.css";

function App() {
  return (
    <>
      <Menu />
      <Home />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
