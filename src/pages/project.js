import AnimatedText from "@/component/AnimatedText";
import Layout from "@/component/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/component/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";
import TransitionEffet from "@/component/TransitionEffet";

const FramerImage = motion(Image);

const FeaturedProject = ({ title, symmary, img, link, type }) => {
  return (
    <article className=" lg:flex-col  lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
      dark:border-light  dark:bg-dark border-r-[12px] border-b-[12px]  
        relative p-12 flex items-center justify-between w-full !rounded-3xl border border-solid border-dark 
        shadow-2xl bg-light  sm:p-0">
      <div className="absolute top-0 -right-20 -z-10   w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 rounded-lg cursor-pointer overflow-hidden lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="flex flex-col items-start justify-between w-1/2 ml-10 lg:w-full lg:pl-0 lg:pt-6 ">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base xs:text-base">{type}</span>
        <Link
          href={Link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="font-bold w-full my-2 text-left text-4xl lg:text-2xl sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light md:text-base xs:text-sm">{symmary}</p>
        <div className="mt-2 flex items-center">
          <Link href={link} target="_blank" className="w-10 md:w-6">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className=" sm:px-4 sm:text-base
            bg-dark dark:bg-light dark:text-dark ml-4 text-light rounded-lg p-2 px-6 font-semibold"
          >
            
            visite link
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, img, link, type, github }) => {
  return (
    <article className=" border-r-[12px] border-b-[12px] rounded-br-2xl p-6 flex flex-col items-center justify-between w-full !rounded-3xl border border-solid dark:border-light border-dark shadow-2xl dark:bg-dark bg-light">
      <div className="absolute top-0 -right-20 -z-10   w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full rounded-lg cursor-pointer overflow-hidden"
      >
        <FramerImage
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto flex"
          size="(max-width: 768px)100vw (max-width: 1200px)50vw 33vw "
        />
      </Link>
      <div className="flex flex-col items-start justify-between w-full py-5 ">
        <span className="text-primary font-medium dark:text-primaryDark text-xl">{type}</span>
        <Link
          href={Link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="font-bold w-full my-2 text-left text-3xl">{title}</h2>
        </Link>

        <div
          div
          className="mt-2 flex items-center justify-between w-full font-bold"
        >
          <Link
            href={link}
            target="_blank"
            className=" capitalize  text-lg font-semibold underline underline-offset-2"
          >
            {" "}
            visite
          </Link>

          <Link href={link} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>CodeChokote| projects</title>
        <meta name="description" description="my description" />
      </Head>
      <TransitionEffet/>
      <Layout classname="flex w-full mb-16 flex-col items-center justify-center">
        <main className="pt-16">
          <AnimatedText text={"Imagination Trumps Knowledge!"} 
          className="mb-16  sm:mb-8 sm:!text-6xl xs:!text-xl  lg:!text-7xl xs:!font-bolds" />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12 mt-20">
              <FeaturedProject
                title={"Crypto Screener Application"}
                link={"/"}
                symmary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts." +
                  "It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your " +
                  "local currency."
                }
                type={"Feature project"}
                img={project1}
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title={"Crypto Screener Application"}
                link={"/"}
                type={"Feature project"}
                img={project1}
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title={"Crypto Screener Application"}
                link={"/"}
                type={"Feature project"}
                img={project1}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={"Crypto Screener Application"}
                link={"/"}
                symmary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts." +
                  "It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your " +
                  "local currency."
                }
                type={"Feature project"}
                img={project1}
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title={"Crypto Screener Application"}
                link={"/"}
                type={"Feature project"}
                img={project1}
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title={"Crypto Screener Application"}
                link={"/"}
                type={"Feature project"}
                img={project1}
              />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default projects;
