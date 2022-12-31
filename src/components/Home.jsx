import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
import '../styles/Home.css';

const Home = () => {
  return (
    <div
      name="home"
      className="md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pb-20 home-big-container"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8 md:flex-row home-container">
        <div className="flex flex-col justify-center h-full text-container mt-32">
          <h2 className="text-3xl sm:text-6xl text-white mb-10 text-center text-mg">
            Olá, eu sou o <strong>Rafael Souza</strong>
          </h2>
          <h3 className="text-2xl sm:text-3xl text-gray-300 mb-5 text-center tech">
            Desenvolvedor Web
          </h3>
          <p className="text-gray-400 py-7 max-w-lg mb-5 text-center">
            Desde sempre curioso, constante aprendiz e apaixonado por <span className="tech">tecnologia</span> e <span className="tech">inovação</span> 🖤
          </p>

          <div className="flex justify-center"> 
            {/* <Link
              to="portfolio"
              smooth
              duration={500}
              
            > */}
            <button
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
              
            {/* </Link> */}
          </div>
        </div>

        <div className="image-container">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-5/6 md:w-full mt-36 image-effect"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
