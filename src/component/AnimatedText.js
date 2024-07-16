import React from 'react'
import {motion} from 'framer-motion'

const AnimatedText = ({text,className=''}) => {
  
  const quote = {
    initial:{
      opacity:1,
    },
    animation:{
      opacity:1,
      transition:{
        delay:0.5,
        staggerChildren: 0.08
      }
    }
  }
  const singleword = {
    initial:{
      opacity:0,
      y:50
    },
    animation:{
      opacity:1,
      y:0,
      transition:{
        duration:1
      }
    }
  }

  return (
    <div className='w-full sm:py-0 flex text-left items-center  py-2 mx-auto text-8xl justify-center overflow-hidden'>
        <motion.h2 className={`${className} dark:text-light inline-block text-bold w-full text-dark capitalize`}
          variants={quote}
          initial="initial"
          animate="animation"
        >
            {
            text.split(" ").map((word,index) =>
                <motion.span key={word+'-'+index} className='inline-block ' 
                  variants={singleword} 
                >
                   {word}&nbsp;
                </motion.span>
            )
            
            }
        </motion.h2>
    </div>
  )
}

export default AnimatedText