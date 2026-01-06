import FoodItem from "./FoodItem";
import InnerContainer from "./InnerContainer";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <InnerContainer>
      {foodData.map((food) => (
        <FoodItem
          key={food.id}
          food={food}
          setFoodId={setFoodId}
        />
      ))}
    </InnerContainer>
  );
}
