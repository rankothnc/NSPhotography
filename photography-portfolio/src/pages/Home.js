import React from "react";
import "../assets/styles/home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <section id="about">
        <h2>About</h2>
        <p>Preferred name</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>
      <section id="photography">
        <h2>Photography</h2>
        <div className="categories">
          <div>Wildlife</div>
          <div>Landscape</div>
          <div>Location</div>
          <div>Travel</div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
