import { useState, useRef } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState(658615);

  const detailsRef = useRef(null);

  const handleViewRecipe = (id) => {
    setFoodId(id);

    // scroll to FoodDetails after state updates
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />

      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={handleViewRecipe} />
        </InnerContainer>

        <div className="recipeWrapper" ref={detailsRef}>
          <FoodDetails foodId={foodId}  />
        </div>
      </Container>
    </div>
  );
}

export default App;