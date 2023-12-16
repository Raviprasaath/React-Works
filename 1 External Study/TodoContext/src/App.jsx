import Navbar from "./Components/Navbar"
import TaskAddition from "./Components/TaskAddition"
import TaskList from "./Components/TaskList"


function App() {

  return (
    <>
      <Navbar />
      <div className="flex  justify-center align-center">
        <TaskAddition />
      </div>
      <TaskList />
    </>
  )
}

export default App
