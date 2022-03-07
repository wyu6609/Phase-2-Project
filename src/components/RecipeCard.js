import React from "react";
import style from "./RecipeCard.css";
const RecipeCard = ({ title, calories, image, ingredients }) => {
  return (
    <div>
      <h1 className={style.recipe}>{title}</h1>
      <ol>
        <div className="recipe">
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </div>
      </ol>
      <p>{calories} calories</p>
      <img src={image} alt="" />
    </div>
  );
};

export default RecipeCard;
