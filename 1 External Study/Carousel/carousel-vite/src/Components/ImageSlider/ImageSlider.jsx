import React from "react";
import { useState } from "react";

import { imageArr } from "../SourceFile/Constants";
import { useEffect } from "react";

const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const imageChanger = (input) => {
        if (input==='prev') {
            setCurrentImage(currentImage === 0? imageArr.length-2 : currentImage -1 );            
        } else if (input === 'next') {
            setCurrentImage(currentImage === imageArr.length-2 ? 0 : currentImage + 1)
        }
    }

    useEffect(()=> {
        const timer = setTimeout(()=> {
            imageChanger('next');
        }, 1000)

        return (()=> {
            clearTimeout(timer);
        })
    }, [currentImage])

    return (
        <div className="flex justify-center items-center">
            <button onClick={()=>imageChanger('prev')} className="m-2 font-bold bg-green-300 p-2">Prevoius</button>
            {imageArr.map((item, index) => (
                <img key={index} src={item} className={`w-[500px] h-[500px] object-contain ${currentImage === index ? "block" : "hidden"} `} alt="img1" />
            ))}
            <button onClick={()=>imageChanger('next')} className="m-2 font-bold bg-green-300 p-2">Next</button>
        </div>
    )
}

export default ImageSlider;