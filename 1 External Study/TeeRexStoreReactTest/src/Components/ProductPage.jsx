import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems } from '../Slice/itemsSlice';

const ProductPage = () => {
    const { cartItems } = useSelector(state=>state.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartItems());
    }, []);

  return (
    <>
    <div className='flex flex-wrap gap-4 justify-center items-center w-3/4'>
      {cartItems?.map((item)=> (
        <div key={item.id} className='shadow-xl  flex flex-col gap-4 justify-center items-center'>
            <div className='w-52 h-52 lg:w-80 lg:h-80 relative'>
                <img src={item.imageURL} className='p-2 w-52 h-52 lg:w-80 lg:h-80 ' alt="" />
                <p className='absolute top-0 bg-white w-full px-2 py-1 font-bold'>
                    {item.name}
                </p>
            </div>
            <div className='flex justify-around w-full my-2'>
                <div className='font-bold'>
                    Rs {item.price}
                </div>
                <button className='bg-gray-700 text-white px-4 py-1'>Add to Cart</button>
            </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default ProductPage
