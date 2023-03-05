import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import CircleIndicator from "./CicleIndicator";
import htmlI from "./../assets/html.svg";
import cssI from "./../assets/css.svg";
import jsI from "./../assets/js.svg";
import reactI from "./../assets/react.svg";
import reduxI from "./../assets/redux.svg";
import tailwindI from "./../assets/tailwindcss.svg";
import nodeI from "./../assets/node.svg";
import mongodbI from "./../assets/mongodb.svg";
import firebaseI from "./../assets/firebase.svg";
import framerI from "./../assets/framer.png";
import gitI from "./../assets/git.svg";
import apiI from "./../assets/api.svg";
import SkillsI from "./../assets/Skills.png";

const Skills = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    }
  }, [controls, inView]);
  return (
    <div id="Skills" className="grid min-h-[657px] place-items-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        id="Skills"
        className=" container grid place-items-center gap-5 "
      >
        <div className="flex font-poppins border-b-2 md:border-b-[3px] lg:border-b-[4px] border-b-white text-white justify-center items-center">
          <h1 className="text-4xl lg:text-5xl">Skills</h1>
        </div>
        <div className="grid place-items-center w-full gap-2 md:gap-4 lg:gap-y-5 max-[370px]:grid-cols-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <CircleIndicator name="React" percent={85} imageURL={reactI} />
          <CircleIndicator name="Redux" percent={80} imageURL={reduxI} />
          <CircleIndicator name="HTML" percent={90} imageURL={htmlI} />
          <CircleIndicator name="CSS" percent={85} imageURL={cssI} />
          <CircleIndicator name="JS" percent={75} imageURL={jsI} />
          <CircleIndicator name="Framer" percent={45} imageURL={framerI} />
          <CircleIndicator name="API" percent={80} imageURL={apiI} />
          <CircleIndicator name="GIT" percent={55} imageURL={gitI} />
          <CircleIndicator name="Node.js" percent={75} imageURL={nodeI} />
          <CircleIndicator name="MongoDB" percent={65} imageURL={mongodbI} />
          <CircleIndicator name="Firebase" percent={45} imageURL={firebaseI} />
          <CircleIndicator name="Tailwind" percent={90} imageURL={tailwindI} />
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
