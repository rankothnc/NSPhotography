import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/global.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Wildlife from "./components/Photography/Wildlife.js";
import Topic from "./components/Photography/Topics/Topics.js";
import Landscape from "./components/Photography/Landscape.js";
import Location from "./components/Photography/Location.js";
import Travel from "./components/Photography/Travel.js";

function App() {
  return (
    <Router>
      <div id="root">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wildlife" element={<Wildlife />} />
            <Route path="/wildlife/topic" element={<Topic />} />
            <Route path="/landscape" element={<Landscape />} />
            <Route path="/location" element={<Location/>}/>
            <Route path="/travel" element={<Travel/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
