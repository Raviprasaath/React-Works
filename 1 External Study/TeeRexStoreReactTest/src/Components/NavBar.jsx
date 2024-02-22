import React from 'react'
import { IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2 w-full bg-gray-100'>
      <p>
        TeeRex Store
      </p>
      <div className='flex gap-4 items-center'>
        <p className='sm:block hidden '>
            Products
        </p>
        <div className='bg-gray-300'>
            <div className='relative px-3 py-2 text-2xl'>
            <IoCartOutline />
                <p className='absolute -top-1.5 right-1 text-[12px]'>
                    2
                </p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default NavBar
