import NavBar from "./NavBar.jsx";
import MusicPlayer from "./MusicPlayer.jsx";
import { Outlet } from "react-router-dom";
import { createContext, useContext, useState } from "react";

const MusicPlayerContext = createContext();

const MusicPlayerContextProvider = ({ children }) => {
  const [selectedSong, setSelectedSong] = useState(null);
  return (
    <MusicPlayerContext.Provider value={[selectedSong, setSelectedSong]}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayerContext = () => {
  return useContext(MusicPlayerContext);
};

const RootLayout = () => {
  return (
    <MusicPlayerContextProvider>
      <div>
        <NavBar />
        <hr />
        <Outlet />
        <hr />
        <MusicPlayer />
      </div>
    </MusicPlayerContextProvider>
  );
};

export default RootLayout;
