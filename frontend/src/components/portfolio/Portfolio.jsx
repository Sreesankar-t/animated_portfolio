import { useRef } from 'react'
import './portfolio.scss'
import {motion,useScroll,useSpring} from 'framer-motion'
const items =[
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      },
      {
        id: 2,
        title: "Next.js Blog",
        img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      },
      {
        id: 3,
        title: "Vanilla JS App",
        img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      },
      {
        id: 4,
        title: "Music App",
        img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      },
    ]

    const Single =({items})=>{
        const ref = useRef();
       return(
        <section ref={ref}>
            <div className="Container">
                <img src={items.img} alt="" />
                <div className="textContainer">
                    <h1>{items.title}</h1>
                    <p>{items.dese}</p>
                </div>
            </div>
        </section>
       )
    }

export default function Portfolio() {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });

  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
      {items.map(item =>(
       <Single items={item} key={item.id}/>
      ))}
    </div>
  )
}
