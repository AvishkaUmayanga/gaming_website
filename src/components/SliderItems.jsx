import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import starIcon from '../assets/star.png'

const responsive = {
  superLargeDesktop: {

    breakpoint: { max: 5000, min: 1000 },
    items: 4
  },
  desktop: {
    breakpoint: { max:1000, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function SliderItems() {
  return (
    <div  >
      <Carousel responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={false}
        className='flex px-10 py-1 mt-5 uppercase '
        >
          <div className='flex items-center gap-1 text-sm font-semibold text-white'><img src={starIcon} alt='star' className='w-5'/><p>Gaming spaning</p></div>
          <div className='flex items-center gap-1 text-sm font-semibold text-white'><img src={starIcon} alt='star' className='w-5'/><p>Action - packed</p></div>
          <div className='flex items-center gap-1 text-sm font-semibold text-white'><img src={starIcon} alt='star' className='w-5'/><p>mind - bending</p></div>
          <div className='flex items-center gap-1 text-sm font-semibold text-white'><img src={starIcon} alt='star' className='w-5'/><p>collection of games</p></div>
      </Carousel>
    </div>
  )
}
