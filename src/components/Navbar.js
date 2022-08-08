import React from "react";
import Search from "./Search";

const Navbar = ({ handleChange }) => {
  return (
    <nav>
      <div className="container nav-container">
        <h1>Body Weight Exercises</h1>
        <div className="search">
          <Search handleChange={handleChange} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
