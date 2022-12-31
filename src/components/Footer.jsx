import React from "react";

const Footer = () => {
  return (
    <div className="bottom-0 w-full p-10 bg-gradient-to-b from-gray-800 to-black text-white text-center z-10">
      <p className="px-4 font-medium text-gray-500">
        Criado por <a href="https://github.com/Rafael-Souza-97"><span className="cursor-pointer font-medium text-gray-500 tech">Rafael Souza</span></a> utilizando <a href="https://pt-br.reactjs.org/"><span className="cursor-pointer font-medium text-gray-500 hover:text-cyan-400">React</span></a> e <a href="https://tailwindcss.com/"><span className="cursor-pointer font-medium text-gray-500 hover:text-cyan-400">Tailwind</span></a>
      </p> 
    </div>
  );
};

export default Footer;
