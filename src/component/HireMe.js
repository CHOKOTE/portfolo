import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="md:right-20 md:left-auto md:top-11 sm:right-10 md:bottom-auto fixed left-4 bottom-4 flex items-center justify-center ">
      <div className="w-60  h-auto flex items-center justify-center md:w-24 md:absolute">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />
        <Link
          href={"mailto:chokotenoel@gmail.com"}
          className="flex justify-center items-center absolute left-1/2
            top-1/2   -translate-x-1/2 -translate-y-1/2 text-light shadow-md border border-solid border-dark rounded-full
            bg-dark w-20 h-20 font-semibold hover:text-dark hover:bg-light
            hover:dark:border-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light 
            md:w-12 md:h-12 md:text-[10px] 
            "
        >
          
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
