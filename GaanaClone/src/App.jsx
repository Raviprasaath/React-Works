import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Components/Navbar.jsx";
import Test from "./Components/Test.jsx";
import { FaBars } from "react-icons/fa";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const toggleSidePanel = () => {
    setIsOpen(!isOpen);
  };

  const closeSidePanel = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        closeSidePanel();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={`wrapper ${isOpen ? "open" : ""}`} ref={wrapperRef}>
        <button className="navbar-btn" onClick={toggleSidePanel}>
          <FaBars />
        </button>
        <Navbar isOpen={isOpen} closeSidePanel={closeSidePanel} />
        {isOpen && <div className="overlay" onClick={closeSidePanel}></div>}
      </div>
      <Test />
    </>
  );
}

export default App;
