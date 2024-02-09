import React from 'react'
import footerBg from '../assets/footerBg.png'
import footerLogo from '../assets/footerLogo.png'
import ItemList from './ItemList'

import twitchImg from '../assets/twitch.png'
import robloxImg from '../assets/roblox.png'
import asusImg from '../assets/asus.png'
import caononImg from '../assets/canon.png'
import microsoftImg from '../assets/microsoft.png'

import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div style={{backgroundImage: `url(${footerBg})`}} className='flex flex-col ] py-8 gap-10 bg-cover '>
      <div className='flex flex-wrap gap-3 p-2 text-gray-100 xl:gap-3 max-md:mx-5 lg:mx-16 md:mx-10 max-lg:justify-between max-xl:gap-y-8 max-md:text-sm'>
        <div className=' max-w-[250px]'>
          <img src={footerLogo} alt='logo' className=' h-[25px] w-[100px]'/>
          <p className='mt-2 '>A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant colors, and dynamic visuals .</p>
        </div>
        <ItemList listTitle='Company' itemOne='Products' itemTwo='Apps & Games' itemThree='Features'/>
        <ItemList listTitle='Help' itemOne='Support' itemTwo='About' itemThree='Contact Us'/>
        <div className='flex justify-center  min-w-[250px] max-lg:min-w-[150px] max-xl:justify-start'>
          <ul className='flex flex-col gap-2 '>
            <li className='font-bold text-white uppercase'>resources</li>
            <li>youtube playlist</li>
            <li>how to - blog</li>
            <li>terms & conditions</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-wrap gap-6 max-md:mx-5 lg:mx-16 md:mx-10'>
        <img src={twitchImg} alt='twitch' className=' h-[20px] max-w-[120px] '/>
        <img src={robloxImg} alt='roblox' className=' h-[20px] max-w-[120px] '/>
        <img src={asusImg} alt='asus' className=' h-[20px] max-w-[120px] '/>
        <img src={caononImg} alt='canon' className=' h-[20px] max-w-[120px] '/>
        <img src={microsoftImg} alt='microsoft' className=' h-[20px] max-w-[120px] '/>
      </div>
      <div className='flex flex-wrap items-center gap-3 max-md:mx-5 lg:mx-16 md:mx-10'>
        <div className='p-2 border rounded-full'>
          <FaXTwitter />
        </div>
        <div className='p-2 border rounded-full'>
          <FaFacebook/>
        </div>
        <div className='p-2 border rounded-full'>
          <FaInstagram/>
        </div>
        <div className='p-2 border rounded-full'>
          <FaGithub/>
        </div>
        <div className='md:ml-5 '>
          <p>© Copyright 2023, All Rights Reserved by board</p>
        </div>
      </div>
    </div>
  )
}
