import { useContext, useState } from "react";
import { postIngredients } from "../api/Ingredients";
import { IngredientsContext } from "../context/IngredientsContext";


const AddIngredient = () => {
  const {addIngredient} = useContext(IngredientsContext);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Category')

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postIngredients(name, category, addIngredient);
  }



  return (
    <div>
      <form action="submit">
        <input type="text" value={name} onChange={handleName} placeholder="Name" required/>
        <select value={category} onChange={handleCategory}>
          <option disabled>Category</option>
          <option value="dairy">Dairy</option>
          <option value="protein">Protein</option>
          <option value="carb">Carb</option>
          <option value="snack">Snack</option>
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="drink ">Drink</option>
          <option value="oil">Oil</option>
          <option value="condiment">Condiment</option>
          <option value="spice">Spice</option>
          <option value="other">Other</option>
        </select>
        <button onClick={handleSubmit} type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddIngredient
