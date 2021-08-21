import { useState } from "react";
import { updateIngredient } from "../api/Ingredients";
import { useHistory } from "react-router-dom"

const IngredientItem = ({ingredient, handleDelete, handleUpdateStock}) => {
  const { id, name} = ingredient
  const [stock, setStock] = useState(ingredient.in_stock);
  let history = useHistory();  

  const handleStock = (e) => {
    setStock(e.target.checked);
    updateIngredient(id, name, e.target.checked);
    handleUpdateStock(id, e.target.checked);
  }

  const handleUpdate = (id) => {
    history.push(`/ingredients/${id}/update`)
  }

  return (
    <tr>
      <td>{ingredient.name}</td>
      <td>{ingredient.category}</td>
      <td><input type="checkbox" checked={stock} onChange={handleStock}/></td>
      <td>
      <button onClick={() => {handleUpdate(ingredient.id)}}>Update</button>
      <button onClick={() => {handleDelete(ingredient.id)}}>Delete</button>
      </td>
    </tr>
  )
}

export default IngredientItem
