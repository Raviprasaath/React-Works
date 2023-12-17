import Navbar from './Components/Navbar';
import TaskAddition from './Components/TaskAddition';
import TaskList from './Components/TaskList';


function App() {

  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center'>
        <TaskAddition />
      </div>
      <TaskList />
    </>
  )
}

export default App

// npx json-server --watch server/db.json --port 8080