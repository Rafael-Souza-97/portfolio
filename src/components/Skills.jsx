import React, { useState, useEffect } from "react";
import { frontend, backend, tests, tools } from "../utils/Stacks";
import { BsChevronDoubleDown, BsTools } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { FaDatabase } from 'react-icons/fa';
import { MdDesktopMac } from 'react-icons/md';
import { Link } from "react-scroll";

const Experience = () => {
  const [isShowingFront, setIsShowingFront] = useState(true);
  const [isShowingBack, setIsShowingBack] = useState(false);
  const [isShowingTests, setIsShowingTests] = useState(false);
  const [isShowingTools, setIsShowingTools] = useState(false);
  const [mapSkills, setMapSkills] = useState(frontend);

  useEffect(() => {
    if(isShowingFront) setMapSkills(frontend)
    if(isShowingBack) setMapSkills(backend)
    if(isShowingTests) setMapSkills(tests)
    if(isShowingTools) setMapSkills(tools)
  }, [isShowingFront, isShowingBack, isShowingTests, isShowingTools]);

  const resetButtons = () => {
    setIsShowingFront(false);
    setIsShowingBack(false);
    setIsShowingTests(false);
    setIsShowingTools(false);
  }

  return (
    <div
      name="skills"
      className="min-h-screen bg-gradient-to-b from-gray-800 to-black w-full pt-36 pb-20"
    >
      <div className="max-w-screen-lg xl:max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white md:h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>

          <p className="pt-16 pb-6 px-2 text-lg">
            Possuo conhecimento e experiência em metodologias ágeis, incluindo Scrum e Kanban. Tenho experiência na criação APIs RESTful e de estruturas de software robustas e bem definidas, seguindo os princípios do MSC (Model-Service-Controller) e clean code.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center pt-12 pb-6">
          <button
            type='button'
            className={`text-white mx-0 sm:mx-10 py-2 selector ${isShowingFront ? "font-bold transition duration-500 ease-in-out" : "opacity-60 transition duration-500 ease-in-out"}`}
            onClick={() => {
              resetButtons();
              setIsShowingFront(true);
            }}
          >
            {isShowingFront ? (
              <span>
                <MdDesktopMac className='inline-block mr-2 mb-1' />
                Front-End
              </span>
            ) : (
              "Front-End"
            )}
          </button>

          <button
            type='button'
            className={`text-white mx-0 sm:mx-10 py-2 selector ${isShowingBack ? "font-bold transition duration-500 ease-in-out" : "opacity-60 transition duration-500 ease-in-out"}`}
            onClick={() => {
              resetButtons();
              setIsShowingBack(true);
            }}
          >
            {isShowingBack ? (
              <span>
                <FaDatabase className='inline-block mr-2 mb-1' />
                Back-End
              </span>
            ) : (
              "Back-End"
            )}
          </button>

          <button
            type='button'
            className={`text-white mx-0 sm:mx-10 py-2 selector ${isShowingTests ? "font-bold transition duration-500 ease-in-out" : "opacity-60 transition duration-500 ease-in-out"}`}
            onClick={() => {
              resetButtons();
              setIsShowingTests(true);
            }}
          >
            {isShowingTests ? (
              <span>
                <BiSearch className='inline-block mr-1 mb-1' />
                Testes
              </span>
            ) : (
              "Testes"
            )}
          </button>

          <button
            type='button'
            className={`text-white mx-0 sm:mx-10 py-2 selector ${isShowingTools ? "font-bold transition duration-500 ease-in-out" : "opacity-60 transition duration-500 ease-in-out"}`}
            onClick={() => {
              resetButtons();
              setIsShowingTools(true);
            }}
          >
            {isShowingTools ? (
              <span>
                <BsTools className='inline-block mr-2 mb-1' />
                Ferramentas
              </span>
            ) : (
              "Ferramentas"
            )}
          </button>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-10 text-center py-8 px-12 sm:px-0  cursor-pointer">
          { mapSkills.map(({ id, src, title, style }) => (
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

      <div className="hidden md:flex justify-center px-8 py-6">
        <Link
          to="projetos"
          smooth
          duration={500}
          >
          <button
            className="group text-white w-fit px-8 py-3 my-2 flex items-center rounded-md bg-transparent mb-5"
          >
            Projetos
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
