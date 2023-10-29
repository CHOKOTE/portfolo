import { useScroll,motion } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'


  const Detail = ({position,company,companyLink,work,address,time})=>{
    const ref = useRef(null)
      return <li ref={ref} className='my-8  sm:pl-24 md:w-[80%] first:mt-0 last:mb-0 w-[60%] flex flex-col items-center justify-between mx-auto'>
           <LiIcon reference={ref}/>
           <div>
               <h3 className='text-2xl font-bold capitalize sm:text-xl xs:text-lg'>{position}&nbsp;<a className='text-primary dark:text-primaryDark' href={companyLink}>@{company}</a></h3>
               <span className='capitalize font-meduim text-dark/75 dark:text-light/75 xs:text-sm'>
                 {time} | {address}
               </span>
               <p className='w-full font-medium md:text-sm '>
                 {work}
               </p>
           </div>
      </li>
  }

const Experience = () => {
  const ref = useRef(null)
  const {scrollYProgress}=useScroll({target:ref,offset:['start end ','center start']})
  return (
    <div className='my-64'>
      <h2 className='text-8xl md:text-6xl xs:text-4xl md:mb-16 font-bold mb-32 w-full text-center'>Experience</h2>
      <div ref={ref} className='mx-auto relative w-[75%]'>
        <motion.div style={{ scaleY: scrollYProgress}} className='absolute h-full left-9 w-[4px] top-0 dark:bg-light bg-dark origin-top'/>
          <ul  className='ml-4 flex flex-col items-start justify-between w-full'>
             
             <Detail position={'Software Engineer'}  time={'2022-Present '} company={'Google'}
                     address={' Mountain View, CA'}  companyLink={'www.google.com'} work="Worked on a team responsible for developing new features for Google's 
                     search engine, including improving the accuracy and relevance of search results and 
                     developing new tools for data analysis and visualization."
             />
              <Detail position={'Software Engineer'}  time={'2022-Present '} company={'Google'}
                     address={' Mountain View, CA'}  companyLink={'www.google.com'} work="Worked on a team responsible for developing new features for Google's 
                     search engine, including improving the accuracy and relevance of search results and 
                     developing new tools for data analysis and visualization."
             />
              <Detail position={'Software Engineer'}  time={'2022-Present '} company={'Google'}
                     address={' Mountain View, CA'}  companyLink={'www.google.com'} work="Worked on a team responsible for developing new features for Google's 
                     search engine, including improving the accuracy and relevance of search results and 
                     developing new tools for data analysis and visualization."
             />
              <Detail position={'Software Engineer'}  time={'2022-Present '} company={'Google'}
                     address={' Mountain View, CA'}  companyLink={'www.google.com'} work="Worked on a team responsible for developing new features for Google's 
                     search engine, including improving the accuracy and relevance of search results and 
                     developing new tools for data analysis and visualization."
             />
              <Detail position={'Software Engineer'}  time={'2022-Present '} company={'Google'}
                     address={' Mountain View, CA'}  companyLink={'www.google.com'} work="Worked on a team responsible for developing new features for Google's 
                     search engine, including improving the accuracy and relevance of search results and 
                     developing new tools for data analysis and visualization."
             />
            
          </ul>
      </div>
    </div>
    
    

    

  )
}

export default Experience
