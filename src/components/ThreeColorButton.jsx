import React from 'react'
import threeBg from '../assets/treeColorBg.png'

function ThreeColorButton({buttonText}) {
  return (
    <div>
      <button type=' button' className=' transform -skew-x-[15deg] bg-cover w-full  font-bold uppercase px-2 py-1  hover:skew-x-0 duration-300 hover:scale-105' style={{backgroundImage: `url(${threeBg})`}}> {buttonText}</button>
    </div>
  )
}

export default ThreeColorButton
