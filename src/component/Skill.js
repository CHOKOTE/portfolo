import React from "react";
import { motion } from "framer-motion";

const Skills = ({ name, x, y }) => {
  return (
    <motion.div
      className=" lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark
      xs:dark:text-light xs:font-bold
      dark:text-dark dark:bg-light flex items-center 
      cursor-pointer justify-center rounded-full font-bold text-light py-3 px-6 
      absolute shadow-dark bg-dark"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skill = () => {
  return (
    <>
      <div className=" md:text-6xl text-8xl font-bold text-center w-full mt-64">
        Skills
      </div>
      <div
        className=" 
              dark:bg-circularDark flex items-center justify-center relative h-screen w-full rounded-full 
              bg-circularLightLg lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg dark:lg:bg-circularDarkLg 
              dark:md:bg-circularDarkMd md:bg-circularLightMd sm:bg-circularLightSm dark:sm:bg-circularDarkSm
                
              "
      >
        <motion.div
          className=" xs:p-2 xs:text-xs lg:p-6 md:p-4
          dark:text-dark dark:bg-light flex items-center cursor-pointer justify-center rounded-full 
          font-bold text-light p-8 shadow-dark bg-dark"
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>
        <Skills name={"CSS"} x={"-5vw"} y={"-5vw"} />
        <Skills name={"HTML"} x={"-25vw"} y={"2vw"} />
        <Skills name={"JAVASCRIPT"} x={"10vw"} y={"20vw"} />
        <Skills name={"NEXTJS"} x={"-15vw"} y={"-15vw"} />
        <Skills name={"REACTJS"} x={"15vw"} y={"-15vw"} />
        <Skills name={"POWER BI CERTIFICATION"} x={"-5vw"} y={"15vw"} />
        <Skills name={"WEB DESIGN"} x={"10vw"} y={"5vw"} />
        <Skills name={"TAILWIND"} x={"25vw"} y={"-2vw"} />
        <Skills name={"SQL SERVER"} x={"-5vw"} y={"-5vw"} />
        <Skills name={"POWER PLATEFORM"} x={"-20vw"} y={"8vw"} />
      </div>
    </>
  );
};

export default Skill;
