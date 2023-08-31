import React from "react";
import "../styles/App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import SingleProduct from "./SingleProducts";
import Favorites from "./Favorites";

const App = () => {

  console.clear();
  return (

    <BrowserRouter>
      <div id="main">
        <nav>
          <ul>
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/about"> About </Link> </li>
            <li> <Link to="/products"> Products </Link> </li>
            <li> <Link to="/favorites"> Favorites </Link> </li>
          </ul>
        </nav>
        <hr />
        {/* Add your Routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
