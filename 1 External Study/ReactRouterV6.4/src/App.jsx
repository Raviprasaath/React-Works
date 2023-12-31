import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayouts from './Layout/RootLayouts'
import Home from './Screens/Home';
import About from './Screens/About';
import Mail from './Screens/Mail';
import Phone from './Screens/Phone';
import ContactLayout from './Layout/ContactLayout';
import PageNotFound from './Screens/PageNotFound';
import CareerLayouts from './Layout/CareerLayouts';
import Careers from './Screens/Careers';
import CareerDetails from './Screens/CareerDetails';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayouts/>}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<ContactLayout />} >
          <Route path='mail' element={<Mail />} />
          <Route path='phone' element={<Phone />} />
        </Route>
        <Route path='careers' element={<CareerLayouts />} >
          <Route index element={<Careers />} />
          <Route path=':id' element={<CareerDetails />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App


// json-server --watch ./server/db.json --port 8000
// json-server --watch .\db.json --port 8000