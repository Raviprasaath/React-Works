import NavBar from "./Components/NavBar"
import ProductPage from "./Components/ProductPage"
import SearchBar from "./Components/SearchBar"
import SideBar from "./Components/SideBar"


function App() {

  return (
    <>
      <div className="fixed w-full z-10 top-0">
        <NavBar />
      </div>
      <div className="grid place-content-center fixed z-10 w-full top-14 bg-white" >
        <SearchBar />
      </div>
      <div className="relative flex justify-center my-24">
        <div className="lg:block fixed left-0 top-16 z-20 ">
          <SideBar />
        </div>
        <ProductPage />
      </div>
    </>
  )
}

export default App
