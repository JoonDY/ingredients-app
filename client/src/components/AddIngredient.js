import { useContext, useState } from "react";
import { postIngredients } from "../api/Ingredients";
import { IngredientsContext } from "../context/IngredientsContext";


const AddIngredient = () => {
  const {addIngredient} = useContext(IngredientsContext);
  const [name, setName] = useState('');
  const [qty, setQty] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleQty = (e) => {
    setQty(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postIngredients(name, qty, addIngredient);
  }

  return (
    <div>
      <h3>Add Ingredient</h3>
      <form action="submit">
        <input type="text" value={name} onChange={handleName} placeholder="Name"/>
        <input type="number" value={qty} onChange={handleQty} placeholder="Quantity"/>
        <button onClick={handleSubmit} type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddIngredient
