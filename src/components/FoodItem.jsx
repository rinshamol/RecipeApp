import style from "./foodItem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={style.itemContainer}>
      <img className={style.itemImage} src={food.image} alt={food.title} />

      <div className={style.itemContent}>
        <p className={style.itemName}>{food.title}</p>
      </div>

      <div className={style.btnContainer}>
        <button
          className={style.itemBtn}
          onClick={() => setFoodId(food.id)}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
