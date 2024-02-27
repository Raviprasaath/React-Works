import { useTransition } from "react";
import { useState } from "react"

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isLoading, startTransition] = useTransition()
  
  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    const late = 20000;
    const listItems = [];
    for (let i=0; i<late; i++) {
      listItems.push(value);
    }

    //by doing this input will display the data first then below render will happen
    
    startTransition(()=> {
      setList(listItems);
    })
  }
  console.log("render")

  return (
    <>
      <div className="grid place-content-center">
        <h1 className="font-bold uppercase text-center">Purpose of using use Transition</h1>
        
        <div>
          In React if we have multiple state, when the state starts to execute we can 
          delay our req state or else we can sort the order of execution 
        </div>
        <div>
          If we not use use Transition mean same time it will rerender the
          input and table data
        </div>
        <div>
          Cons: So if we use Transition 2 times re render will happen. Limited
          usage is suggested. 
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-4">
        <input 
        className="bg-gray-200 text-green-400 border border-green-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
        value={input}
        onChange={handleChange}
        type="text" name="" id="" />
        {isLoading ? (
          <div className="animate-bounce">
            Loading...
          </div>
        ):(
          <article>
            {list.map((item, i)=>(
              <div key={i} className="p-4 bg-green-400 m-2 inline-block">
                {item}
              </div>
            ))}
          </article>
        )}
      </div>
    </>
  )
}

export default App
