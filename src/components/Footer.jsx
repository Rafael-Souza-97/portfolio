import React from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const icons = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/rafael-souza97/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Rafael-Souza-97",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:apsouza.rafael97@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <FaFileDownload size={23} />
        </>
      ),
      href: "/Curriculo_Rafael_Souza.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="bottom-0 flex-row w-full p-10 bg-black text-white text-center z-10">
      <ul className="flex xl:hidden items-center justify-center space-x-3 sm:space-x-8 md:space-x-10 pb-5">
        {icons.map(({ id, child, href, download }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 tech"
          >
            <a
              href={href}
              className="lg:flex justify-between items-center "
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
  
      <p className="px-8 font-medium text-gray-500 tracking-widest text-1xl">
        Criado por <a href="https://github.com/Rafael-Souza-97"><span className="cursor-pointer font-medium text-gray-500 tech">Rafael Souza</span></a> utilizando <a href="https://pt-br.reactjs.org/"><span className="cursor-pointer font-medium text-gray-500 hover:text-cyan-400">React</span></a> e <a href="https://tailwindcss.com/"><span className="cursor-pointer font-medium text-gray-500 hover:text-cyan-400 font">Tailwind</span></a>
      </p> 
    </div>
  );
};

export default Footer;
