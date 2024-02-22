import React from 'react';
import { LuFilter } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className='m-2 flex gap-4'>
      <input type="text" placeholder='Search For Products...' className='border-b border-b-black' />
      <button className='bg-gray-800 px-3 py-1 text-white rounded'><FaSearch /></button>
      <button className='bg-gray-800 px-3 py-1 text-white rounded block lg:hidden'><LuFilter /></button>
    </div>
  )
}

export default SearchBar
