import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addMessages } from './Slice/liveChatSlice';

export const RandomMessage = () => {
    const dispatch = useDispatch();
    function chat() {
        const randomNumber = Math.floor(Math.random()*1400);
        const api = `https://dummyjson.com/quotes/${randomNumber}`;
    
        const randomChat = async() => {
            const response = await fetch(api);
            const result = await response.json();
            dispatch(addMessages(result?.quote?.substring(0, 50)));
        }
        randomChat();
    }

    useEffect(() => {
        const time = setInterval(() => {
            chat();
        }, 1000);

        return () => clearInterval(time);
    }, []);
}


