import React from "react";
import Footer from "../Footer";
import "../../assets/styles/Photography/wildlife.css";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

function Travel() {
  return (
    <div className="photography-container">
      <Navbar />
      <div className="photography-header">
        <h1>Travel</h1>
      </div>
      <section className="topics-section">
        <Link to="/travel/topic" className="topic">Topic 1</Link>
        <Link to="/travel/topic" className="topic">Topic 2</Link>
        <Link to="/travel/topic" className="topic">Topic 3</Link>
      </section>
      <Footer />
    </div>
  );
}

export default Travel;