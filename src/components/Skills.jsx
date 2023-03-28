import React from "react";
import typescript from "../assets/stacks/typescript.png";
import javascript from "../assets/stacks/javascript.png";
import html from "../assets/stacks/html.png";
import css from "../assets/stacks/css.png";
import reactImage from "../assets/stacks/react.png";
import redux from "../assets/stacks/redux.png";
import axios from "../assets/stacks/axios.png";
import tailwind from "../assets/stacks/tailwind.png";
import bootstrap from "../assets/stacks/bootstrap.png";
// import bulma from "../assets/stacks/bulma.png";
import materialUi from "../assets/stacks/material-ui.png";
import python from "../assets/stacks/python.png";
import node from "../assets/stacks/node.png";
import mysql from "../assets/stacks/mysql.png";
import mongodb from "../assets/stacks/mongodb.png";
import express from "../assets/stacks/express.png";
import sequelize from "../assets/stacks/sequelize.png";
import jwt from "../assets/stacks/jwt.png";
import mocha from "../assets/stacks/mocha.png";
import chai from "../assets/stacks/chai.png";
import sinon from "../assets/stacks/sinon.png";
import jest from "../assets/stacks/jest.png";
import rtl from "../assets/stacks/react-testing-library.png";
import pytest from "../assets/stacks/pytest.png";
import eslint from "../assets/stacks/eslint.png";
import docker from "../assets/stacks/docker.png";
import git from "../assets/stacks/git.png";
import github from "../assets/stacks/github.png";
import vite from "../assets/stacks/vite.png";
import vercel from "../assets/stacks/vercel.png";
import railway from "../assets/stacks/railway.png";
// import slack from "../assets/stacks/slack.png";
import figma from "../assets/stacks/figma.png";
import vscode from "../assets/stacks/vscode.png";
// import windows from "../assets/stacks/windows.png";
import linux from "../assets/stacks/linux.png";
import { BsChevronDoubleDown } from 'react-icons/bs';
import { Link } from "react-scroll";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: css,
      title: "CSS",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-sky-600",
    },
    {
      id: 6,
      src: redux,
      title: "Redux",
      style: "shadow-purple-400",
    },

    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-600",
    },
    // {
    //   id: 8,
    //   src: bulma,
    //   title: "Bulma",
    //   style: "shadow-teal-300",
    // },
    {
      id: 9,
      src: materialUi,
      title: "Material UI",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: jest,
      title: "Jest",
      style: "shadow-red-500",
    },
    {
      id: 11,
      src: rtl,
      title: "React Testing Library",
      style: "shadow-red-800",
    },
    {
      id: 12,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 13,
      src: node,
      title: "Node.js",
      style: "shadow-green-400",
    },
    {
      id: 14,
      src: mysql,
      title: "MySQL",
      style: "shadow-sky-600",
    },
    {
      id: 15,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 16,
      src: express,
      title: "Express",
      style: "shadow-white",
    },
    {
      id: 17,
      src: sequelize,
      title: "Sequelize",
      style: "shadow-blue-700",
    },
    {
      id: 18,
      src: jwt,
      title: "Json Web Token",
      style: "shadow-pink-500",
    },
    {
      id: 19,
      src: mocha,
      title: "Mocha",
      style: "shadow-yellow-600",
    },
    {
      id: 20,
      src: sinon,
      title: "Sinon",
      style: "shadow-white",
    },
    {
      id: 21,
      src: chai,
      title: "Chai",
      style: "shadow-rose-300",
    },
    {
      id: 22,
      src: pytest,
      title: "pytest",
      style: "shadow-sky-400",
    },
    {
      id: 23,
      src: git,
      title: "Git",
      style: "shadow-orange-600",
    },
    {
      id: 24,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 25,
      src: axios,
      title: "Axios",
      style: "shadow-purple-500",
    },
    {
      id: 26,
      src: docker,
      title: "Docker",
      style: "shadow-sky-400",
    },
    {
      id: 27,
      src: vite,
      title: "Vite",
      style: "shadow-indigo-400",
    },
    {
      id: 28,
      src: vercel,
      title: "Vercel",
      style: "shadow-white",
    },
    {
      id: 29,
      src: railway,
      title: "Railway",
      style: "shadow-white",
    },
    // {
    //   id: 29,
    //   src: slack,
    //   title: "Slack",
    //   style: "shadow-sky-400",
    // },
    {
      id: 30,
      src: eslint,
      title: "ESLint",
      style: "shadow-indigo-500",
    },
    {
      id: 31,
      src: figma,
      title: "Figma",
      style: "shadow-gray-400",
    },
    {
      id: 32,
      src: vscode,
      title: "VS Code",
      style: "shadow-blue-400",
    },
    // {
    //   id: 31,
    //   src: windows,
    //   title: "Windows",
    //   style: "shadow-blue-400",
    // },
    {
      id: 33,
      src: linux,
      title: "linux",
      style: "shadow-orange-400",
    },
  ];

  return (
    <div
      name="skills"
      className="min-h-screen bg-gradient-to-b from-gray-800 to-black w-full pt-36 pb-20"
    >
      <div className="max-w-screen-lg 2xl:max-w-screen-xl mx-auto p-4 flex flex-col justify-center text-white md:h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>

          <p className="pt-16 pb-6 px-2 text-lg">
            Possuo conhecimento e experiência em metodologias ágeis, incluindo Scrum e Kanban. Tenho experiência na criação APIs RESTful e de estruturas de software robustas e bem definidas, seguindo os princípios do MSC (Model-Service-Controller) e clean code.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-11 gap-5 text-center py-8 px-12 sm:px-0  cursor-pointer">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 duration-500 py-3 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto min-mx-10" />
              <p className="text-xs mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex justify-center px-8 py-15">
        <Link
          to="portfolio"
          smooth
          duration={500}
          >
          <button
            className="group text-white w-fit px-8 py-3 my-2 flex items-center rounded-md bg-transparent mb-5"
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
