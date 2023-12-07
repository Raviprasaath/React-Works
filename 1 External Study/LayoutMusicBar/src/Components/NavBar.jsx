import { NavLink } from "react-router-dom";

console.clear();

const NavBar = () => {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "2rem" }}>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
          to="/"
        >
          Home
        </NavLink>
        <br />
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
          to="/all-songs"
        >
          All songs
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
