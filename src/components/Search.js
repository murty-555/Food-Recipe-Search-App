import React, { useState } from "react";
import Products from "./Products";
import Spinner from "./Spinner";

const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const YOUR_APP_ID = "b122e5e6";
  const YOUR_APP_KEY = "704a59b7e22856b10b74b8462075a67b";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&claories=591-722&health=alcohol-free`
    )
      .then((res) => res.json())
      .then((data) => setData(data.hits));
    setIsLoading(false);
    console.log(data);
  };
  return (
    <center>
      <h3>Food Recipe App</h3>
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
      {!isLoading && <Products data={data} />}
      {isLoading && <Spinner />}
    </center>
  );
};

export default Search;
