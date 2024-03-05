import LogInPage from './Components/LogIn/LogInPage'
import HomePage from './Components/Home/HomePage'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LogInPage />,
    },
    {
      path: "home",
      element: <HomePage />,
    },
  ]);

  return (
   <>
    <RouterProvider router={router} />
   </>
  )
}

export default App
