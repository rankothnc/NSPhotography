import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/global.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Wildlife from "./components/Photography/Wildlife.js";
import Topic from "./components/Photography/Topics/Topics.js";

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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
