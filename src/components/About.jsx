import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white about-container"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
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
    </div>
  );
};

export default About;
