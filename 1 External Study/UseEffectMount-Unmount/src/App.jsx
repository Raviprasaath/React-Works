/*

import { useEffect, useState } from "react"

function Child () {

  useEffect(()=> {
    console.log('useEffect run');

    return () => {
      console.log('clean');
    }
  })

  return <h1>Child</h1>
}


function App() {

  const [count, setCount] = useState(0);



  const handlerIncrement = () => {
    setCount(prev => prev + 1);
  }


  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handlerIncrement}>
        Increment
      </button>
      {console.log('Rendering in App')}
      {count === 2 &&  <Child /> }  
    </>
  )
}

export default App

*/

// Notes 
/*
For a Mounting Face

** Rendering in App

when child got Enabled

** Rendering in App
** useEffect run

when child goes off

** Rendering in App
** clean

*/




import { useEffect, useState } from "react"


function App() {

  const [count, setCount] = useState(0);

  useEffect(()=> {
    console.log('useEffect run');

    return () => {
      console.log('clean');
    }
  })

  const handlerIncrement = () => {
    setCount(prev => prev + 1);
  }


  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handlerIncrement}>
        Increment
      </button>
      {console.log('Rendering in App')}
    </>
  )
}

export default App

/*
Notes

Mounting - 

** Rendering in App
** useEffect run

Updating 
** Rendering in App
** clean
** useEffect run



*/