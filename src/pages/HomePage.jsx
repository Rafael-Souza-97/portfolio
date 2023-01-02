import React from 'react';
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import SocialLinks from "../components/SocialLinks";
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import NextSession from '../components/NextSession';
const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <NextSession name="Contato" bg="black"/>
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default HomePage;