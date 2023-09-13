import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./CounterSlice.jsx";

const Counter = () => {
    
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();
    
    return (
        <>
            <div> {count} </div>
            <div>
                <button onClick={()=> dispatch(increment())} > + Button </button>
                <button onClick={()=> dispatch(decrement())} > - Button </button>
            </div>
        </>
    )
}

export default Counter;