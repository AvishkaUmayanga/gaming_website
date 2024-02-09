import React from 'react'

const CustomDot = ({ active }) => {
  return (
    <div>
      <button
      className={`h-[10px] w-[10px] mx-1 rounded-full ${
        active ? 'bg-gradient-to-r from-[#6f49f7] via-[#df6ffc] to-[#ff00ff]' : 'bg-white'
      }`}
    />
    </div>
  )
}

export default CustomDot
