import { useEffect, useState } from "react";
import style from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "819b6d00d4da42b883cdc8e4cfed8a27";
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={style.searchContainer}>
      <input
        className={style.input}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
      />
    </div>
  );
}
