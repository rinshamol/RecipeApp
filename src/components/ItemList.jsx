import Item from "./Item";
import style from "./itemList.module.css";

export default function ItemList({ food, isLoading }) {
  if (isLoading) return <p>Loading...</p>;
  if (!food?.extendedIngredients) return <p>No ingredients found</p>;

  return (
    <div className={style.itemGrid}>
      {food.extendedIngredients.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
