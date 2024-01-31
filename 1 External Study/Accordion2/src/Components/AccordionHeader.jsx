import React, { useState } from 'react'
import AccordionChild from './AccordionChild';

const AccordionHeader = ({value, showItem, singleProduct}) => {
    const handlerClick = (value) => {
        singleProduct(value)
    }
    return (
        <div className='m-auto w-3/4 shadow-lg py-4 px-2 '>
            <div onClick={()=>handlerClick(value.title)} className='flex justify-between cursor-pointer'>
                <div className='flex gap-4 font-bold justify-around'>
                    <h1>
                        {value.title}
                    </h1>
                    <h1>
                        ({value.itemCards.length})
                    </h1>
                </div>
                <p>
                    ⬇️
                </p>
            </div>
            {showItem && <div className='py-4'>
                <AccordionChild content={value.itemCards} showItem={showItem} />
            </div>}
        </div>
    )
}

export default AccordionHeader
