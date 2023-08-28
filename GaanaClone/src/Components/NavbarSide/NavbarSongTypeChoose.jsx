import { AiOutlineDown } from "react-icons/ai";

function NavbarSongTypeChoose() {
  return (
    <>
      <div className="navbarSongTypeChoose music-width">
        <div className="music-category">
          <p>All</p>
          <p>Trending Songs</p>
          <p>New Songs</p>
          <p>Old Songs</p>

          <div className="dropdown">
            <p className="dropbtn">
              Moods & Genres <AiOutlineDown />
            </p>
            <div className="dropdown-content">
              <a href="#">Party</a>
              <a href="#">Romance</a>
              <a href="#">90s and 2000s</a>
              <a href="#">Bhakti</a>
              <a href="#">Indie</a>
              <a href="#">EDM</a>
              <a href="#">Ghazals</a>
              <a href="#">Workout</a>
              <a href="#">Stars</a>
              <a href="#">Retro</a>
              <a href="#">Wedding</a>
              <a href="#">Kids</a>
              <a href="#">Dance</a>
              <a href="#">Friendship</a>
            </div>
          </div>

          <p>Albums</p>
          <p>Radio</p>
          <p>Podcast</p>
          <p>My Music</p>
        </div>
      </div>


    </>
  );
}

export default NavbarSongTypeChoose;
