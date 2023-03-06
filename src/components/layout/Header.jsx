import { motion } from "framer-motion";
import React, { useState } from "react";
import MyLogo from "../../assets/Logo.png";
import { Link } from "react-scroll";
import MyPdf from '../../assets/MyPortfolio.pdf'
const Header = () => {
  const [burger, setBurger] = useState(true);
  const handleResume = () => {
    window.open(`${MyPdf}`,'_blank')
  }
  return (
    <header class="h-full w-full flex flex-col lg:flex-row justify-between items-center bg-[#FFCC00] bg-opacity-30 px-3 py-2">
      <div className="font-poppins flex justify-between w-full">
        <div className="flex justify-start items-center gap-2 ">
          {" "}
          <img
            className="w-[1.5rem] md:w-[2rem] lg:w-[3rem] hover:animate-spin cursor-pointer"
            src={MyLogo}
            alt=""
          />{" "}
          <div className="flex flex-col justify-center items-start text-xs md:text-sm lg:text-base text-white">
            {" "}
            <span className="text-sm md:text-base lg:text-lg font-bold leading-3">
              DevFusion
            </span>
            <span className="leading-3">Full Stack, Full Power</span>{" "}
          </div>{" "}
        </div>
        <div className="text-3xl text-white block lg:hidden">
          <button
            className={`menu ${!burger ? "opened" : ""}`}
            onClick={() => {
              setBurger(!burger);
            }}
            aria-label="Main Menu"
          >
            <svg
              className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
              viewBox="0 0 100 100"
            >
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full border-t-2 lg:border-none border-white font-medium md:font-semibold">
        <ol
          className={`${
            !burger
              ? "flex h-[400px] overflow-hidden"
              : "lg:flex h-[0px] overflow-hidden"
          } lg:pt-0 lg:flex lg:h-auto lg:flex-row flex-col  pt-[14px] space-x-0 space-y-5 transition-all duration-500 lg:space-y-0 lg:space-x-6 justify-start items-start lg:justify-end lg:items-center text-[#FFCC00 text-white`}
        >
          {/* nav items */}
          {[
            "Home",
            "About",
            "Skills",
            "Projects",
            "Experience",
            "Contact",
          ].map((item) => {
            return (
                <Link to={`${item}`} activeClass='active' spy={true} smooth={true} offset={50} duration={500}>
              <li className="text-lg cursor-pointer lg:bg-gradient-to-r lg:from-white lg:to-white lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] lg:transition-all">
                {item}
              </li>
              </Link>
            );
          })}
          <li className="">
            <motion.button
            onClick={handleResume}
              whileTap={{ scale: 0.9 }}
              className="flex  gap-2 justify-center items-center border border-white py-1 px-2 rounded-md bg-white text-[#FFCC00] cursor-pointer"
            >
              {" "}
              Resume <i class="fa-regular fa-download animate-bounce"></i>{" "}
            </motion.button>
          </li>
        </ol>
      </div>
    </header>
  );
};

export default Header;
