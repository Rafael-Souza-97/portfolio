import React from "react";
import { Link } from "react-scroll";
import { BsChevronDoubleDown } from 'react-icons/bs';
import pokedex from "../assets/portfolio/pokedex.png";
import exchangeWallet from "../assets/portfolio/exchangeWallet.png";
import appDeReceitas from "../assets/portfolio/appDeReceitas.png";
import tabelaDoCampeonato from "../assets/portfolio/tabelaDoCampeonato.png";
import smithProject from "../assets/portfolio/smithProject.png";
import storeManager from "../assets/portfolio/storeManager.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "Pokédex",
      src: pokedex,
      href: "https://rafael-pokedex-challenge.vercel.app/",
      repository: "https://github.com/Rafael-Souza-97/pokedex",
    },
    {
      id: 2,
      name: "Exchange Wallet",
      src: exchangeWallet,
      href: "https://exchange-wallet-bay.vercel.app/",
      repository: "https://github.com/Rafael-Souza-97/exchange-wallet",
    },
    {
      id: 3,
      name: "App de Receitas",
      src: appDeReceitas,
      href: "https://app-de-receitas-pink.vercel.app/",
      repository: "https://github.com/Rafael-Souza-97/app-de-receitas"
    },
    {
      id: 4,
      name: "Tabela do Campeonato",
      src: tabelaDoCampeonato,
      repository: "https://github.com/Rafael-Souza-97/tabela-do-campeonato"
    },
    {
      id: 5,
      name: "Smith Project",
      src: smithProject,
      repository: "https://github.com/Rafael-Souza-97/smith-project"
    },
    {
      id: 6,
      name: "Store Manager",
      src: storeManager,
      repository: "https://github.com/Rafael-Souza-97/store-manager"
    },
  ];

  return (
    <div
      name="portfolio"
      className="md:flex flex-col w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white pt-32"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center md:h-full px-4">
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 pt-10 sm:px-8">
          {projects.map(({ id, name, src, href, repository }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={href ? href : repository}>
                <img
                  src={src}
                  alt={name}
                  className="rounded-md duration-200 hover:scale-105 px-1"
                />
              </a>
              { href ? 
              <div className="flex flex-wrap xl:flex-nowrap xl:px-10 items-center justify-center">
                <a href={href}>
                  <button className="px-6 my-4 xl:my-10 duration-200 hover:underline text-center">
                    Demonstração
                  </button>
                  </a>

                  <a className="text-center" href={repository}>
                    <button className="px-6 my-4 xl:my-10 duration-200 hover:underline text-center">
                      Repositório 
                    </button>
                  </a>
                </div>: 
                <div className="flex flex-wrap items-center justify-center">
                  <a className="text-center" href={repository}>
                    <button className="px-6 m-4 xl:my-10 duration-200 hover:underline text-center">
                      Repositório 
                    </button>
                  </a>
                </div>}
              </div>
            ))}
          </div>

          <h6 className="text-gray-400 pt-14 text-center">
            Visite meu <a
              href={"https://github.com/Rafael-Souza-97?tab=repositories"}
              className="cursor-pointer tech"
              target="_blank"
              rel="noreferrer"
              >
                GitHub
              </a> para ver mais projetos e acompanhar minha evolução!
            </h6>
        </div>

        <div className="hidden md:flex justify-center px-8 py-28">
          <Link
            to="contato"
            smooth
            duration={500}
            >
            <button
              className="group text-white flex items-center rounded-md bg-transparent"
            >
              Contato
              <span>
                <BsChevronDoubleDown size={25} className="ml-2 down-arrow" />
              </span>
            </button>
          </Link>
        </div>
    </div>
  );
};

export default Portfolio;
