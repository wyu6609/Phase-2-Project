import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RSearchRecipe from "./routes/RSearchRecipe";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SearchRecipe" element={<RSearchRecipe />} />
      </Routes>
    </>
  );
}

export default App;
