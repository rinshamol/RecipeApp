import { useEffect, useState } from "react";
import style from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = import.meta.env.VITE_SPOON_KEY; // safer approach

export default function Search({ setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      if (!query) return;
      try {
        const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        const data = await res.json();
        setFoodData(data.results);
      } catch (err) {
        console.error(err);
      }
    }
    fetchFood();
  }, [query]);

  return (
    <div className={style.searchContainer}>
      <input
        className={style.input}
        placeholder="Search a recipe..."
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
      />
    </div>
  );
}
