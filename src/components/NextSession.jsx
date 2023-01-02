import React from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { Link } from "react-scroll";

const NextSession = ({ name, bg, to}) => {
  return (
    <div className={`bottom-0 w-full p-10 text-white text-center z-10 hidden md:flex justify-center bg-${bg}`} >
      <Link
        to={`${to}`}
        smooth
        duration={500}
        >
        <button
          className="bottom-0 group text-white w-fit px-8 py-5 flex items-end rounded-md bg-transparent"
        >
          {name}
          <span>
            <BsChevronDoubleDown size={25} className="ml-2 down-arrow" />
          </span>
        </button>
      </Link>
    </div>
  )
}

export default NextSession