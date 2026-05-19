import { useEffect, useState, forwardRef } from "react";
import ItemList from "./ItemList";
import style from "./foodDetails.module.css";

const FoodDetails = forwardRef(function FoodDetails({ foodId }, ref) {
  const [food, setFood] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const API_KEY = import.meta.env.VITE_SPOON_KEY;

  useEffect(() => {
    async function foodRecipe() {
      try {
        setLoading(true);
        const res = await fetch(
          `/api/recipes/${foodId}/information?apiKey=${API_KEY}`
        );
        const data = await res.json();
        setFood(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    foodRecipe();
  }, [foodId]);

  if (isLoading) return <p>Loading...</p>;
  if (!food) return <p>No data found</p>;

  return (
    <div className={style.recipeCard} ref={ref}>
      <h1 className={style.recipeName}>{food.title}</h1>
      <img className={style.recipeImage} src={food.image} alt={food.title} />
      <div className={style.recipeDetails}>
        <strong>⏰ {food.readyInMinutes} min</strong>
        <strong>{food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-vegetarian"}</strong>
        <strong>₹{food.pricePerServing?.toFixed(0)}</strong>
      </div>
      <h2>Ingredients</h2>
      <ItemList food={food} />
      <h2>Instructions</h2>
      <ol className={style.recipeInstructions}>
        {food.analyzedInstructions?.[0]?.steps?.map(step => (
          <li key={step.number}>{step.step}</li>
        ))}
      </ol>
    </div>
  );
});

export default FoodDetails;
