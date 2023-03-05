import { motion } from "framer-motion";
import React from "react";
import Profile from "./../assets/profile-pic (6).png";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div id="Home" className="min-h-[593px] grid place-items-center">
      <div className="container grid lg:grid-cols-2 gap-10 lg:gap-0 py-6 lg:p-0">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white space-y-4 flex lg:order-none order-1 justify-center items-center lg:items-start flex-col"
        >
          <div className="text-lg md:text-xl lg:text-2xl leading-6 w-full lg:w-auto text-center lg:text-left">
            {" "}
            <h1 className="flex justify-center lg:justify-start text-lg md:text-2xl lg:text-4xl font-poppins font-medium">
              Hi, I'm Abhishek <span className="waveAnimation">👋</span>
            </h1>{" "}
            <span>I am </span>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Dedicated Developer",
                2000,
                "Frontend Enthusiast",
                2000,
              ]}
              speed={20}
              wrapper="span"
              repeat={Infinity}
              className="text-[#FB542E]"
            />
          </div>
          <div className="">
            <p className="text-base md:text-xl lg:text-2xl px-3 lg:px-0 font-normal text-center lg:text-left">
              Hey there! As a full stack developer, I love taking on new
              challenges and bringing ideas to life. With expertise in both
              front-end and back-end development, having a special interest in
              Frontend technologies and experience of building Web applications
              with JavaScript / Reactjs / Nodejs and some other cool libraries
              and frameworks.
            </p>
          </div>
          <div className="text-[#FFBE00] gap-[0.5rem] flex max-[310px]:flex-col justify-center items-center">
            <motion.button
              whileHover={{ boxShadow: "0px 0px 8px rgba(255, 255, 255, 1)" }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2 rounded-md bg-white max-[360px]:text-xs text-sm max-[360px]:w-[9rem] w-[10rem] md:w-[12rem]"
            >
              {" "}
              <i class="fa-brands fa-linkedin"></i> View On LinkedIn{" "}
            </motion.button>{" "}
            <motion.button
              whileHover={{ boxShadow: "0px 0px 8px rgba(255, 255, 255, 1)" }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2 rounded-md bg-white max-[360px]:text-xs text-sm max-[360px]:w-[9rem] w-[10rem] md:w-[12rem]"
            >
              {" "}
              <i class="fa-brands fa-github"></i> View On GitHub{" "}
            </motion.button>
          </div>
        </motion.div>
        <div className="grid place-items-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-[15rem] h-[15rem] md:w-[18rem] md:h-[18rem] lg:w-[20rem] lg:h-[20rem] ring-8 ring-white/30 transition-shadow hover:cursor-pointer hover:shadow-white shadow-2xl rounded-full overflow-hidden"
          >
            <img
              className="hover:scale-105 transition-all"
              src={Profile}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
