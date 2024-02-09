import React from 'react'
import lightBg from '../assets/light_Background.png'
import ThreeColorButton from '../components/ThreeColorButton'
import { motion } from 'framer-motion'

const fadeInAnimation = {
  initial:{
    opacity: 0,
    y: 100
  },
  animate: (index) =>({
    opacity: 1,
    y: 0,
    transition:{
      delay: 0.15*index
    }
  })
}
const TopGamesGrid = ({gamesDetails}) => {
  return (
    <div className='grid grid-cols-3 gap-x-6 gap-y-10 max-lg:grid-cols-2 max-md:grid-cols-1'>
      {gamesDetails.map((details,index)=>(       
        <motion.div
          key={index} 
          variants={fadeInAnimation}
          initial='initial'
          whileInView='animate'
          custom={index}
          className='flex flex-col gap-5 p-4 pb-6 bg-cover shadow-md rounded-xl shadow-slate-800 max-h-max' 
          style={{ backgroundImage: `url(${lightBg})`}}
        >
          <img src={details.gameImage} alt='test' className=' xl:h-[250px] bg-cover rounded-xl lg:h-[200px] hover:scale-105 duration-300'/>   
          <div className='flex flex-col gap-3'>
            <h3 className='text-lg '>{details.title}</h3>
            <div className='flex items-center gap-3 '>
              <img src={details.userImage} alt={details.userImage} className='w-[40px] h-[40px] rounded-full'/> 
              <div className='flex flex-col text-'>
                <h4>{details.name}</h4>
                <p className='text-xs '>{details.company}</p>
              </div>   
            </div>
            <ThreeColorButton buttonText='live demo'/>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default TopGamesGrid
