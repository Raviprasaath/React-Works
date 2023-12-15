import { useReducer, useState } from "react";


const Bank = () => {

    const amountTransfer = (state, action) => {
        switch (action.type) {
            case 'WITHDRAW':
                return state - action.payload;
            case 'DEPOSIT':
                return state + action.payload;
            default:
                return state;
        }
    }
    const [amount, setAmount] = useState(0);
    const [state, dispatch] = useReducer(amountTransfer, 0);

    const handlerAmount = (e) => {
        const num = Number(e.target.value);
        setAmount(num);
    }


    return (
        <>
            Bank Balance {state}
            <input type="number" onChange={handlerAmount} name="amount" />
            <div>
                <button onClick={()=>dispatch({type:"DEPOSIT", payload:amount})}>Deposit</button>
                <button onClick={()=>dispatch({type:"WITHDRAW", payload:amount})}>Withdraw</button>
            </div>
        </>
    )
}

export default Bank;