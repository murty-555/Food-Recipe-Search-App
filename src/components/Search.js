import React, { useState } from "react";
import Spinner from "./Spinner";

const Search = ({onSearch}) => {
  const [search, setSearch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`https://dummyjson.com/recipes/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => onSearch(data.recipes));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="mt-2"
          onChange={(e) => setSearch(e.target.value)}
        />{" "}
        <br />
        <input type="submit" className="btn btn-primary mt-3" value="Search" />
      </form>
      <br />
      </>
  );
};

export default Search;
