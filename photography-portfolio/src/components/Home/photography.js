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
          <div className="placeholder">Landscape</div>
        </div>
        <div className="category location">
          <div className="placeholder">Location</div>
        </div>
        <div className="category travel">
          <div className="placeholder">Travel</div>
        </div>
      </div>
    </section>
  );
};

export default Photography;
