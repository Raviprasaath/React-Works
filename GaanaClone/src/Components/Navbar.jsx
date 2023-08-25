import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import ToggleSwitch from "./ToggleSwitch.jsx";

import MainLogo from "../assets/main-logo-removebg-preview.png";

function Navbar({ isOpen, toggleSidePanel, closeSidePanel }) {
  return (
    <>
      <div className="navbar">
        <nav className={`sideNav ${isOpen ? "open" : ""}`}>
          <div className="logo-login">
            <div className="logo">
              <BiUserCircle />
            </div>
            <div className="login">Login / Sign Up</div>
          </div>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#radio">Radio</a>
            </li>
            <li>
              <a href="#">Podcast</a>
            </li>
            <li>
              <a href="#">My Music</a>
            </li>
            <li>
              <a href="#">India's Music</a>
            </li>
            <li>
              <a href="#">
                Language
                <p>(Set Music language)</p>
              </a>
            </li>
            <li>
              <a href="#">
                Night Mode
                <ToggleSwitch />
              </a>
            </li>
            <br />
            <li>
              <a className="premium" href="#">
                Go Premium{" "}
              </a>
            </li>
            <li>
              <a href="#">Get Gaana Plus </a>
            </li>
          </ul>
        </nav>
        <div className="navbar-top">
          <div className="main-logo">
            <img src={MainLogo} alt="main-logo" />
          </div>

          <span className="search-section">
            <span className="search-bar">
                <span className="search-icon">
                    <AiOutlineSearch />
                </span>
                <input type="text" className="input-search-option" placeholder="Search Artists, Songs, Albums"/>                                    
            </span>
          </span>

          <div className="music-width">
            <div className="music-category">
              <p>All</p>
              <p>Trending Songs</p>
              <p>New Songs</p>
              <p>Old Songs</p>
              <p>Moods & Genres</p>
              <p>Albums</p>
              <p>Radio</p>
              <p>Podcast</p>
              <p>My Music</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;
