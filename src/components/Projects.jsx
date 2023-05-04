import React, { useState, useEffect } from "react";
import { fullProjects, frontProjects, backProjects } from "../utils/ProjectsLists";
import { BsChevronDoubleDown, BsCodeSlash, BsGithub, BsFillInfoCircleFill } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaDatabase } from 'react-icons/fa';
import { MdDesktopMac } from 'react-icons/md';
import { Link } from "react-scroll";

const Projetos = () => {
  const [isShowingFull, setIsShowingFull] = useState(true);
  const [isShowingFront, setIsShowingFront] = useState(false);
  const [isShowingBack, setIsShowingBack] = useState(false);
  const [isShowingMore, setIsShowingMore] = useState(false);
  const [mapProjects, setMapProjects] = useState(fullProjects);

  useEffect(() => {
    if(isShowingFull) setMapProjects(fullProjects)
    if(isShowingFront) setMapProjects(frontProjects)
    if(isShowingBack) setMapProjects(backProjects)
  }, [isShowingFront, isShowingBack, isShowingFull]);

  const resetButtons = () => {
    setIsShowingFull(false);
    setIsShowingFront(false);
    setIsShowingBack(false);
    setIsShowingMore(false);
  }

  return (
    <div
      name="projetos"
      className="md:flex flex-col w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center md:h-full px-4">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projetos
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center pt-10 pb-6">
          <button
            type='button'
            className={`text-white mx-0 sm:mx-10 py-2 selector ${ isShowingFront ? "font-bold transition duration-500 ease-in-out" : "opacity-60 transition duration-500 ease-in-out" }`}
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
            className={`text-white mx-0 sm:mx-10 py-2 selector ${ isShowingFull ? "font-bold transition duration-500 ease-in-out" : "opacity-60 transition duration-500 ease-in-out" }`}
            onClick={() => {
              resetButtons();
              setIsShowingFull(true);
            }}
          >
            {isShowingFull ? (
              <span>
                <BsCodeSlash className='inline-block mr-2 mb-1' />
                FullStack
              </span>
            ) : (
              "FullStack"
            )}
          </button>

          <button
            type='button'
            className={`text-white mx-0 sm:mx-10 py-2 selector ${ isShowingBack ? "font-bold transition duration-500 ease-in-out" : "opacity-60 transition duration-500 ease-in-out" }`}
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
            className={`text-white mx-0 sm:mx-10 py-2 ${ isShowingMore ? "font-bold transition duration-500 ease-in-out" : "opacity-60 transition duration-500 ease-in-out hover:opacity-100" }`}
            onClick={() => {
              resetButtons();
              setIsShowingMore(true);
              window.open('https://github.com/Rafael-Souza-97?tab=repositories', '_blank');
            }}
          >
            {isShowingMore ? (
              <span>
                <BsGithub className='inline-block hover:opacity-100 mb-2' />
              </span>
            ) : (
              <BsGithub className='inline-block hover:opacity-100 mb-2' />
            )}
          </button>
        </div>
      
        <div className="flex justify-center">
          <div className={`grid gap-14 pt-5 px-5 sm:px-8 grid-cols-1 sm:grid-cols-2 sm:gap-12 md:grid-cols-3 max-w-screen-lg ${mapProjects.length < 4 ? 'md:pt-36 sm:gap-10 md:grid-cols-3 md:max-w-6xl' : 'pt-7' }`}>
            { mapProjects.map(({ name, src, href, repository, style, description, gif, hover, showDescription }, index) => (
              <div key={ index } className={`shadow-md rounded-lg w-full ${ style } duration-200 hover:scale-105`}>
                <div className="hidden lg:flex">
                { description ? (
                  <BsFillInfoCircleFill
                    size={ 18 }
                    className="hidden lg:flex absolute top-1 right-2 cursor-pointer opacity-60 transition duration-500 ease-in-out hover:opacity-100"
                    onClick={() => {
                      const newProjects = [...mapProjects];
                      newProjects[index].showDescription = true;
                      setMapProjects(newProjects);
                    }}
                  /> ) : null 
                }

                { showDescription && (
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-100 z-50">
                    <div> 
                      <AiOutlineCloseCircle
                        size={ 20 }
                        className="absolute top-1 right-2 cursor-pointer opacity-60 transition duration-500 ease-in-out hover:opacity-100"
                        onClick={() => {
                          const newProjects = [...mapProjects];
                          newProjects[index].showDescription = false;
                          setMapProjects(newProjects);
                        }}
                      />
                      <a className="flex items-center justify-center text-center" href={ repository } rel="noreferrer" target="_blank">
                        <button className="align-center justify-center px-6 mb-3 mx-auto duration-200 selector text-center opacity-90 hover:opacity-100 font-bold">
                          { name }
                        </button>
                      </a>
                      <p className="px-3 pb-2 text-justify overflow-auto text-sm md:text-sm lg:text-base">
                        { description }
                      </p>
                    </div>
                  </div>
                )}
                </div>
                <a className="flex items-center justify-center text-center" href={ repository } rel="noreferrer" target="_blank">
                  <button className="align-center justify-center px-6 mb-3 mx-auto duration-200 selector text-center opacity-90 hover:opacity-100 font-bold">
                    { name }
                  </button>
                </a>

                <a href={ href ? href : repository } rel="noreferrer" target="_blank">
                  <img
                    src={ hover ? (gif ? gif : src) : src }
                    alt={ name }
                    className="rounded-md px-1 transform duration-300 ease-in-out hover:scale-105"
                    onMouseEnter={() => {
                      const newProjects = [...mapProjects];
                      newProjects[index].hover = true;
                      setMapProjects(newProjects);
                    }}
                    onMouseLeave={() => {
                      const newProjects = [...mapProjects];
                      newProjects[index].hover = false;
                      setMapProjects(newProjects);
                    }}
                  />
                </a>
                  
                { href ? 
                  <div className="flex flex-wrap xl:flex-nowrap xl:px-8 items-center justify-center">
                    <a href={ href } rel="noreferrer" target="_blank">
                      <button className="px-6 my-5 xl:my-5 duration-200 selector text-center">
                        Site
                      </button>
                    </a>

                    <a className="text-center" href={ repository } rel="noreferrer" target="_blank">
                      <button className="px-6 my-5 mb-4 sm:my-5 md:my-0 sm:mb-4 md:mb-4 lg:mb-3 xl:my-5 duration-200 selector text-center">
                        Repositório 
                      </button>
                    </a>
                  </div>: 
                  <div className="flex flex-wrap items-center justify-center">
                    <a className="text-center" href={ repository } rel="noreferrer" target="_blank">
                      <button className="px-6 my-5 sm:my-5 md:my-5 lg:my-5 xl:my-5 duration-200 selector text-center">
                        Repositório 
                      </button>
                    </a>
                  </div>}
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className={`hidden md:flex justify-center px-8 py-16 ${ mapProjects.length < 4 ? 'pt-60' : 'pt-14' }`}>
        <Link
          to="contato"
          smooth
          duration={ 500 }
          >
          <button
            className="group text-white flex items-center rounded-md bg-transparent"
          >
            Contato
            <span>
              <BsChevronDoubleDown size={ 25 } className="ml-2 down-arrow" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projetos;
