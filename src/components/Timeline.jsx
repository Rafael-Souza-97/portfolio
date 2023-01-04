import React, { useState } from "react";
import { BsChevronDoubleDown } from 'react-icons/bs';
import  cartaDeRecomendacao  from "../assets/carta_de_recomendacao_eb.png"
import { Link } from "react-scroll";

const Trajectory = () => {
  const [showImage, setImage] = useState(false);

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

        <div className="flex flex-col justify-center text-container">
          <ul className="timeline text-md">
            <li>
              <div className="direction-r">
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

                  <span className="time-wrapper"><span className="time">jun/2022 - <strong>presente</strong></span></span>
                </div>
                <div className="desc">Desenvolvimento de uma rede social mobile com Typescript e React Native</div>
              </div>
            </li>
            
            <li>
              <div className="direction-l">
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
                    </div>
                    <img  src={ cartaDeRecomendacao } alt="Imagem pop-up" />
                  </div>
                )}
              </div>
            </li>

            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">Senai e Senac</span>
                  <span className="time-wrapper"><span className="time">mar/2013 - maio/2017</span></span>
                </div>
                <div className="desc">Comecei a trabalhar com 15 anos, fui menor aprendiz, jovem aprendiz e estágiario</div>
              </div>
            </li>

          </ul>
        </div>
      </div>

      <div className="hidden md:flex justify-center">
        <Link
          to="skills"
          smooth
          duration={500}
          >
          <button
            className="group text-white w-fit px-8 py-3 my-2 flex items-center rounded-md bg-transparent mb-5"
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

