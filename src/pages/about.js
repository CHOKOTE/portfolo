import AnimatedText from '@/component/AnimatedText'
import Layout from '@/component/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic2 from '../../public/images/profile/developer-pic-2.jpg'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skill from '@/component/Skill'
import Experience from '@/component/Experience'
import Education from '@/component/Education'
import TransitionEffet from '@/component/TransitionEffet'
const AnimateNumber = ({value}) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue,{duration:3000});
  const isInView = useInView(ref,{once:true});

  useEffect(()=>{
    if(isInView){
      motionValue.set(value);
    }
    },[value,motionValue,isInView])
  useEffect(()=>{
    springValue.on('change', (latest)=> {
    if(ref.current && latest.toFixed(0)<=value) ref.current.textContent=latest.toFixed(0)
  })
  },[springValue,value])

return <span ref={ref}></span>
}

const About = () => {
  
  


  return (
    <>
     <Head>
        <title>CodeChokote| About page</title>
        <meta name="description" description='my description'  />
     </Head>
     <TransitionEffet/>
     <main className='w-full flex flex-col items-center justify-center'>
         <Layout classname='pt-26'>
           <AnimatedText text={' Passion Fuels Purpose!'} className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
           <div className='grid grid-cols-8 gap-16 w-full sm:gap-8'>

            <div className='xl:col-span-4 md:order-2 col-span-3 md:col-span-8 flex flex-col justify-start items-start'>
                <h2 className='mb-4 text-lg font-bold text-dark uppercase dark:text-white '>Biography</h2>
                <p className='font-medium'> Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                      and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
                      new and innovative ways to bring my clients&apos; visions to life.
                </p>
                <p className='my-4 font-medium'>
                I believe that design is about more than just making things look pretty  it&apos;s about solving problems and 
                creating intuitive, enjoyable experiences for users. 

                </p>
                <p className='font-medium'>
                Whether I&apos;m working on a website, mobile app, or 
                other digital product, I bring my commitment to design excellence and user-centered thinking to 
                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                </p>
            </div>
            <div className='xl:col-span-4 md:order-1 md:col-span-8 dark:bg-dark dark:border-white  dark:border-b-light  dark:border-r-light border-r-[12px] border-b-[12px] col-span-3 relative bg-light p-8 border-2 border-solide border-dark h-max rounded-2xl'>
                <div className='  absolute top-0 -right-3 -z-10 rounded-[2rem] bg-dark w-[102%] h-[103%] dark:bg-white'  />
                <Image src={profilePic2} alt={'CodeChokote'} size="(max-width: 768px)100vw (max-width: 1200px)50vw 33vw " className="w-full h-auto rounded-2xl"/>
            </div>
            <div className=' md:order-3 col-span-2 xl:col-span-8 xl:flex-row xl:items-center flex flex-col items-end justify-between'>
              <div className='flex flex-col justify-center items-end xl:items-center'>
                <span className='text-7xl font-bold inline-block md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimateNumber value={50}/>+
                  </span>
                <h2 className='text-xl font-semibold text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-xs'>satisfied client</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='text-7xl font-bold inline-block md:text-6xl sm:text-5xl xs:text-4xl'><AnimateNumber value={40}/>+</span>
                <h2 className='text-xl font-semibold text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-xs'>project completed</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='text-7xl font-bold inline-block md:text-6xl sm:text-5xl xs:text-4xl'><AnimateNumber value={5}/>+</span>
                <h2 className='text-xl font-semibold text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-xs'>years of experience</h2>
              </div>
            </div>
           

           </div>
           <Skill/>
           
           <Experience/>
           <Education/>


         </Layout>
     </main>
    </>
  )
}

export default About