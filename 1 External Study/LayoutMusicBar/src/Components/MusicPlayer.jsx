import { useMusicPlayerContext } from "./RootLayout";

const MusicPlayer = () => {
  const [selectedSong] = useMusicPlayerContext();
  return (
    <div>
      <h1>Music Player </h1>
      <h2>Selected Song : {selectedSong} </h2>
    </div>
  );
};

export default MusicPlayer;
