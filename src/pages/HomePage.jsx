import React from 'react';
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import About from "../components/About";
import Timeline from '../components/Timeline';
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import SocialLinks from "../components/SocialLinks";
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import TopButton from '../components/TopButton';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <TopButton />
      <Timeline />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default HomePage;