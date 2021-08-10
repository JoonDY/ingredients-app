import { useState } from "react";

const AddIngredient = ({handleAddIngredient}) => {
  const [ingredient, setIngredient] = useState('');
  const [qty, setQty] = useState('');

  const handleIngredient = (e) => {
    setIngredient(e.target.value);
  }

  const handleQty = (e) => {
    setQty(e.target.value);
  }

  return (
    <div>
      <h3>Add Ingredient</h3>
      <form onSubmit={(e) => {handleAddIngredient(ingredient, qty, e)}} action="submit">
        <input type="text" value={ingredient} onChange={handleIngredient}/>
        <input type="number" value={qty} onChange={handleQty}/>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddIngredient
