import React from "react";
import { BsChevronDoubleDown } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md'
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="sobre mim"
      className="min-h-screen md:flex flex-col w-full bg-gradient-to-b from-gray-800 to-black text-white pt-36"
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
          Sou uma pessoa apaixonadaTenho aproximadamente 5 anos de experiência atuando na area de manutenção e operação em empresas de grande porte. Atualmente, estou em transição de carreira, buscando conhecimento e oportunidade na área de desenvolvimento web.
        </p>
          
        <p className="text-xl mt-7">
          Comecei a trabalhar aos 14 anos. Tive a oportunidade de ser selecionado duas vezes como menor aprendiz, o que me permitiu adquirir experiência e conhecimento valiosos. Além disso, atuei como estagiário em uma oficina mecânica da minha cidade o que me deu ainda mais oportunidades de aprendizado e desenvolvimento. Em 2016, prestei serviço militar, onde tive a oportunidade de crescer pessoal e profissionalmente. Durante minha passagem pelo Exército Brasileiro, recebi uma recomendação por minha conduta profissional. Atualmente, estou em busca de novas oportunidades de trabalho e estou ansioso para colocar em prática tudo o que aprendi até agora e continuar aprendendo e crescendo profissionalmente
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

