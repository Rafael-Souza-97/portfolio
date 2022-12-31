import React from "react";
import { BsChevronDoubleDown } from 'react-icons/bs';
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="sobre mim"
      className="md:flex flex-col w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-36 md:pt-0"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center md:h-full px-4">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre Mim
          </p>
        </div>

        <p className="text-xl text-[1.23rem] mt-10">
          Bacharel em Administração por formação, atualmente estudando Desenvolvimento Web Full-Stack na <a href="https://www.betrybe.com/"><span  className="text-green-300 hover:underline">Trybe</span></a>.
        </p>

        <br />

        <p className="text-xl">
          Desde sempre curioso, apaixonado por tecnologia e constante aprendiz. Tenho aproximadamente 5 anos de experiência atuando na area de manutenção e operação em empresas de grande porte. Atualmente, estou em transição de carreira, buscando conhecimento e oportunidade na área de desenvolvimento web.
        </p>
          
        <p className="text-xl mt-7">
          Possuo foco em desenvolvimento com Metologias Ágeis, Javascript, Typescript, React, Redux, Jest, Docker, Nodejs, MySQL, Git dentre outras tecnologias que uso para criar aplicações web.
        </p>
      </div>

      <div className="hidden md:flex justify-center">
        <Link
          to="skills"
          smooth
          duration={500}
          >
          <button
            className="group text-white w-fit px-8 py-3 my-2 flex items-center rounded-md bg-transparent mb-5"
          >
            Skills
            <span>
              <BsChevronDoubleDown size={25} className="ml-2 down-arrow" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;

