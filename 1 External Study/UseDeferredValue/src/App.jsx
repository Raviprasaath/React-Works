import { useMemo } from "react";
import { useDeferredValue } from "react";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);    
  }
  
  const deferredInput = useDeferredValue(input)

  const list = useMemo(()=> {
    const late = 20000;
    const listItems = [];
    for (let i=0; i<late; i++) {
      listItems.push(deferredInput);
    }
    return listItems;
  }, [deferredInput])
  
  return (
    <>
      <div className="grid place-content-center">
        <h1 className="font-bold uppercase text-center">Purpose of using use Deferred</h1>
        <div>
          This is like debounce, if user is typing it will not generate, when user stops re render starts.
        </div>
        
      </div>

      <div className="max-w-7xl mx-auto mt-4">
        <input 
          className="bg-gray-200 text-green-400 border border-green-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
          value={input}
          onChange={handleChange}
          type="text" name="" id="" 
        />

          <article>
            {list?.map((item, i)=>(
              <div key={i} className="p-4 bg-green-400 m-2 inline-block">
                {item}
              </div>
            ))}
          </article>
      </div>
    </>
  )
}

export default App
