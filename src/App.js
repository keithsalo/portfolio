import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarTwo from "./components/NavBarTwo.js";
import "./css/styles.css";
import "./css/navbar.css";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js"; // fine until...
import Work from "./components/Work.js";
import Contact from "./components/Contact.js";

// import Thoughts from "./components/Thoughts.js";

function App() {
  return (
    <BrowserRouter>
      <NavBarTwo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
