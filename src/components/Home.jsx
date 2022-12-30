import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
import '../styles/Home.css';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full text-container">
          <h2 className="text-3xl sm:text-6xl text-white mb-10 text-mg">
            Olá, meu nome é <strong>Rafael Souza</strong>
          </h2>
          <h3 className="text-2xl sm:text-3xl text-gray-300 mb-5 tech">
            Desenvolvedor Web
          </h3>
          <p className="text-gray-400 py-9 max-w-lg text-center">
            Desde sempre curioso, constante aprendiz e apaixonado por <span className="tech">tecnologia</span> e <span className="tech">inovação</span> 🖤
          </p>

          <div>
            {/* <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            > */}
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            {/* </Link> */}
          </div>
        </div>

        <div className="image-container ">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto sm:w-full image-effect"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
