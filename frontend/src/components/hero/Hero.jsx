import './hero.scss'
import {motion} from 'framer-motion'
const textVarients ={
  initial :{
    x:-500,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1
    }
  },
  scrollBtn:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
}
const sliderVarients ={
  initial :{
    x:0,
  },
  animate:{
    x:"-220%",
    transition:{
      duration:20,
      repeat:Infinity,
      repeatType:"mirror"
    }
  },
  
}

export default function Hero () {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div className='textContainer' variants={textVarients} initial="initial" animate="animate" >
          <motion.h2 variants={textVarients}>SREESANKAR T</motion.h2  >
          <motion.h1 variants={textVarients}>MERN STACK DEVELOPER</motion.h1  >
          <motion.div className='buttons' variants={textVarients} >
            <motion.button variants={textVarients}>See the Latest Work</motion.button  >
            <motion.button variants={textVarients}>Contact Me</motion.button  >
          </motion.div>
          <motion.img animate='scrollBtn' src="/scroll.png" alt="scroll_image" variants={textVarients}  />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVarients} initial='initial' animate="animate" >
        Full Stack Developer React.js Developer
      </motion.div>
      <div className='imageContainer'>
        <img src='/me.png' alt='my_picture' />
        
      </div>
      <div className='circle'>
     
      </div>
    </div>
  )
}
