import React from "react";
import { motion } from "framer-motion";
import Link from "next/link.js";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex judtify-center items-center  ">
      <MotionLink
        href="/"
        className="w-50 h-50 p-5 dark:border-light border 
        border-solid border-transparent flex justify-center 
        rounded-full font-bold text-2xl text-light bg-dark"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeate: Infinity },
        }}
      >
        CH
      </MotionLink>
    </div>
  );
};

export default Logo;
