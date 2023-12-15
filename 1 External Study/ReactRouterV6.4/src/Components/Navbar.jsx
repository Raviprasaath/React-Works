import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const navLinksStyle = (to) => {
    const isActive = window.location.pathname === to;
    return {
      color: isActive ? "red" : "blue",
    };
  };

  return (
    <div className="flex justify-between mx-2 bg-gray-300 p-2">
      <div>Route</div>
      <div className="flex gap-5">
        <NavLink style={navLinksStyle("/")} to="/">
          Home
        </NavLink>
        <NavLink style={navLinksStyle("/about")} to="about">
          About
        </NavLink>
        <NavLink style={navLinksStyle("/contact")} to="contact">
          Contact
        </NavLink>
        <NavLink style={navLinksStyle("/careers")} to="careers">
          Careers
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
