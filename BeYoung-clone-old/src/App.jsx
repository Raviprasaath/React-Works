import HomeCarousel1 from "./Components/HomeCarousel1/HomeCarousel1"
import HompageSection3 from "./Components/HompageSection3/HompageSection3"
import HompageSection4 from "./Components/HompageSection4/HompageSection4"
import Navbar from "./Components/Navbar/Navbar"
import NavbarLoginLayer from "./Components/NavbarLoginLayer/NavbarLoginLayer"
import OffersCarousel from "./Components/OffersCarousel/OffersCarousel"
import './App.css'

import homepage5 from './assets/home-page-5.png'

function App() {

  return (
    <>
    <div className="app-component">
      <NavbarLoginLayer />
      <Navbar />
      <HomeCarousel1 />
      <OffersCarousel />
      <HompageSection3 />
      <h2 className="heading-home-3">New Arrival</h2>
      <HompageSection4 />
      <div className="home-page-5">
        <img className="home-page-5-img" src={homepage5} alt="" />
      </div>
      <h2 className="heading-home-3"> CATEGORIES FOR MEN </h2>
      

    </div>

      <h1>
        loerm
        loerm
        loerm
        loerm
        loerm
        loerm
      </h1>
    </>
  )
}

export default App
