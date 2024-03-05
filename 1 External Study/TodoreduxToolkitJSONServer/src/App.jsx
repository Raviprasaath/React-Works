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

// npm install json-server
// npx json-server --watch server/db.json --port 8080
// starting a server run this command in the main directory 
// D:\Newton school\FSD_backup_codes\React\1 External Study\TodoreduxToolkitJSONServer