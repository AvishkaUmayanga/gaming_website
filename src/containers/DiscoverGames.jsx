import React, { useEffect } from 'react'
import lightBg from '../assets/light_Background.png'
import SingleColorButton from '../components/SingleColorButton'
import discoverImg from '../assets/discoverGame.png'
import { motion, useAnimation} from 'framer-motion'

export default function DiscoverGames() {
  const controls = useAnimation()
  
  useEffect(()=>{
    const animation = async() =>{
      while(true){
        await controls.start({y:[-10, 0, -10],  transition: { duration: 2 } })
      }
    }
    animation()
  },[controls])
  return (
    <div className=' flex mt-[200px] items-center justify-between max-md:mx-5 lg:mx-16 md:mx-10 bg-cover pr-5 rounded-xl md:max-h-[350px] overflow-visible max-md:flex-col max-md:h-auto max-md:p-5' style={{ backgroundImage: `url(${lightBg})`}}>
      <motion.div animate={controls}>
        <img src={discoverImg} alt='VR Gaming' className='object-fill h-[450px] -translate-y-[50px] max-lg:w-[550px] max-md:h-[350px] max-md:-translate-y-[80px]'/>     
      </motion.div>
      <div className=' max-md:-translate-y-[20px]'>
        <h2 className='text-3xl font-bold uppercase max-lg:2xl'>discover the<br/><span className=' bg-gradient-to-r from-[#6f49f7] via-[#df6ffc] to-[#ff00ff] inline-block text-transparent bg-clip-text'> virtual</span> reality<br/> gaming</h2>  
        <p className=' w-[500px] max-lg:w-[380px] mt-3 mb-6 max-md:w-full'>A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant colors, and dynamic visuals to convey excitement, adventure, and the immersive nature of gaming.</p>
        <SingleColorButton buttonText='play now'/>
      </div>
    </div>
  )
}
