import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HeroParallax } from "./components/ui/hero-parallex";
import { HeroParallaxDemo } from "./components/ui/hero";
import Footer from "./footer";
import AboutUs from "./AboutUs";
import Work from "./work";
import ImageSlider from "./imageSlider";

function App() {
  return (
    <div className="App">
      {/* <img src="hero.png" className="hero"></img> */}
      <ImageSlider />
      <a
        href="https://wa.me/7340002501"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <Work />
      {/* <AboutUs /> */}
      <Footer />
    </div>
  );
}

export default App;
