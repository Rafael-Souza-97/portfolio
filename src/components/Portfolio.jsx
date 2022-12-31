import React from "react";
import exchangeWallet from "../assets/portfolio/exchange-wallet.png";
import appDeReceitas from "../assets/portfolio/app-de-receitas.png";
import shoppingCart from "../assets/portfolio/shopping-cart.jpg";

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
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen portfolio-container pb-10"
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>

        <h3 className="py-6 text-1xl text-center">Front-End</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-10">
          {frontend.map(({ id, name, src, href, repository }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={href}>
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <p className=" text-2xl font-signature text-center mt-5">{name}</p>
              </a>

              <div className="flex items-center justify-center">
              <a href={href}>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-100">
                  Demonstração
                </button>
                </a>

                <a href={repository}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-100">
                    Repositório
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <h3 className="py-8 text-1xl text-center">Back-End</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {backend.map(({ id, name, src, repository }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={repository}>
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <p className=" text-2xl font-signature text-center mt-5">{name}</p>
              </a>
              <div className="flex items-center justify-center">
                <a href={repository}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-100">
                    Repositório
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
