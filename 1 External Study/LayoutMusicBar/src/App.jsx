import RootLayout from "./Components/RootLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import { useMusicPlayerContext } from "./Components/RootLayout.jsx";

const HomePage = () => {
  const [, setSelectedSong] = useMusicPlayerContext(); // [selectedSong, setSelectedSong]
  return (
    <div>
      <button onClick={() => setSelectedSong("Jailer")}> Jailer </button>
      <button onClick={() => setSelectedSong("Jawan")}> Jawan </button>
    </div>
  );
};

const AllSongs = () => {
  const [, setSelectedSong] = useMusicPlayerContext(); // [selectedSong, setSelectedSong]
  return (
    <div>
      <button onClick={() => setSelectedSong("Miss Sheety, Mr Polishetty")}>
        Miss Sheety, Mr Polishetty
      </button>
      <button onClick={() => setSelectedSong("Rocky aur Rani")}>
        Rocky aur Rani
      </button>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "all-songs",
        element: <AllSongs />
      }
    ]
  },
  {
    path: "/contact-us",
    element: <h1>Contact us</h1>
  }
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
