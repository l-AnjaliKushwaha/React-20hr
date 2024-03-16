import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
// import Container from "./components/Container";

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
    <Container>
      <h1 className="heading">Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </Container>

    <Container>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident alias excepturi amet reiciendis autem vero minus corporis sapiente tempore possimus.</p>
    </Container>

    </>
  );
}

export default App;
