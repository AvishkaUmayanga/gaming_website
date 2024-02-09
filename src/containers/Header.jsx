import React from 'react'
import headerImg from '../assets/headrImage.png'
import ThreeColorButton from '../components/ThreeColorButton'
import SingleColorButton from '../components/SingleColorButton'

export default function Header() {
  return (
    <div className='flex justify-between text-white max-md:px-5 lg:pl-16 md:pl-10 max-md:flex-col mt-[50px]'>
      <div className=' lg:w-[600px] flex flex-col gap-7 mt-16 md:w-[400px] max-md:mt-6'>
        <h1 className='text-3xl font-bold uppercase lg:text-5xl'>Let your<br/> mind <span className=' bg-gradient-to-r from-[#6f49f7] via-[#df6ffc] to-[#ff00ff] inline-block text-transparent bg-clip-text'>explore</span><br/> new world</h1>
        <p>Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether. Gaming is a nuanced term that suggests regular gameplay, possibly as a hobby.</p>
        <div className='flex gap-5 '>
          <ThreeColorButton buttonText='buy now'/>
          <SingleColorButton buttonText='play now'/>
        </div>
        <div className='grid grid-cols-3 gap-3 mt-6 w-max'>
          <div className='flex flex-col items-center '>
            <h3 className='text-xl font-bold'>300+</h3>
            <p className='text-sm opacity-90'>Unique style</p>
          </div>
          <div className='flex flex-col items-center '>
            <h3 className='text-xl font-bold bg-gradient-to-r from-[#6f49f7] via-[#df6ffc] to-[#ff00ff] inline-block text-transparent bg-clip-text'>200+</h3>
            <p className='text-sm opacity-90'>Project finished</p>
          </div>
          <div className='flex flex-col items-center '>
            <h3 className='text-xl font-bold'>500+</h3>
            <p className='text-sm opacity-90'>Happy customer</p>
          </div>
        </div>
      </div>
      <div className='relative md:w-[350px] lg:w-[600px]' >
        <img src={headerImg} alt='header' className='w-full h-full'/>
      </div>
    </div>
  )
}
