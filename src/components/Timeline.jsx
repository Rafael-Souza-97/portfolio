import React, { useState } from "react";
import  cartaDeRecomendacao  from "../assets/hero/carta_de_recomendacao_eb.png";
import { BsChevronDoubleDown } from 'react-icons/bs';
import { FaFileDownload } from "react-icons/fa";
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { Link } from "react-scroll";
import '../styles/Home.css'

const Trajectory = () => {
  const [showImage, setImage] = useState(false);
  const [isShowingEducation, setIsShowingEducation] = useState(false);

  function handleClick() {
    setImage(true);
  }

  function handleClose() {
    setImage(false);
  }

  return (
    <div
      name="timeline"
      className="min-h-screen md:flex flex-col w-full bg-gradient-to-b from-black via-black to-gray-800 text-white pt-32 md:pt-20"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center md:h-full px-4">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Timeline
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center pt-12 pb-6">
          <button
            type='button'
            className={`text-white mx-0 sm:mx-5 w-32 py-2 selector ${!isShowingEducation ? "font-bold transition duration-500 ease-in-out" : "opacity-60 transition duration-500 ease-in-out"}`}
            onClick={() => setIsShowingEducation(false)}
          >
            {!isShowingEducation ? (
              <span>
                <FaBriefcase className='inline-block mr-2 mb-1' />
                Experiência
              </span>
            ) : (
              "Experiência"
            )}
          </button>

          <button
            type='button'
            className={`text-white mx-0 sm:mx-10 py-2 selector ${isShowingEducation ? "font-bold transition duration-500 ease-in-out" : "opacity-60 transition duration-500 ease-in-out"}`}
            onClick={() => setIsShowingEducation(true)}
          >
            {isShowingEducation ? (
              <span>
                <FaGraduationCap className='inline-block mr-2 mb-1' />
                Educação
              </span>
            ) : (
              "Educação"
            )}
          </button>
        </div>

        <div className="flex flex-col justify-center text-container">
          { 
            isShowingEducation ? (
              <ul className="timeline text-md pb-5 mb-24">
                <li>
                  <div className="direction-r">
                    <div className="flag-wrapper">
                        <span className="flag hover:underline hover:text-green-300">
                          <a
                            href="https://www.betrybe.com/"
                            target="_blank"
                            rel="noreferrer"
                            >
                              Trybe
                          </a>
                        </span>

                        <span className="time-wrapper"><span className="time">abr/2022 - <strong>presente</strong></span></span>
                      </div>
                    <div className="desc">Estudando Desenvolvimento Web Full-Stack</div>
                  </div>
                </li>
                  <li>
                    <div className="direction-l">
                      <div className="flag-wrapper">
                        <span className="flag hover:underline hover:text-blue-300">
                          <a
                            href="https://estacio.br/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Estácio
                          </a>
                        </span>

                        <span className="time-wrapper"><span className="time">jan/2018 - dez/2021</span></span>
                      </div>
                      <div className="desc">Bacharelado em Administração</div>
                    </div>
                  </li>

                  <li>
                    <div className="direction-r">
                      <div className="flag-wrapper">
                        <span className="flag hover:underline hover:text-green-300">
                          <a
                            href="https://www.eb.mil.br/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Exército Brasileiro
                          </a>
                        </span>
                        <span className="time-wrapper"><span className="time">mar/2016 - nov/2016</span></span>
                      </div>

                      <div className="desc ">Fui honrado com uma <span onClick={handleClick} className="hover:underline cursor-pointer">carta de recomendação do Exército Brasileiro</span> por ter mantido um padrão de conduta profissional durante o meu tempo de serviço.</div>
                      {showImage && (
                        <div className="fixed top-0 bottom-0 left-0 right-0 md:flex items-center justify-center bg-black bg-opacity-75 z-50 overflow-scroll" style={{height: "100vh", width: "100vw"}}>
                          <div className="flex justify-center">
                            <button onClick={handleClose} className="fixed top-0 right-0 btn bg-red-500 text-white rounded-full px-4 py-2 m-4">
                              X
                            </button>

                            <a
                              href="/EB_Carta_de_Recomendacao.pdf"
                              className="fixed top-5 right-24 text-blue-500"
                              download={true}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <button>
                                <>
                                  <FaFileDownload size={32} />
                                </>
                              </button>
                            </a>

                          </div>
                          <img  src={ cartaDeRecomendacao } alt="Imagem pop-up" />
                        </div>
                      )}
                    </div>
                  </li>

                  <li>
                    <div className="direction-l">
                      <div className="flag-wrapper">
                        <span className="flag hover:underline hover:text-red-300">
                          <a
                            href="https://www.wizard.com.br/"
                            target="_blank"
                            rel="noreferrer"
                            >
                              Wizard
                          </a>
                        </span>

                        <span className="time-wrapper"><span className="time">jan/2008 - dez/2012</span></span>
                      </div>
                    <div className="desc">Língua Inglesa e Literaturas de Língua Inglesa</div>
                  </div>
                </li>
              </ul>
            ) : (
              <ul className="timeline text-md pb-5 mb-1">                  
                <li>
                  <div className="direction-l">
                    <div className="flag-wrapper">
                      <span className="flag hover:underline hover:text-green-300">
                          <a
                            href="https://www.linkedin.com/company/skambook/about/"
                            target="_blank"
                            rel="noreferrer"
                            >
                              Skambook
                          </a>
                        </span>
                      <span className="time-wrapper"><span className="time">fev/2022 - <strong>presente</strong></span></span>
                    </div>
                    <div className="desc">{"Desenvolvimento de uma rede social mobile com Typescript e React Native (Voluntário)"}</div>
                  </div>
                </li>

                <li>
                  <div className="direction-r">
                    <div className="flag-wrapper">
                      <span className="flag hover:underline hover:text-red-300">
                        <a
                          href="https://www.hydac.com/pt-br/sobre-a-hydac"
                          target="_blank"
                          rel="noreferrer"
                        >
                        Hydac Tecnologia
                        </a>
                      </span>

                      <span className="time-wrapper"><span className="time">out/2020 - mar/2022</span></span>
                    </div>
                    <div className="desc">Atuei na empresa pela segunda vez, como Auxiliar Técnico</div>
                  </div>
                </li>

                <li>
                  <div className="direction-l">
                    <div className="flag-wrapper">
                      <span className="flag hover:underline hover:text-blue-300">
                        <a
                          href="https://www.vallourec.com/pt-BR/br"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Vallourec
                        </a>
                      </span>

                      <span className="time-wrapper"><span className="time">ago/2018 - set/2020</span></span>
                    </div>
                    <div className="desc">Atuei por pouco mais de 2 anos como Inspetor de Qualidade III</div>
                  </div>
                </li>

                <li>
                  <div className="direction-r">
                    <div className="flag-wrapper">
                      <span className="flag hover:underline hover:text-red-300">
                        <a
                          href="https://www.hydac.com/pt-br/sobre-a-hydac"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Hydac Tecnologia
                        </a>
                      </span>

                      <span className="time-wrapper"><span className="time">jul/2017 - jul/2018</span></span>
                    </div>
                    <div className="desc">Este foi meu primeiro emprego, atuei como Auxiliar de Manutenção</div>
                  </div>
                </li>

                <li>
                  <div className="direction-l">
                    <div className="flag-wrapper">
                      <span className="flag">Senai e Senac</span>
                      <span className="time-wrapper"><span className="time">mar/2013 - maio/2017</span></span>
                    </div>
                    <div className="desc">Comecei a trabalhar com 15 anos, fui menor aprendiz, jovem aprendiz e estágiario</div>
                  </div>
                </li>
              </ul>
            )
          }
        </div>
      </div>

      <div className="hidden md:flex justify-center">
        <Link
          to="skills"
          smooth
          duration={500}
          >
          <button
            className="group text-white w-fit px-8 py-3 my-10 flex items-center rounded-md bg-transparent mb-5"
          >
            Skills
            <span>
              <BsChevronDoubleDown size={25} className="ml-2 down-arrow" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Trajectory;
