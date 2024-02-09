import React from 'react'

function SingleColorButton({buttonText, onClick, isActive}) {
  return (
    <div>
      <button type=' button' 
        onClick={onClick}
        className={`${isActive ? ' bg-gradient-to-r from-[#6f49f7] via-[#df6ffc] to-[#ff00ff]' : 'border-[#df6ffc]'} transform -skew-x-[15deg] sw bg-cover font-bold uppercase  px-2 py-1  hover:skew-x-0 duration-500 hover:scale-105 border `}
      >
        <p className={`${isActive ? ' text-white' : 'bg-gradient-to-r from-[#6f49f7] via-[#df6ffc] to-[#ff00ff] inline-block text-transparent bg-clip-text'} duration-700`}>{buttonText}</p> </button>
    </div>
  )
}

export default SingleColorButton
