import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";



function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" exact Component={Home} />
      <Route path="/contact" exact Component={Contact} />
    </Routes>
   </Router>
  );
}

export default App;
