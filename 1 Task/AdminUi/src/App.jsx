import Pagination from "./Components/Pagination"
import SearchBar from "./Components/SearchBar"
import TableHeader from "./Components/TableHeader"

function App() {

  return (
    <>
      <div className="flex flex-col justify-center items-center my-4">
        <SearchBar />
        <TableHeader />
        <Pagination />
      </div>
    </>
  )
}

export default App
