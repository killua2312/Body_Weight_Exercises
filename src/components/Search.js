import React from "react";

const Search = ({ handleChange }) => {
  return (
    <input
      type="text"
      placeholder="search by target muscle"
      onChange={handleChange}
    />
  );
};

export default Search;
