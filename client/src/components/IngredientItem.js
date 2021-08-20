import { useState } from "react";
import { updateIngredient } from "../api/Ingredients";

const IngredientItem = ({ingredient, handleDelete}) => {
  const { id, name} = ingredient
  const [stock, setStock] = useState(ingredient.in_stock);

  const handleUpdate = (e) => {
    console.log(e.target.checked)
    setStock(e.target.checked)
    updateIngredient(id, name, e.target.checked)
  }

  
  return (
    <tr>
      <td>{ingredient.name}</td>
      <td>{ingredient.category}</td>
      <td><input type="checkbox" checked={stock} onChange={handleUpdate}/></td>
      <td><button onClick={() => {handleDelete(ingredient.id)}}>Delete</button></td>
    </tr>
  )
}

export default IngredientItem
