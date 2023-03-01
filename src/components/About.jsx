import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import AboutMe from "./../assets/AboutMe.png";

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    }
  }, [controls, inView]);
  return (
    <div id="About" className="min-h-[657px] grid place-items-center">
      <div className="container grid lg:grid-cols-2">
      <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="flex flex-col justify-center items-center lg:items-start order-2 lg:order-1 px-3 text-white">
        <h1 className="lg:text-4xl md:text-2xl text-xl font-semibold first-letter:text-2xl md:first-letter:text-4xl lg:first-letter:text-6xl">
          About Me
        </h1>
        <p className="text-base md:text-lg text-center lg:text-left">
          My Name is Abhishek Bahuguna who just graduated from <span className="font-medium"> Himalayan
          Institute of Technology, Dehradun, Uttarakhand in BSC(IT). </span> After that,
          I completed 8 month Internship as Full-stack web developer at{" "}
          <a
          className="font-medium underline hover:text-blue-600"
            href="https://www.devtown.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DevTown
          </a>
          . I specialize in React, and I've worked on numerous projects that
          leverage this powerful technology. With my deep understanding of
          JavaScript, HTML, and CSS, I'm able to craft beautiful interfaces that
          are a joy to use. My expertise extends beyond the front-end, as I also
          have experience in server-side technologies like Node.js, MongoDB, and
          SQL. This allows me to create dynamic and interactive applications
          that integrate seamlessly with the back-end. I'm also experienced in
          using Git for version control, and I'm comfortable working with CI/CD pipeline.
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="grid place-items-center overflow-hidden"
      >
        <img className="lg:w-auto lg:h-auto md:w-[22rem] w-[15rem]" src={AboutMe} alt="" />
      </motion.div>
    </div>
    </div>
  );
};

export default About;
