import React from "react";
import { motion } from "framer-motion";

const TransitionEffet = () => {
  return (
    <>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", with: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        exit = {{x:["0%","100%"],width:["0%","100%"]}}
        className=" top-0 bottom-0 w-screen h-screen right-full fixed z-30 bg-primary "
      />
       <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", with: "0%" }}
        transition={{delay:0.2, duration: 0.8, ease: "easeInOut" }}
        className=" top-0 bottom-0 w-screen h-screen right-full fixed z-20 bg-light "
      />
       <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", with: "0%" }}
        transition={{delay:0.2, duration: 0.8, ease: "easeInOut" }}
        className=" top-0 bottom-0 w-screen h-screen right-full fixed z-10 bg-dark "
      />
    </>
  );
};

export default TransitionEffet;
