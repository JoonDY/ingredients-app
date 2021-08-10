import Header from "./components/Header";
import IngredientList from "./components/IngredientList";
import { useState } from "react";

function App() {
  const [ingredients, setIngredients] = useState([
    { ingredient: 'apple', qty: '1'},
    { ingredient: 'banana', qty: '1'},
    { ingredient: 'orange', qty: '1'},
  ]);

  const handleAddIngredient = (ingredient, qty, e) => {
    e.preventDefault();
    console.log(ingredients)
    if (ingredient === '' || qty === '') {
      return
    } else if (ingredients.some(item => item.ingredient === ingredient)) {
      return
    }
    const newIngredients = ingredients.concat({'ingredient': ingredient, 'qty': qty})
    setIngredients(newIngredients);
    console.log(ingredients)
  }

  return (
    <main className="App">
      <Header />
      <IngredientList ingredients={ingredients} handleAddIngredient={handleAddIngredient}/>
    </main>
  );
}

export default App;
