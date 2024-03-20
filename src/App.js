import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Products from "./components/Products";
import Spinner from "./components/Spinner";

function App() {
  const [loading, setLoading] = useState(false);
  const [recipesData, setRecipesData] = useState([]);

  const onSearchHandler = (searchResults) => {
    setLoading(true);
    setRecipesData(searchResults);
    setLoading(false);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((jsonData) => setRecipesData(jsonData.recipes));
  }, []);
  return (
    <center>
      <h3>Food Recipe App</h3>
      <Search onSearch={onSearchHandler} />
      {!loading ? <Products data={recipesData} /> : <Spinner />}
    </center>
  );
}

export default App;
