import React from "react";
// import Card from "react-bootstrap/card";
// import { Button } from "react-bootstrap";

// const RecipeCard = () => {
function RecipeCard({ recipe }) {
  // create a Function to pull out the item id
  // function onClicky() {
  // console.log to ensure itemis pulled
  // console.log(item)
  //   changeReorder(item);
  // }

  return (
    <div className="card" onClick={() => console.log("clicked")}>
      <img></img>
      <h3></h3>
      <h4></h4>
      <button onClick={(event) => console.log("clicked")}>Delete</button>
    </div>
  );
}

export default RecipeCard;
