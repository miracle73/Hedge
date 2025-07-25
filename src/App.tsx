import "./App.css";
import About from "./pages/about";

import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Technology from "./pages/technology";
import Contact from "./pages/contact";
import Form from "./pages/form";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-started" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
