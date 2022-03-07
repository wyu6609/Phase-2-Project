import React, { useState, useEffect } from "react";
import "./SearchRecipe.css";

const SearchRecipe = () => {
  const APP_ID = "4038b7cf";
  const APP_KEY = "43a9538f3b7dc73105f958bdc5812b2e";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        {/* SEARCH BAR INPUT */}
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeHolder="Search a recipe..."
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">{/* INSERT CARD MAP HERE */}</div>
    </div>
  );
};

export default SearchRecipe;
