import React from "react";
import "../assets/styles/home.css";
import "../components/Footer";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <header>
        <h1>NUWAN SIRIWARDHANA PHOTOGRAPHY</h1>
        <nav>
          <a href="#about">About</a>
          <a href="">Photography</a>
          <a href="">Contact</a>
        </nav>
      </header>
      <section>
        <h2>About</h2>
        <p>Preferred name</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>
      <section>
        <h2>Photography</h2>
        <div>
            <div>Wildlife</div>
            <div>Landscape</div>
            <div>Location</div>
            <div>Travel</div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
