import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import "../../../assets/styles/Photography/topic.css";


// refer to the onenote. landing issue. when landing wild page and relevant toipc page, it does not show the navbar. 


//import all images from the folder
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context("../../../assets/images/Topic1",false,/\.(png|jpe?g|svg)$/))

function Topic() {
  return (
    <div className="photography-container">
      <Navbar />
      <div className="photography-header">
        <h1>Topic</h1>
        <p>This is the detail view for the topic</p>
      </div>
      <section className="gallery-section">
        {images.map((image, index)=>(
            <img src={image} alt={`wildlife ${index + 1}`} key={index}/>
        ))        }
      </section>
      <Footer />
    </div>
  );
}

export default Topic;
