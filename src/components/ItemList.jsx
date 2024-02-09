import React from 'react'

const ItemList = ({listTitle, itemOne, itemTwo, itemThree}) => {
  return (
    <div className='flex justify-center  min-w-[250px] max-lg:min-w-[150px] max-md:justify-start'>
      <ul className='flex flex-col gap-2 '>
        <li className='font-semibold text-white uppercase'>{listTitle}</li>
        <li>{itemOne}</li>
        <li>{itemTwo}</li>
        <li>{itemThree}</li>
      </ul>
    </div>
  )
}

export default ItemList
