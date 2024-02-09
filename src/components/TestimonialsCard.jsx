import React from 'react'
import lightBg from '../assets/light_Background.png'
import styleImg from '../assets/testimonialStyle.png'
import ratingImg from '../assets/ratingStar.png'
import verifiedLogo from '../assets/verifiedLogo.png'


const TestimonialsCard = ({testiData}) => {
  return (
    <div className='py-10 mt-[150px]'>
    <div className='relative flex flex-col px-5 pb-3 bg-cover lg:mx-2 rounded-xl ' style={{ backgroundImage: `url(${lightBg})`}}>
      <img src={styleImg} alt='style' className='w-[70px] h-[80px] -translate-y-1/2 self-end -translate-x-1/4 max-sm:h-[60px] max-sm:w-[50px]'/>
      <div className='-translate-y-1/4 max-sm:-translate-y-5'>
        <img src={ratingImg} alt='rating star ' className='mb-3 '/>
        <p>{testiData.testimonialText}</p>
      </div>
      <hr className=' bg-gradient-to-r from-white to-gray-600  h-[1px] border-none mb-5'/>
        <div className='flex items-center gap-3 '>
        <img src={testiData.userImage} alt='user' className='w-[40px] h-[40px] rounded-full'/> 
        <div className='flex justify-between w-full'>
          <div className='flex flex-col text-'>
            <h4>{testiData.name}</h4>
            <p className='text-xs '>{testiData.company}</p>
          </div>
          <div>
            <img src={verifiedLogo} alt='verified'/>
          </div>
        </div>   
      </div>
    </div>
    </div>
  )
}

export default TestimonialsCard
