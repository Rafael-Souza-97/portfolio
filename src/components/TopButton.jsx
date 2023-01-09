import React, { useState, useEffect } from 'react';
import { RxDoubleArrowUp } from 'react-icons/rx';

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    const scrollPos = window.scrollY;

    if (scrollPos > 750) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    isVisible && (
      <button
        onClick={handleClick}
        className="hidden xl:flex fixed top-[85%] right-10 p-3 rounded-full border-gray-300 border-y-2 bg-transparent hover:bg-gray-500 hover:border-black"
      >
        <RxDoubleArrowUp size={25} color={"white"} />
      </button>
     )
  );
};

export default TopButton;
