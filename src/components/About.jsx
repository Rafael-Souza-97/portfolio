import React from "react";
import { BsChevronDoubleDown } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md'
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="sobre mim"
      className="min-h-screen md:flex flex-col w-full bg-gradient-to-b from-gray-800 to-black text-white pt-44"
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
        
        <p className="text-xl text-justify">
          Sou um desenvolvedor web junior, dedicado a aprender e aprimorar minhas habilidades na área. Atualmente, estou envolvido em um projeto para construir um aplicativo de rede social mobile chamado Skambook com outros desenvolvedores mais experientes. Esse projeto tem me ajudado muito a desenvolver minhas habilidades e conhecimentos na área. 
        </p>
          
        <p className="text-xl mt-7 text-justify">
          Além disso, tenho cerca de 5 anos de experiência trabalhando em manutenção e operação em empresas multinacionais de grande porte, o que me deu uma base sólida em resolução de problemas e trabalho em equipe. Atualmente, estou em transição de carreira, buscando conhecimento e oportunidades no mundo do desenvolvimento web. Estou sempre estudando, buscando novas formas de aprender, e estou interessado em encontrar uma oportunidade de colocar minhas habilidades em prática.
        </p>

        <p className="flex justify-center text-xl tech text center items-center text-[1.23rem] mt-20 text-gray-300">
          <a href={"https://www.google.com/maps/place/Conselheiro+Lafaiete,+MG,+36400-000/@-20.650093,-43.7753665,12z/data=!3m1!4b1!4m5!3m4!1s0xa3dfe8a2b7c767:0xc6792e00ae5e1d48!8m2!3d-20.6610086!4d-43.7866376"} className="flex align-middle" rel="noreferrer" target="_blank">
        <MdLocationPin size={26} color={"gray"} /> Conselheiro Lafaiete - MG
        </a>
        </p>
      </div>

      <div className="hidden md:flex justify-center px-8 py-28">
        <Link
          to="timeline"
          smooth
          duration={500}
          >
          <button
            className="group text-white w-fit px-8 py-3 my-2 flex items-center rounded-md bg-transparent mb-5"
          >
            Timeline
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

