import React from "react";
import Zomato from "./../assets/Zomato.png";
import Foodies from './../assets/Foodies.png'
import PaymentUI from './../assets/PaymentUI.png'
import Photography from './../assets/DC-Photography.png'
import Ecommerce from './../assets/Ecommerce.png'
import Html from "./../assets/html.svg";
import Css from "./../assets/css.svg";
import ReactI from "./../assets/react.svg";
import Tailwind from "./../assets/tailwindcss.svg";
import Framer from "./../assets/framer.png";
import ReduxI from "./../assets/redux.svg";
import NodeI from "./../assets/node.svg";
import MongoDB from "./../assets/mongodb.svg";
import FirebaseI from "./../assets/firebase.svg";
import css from "./../assets/css.svg";



import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div id="Projects" className="grid min-h-[657px] place-items-center px-2">
      <div className="container grid gap-5 place-items-center">
      <div className="flex font-poppins border-b-2 md:border-b-[3px] lg:border-b-[4px] border-b-white text-white justify-center items-center">
          <h1 className="text-4xl lg:text-5xl pb-2">Projects</h1>
        </div>
        <div className="grid gap-3 grid-cols-[repeat(auto-fit,_minmax(250px,1fr))]">
        <a href="https://zomato-clone-sable.vercel.app/" target="_blank" rel="noopener noreferrer">
        <motion.div whileTap={{scale:0.9}} className="relative min-h-[20rem] hover:shadow-md bg-white cursor-pointer group rounded-md overflow-hidden">
        {/* <div className="absolute grid place-items-center text-lg w-full h-full backdrop-blur-sm group-hover:h-0 bg-white/30 overflow-hidden transition-all">
            <button className="bg-yellow-300/90 text-white px-3 py-2 rounded-md">Hover Me</button>
          </div> */}
          <div className="w-full h-full bg-white space-y-2">
            <img className="" src={Zomato} alt="" />
            <div className="px-2 space-y-1 border-t-2 border-t-black/70 bg-white font-medium">
              <span> Zomato Clone Using HTML, CSS </span>
              <div className="flex">
                {" "}
                <img className="w-[3rem]" src={Html} alt="" />{" "}
                <img className="w-[3rem]" src={Css} alt="" />{" "}
              </div>
            </div>
          </div>
        </motion.div>
        </a>
        <a href="https://foodies-clone.vercel.app/" target="_blank" rel="noopener noreferrer">
        <motion.div whileTap={{scale:0.9}} className="relative min-h-[20rem] hover:shadow-md bg-white cursor-pointer group rounded-md overflow-hidden">
        {/* <div className="absolute grid place-items-center text-lg w-full h-full backdrop-blur-sm group-hover:h-0 bg-white/30 overflow-hidden transition-all">
            <button className="bg-yellow-300/90 text-white px-3 py-2 rounded-md">Hover Me</button>
          </div> */}
          <div className="w-full h-full bg-white space-y-2">
            <img className="" src={Foodies} alt="" />
            <div className="px-2 space-y-1 border-t-2 border-t-black/70 bg-white font-medium">
              <span> Foodies UI Clone Using React, Tailwindcss, Framer Motion </span>
              <div className="flex gap-1">
                {" "}
                <img className="w-[3rem]" src={ReactI} alt="" />{" "}
                <img className="w-[3rem]" src={Tailwind} alt="" />{" "}
                <img className="w-[3rem]" src={Framer} alt="" />{" "}
              </div>
            </div>
          </div>
        </motion.div>
        </a>
        
        <a href="https://payment-integration-ui.vercel.app/" target="_blank" rel="noopener noreferrer">
        <motion.div whileTap={{scale:0.9}} className="relative min-h-[20rem] hover:shadow-md bg-white cursor-pointer group rounded-md overflow-hidden">
        {/* <div className="absolute grid place-items-center text-lg w-full h-full backdrop-blur-sm group-hover:h-0 bg-white/30 overflow-hidden transition-all">
            <button className="bg-yellow-300/90 text-white px-3 py-2 rounded-md">Hover Me</button>
          </div> */}
          <div className="w-full h-full bg-white space-y-2">
            <img className="" src={PaymentUI} alt="" />
            <div className="px-2 space-y-1 border-t-2 border-t-black/70 bg-white font-medium">
              <span> Payment Integration UI Using React, Tailwindcss </span>
              <div className="flex">
                {" "}
                <img className="w-[3rem]" src={ReactI} alt="" />{" "}
                <img className="w-[3rem]" src={Tailwind} alt="" />{" "}
              </div>
            </div>
          </div>
        </motion.div>
        </a>
        
        <a href="https://dc-photography.vercel.app/" target="_blank" rel="noopener noreferrer">
        <motion.div whileTap={{scale:0.9}} className="relative min-h-[20rem] hover:shadow-md bg-white cursor-pointer group rounded-md overflow-hidden">
        {/* <div className="absolute grid place-items-center text-lg w-full h-full backdrop-blur-sm group-hover:h-0 bg-white/30 overflow-hidden transition-all">
            <button className="bg-yellow-300/90 text-white px-3 py-2 rounded-md">Hover Me</button>
          </div> */}
          <div className="w-full h-full bg-white space-y-2">
            <img className="" src={Photography} alt="" />
            <div className="px-2 space-y-1 border-t-2 border-t-black/70 bg-white font-medium">
              <span> Photography Landing Page Using React, Tailwindcss </span>
              <div className="flex">
                {" "}
                <img className="w-[3rem]" src={ReactI} alt="" />{" "}
                <img className="w-[3rem]" src={Tailwind} alt="" />{" "}
              </div>
            </div>
          </div>
        </motion.div>
        </a>
        
        <a href="https://e-commerce-frontend-2ewk.vercel.app/" target="_blank" rel="noopener noreferrer">
        <motion.div whileTap={{scale:0.9}} className="relative min-h-[20rem] hover:shadow-md bg-white cursor-pointer group rounded-md overflow-hidden">
          {/* <div className="absolute grid place-items-center text-lg w-full h-full backdrop-blur-sm group-hover:h-0 bg-white/30 overflow-hidden transition-all">
            <button className="bg-yellow-300/90 text-white px-3 py-2 rounded-md">Hover Me</button>
          </div> */}
          <div className="w-full h-full bg-white space-y-2">
            <img className="" src={Ecommerce} alt="" />
            <div className="px-2 space-y-1 border-t-2 border-t-black/70 bg-white font-medium">
              <span> E-Commerce Application Using MERN and other cool libraries. </span>
              <div className="flex flex-wrap py-1">
                {" "}
                <img className="w-[3rem]" src={ReactI} alt="" />{" "}
                <img className="w-[3rem]" src={Tailwind} alt="" />{" "}
                <img className="w-[3rem]" src={css} alt="" />{" "}
                <img className="w-[3rem]" src={Framer} alt="" />{" "}
                <img className="w-[3rem]" src={ReduxI} alt="" />{" "}
                <img className="w-[3rem]" src={NodeI} alt="" />{" "}
                <img className="w-[3rem]" src={MongoDB} alt="" />{" "}
                <img className="w-[3rem]" src={FirebaseI} alt="" />{" "}
              </div>
            </div>
          </div>
        </motion.div>
        </a>
        
        </div>
      </div>
    </div>
  );
};

export default Projects;
