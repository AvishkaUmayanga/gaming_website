import React from 'react'
import favoriteImg1 from '../assets/favorite1.png'
import favoriteImg2 from '../assets/favorite2.png'
import favoriteImg3 from '../assets/favorite3.png'
import ThreeColorButton from '../components/ThreeColorButton'
import SingleColorButton from '../components/SingleColorButton'
import { motion} from 'framer-motion'

export default function FavoriteGames() {
  return (
    <div className='flex flex-col mt-[150px] text-center items-center  gap-10 overflow-hidden'>
      <div>
        <h2 className='text-4xl font-bold uppercase max-lg:3xl'>choose your<br/><span className=' bg-gradient-to-r from-[#6f49f7] via-[#df6ffc] to-[#ff00ff] inline-block text-transparent bg-clip-text'> favorite</span> games</h2>  
        <p className=' w-[500px] max-sm:w-[350px] mt-3'>Offer sneak peeks and previews of upcoming games, including trailers, screenshots, and information about release.</p>
      </div>
      <div className='flex items-center gap-5 xl:gap-16 lg:gap-20 2xl:gap-[150px] md:gap-10 '>
        <motion.div
          whileInView={{x:[-100,0], opacity:[0,1]}}
          transition={{duration:0.5}}
          className='xl:w-[400px] xl:h-[280px] lg:h-[200px] h-[150px] w-[150px] md:w-[250px]'
        >
          <img src={favoriteImg1} alt='favorite Image1' className='object-cover w-full h-full'/>
        </motion.div>
        <motion.div
          whileInView={{scale:[0.5,1], yoyo: Infinity}}
          transition={{duration:0.75, ease:'easeInOut'}}
          className=' bg-gradient-to-br from-[#2d1835] via-[#df6ffc] to-[#ff00ff] max-md:p-1 p-2 xl:w-[650px] xl:h-[380px] lg:h-[300px] h-[250px] max-md:h-[200px] max-lg:w-[350px] md:w-[400px] lg:w-[500px] max-md:w-[280px]'
          >
          <div className='w-full h-full'>
            <img src={favoriteImg2} alt='favorite Image2' className='w-full h-full'/>
          </div>
        </motion.div>
        <motion.div
          whileInView={{x:[100,0], opacity:[0,1]}}
          transition={{duration:0.5}}
          className='xl:w-[400px] xl:h-[280px] lg:h-[200px] h-[150px] w-[150px]  md:w-[250px]'
          >
          <img src={favoriteImg3} alt='favorite Image3' className='object-cover w-full h-full'/>
        </motion.div>
      </div>
      <div className='flex gap-5 '>
          <ThreeColorButton buttonText='View all'/>
          <SingleColorButton buttonText='play now'/>
        </div>
    </div>
  )
}
