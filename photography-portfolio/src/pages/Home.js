import React from "react";
import "../assets/styles/home.css";
import Header from "../components/Home/Header";
import Footer from "../components/Footer";
import About from "../components/Home/about";
import Photography from "../components/Home/photography";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <section id="about">
        <About />
      </section>
      <Photography />
      <Footer />
    </div>
  );
};

export default Home;
