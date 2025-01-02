import { useEffect, useState } from "react";
import style from "./foodDetails.module.css";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "819b6d00d4da42b883cdc8e4cfed8a27";
  useEffect(() => {
    async function foodRecipe() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setLoading(false);
    }
    foodRecipe();
  }, [foodId]);
  return (
    <div>
      <div className={style.recipeCard}>
        <h1 className={style.recipeName}>{food.title}</h1>
        <img className={style.recipeImage} src={food.image} alt="" />

        <div className={style.recipeDetails}>
          <span>
            <strong>⏰{food.readyInMinutes}Minutes</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-vegetarian"}
            </strong>
          </span>
          <p>
            <strong>Rs.{food.pricePerServing}/-</strong>
          </p>
        </div>
        <h2>Instructions</h2>
        <div className={style.recipeInstructions}>
          <ol>
            <p>
              {isLoading
                ? "Loading..."
                : food.analyzedInstructions[0].steps.map((step) => (
                    <li key={step.number}>{step.step}</li>
                  ))}
            </p>
          </ol>
        </div>
      </div>
    </div>
  );
}
