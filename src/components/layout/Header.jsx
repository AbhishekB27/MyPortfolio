import React, { useState } from "react";
import MyLogo from "../../assets/Logo.png";

const Header = () => {
    const [burger, setBurger] = useState(true)
  return (
    <header class="h-full w-full flex justify-between items-center px-3 py-2 bg-gradient-to-r from-[#FFFF66]/30 to-[#FFCC00]/30 bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg">
      <div className="flex justify-start items-center gap-2 font-poppins">
        {" "}
        <img className="w-[1.5rem] md:w-[2.5rem] lg:w-[3rem]" src={MyLogo} alt="" />{" "}
        <div className="flex flex-col justify-center items-start text-xs md:text-sm lg:text-base text-white">
          {" "}
          <span className="text-sm md:text-base lg:text-lg font-bold leading-3">DevFusion</span>
          <span className="leading-3">Full Stack, Full Power</span>{" "}
        </div>{" "}
      </div>
      <div>
        <ol className="hidden lg:flex md:space-x-4 lg:space-x-6 justify-start items-center text-white">
          <li className="text-lg cursor-pointer lg:bg-gradient-to-r lg:from-white lg:to-white lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] lg:transition-all">
            HOME
          </li>
          <li className="text-lg cursor-pointer lg:bg-gradient-to-r lg:from-white lg:to-white lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] lg:transition-all">
            About
          </li>
          <li className="text-lg cursor-pointer lg:bg-gradient-to-r lg:from-white lg:to-white lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] lg:transition-all">
            Projects
          </li>
          <li className="text-lg cursor-pointer lg:bg-gradient-to-r lg:from-white lg:to-white lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] lg:transition-all">
            Skills
          </li>
          <li className="text-lg cursor-pointer lg:bg-gradient-to-r lg:from-white lg:to-white lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] lg:transition-all">
            Expierence
          </li>
          <li className="text-lg cursor-pointer lg:bg-gradient-to-r lg:from-white lg:to-white lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] lg:transition-all">
            Education
          </li>
          <li className="text-lg cursor-pointer lg:bg-gradient-to-r lg:from-white lg:to-white lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] lg:transition-all">
            Contact
          </li>
          <li className="flex  gap-2 justify-center items-center border border-white py-1 px-2 rounded-md bg-white text-[#FFCC00] cursor-pointer">
            Resume <i class="fa-regular fa-download animate-bounce"></i>
          </li>
        </ol>
        <div className="text-3xl text-white block lg:hidden"> 
        <button className={`menu ${!burger ? 'opened' : ''}`} onClick={()=>{setBurger(!burger)}} aria-label="Main Menu">
      <svg className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]" viewBox="0 0 100 100">
        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path className="line line2" d="M 20,50 H 80" />
        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>
         </div>
      </div>
    </header>
  );
};

export default Header;
