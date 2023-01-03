import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import { BsChevronDoubleDown } from 'react-icons/bs';
import { Link } from "react-scroll";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-36"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white md:h-full px-8">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>

          <p className="py-16 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem similique ducimus repellendus optio accusantium! Nihil modi sunt facere alias iusto, dicta eligendi, cupiditate fugit fuga, necessitatibus nemo? Aliquam, dolor.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem similique ducimus repellendus optio accusantium! Nihil modi sunt facere alias iusto, dicta eligendi, cupiditate fugit fuga, necessitatibus nemo? Aliquam, dolor.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10 gap-6 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto min-mx-10" />
              <p className="text-xs mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex justify-center px-8 py-5">
        <Link
          to="portfolio"
          smooth
          duration={500}
          >
          <button
            className="group text-white flex items-center rounded-md bg-transparent mb-5"
          >
            Portfolio
            <span>
              <BsChevronDoubleDown size={25} className="ml-2 down-arrow" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Experience;
