import Logo from "./Logo.js";
import Link from "next/link.js";
import { useRouter } from "next/router.js";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons.js";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState } from "react";

//import useThemeSwitcher from "./hooks/useThemeSwitcher.js";

const CustomLink = ({ href, title, className="" }) => {
  const route = useRouter();

  return (
    <Link href={href} className={`${className}  relative group text-2xl`}>
      {title}
      <span
        className={`
               h-[3px] dark:bg-light absolute left-0 -bottom-0.5  bg-black inline-block 
              group-hover:w-full transition-[width] ease duration-300
               ${route.asPath === href ? "w-full" : "w-0"}
               `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className="",toggle }) => {
  const route = useRouter();

  const handleClick = ()=>{
    toggle()
    route.push(href)
  }

  return (
    <button href={href} onClick={handleClick} className={`${className} my-4 text-light dark:text-dark relative group text-2xl`}>
      {title}
      <span
        className={`
               h-[3px]  absolute left-0 -bottom-0.5  bg-light dark:bg-dark  inline-block 
              group-hover:w-full transition-[width] ease duration-300
               ${route.asPath === href ? "w-full" : "w-0"}
               `}
      >
        &nbsp;
      </span>
    </button>
  );
};


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme("");
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className=" lg:px-16 md:px-12 sm:px-8 z-10 w-full font-meduim py-8 px-32 flex justify-between dark:bg-dark dark:text-light">
      <button
        onClick={handleClick}
        className=" hidden lg:flex flex-col justify-center items-center"
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1 " : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 w-6  rounded-sm my-0.5 ${
            isOpen ? "opacity-0 " : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1 " : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="flex w-full justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="ml-2" />
          <CustomLink href="/about" title="about" className="ml-10" />
          <CustomLink href="/project" title="project" className="ml-10" />
          <CustomLink href="/articles" title="articles" className="ml-10" />
        </nav>

        <nav className="flex items-center justify-center fle x-wrap">
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            className="w-6 mr-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com"
            className="w-6 mx-5"
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: -2 }}
            target={"_blank"}
          >
            {" "}
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            className="w6 mx-5 "
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: -2 }}
            target={"_blank"}
          >
            {" "}
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://pinterest.com"
            className="w-6 mx-5"
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: -2 }}
            target={"_blank"}
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="https://dribble.com"
            className="w6 mx-5 "
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: -2 }}
            target={"_blank"}
          >
            {" "}
            <DribbbleIcon />
          </motion.a>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={`flex items-center justify-center ml-3 p-1 rounded-full ${
              theme === "dark" ? "text-light" : "text-dark"
            }`}
          >
            {theme === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
     {/* mobile link      */}

     { isOpen ?
        <motion.div initial={{scale:0,opacity:0,x:"-50%",y:"-50%"}} animate={{scale:1, opacity:1}}
        className="min-w-[80] flex flex-col justify-between items-center z-30
        bg-dark/90 dark:bg-light/75 rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
           backdrop-blur-md py-32  
        ">
         <nav className="flex flex-col items-center justify-between">
           <CustomMobileLink href="/" title="Home"  toggle={handleClick} />
           <CustomMobileLink href="/about" title="about"  toggle={handleClick}/>
           <CustomMobileLink href="/project" title="project"  toggle={handleClick}/>
           <CustomMobileLink href="/articles" title="articles"  toggle={handleClick}/>
         </nav>
 
         <nav className="flex items-center justify-center fle x-wrap mt-2 px-2">
           <motion.a
             href="https://twitter.com"
             target={"_blank"}
             className="w-6 mr-3 sm:mx-1"
             whileHover={{ y: -2 }}
             whileTap={{ scale: 0.9 }}
           >
             <TwitterIcon />
           </motion.a>
           <motion.a
             href="https://github.com"
             className="w-6 mx-5 sm:mx-1 bg-light dark:bg-dark rounded-full"
             whileTap={{ scale: 0.9 }}
             whileHover={{ y: -2 }}
             target={"_blank"}
           >
             
             <GithubIcon />
           </motion.a>
           <motion.a
             href="https://linkedin.com"
             className="w6 mx-5 sm:mx-1 "
             whileTap={{ scale: 0.9 }}
             whileHover={{ y: -2 }}
             target={"_blank"}
           >
             
             <LinkedInIcon />
           </motion.a>
           <motion.a
             href="https://pinterest.com"
             className="w-6 mx-5 sm:mx-1 bg-light rounded-full"
             whileTap={{ scale: 0.9 }}
             whileHover={{ y: -2 }}
             target={"_blank"}
           >
             <PinterestIcon />
           </motion.a>
           <motion.a
             href="https://dribble.com"
             className="w6 mx-5 bg-light sm:mx-1 rounded-full"
             whileTap={{ scale: 0.9 }}
             whileHover={{ y: -2 }}
             target={"_blank"}
           >
             
             <DribbbleIcon />
           </motion.a>
 
           <button
             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
             className={`flex items-center justify-center ml-3 p-1 rounded-full ${
               theme === "dark" ? "text-dark" : "text-light"
             }`}
           >
             {theme === "dark" ? (
               <SunIcon className="fill-dark" />
             ) : (
               <MoonIcon className={"fill-dark"} />
             )}
           </button>
         </nav>
       </motion.div> : null
     }
      <div className="absolute left-[50%] top-2 transtion-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
