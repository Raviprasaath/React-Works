import React from 'react'

const SearchBar = () => {
  return (
    <div className='m-2 flex gap-4'>
      <input type="text" placeholder='Search For Products...' className='border-b border-b-black' />
      <button className='bg-gray-200 px-3 py-1'>🔍</button>
    </div>
  )
}

export default SearchBar
