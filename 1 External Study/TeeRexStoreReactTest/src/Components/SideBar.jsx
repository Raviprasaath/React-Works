import React from 'react'

const SideBar = () => {
  return (
    <div className='m-4  shadow-lg shadow-slate-600 p-2'>
      <div className='w-[150px] p-2'>
        <h2>Color</h2>
        <div className='flex gap-2'>
            <input type="checkbox" name="red" id="red" />
            <label htmlFor="red">Red</label>
        </div>
        <div className='flex gap-2'>
            <input type="checkbox" name="blue" id="blue" />
            <label htmlFor="blue">Blue</label>
        </div>
        <div className='flex gap-2'>
            <input type="checkbox" name="green" id="green" />
            <label htmlFor="green">Green</label>
        </div>
      </div>
      <div className='w-[150px] p-2'>
        <h2>Gender</h2>
        <div className='flex gap-2'>
            <input type="checkbox" name="men" id="men" />
            <label htmlFor="men">Men</label>
        </div>
        <div className='flex gap-2'>
            <input type="checkbox" name="women" id="women" />
            <label htmlFor="women">Women</label>
        </div>
      </div>
      <div className='w-[150px] p-2'>
        <h2>Price</h2>
        <div className='flex gap-2'>
            <input type="checkbox" name="0" id="0" />
            <label htmlFor="0">0-Rs250</label>
        </div>
        <div className='flex gap-2'>
            <input type="checkbox" name="250" id="250" />
            <label htmlFor="250">Rs251-450</label>
        </div>
        <div className='flex gap-2'>
            <input type="checkbox" name="450" id="450" />
            <label htmlFor="450">Rs450</label>
        </div>
      </div>
      <div className='w-[150px] p-2'>
        <h2>Type</h2>
        <div className='flex gap-2'>
            <input type="checkbox" name="polo" id="polo" />
            <label htmlFor="polo">Polo</label>
        </div>
        <div className='flex gap-2'>
            <input type="checkbox" name="hoodie" id="hoodie" />
            <label htmlFor="hoodie">Hoodie</label>
        </div>
        <div className='flex gap-2'>
            <input type="checkbox" name="basic" id="basic" />
            <label htmlFor="basic">Basic</label>
        </div>
      </div>
    </div>
  )
}

export default SideBar
