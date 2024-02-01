import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessages } from "./Slice/liveChatSlice";
import {RandomMessage} from "./RandomMessage";
import ChatBody from "./ChatBody";

const LiveChat = () => {

  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState("");
  
  const handlerFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addMessages(textInput));
    setTextInput("");
  };
  const handlerInput = (e) => {
    setTextInput(e.target.value);
  };

  
  RandomMessage();


  return (
    <div className="flex flex-col w-96 h-fit m-auto bg-gray-100 border border-gray-300">
      <ChatBody />
      <form
        onSubmit={(e) => handlerFormSubmit(e)}
        className="bg-gray-300 w-full h-fit flex gap-4 py-2 justify-center items-center"
      >
        <input
          type="text"
          onChange={(e) => handlerInput(e)}
          value={textInput}
          name="inputType"
          id="inputType"
          className="border border-gray-500 bg-transparent w-3/4"
        />
        <button className="px-2 bg-orange-400 rounded">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
