import AnimatedText from "@/component/AnimatedText";
import Layout from "@/component/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import article3 from "../../public/images/articles/create modal component in react using react portals.png";
import article4 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article5 from "../../public/images/articles/smooth scrolling in reactjs.png";
import article6 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import article7 from "../../public/images/articles/What is higher order component in React.jpg";
import article8 from "../../public/images/articles/What is Redux with easy explanation.png";
import { motion, motionValue } from "framer-motion";
import { useRef } from "react";
import TransitionEffet from "@/component/TransitionEffet";

const FramerImage = motion(Image);
const FeatureArticle = ({ type, time, summary, link, title, img }) => {
  return (
    <li className=" border-r-[12px] border-b-[12px] rounded-br-2xl col-span-1 border border-solid w-full p-5 bg-light dark:border-white dark:bg-dark  border-dark rounded-2xl shadow-2xl">
      <div className="absolute top-0 -right-20 -z-10   w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer inline-block rounded-lg overflow-hidden"
      >
        <FramerImage
          src={img}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          size="(max-width: 768px)100vw (max-width: 1200px)50vw 50vw "
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="font-semibold  text-2xl xs:text-lg capitalize my-2  hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2  ">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">{time}</span>
    </li>
  );
};

const MovingImage = ({ title, img, link }) => {
  const x = motionValue(0);
  const y = motionValue(0);
  const imgRef = useRef(null);
  function handleMouse(e) {
    imgRef.current.style.display = "inline-block";
    x.set(e.pageX);
    y.set(-10);

  }

  function handleMouseLeave(e) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light">
        {title}
      </h2>
      <FramerImage
        className="z-50 absolute rounded-lg w-96 h-auto  hidden md:!hidden"
        initial={{ opacity: 0 }}
        ref={imgRef}
        style={{ x: x, y: y }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        src={img}
        alt={title}
      />
    </Link>
  );
};

const Article = ({ title, date, img, link }) => {
  return (
    <motion.li initial={{y:200}} whileInView={{y:0,transition:{duration:0.5,ease:"easeInOut"}}} viewport={{once:true}}
      className="flex items-center justify-between p-4 py-6 
                          rounded-2xl text-dark dark:bg-dark bg-light border border-solid
                          w-full relative border-dark dark:border-light border-r-4 border-b-4 mt-10 first:mt-0
                          sm:flex-col 
                          "
    >
      <MovingImage title={title} img={img} link={link} />

      <span className=" xs:text-sm font-semibold text-primary dark:text-primaryDark sm:self-start sm:pl-0 pl-4">{date}</span>
    </motion.li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>CodeChokote| articles page</title>
        <meta name="description" description="my description" />
      </Head>
      <TransitionEffet/>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout classname="pt-16">
          <AnimatedText
            text={"words can change the world !"}
            className=" mb-16  sm:mb-8 sm:!text-6xl xs:!text-xl  lg:!text-7xl xs:!font-bolds"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeatureArticle
              summary={
                "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              }
              title={
                " Build A Custom Pagination Component In Reactjs From Scratch "
              }
              time={" 9 min read"}
              link={"/"}
              img={article1}
            />
            <FeatureArticle
              summary={
                "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              }
              title={
                " Build A Custom Pagination Component In Reactjs From Scratch "
              }
              time={" 9 min read"}
              link={"/"}
              img={article2}
            />
          </ul>
          <h2 className="font-bold w-full text-center text-4xl mt-32 my-16">
            All articles
          </h2>

          <Article
            title={
              "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            }
            date={"2022 april 2"}
            link={"/"}
            img={article3}
          />
          <Article
            title={
              "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            }
            date={"2022 april 2"}
            link={"/"}
            img={article4}
          />
          <Article
            title={
              "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            }
            date={"2022 april 2"}
            link={"/"}
            img={article5}
          />
          <Article
            title={
              "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            }
            date={"2022 april 2"}
            link={"/"}
            img={article6}
          />
          <Article
            title={
              "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            }
            date={"2022 april 2"}
            link={"/"}
            img={article7}
          />

          <Article
            title={
              "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            }
            date={"2022 april 2"}
            link={"/"}
            img={article8}
          />
        </Layout>
      </main>
    </>
  );
};

export default articles;
