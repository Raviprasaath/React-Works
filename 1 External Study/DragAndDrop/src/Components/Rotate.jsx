import React, { useState } from 'react'
import './Rotate.css'
const Rotate = () => {
    let arr=["1","2","3","4","5","6","7","8","9"];
    const [array,setArray] = useState(arr);

    const handlerClick= (e) => {
        arrayRotate();
    }

    const arrayRotate = () => {
        let arrayCopy = arr;
        let reverse = arr.reverse();
        console.log(reverse);
        let k = 2;
        for (let i = 0; i < k; i++) {
            let temp = reverse[i];
            reverse[i] = reverse[k];
            reverse[k] = temp;
            k--;
        }
        k = reverse.length;
        for (let i = 3; i < k; i++) {
            let temp = reverse[i];
            reverse[i] = reverse[k];
            reverse[k] = temp;
            k--;
        }
        console.log(reverse);
        setArray(reverse)
    }

    

    return (
        <div className='container'>
            <div className='box'>
                {array.map((item)=>(
                    <div onClick={(e)=>handlerClick(e)} className='box-content' key={item}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Rotate
