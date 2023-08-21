import { BrowserRouter,Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./Home";
import About from "./About";
import Design from "./Design";
import Service from "./Service";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <header>
      <h3 className="log">THE CINEFLEX CINEMAS</h3>
      <nav className="items">
        <a href = "/">Home</a>
        <a href = "/about">About</a>
        <a href = "/design">Experience</a>
        <a href = "/service">Booking</a>
        <a href = "/Contact">Contact</a>
      </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/design" element={<Design />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;