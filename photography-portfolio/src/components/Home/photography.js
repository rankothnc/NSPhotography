import React from "react";
import "../../assets/styles/Home/photography.css";
import { Link } from "react-router-dom";

const Photography = () => {
  return (
    <section id="photography" className="photography-section">
      <h2>Photography</h2>
      <div className="categories">
        <div className="category wildlife">
        <Link to="/wildlife" className="placeholder">Wildlife</Link>
        </div>
        <div className="category landscape">
        <Link to="/landscape" className="placeholder">Landscape</Link>
        </div>
        <div className="category location">
        <Link to="/location" className="placeholder">Location</Link>
        </div>
        <div className="category travel">
        <Link to="/travel" className="placeholder">Travel</Link>
        </div>
      </div>
    </section>
  );
};

export default Photography;
