import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import links from "../utils/NavList";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed mb-10 z-50">
      <div>
        <Link to="home" smooth duration={500}>
          <span key={1} className="text-4xl cursor-pointer text-gray-400 tech ml-5">{`< />`}</span>
        </Link>
      </div>

      <div className="hidden lg:flex items-center justify-between flex-wrap md:flex-no-wrap px-5">
        <ul className="hidden lg:flex">
          {links.map(({ id, link }) => (
            <li
              key={ id }
              className="px-4 mt-2 cursor-pointer capitalize text-lg text-gray-500 hover:text-white duration-200 selector"
            >
              <Link to={ link }>
                { link }
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-50 text-gray-500 lg:hidden ml-auto pr-4"
      >
        {!nav ? <FaBars className="mt-1" size={30} /> : <FaTimes size={30} />}
      </div>
    
      { nav && (
        <ul className="fixed inset-0 flex flex-col z-10 bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={ id }
              className="px-4 cursor-pointer capitalize py-6 text-4xl selector hover:text-white"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={ link }
              >
                { link }
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
