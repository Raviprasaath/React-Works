import React from 'react'
import { useSelector } from 'react-redux';
import { RandomNames } from './RandomNames';

const ChatBody = () => {

    const { message } = useSelector((state)=>state.chat);
    const name = RandomNames();
  return (
    <div>
      <div className="w-full h-96 overflow-auto flex flex-col-reverse">
        {message?.map((item, id) => (
          <div className="flex items-center gap-2 px-2 shadow-lg" key={id}>
            <p><img className="w-8" src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="" /></p>
            <div className="flex flex-col ">
              <p className="font-bold text-md">{name}</p>
              <p className="text-sm">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatBody
