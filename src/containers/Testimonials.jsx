import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialsCard from '../components/TestimonialsCard'
import { testimonialsData } from '../data/TestimonialsData';
import CustomDot from '../components/CustomDot';

const responsive = {
 
  desktop: {
    breakpoint: { max:5000, min: 1000 },
    items: 2
  },

  mobile: {
    breakpoint: { max: 1000, min: 0 },
    items: 1
  }
};

export default function Testimonials() {
  return (
    <div>
    <Carousel responsive={responsive}
      swipeable={true}
      showDots={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      arrows={false}
      customDot={<CustomDot/>}
    >
      {testimonialsData.map((data,index)=>(
        <TestimonialsCard key={index} testiData={data}/>
      ))}  
    </Carousel>
  </div>
  )
}
