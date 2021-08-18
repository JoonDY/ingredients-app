const IngredientItem = ({ingredient, setIngredients, handleDelete}) => {   
  return (
    <div className='flex'>
      <h2>{ingredient.name}</h2>
      <p>{ingredient.quantity}</p>
      <button onClick={() => {handleDelete(ingredient.id)}}>X</button>
    </div>
  )
}

export default IngredientItem
