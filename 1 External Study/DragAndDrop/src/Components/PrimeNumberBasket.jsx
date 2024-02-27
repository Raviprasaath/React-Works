import { useState } from 'react';
import './PrimeNumberBasket.css';
function PrimeNumberBasket(){
    let arr = ["1","2","3","4","5","6","7","8","9"];
    const [array, setArray] = useState(arr);
    const [selectedItem, setSelectedItem] = useState();
    const [list, setList] = useState([]);

    const isPrime = (num) => {
        let prime = true;
        for(let i=2; i*i<=num; i++){
            if (num%i==0) {
                prime = false;
                break;
            }
        }
        return prime;
    }
    const checkValue = (val) => {
        let num = parseInt(val);
        if (isPrime(num)) {
            setList((prev) => [...prev,val]);
            setSelectedItem(null);
            let newArray = array.filter((item) => val !== item);
            setArray(newArray);
        }
    }
    const handleNumber = (e) => {
        setSelectedItem(e.target.textContent);
    }
    const handleOver = (e) => {
        e.preventDefault();
    }
    const handleDrop = () => {
        checkValue(selectedItem)
    }

    return(
        <div className="container">
            <div className="title">
                <h1>Prime Number Basket</h1>
            </div>
            <div className="numbers">
                {array.map((item,index)=>(
                    <div key={index} draggable={true} className='list' onDragStart={(e)=>handleNumber(e)} >{item}</div>
                ))}
            </div>
            <div className="busket" 
                onDrop={handleDrop}
                onDragOver={(e)=>handleOver(e)}
            >{list.length!==0&&
                list.map((item,index)=>(
                    <div className='list' key={index} >{item}</div>
                ))                
            }
            </div>
        </div>
    )
}
export default PrimeNumberBasket;