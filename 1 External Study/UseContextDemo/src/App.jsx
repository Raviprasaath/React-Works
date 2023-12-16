import { createContext, useContext } from "react";

const WrappingContext = createContext();

function Component1() {
  const clientName = "Ravi";
  return (
    <WrappingContext.Provider value={clientName}>
      <Component2 />
    </WrappingContext.Provider>
  );
}
function Component2() {
  return <Component3 />;
}
function Component3() {
  return <Component4 />;
}
function Component4() {
  const takingValueOut = useContext(WrappingContext);
  return <> Hi {takingValueOut} </>;
}

function App() {
  return (
    <>
      <Component1 />
    </>
  )
}

export default App;
