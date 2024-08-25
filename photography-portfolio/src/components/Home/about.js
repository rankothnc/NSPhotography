import React from "react";
import "../../assets/styles/Home/about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
    <div className="about-content">
    <div className="about-left">
      <h2>About</h2>
      <p>About...</p>
      </div>
      <div className="about-right">
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      </div>
    </section>
  );
};

export default About;
