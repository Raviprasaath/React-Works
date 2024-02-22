import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems } from '../Slice/ItemsSlice';

const ProductPage = () => {
    const { cartItems, itemsLoading:loading } = useSelector(state=>state.items);
    const { filtered } = useSelector(state=>state.filterProducts);
    const dispatch = useDispatch();
    const [itemsShow, setItemsShow] = useState([]);    
    
    useEffect(() => {
        dispatch(getCartItems());
    }, []);

    useEffect(() => {
        !loading && setItemsShow(cartItems);
    }, [loading, cartItems]);
    console.log(filtered);
    useEffect(()=> {
        let dress = [];
        for (let i in filtered) {
            if (filtered[i]) {
                dress.push(i);
            }
        }
        console.log('dress', dress);
        let splitProduct = [];
        if (splitProduct.length === 0) {
            splitProduct = cartItems.filter((item)=>item.color.toLowerCase().includes(dress));
        }
        if (splitProduct.length > 0) {
            splitProduct = splitProduct.filter((item)=>item.gender.toLowerCase().includes(dress));
        } else {
            splitProduct = cartItems.filter((item)=>item.gender.toLowerCase().includes(dress));
        }
        if (splitProduct.length > 0) {
            splitProduct = splitProduct.filter((item)=>item.type.toLowerCase().includes(dress));
        } else {
            splitProduct = cartItems.filter((item)=>item.type.toLowerCase().includes(dress));
        }

        console.log("split", splitProduct);
        setItemsShow(splitProduct);

    }, [filtered])

    
    console.log(filtered, cartItems);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                itemsShow.length === 0 ? (
                    <div>No Item Found</div>
                ):(
                    <div className='flex flex-wrap gap-4 justify-center items-center w-3/4'>
                        {itemsShow && itemsShow.length > 0 && itemsShow?.map((item)=> (
                            <div key={item.id} className='shadow-xl  flex flex-col gap-4 justify-center items-center'>
                                <div className='w-52 h-52 lg:w-80 lg:h-80 relative z-5'>
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
                )

            )}
        </>
    )
}

export default ProductPage



