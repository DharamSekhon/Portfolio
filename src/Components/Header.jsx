import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const Navlinks = () => {
    return (
      <>
        <a href="#home" className="m-2 hover:text-green-500">
          Home
        </a>
        <a href="#about" className="m-2 hover:text-green-500">
          About
        </a>
        <a href="#skills" className="m-2 hover:text-green-500">
          Skills
        </a>
        <a href="#work" className="m-2 hover:text-green-500">
          Work
        </a>
        <a href="#contact" className="m-2 hover:text-green-500">
          Contact me
        </a>
        <a
          href="https://drive.google.com/file/d/1Eq3GbJl7NOwA5qwSD07rtV2uGUfWkHiG/view?usp=sharing"
          download
          target="blank2"
          className="m-2 hover:text-green-500"
        >
          Download CV
        </a>
      </>
    );
  };
  return (
    <header className="fixed shadow-xl mx-auto px-5 py-3 flex flex-col md:flex-row justify-between items-center top-0 left-0 ml-[2.5rem] md:ml-[9rem] w-[80%] mt-5 rounded-3xl backdrop-blur-2xl backdrop-filter z-10 text-white">
      {/* <header className="fixed top-0 left-0 md:ml-[8rem] ml-0 md:mr-[8rem] mr-0 mt-5 w-[80%] border-2 rounded-3xl border-gray-600 backdrop-blur-lg backdrop-filter z-10"> */}
      {/* <header className="bg-dark-background sticky top-0 z-[20] mx-auto flex w-full items-center justify-between flex-wrap">  */}

      {/* <div className="container mx-auto px-4 py-2 h-full flex justify-center items-center"> */}

      {/* <div 
        // className="w-full max-w-screen-lg flex justify-between items-center text-white"
        > */}
      <div className="flex">
        <a href="#home" className="text-2xl flex font-bold ">
          <p className="text-green-500">&lt;D</p>harampreet
          <p className="text-green-500 mr-4">/&gt;</p>
        </a>
        <button className="md:hidden " onClick={toogleNavbar}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <nav>
        <div className="gap-[3rem] hidden md:flex">
          <Navlinks />
        </div>
      </nav>

      {isOpen && (
        <div className="flex flex-col items-center basis-full">
          <Navlinks />
        </div>
      )}

      {/* </div> */}
    </header>
  );
};

export default Header;
