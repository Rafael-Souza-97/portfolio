import React from "react";
import { Link } from "react-scroll";
import { BsChevronDoubleDown } from 'react-icons/bs';
import exchangeWallet from "../assets/portfolio/exchange-wallet.png";
import appDeReceitas from "../assets/portfolio/app-de-receitas.png";
import shoppingCart from "../assets/portfolio/shopping-cart.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "Exchange Wallet",
      src: exchangeWallet,
      href: "https://exchange-wallet-bay.vercel.app/",
      repository: "https://github.com/Rafael-Souza-97/exchange-wallet",
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
    },
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
      className="md:flex flex-col w-full md:h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white pt-36 md:pt-0"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center md:h-full px-4">
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:px-8">
          {projects.map(({ id, name, src, href, repository }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={href ? href : repository}>
                <p className="text-1xl text-center my-2 text-gray-300 tech">{name}</p>
                <img
                  src={src}
                  alt={name}
                  className="rounded-md duration-200 hover:scale-105"
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

//sm:pt-0 md:pt-16 md:pb-44 lg:pt-30 xl:pt-21 pb-22 lg:pb-40 xl:pb-2

// {<div
//       name="portfolio"
//       className="w-full h-5/6 bg-gradient-to-b from-black via-black to-gray-800 text-white pt-36"
//     >
//       <div className="max-w-screen-lg mx-auto flex flex-col justify-center px-5">
//         <div className="pb-10">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Portfolio
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:px-8">
//           {projects.map(({ id, name, src, href, repository }) => (
//             <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
//               <a href={href ? href : repository}>
//                 <p className="text-1xl text-center my-2 text-gray-300 tech">{name}</p>
//                 <img
//                   src={src}
//                   alt={name}
//                   className="rounded-md duration-200 hover:scale-105"
//                 />
//               </a>
//               { href ? 
//               <div className="flex flex-wrap xl:flex-nowrap xl:px-10 items-center justify-center">
//                 <a href={href}>
//                   <button className="px-6 my-4 xl:my-10 duration-200 hover:underline text-center">
//                     Demonstração
//                   </button>
//                   </a>

//                   <a className="text-center" href={repository}>
//                     <button className="px-6 my-4 xl:my-10 duration-200 hover:underline text-center">
//                       Repositório 
//                     </button>
//                   </a>
//                 </div>: 
//                 <div className="flex flex-wrap items-center justify-center">
//                   <a className="text-center" href={repository}>
//                     <button className="px-6 m-4 xl:my-10 duration-200 hover:underline text-center">
//                       Repositório 
//                     </button>
//                   </a>
//                 </div>}
//               </div>
//             ))}
//           </div>
//         </div>
//     </div>}