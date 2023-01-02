import React from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { Link } from "react-scroll";

const NextSession = ({ name, bg }) => {
  return (
    <div className={`pt-10 hidden md:flex justify-center bg-${bg}`} >
      <Link
        to="contato"
        smooth
        duration={500}
        >
        <button
          className="group text-white w-fit px-8 py-5 flex items-end rounded-md bg-transparent"
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