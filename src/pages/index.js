import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/component/Layout";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/component/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/component/Icons";
import HireMe from "@/component/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffet from "@/component/TransitionEffet";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffet/> 
      <main className="flex items-center min-h-screen w-full text-dark dark:text-light ">
        <Layout classname="pt-0 md:pt-16 sm:pt-8">
          <div className="  flex items-center w-full justify-between lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt=""
                className=" w-full h-auto lg:hidden md:inline-block md:w-full "
                priority
                size="(max-width: 768px)100vw (max-width: 1200px)50vw 50vw "
              />
            </div>
            <div className="flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center">
              <AnimatedText
                text={"turning version Into Reality and with Code and Design"}
                className={"!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-4xl sm:text-3xl "}
              />
              <p className="py-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start lg:self-center">
                <Link
                  className="md:p-2 md:px-4 md:text-base hover:dark:border-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light font-semibold rounded-lg p-2.5 px-6 flex items-center text-light bg-black text-lg
                  border-2 border-solid border-transparent hover:text-dark hover:bg-light hover:border-dark"
                  href={"/CVV.docx"}
                  download={true}
                  target="_blank"
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />{" "}
                </Link>
                <Link
                  href={"mailto:chokotenoel@gmail.com"}
                  target="_blank"
                  className=" dark:text-light ml-4 font-medium text-lg capitalize underline"
                >
                  Contact me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="inline-block absolute w-24 right-8 bottom-8 md:hidden">
          <Image src={lightBulb} alt="" className=" w-full h-auto" />
        </div>
      </main>
    </>
  );
}
