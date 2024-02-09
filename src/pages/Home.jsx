import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../containers/Header'
import SliderItems from '../components/SliderItems'
import FavoriteGames from '../containers/FavoriteGames'
import DiscoverGames from '../containers/DiscoverGames'
import TopGames from '../containers/TopGames'
import Testimonials from '../containers/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className=' bg-gradient-to-br to-[#4c1979] via-[#351e6e] from-[#2d1e6b] text-white'>
      <NavBar/>
      <Header/>
      <div className='transform -rotate-2 bg-[#b07cde18]'>
        <SliderItems/>
      </div>   
      <FavoriteGames/>
      <DiscoverGames/>
      <SliderItems/>
      <TopGames/>
      <SliderItems/>
      <div className=' max-md:mx-5 lg:mx-16 md:mx-10'>
        <Testimonials/>
      </div>
      <div className='transform bg-[#b07cde18] mt-[150px]'>
        <SliderItems/>
      </div>  
      <Footer/>
    </div>
  )
}
