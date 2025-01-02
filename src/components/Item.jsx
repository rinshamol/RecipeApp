import style from "./item.module.css"
export default function item({ item }) {
  return (
    <div  key={item.id}>
        <div className={style.itemName}>
      <img
        src={`https://img.spoonacular.com/ingredients_100x100/` + item.image}
        alt=""
      />
      <h3 >{item.name}</h3>
      <h3>
        {item.amount} {item.unit}
      </h3>
    </div>
    </div>
  );
}
