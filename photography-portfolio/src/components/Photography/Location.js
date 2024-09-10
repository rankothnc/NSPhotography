import React from "react";
import Footer from "../Footer";
import "../../assets/styles/Photography/wildlife.css";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

function Location() {
  return (
    <div className="photography-container">
      <Navbar />
      <div className="photography-header">
        <h1>Location</h1>
      </div>
      <section className="topics-section">
        <Link to="/location/topic" className="topic">Topic 1</Link>
        <Link to="/location/topic" className="topic">Topic 2</Link>
        <Link to="/locaation/topic" className="topic">Topic 3</Link>
      </section>
      <Footer />
    </div>
  );
}

export default Location;
