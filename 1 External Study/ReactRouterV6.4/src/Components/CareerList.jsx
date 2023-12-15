import React from 'react'

const CareerList = ({title, location}) => {
  return (
    <>
        <div className='flex gap-4 m-3 items-center '>
            <p className='w-[150px]'>{title}</p>
            <p className='w-[150px]'>{location}</p>
        </div>
    </>
  )
}

export default CareerList
