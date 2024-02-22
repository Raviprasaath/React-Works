import React, { useState } from 'react'
import { getFilteredProducts } from '../Slice/FilterSlice';
import { useDispatch, useSelector } from 'react-redux';

const SideBar = () => {
  const dispatch = useDispatch();
  const { filtered } = useSelector(state=>state.filterProducts);
  const [checked, setChecked] = useState(
    {
      red: false,
      blue: false,
      green: false,
      pink: false,
      purple: false,
      yellow: false,
      white: false,
      grey: false,
      black: false,
      men: false,
      women: false,
      0: false,
      250: false,
      450: false,
      polo: false,
      hoodie: false,
      basic: false,
    }
  );

  const handlerChange = (e) => {
    const { value, checked: isChecked } = e.target;
    setChecked(prevState => ({
      ...prevState,
      [value]: isChecked
    }));

    dispatch(getFilteredProducts({
      ...checked,
      [value]: isChecked
    }));
  }
  console.log(filtered);

  return (
    <>
      <div className='w-dvw h-dvh flex'>
        <div className='lg:m-4 min-h-[80vh] bg-white w-2/5 md:w-1/5 lg:w-[180px] lg:shadow-lg lg:shadow-slate-600 p-2'>
          
          <div className='p-2'>
            <h2 className='font-bold'>Color</h2>
            <div className='flex gap-2'>
                <input type="checkbox" onChange={handlerChange} name="red" id="red" value="red"/>
                <label htmlFor="red">Red</label>
            </div>
            <div className='flex gap-2'>
                <input type="checkbox" onChange={handlerChange} name="blue" value="blue" id="blue" />
                <label htmlFor="blue">Blue</label>
            </div>
            <div className='flex gap-2'>
                <input type="checkbox" onChange={handlerChange} name="green" id="green" value="green" />
                <label htmlFor="green">Green</label>
            </div>
            <div className='flex gap-2'>
                <input type="checkbox" onChange={handlerChange} name="pink" id="pink" value="pink" />
                <label htmlFor="pink">Pink</label>
            </div>
            <div className='flex gap-2'>
                <input type="checkbox" onChange={handlerChange} name="purple" id="purple" value="purple" />
                <label htmlFor="purple">Purple</label>
            </div>
            <div className='flex gap-2'>
                <input type="checkbox" onChange={handlerChange} name="yellow" id="yellow" value="yellow" />
                <label htmlFor="yellow">Yellow</label>
            </div>
            <div className='flex gap-2'>
                <input type="checkbox" onChange={handlerChange} name="white" id="white" value="white" />
                <label htmlFor="white">White</label>
            </div>
            <div className='flex gap-2'>
                <input type="checkbox" onChange={handlerChange} name="grey" id="grey" value="grey" />
                <label htmlFor="grey">Grey</label>
            </div>
            <div className='flex gap-2'>
                <input type="checkbox" onChange={handlerChange} name="black" id="black" value="black" />
                <label htmlFor="black">Black</label>
            </div>
          </div>

          <div className='p-2'>
            <h2 className='font-bold'>Gender</h2>
            <div className='flex gap-2'>
                <input type="checkbox" onChange={handlerChange} name="men" id="men" value="men" />
                <label htmlFor="men">Men</label>
            </div>
            <div className='flex gap-2'>
                <input type="checkbox" onChange={handlerChange} name="women" id="women" value="women" />
                <label htmlFor="women">Women</label>
            </div>
          </div>
          <div className='p-2'>
            <h2 className='font-bold'>Price</h2>
            <div className='flex gap-2'>
                <input type="checkbox" onChange={handlerChange} name="0" id="0" value="0" />
                <label htmlFor="0">0-Rs250</label>
            </div>
            <div className='flex gap-2'>
                <input type="checkbox" onChange={handlerChange} name="250" id="250" value="250" />
                <label htmlFor="250">Rs251-450</label>
            </div>
            <div className='flex gap-2'>
                <input type="checkbox" onChange={handlerChange} name="450" id="450" value="450" />
                <label htmlFor="450">Rs450</label>
            </div>
          </div>
          <div className='p-2'>
            <h2 className='font-bold'>Type</h2>
            <div className='flex gap-2'>
                <input type="checkbox" onChange={handlerChange} name="polo" id="polo" value="polo" />
                <label htmlFor="polo">Polo</label>
            </div>
            <div className='flex gap-2'>
                <input type="checkbox" onChange={handlerChange} name="hoodie" id="hoodie" value="hoodie" />
                <label htmlFor="hoodie">Hoodie</label>
            </div>
            <div className='flex gap-2'>
                <input type="checkbox" onChange={handlerChange} name="basic" id="basic" value="basic" />
                <label htmlFor="basic">Basic</label>
            </div>
          </div>
        </div>
        <div className='w-3/5 md:w-4/5 bg-black bg-opacity-40 lg:hidden'>

        </div>
      </div>
    </>

  )
}

export default SideBar