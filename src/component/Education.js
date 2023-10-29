import { useScroll,motion } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'



  const Detail = ({type,info,time,place})=>{
    const ref = useRef(null)
      return <li ref={ref} className='my-8 sm:pl-14 first:mt-0 last:mb-0 w-[60%] flex flex-col items-center justify-between mx-auto'>
           <LiIcon reference={ref}/>
           <div>
               <h3 className='text-2xl font-bold capitalize sm:text-xl xs:text-lg'>{type}</h3>
               <span className='capitalize font-meduim text-dark/75 xs:text-sm'>
                 {time} | {place}
               </span>
               <p className='w-full font-medium'>
                 {info}
               </p>
           </div>
      </li>
  }

const Education = () => {
  const ref = useRef(null)
  const {scrollYProgress}=useScroll({target:ref,offset:['start end ','center start']})
  return (
    <div className='my-64'>
      <h2 className='text-8xl font-bold mb-32 w-full text-center md:text-6xl xs:text-4xl'>Education</h2>
      <div ref={ref} className='mx-auto relative w-[75%]'>
        <motion.div style={{ scaleY: scrollYProgress}} className='dark:bg-light absolute h-full left-9 w-[4px] top-0 bg-dark origin-top'/>
          <ul  className='ml-4 flex flex-col items-start justify-between w-full'>
             
             <Detail type={'Bachelor Of Science In Computer Science'}  time={'2016-2020  '} 
             info={"Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."}
                     place={'Massachusetts Institute Of Technology (MIT)'}  
             />
             <Detail type={'Master Of Computer Science'}
                     time={'2020-2022 '}
                     place={'Stanford University'}
                     info={" Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding."}
             
             />
             <Detail type={'Online Coursework'}
                     time={'2016-2020 '}
                     place={'Coursera And EdX'}
                     info={"Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering."}
             />


 

             
 

 

             
             
            
          </ul>
      </div>
    </div>
    
    

    

  )
}

export default Education
