import React from "react";
import exchangeWallet from "../assets/portfolio/exchange-wallet.png";
import appDeReceitas from "../assets/portfolio/app-de-receitas.png";
import shoppingCart from "../assets/portfolio/shopping-cart.jpg";
import { BsChevronDoubleDown } from 'react-icons/bs';
import { Link } from "react-scroll";

const Portfolio = () => {
  const frontend = [
    {
      id: 1,
      name: "Exchange Wallet",
      src: exchangeWallet,
      href: "https://exchange-wallet-bay.vercel.app/",
      repository: "https://github.com/Rafael-Souza-97/exchange-wallet"
    },
    {
      id: 2,
      name: "App de Receitas",
      src: appDeReceitas,
      href: "https://app-de-receitas-pink.vercel.app/",
      repository: "https://github.com/Rafael-Souza-97/app-de-receitas"
    },
    {
      id: 3,
      name: "Shopping Cart",
      src: shoppingCart,
      href: "https://shopping-cart-roan-one.vercel.app/",
      repository: "https://github.com/Rafael-Souza-97/shopping-cart"
    }
  ];

  const backend = [
    {
      id: 4,
      name: "Store Manager",
      src: shoppingCart,
      repository: "https://github.com/Rafael-Souza-97/store-manager"
    },
    {
      id: 5,
      name: "Talker Manager",
      src: shoppingCart,
      repository: "https://github.com/Rafael-Souza-97/talker-manager"
    },
    {
      id: 6,
      name: "Smith Project",
      src: shoppingCart,
      repository: "https://github.com/Rafael-Souza-97/smith-project"
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-14"
    >
      <div className="max-w-screen-lg mx-auto p-2 flex flex-col justify-center px-8 pt-10 sm:pt-0 md:pt-10 lg:pt-30 xl:pt-21 pb-20">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>

        <h3 className="py-4 text-1xl text-center">Front-End</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-8 mb-10">
          {frontend.map(({ id, name, src, href, repository }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={href}>
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <p className="text-2xl font-signature text-center mt-5 mb-5">{name}</p>
              </a>

            <div className="items-center justify-center grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              <a href={href}>
                <button className="px-6 py-3 m-4 duration-200 hover:scale-100 text-center">
                  Demonstração
                </button>
                </a>

                <a className="text-center" href={repository}>
                  <button className="px-6 py-3 m-4 duration-200 hover:scale-100 text-center">
                    Repositório 
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <h3 className="py-4 text-1xl text-center">Back-End</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8">
          {backend.map(({ id, name, src, repository }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={repository}>
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <p className=" text-2xl font-signature text-center mt-5 mb-5">{name}</p>
              </a>
              <div className="flex items-center justify-center">
                <a className="text-center" href={repository}>
                  <button className="px-6 py-3 m-4 duration-200 hover:scale-100">
                    Repositório
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex justify-center">
        <Link
          to="contato"
          smooth
          duration={500}
          >
          <button
            className="group text-white w-fit px-8 py-3 my-2 flex items-center rounded-md bg-transparent mb-5"
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
