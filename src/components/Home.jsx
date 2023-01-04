import React from 'react'
import heroImage from "../assets/hero/heroImage.png";
import { BsChevronDoubleDown } from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-scroll";
import '../styles/Home.css';

const Home = () => {
  return (
    <div
      name="home"
      id="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pb-20 home-big-container"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8 md:flex-row home-container">
        <div className="flex flex-col justify-center h-full text-container mt-32 mr-10">
          <h2 className="text-3xl sm:text-6xl text-white mb-10 text-center text-mg">
            Olá, eu sou o <strong>Rafael Souza</strong>
          </h2>
          <h3 className="text-2xl sm:text-3xl text-gray-300 mb-5 text-center tech">
            Desenvolvedor Web
          </h3>
          <h6 className="text-gray-400 py-7 mb-5 text-center">
            Desde sempre curioso, constante aprendiz e apaixonado por {""}
            <TypeAnimation
                className="tech"
                sequence={[
                  1500,
                  "tecnologia 🖤",
                  3000,
                  "inovação 🖤",
                  2000,
                  "resolver problemas 🖤",
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
          </h6>
        </div>

        <div className="image-container">
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-5/6 md:w-full mt-36 image-effect hero"
          />
        </div>
      </div>

      <div className="hidden md:flex justify-center px-8 py-28"> 
        <Link
          to="sobre mim"
          smooth
          duration={500}
        >
          <button
          className="group text-white flex items-center rounded-md bg-transparent mb-5"
          >
            Sobre mim
            <span>
              <BsChevronDoubleDown size={20} className="ml-2 down-arrow" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
